import React, { useState, useRef, useEffect, useMemo, Suspense, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import useScrollToTop from '../hooks/useScrollToTop';

function Plant({ position, index, season, regrowthKey, isVisible }) {
  const groupRef = useRef();
  const modelRef = useRef();
  const [growthProgress, setGrowthProgress] = useState(1);
  const animFrameRef = useRef(null);
  
  // Load the GLB model with caching
  const { scene } = useGLTF('/models/maize.glb');
  
  // Clone and configure the model
  const clonedModel = useMemo(() => {
    if (!scene) return null;
    const model = scene.clone();
    
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
        child.frustumCulled = true;
        
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach(mat => {
            if (season === 'Autumn') {
              mat.color = new THREE.Color(0xd17b2b);
            } else if (season === 'Winter') {
              mat.color = new THREE.Color(0x8a9b6e);
            } else if (season === 'Monsoon') {
              mat.color = new THREE.Color(0x2e7d32);
            } else {
              mat.color = new THREE.Color(0x4caf50);
            }
            mat.roughness = 0.4;
            mat.metalness = 0.1;
          });
        }
      }
    });
    
    return model;
  }, [scene, season]);
  
  const variation = useMemo(() => ({
    baseScale: 2.8,
    rotationY: (index * 0.25) % (Math.PI * 2),
    offsetY: 0,
  }), [index]);
  
  useEffect(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    
    setGrowthProgress(0);
    
    const startTime = performance.now();
    const duration = 4500;
    
    const animate = (now) => {
      const elapsed = now - startTime;
      let t = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - t, 3);
      setGrowthProgress(easeOut);
      
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setGrowthProgress(1);
        animFrameRef.current = null;
      }
    };
    
    animFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [regrowthKey]);
  
  useFrame((state) => {
    if (!groupRef.current || growthProgress <= 0.05 || !modelRef.current) return;
    if (!isVisible) return;
    
    const swayIntensity = season === 'Summer' ? 0.035 : (season === 'Autumn' ? 0.03 : 0.02);
    const time = state.clock.elapsedTime * 0.8;
    groupRef.current.rotation.z = Math.sin(time * 0.8 + position[0]) * swayIntensity * growthProgress;
    groupRef.current.rotation.x = Math.sin(time * 0.6 + position[2]) * swayIntensity * 0.3 * growthProgress;
  });
  
  const currentScale = variation.baseScale * (0.2 + growthProgress * 0.9);
  
  if (!clonedModel) return null;
  
  return (
    <group 
      ref={groupRef} 
      position={[position[0], position[1] + variation.offsetY, position[2]]} 
      scale={[currentScale, currentScale, currentScale]}
      rotation={[0, variation.rotationY, 0]}
    >
      <primitive ref={modelRef} object={clonedModel} />
    </group>
  );
}

// ========== SOIL COMPONENT ==========
function Soil({ season }) {
  const soilColors = {
    Summer: "#C07C40",
    Autumn: "#B8652A",
    Monsoon: "#4A3728",
    Winter: "#8B8680"
  };
  
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.55, 0]}>
        <planeGeometry args={[38, 48]} />
        <meshStandardMaterial color={soilColors[season]} roughness={0.85} metalness={0.03} />
      </mesh>
    </group>
  );
}

// ========== WEATHER EFFECTS ==========
function OptimizedRain({ count = 1200, area = 52 }) {
  const rainRef = useRef();
  const positions = useRef(new Float32Array(count * 3));
  const velocities = useRef(new Float32Array(count));
  
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * area;
      positions.current[i * 3 + 1] = Math.random() * 30 + 2;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * area;
      velocities.current[i] = 0.3 + Math.random() * 0.4;
    }
  }, [count, area]);
  
  useFrame(() => {
    if (!rainRef.current) return;
    
    const positionsAttr = rainRef.current.geometry.attributes.position;
    const array = positionsAttr.array;
    
    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] -= velocities.current[i];
      array[i * 3] += 0.005 * Math.sin(Date.now() * 0.001 + i) * 0.3;
      array[i * 3 + 2] += 0.004 * Math.cos(Date.now() * 0.0008 + i) * 0.3;
      
      if (array[i * 3 + 1] < -2) {
        array[i * 3 + 1] = Math.random() * 30 + 10;
        array[i * 3] = (Math.random() - 0.5) * area;
        array[i * 3 + 2] = (Math.random() - 0.5) * area;
        velocities.current[i] = 0.3 + Math.random() * 0.4;
      }
    }
    positionsAttr.needsUpdate = true;
  });
  
  return (
    <points ref={rainRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions.current} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#a8d4ff" size={0.08} transparent opacity={0.55} />
    </points>
  );
}

function OptimizedSnow({ count = 500, area = 52 }) {
  const snowRef = useRef();
  const positions = useRef(new Float32Array(count * 3));
  const velocities = useRef(new Float32Array(count));
  const wobble = useRef(new Float32Array(count));
  
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * area;
      positions.current[i * 3 + 1] = Math.random() * 30 + 5;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * area;
      velocities.current[i] = 0.015 + Math.random() * 0.03;
      wobble.current[i] = Math.random() * Math.PI * 2;
    }
  }, [area]);
  
  useFrame((state) => {
    if (!snowRef.current) return;
    
    const time = state.clock.elapsedTime;
    const array = snowRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] -= velocities.current[i];
      array[i * 3] += Math.sin(time * 0.6 + wobble.current[i]) * 0.006;
      array[i * 3 + 2] += Math.cos(time * 0.5 + wobble.current[i]) * 0.006;
      
      if (array[i * 3 + 1] < -2) {
        array[i * 3 + 1] = Math.random() * 30 + 10;
        array[i * 3] = (Math.random() - 0.5) * area;
        array[i * 3 + 2] = (Math.random() - 0.5) * area;
      }
    }
    snowRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={snowRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions.current} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#f0f4fa" size={0.1} transparent opacity={0.8} />
    </points>
  );
}

function Weather({ season }) {
  if (season === 'Winter') return <OptimizedSnow count={450} area={52} />;
  if (season === 'Monsoon') return <OptimizedRain count={1200} area={52} />;
  return null;
}

// ========== LOADING FALLBACK ==========
function LoadingFallback() {
  const { t } = useTranslation();
  return (
    <Html center>
      <div className="flex flex-col items-center bg-white/95 dark:bg-gray-800/95 px-6 py-5 rounded-2xl shadow-xl backdrop-blur-sm">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-green-600"></div>
        <p className="mt-3 text-gray-700 dark:text-gray-200 font-medium">{t('virtualfarm.loading.model')}</p>
        <p className="text-xs text-gray-500 mt-1">{t('virtualfarm.loading.plantFile')}</p>
      </div>
    </Html>
  );
}

// Preload the GLB model
useGLTF.preload('/models/plant.glb');

// ========== MAIN FARM VISUALIZATION ==========
const FarmVisualization = () => {
  const { t, i18n } = useTranslation();
  useScrollToTop('smooth');
  
  const [season, setSeason] = useState("Summer");
  const [regrowthTrigger, setRegrowthTrigger] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  // Handle language change
  useEffect(() => {
    const handleLanguageChange = () => {
      setRefreshKey(prev => prev + 1);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
  
  // Generate plants
  const plants = useMemo(() => {
    const positions = [];
    const startX = -12;
    const startZ = -14;
    const spacing = 3.2;
    const cols = Math.floor(29 / spacing);
    const rows = Math.floor(29 / spacing);
    
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const x = startX + row * spacing;
        const z = startZ + col * spacing;
        if (Math.abs(x) < 17 && Math.abs(z) < 17) {
          positions.push([x, -0.2, z]);
        }
      }
    }
    
    const rings = [7, 10.5, 14];
    rings.forEach((radius, ringIdx) => {
      const count = Math.floor(10 + ringIdx * 2);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        if (Math.abs(x) < 16 && Math.abs(z) < 16 && radius < 15) {
          const exists = positions.some(pos => Math.abs(pos[0] - x) < 1.5 && Math.abs(pos[2] - z) < 1.5);
          if (!exists) {
            positions.push([x, -0.2, z]);
          }
        }
      }
    });
    
    positions.sort((a, b) => {
      if (Math.abs(a[0] - b[0]) < 0.5) return a[2] - b[2];
      return a[0] - b[0];
    });
    
    return positions;
  }, []);
  
  const handleSeasonChange = (newSeason) => {
    if (newSeason !== season) {
      setSeason(newSeason);
      setRegrowthTrigger(prev => prev + 1);
      // Show toast message (optional)
      console.log(t('virtualfarm.messages.seasonChanged', { season: newSeason }));
    }
  };
  
  // Season config with translated names
  const seasonConfig = {
    Summer: {
      gradient: "from-amber-100 via-orange-50 to-yellow-100",
      buttonClass: "from-orange-500 to-yellow-500",
      icon: "☀️",
      description: t('virtualfarm.seasonDescriptions.summer'),
      temp: "35-42°C",
      humidity: "45-60%",
      skyColor: "#87CEEB",
      name: t('virtualfarm.seasonController.summer')
    },
    Monsoon: {
      gradient: "from-blue-100 via-cyan-50 to-teal-100",
      buttonClass: "from-blue-500 to-cyan-500",
      icon: "🌧️",
      description: t('virtualfarm.seasonDescriptions.monsoon'),
      temp: "28-32°C",
      humidity: "75-90%",
      skyColor: "#8aaec0",
      name: t('virtualfarm.seasonController.monsoon')
    },
    Winter: {
      gradient: "from-blue-200 via-indigo-100 to-purple-100",
      buttonClass: "from-indigo-500 to-purple-500",
      icon: "❄️",
      description: t('virtualfarm.seasonDescriptions.winter'),
      temp: "10-18°C",
      humidity: "55-70%",
      skyColor: "#b5c9e2",
      name: t('virtualfarm.seasonController.winter')
    },
    Autumn: {
      gradient: "from-orange-100 via-amber-50 to-red-100",
      buttonClass: "from-orange-600 to-red-500",
      icon: "🍂",
      description: t('virtualfarm.seasonDescriptions.autumn'),
      temp: "20-28°C",
      humidity: "50-65%",
      skyColor: "#f0cf9f",
      name: t('virtualfarm.seasonController.autumn')
    }
  };
  
  const currentSeason = seasonConfig[season];
  
  return (
    <div key={refreshKey} className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            {t('virtualfarm.header.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('virtualfarm.header.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('virtualfarm.header.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Season Controller */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24 backdrop-blur-sm bg-opacity-95">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>🌍</span> {t('virtualfarm.seasonController.title')}
              </h3>
              
              <div className="space-y-3">
                {Object.entries(seasonConfig).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => handleSeasonChange(key)}
                    className={`w-full p-4 rounded-xl transition-all transform hover:scale-[1.02] ${
                      season === key
                        ? `bg-gradient-to-r ${config.buttonClass} text-white shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{config.icon}</span>
                      <div className="text-left">
                        <p className="font-semibold">{config.name}</p>
                        <p className={`text-xs ${season === key ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                          {t('virtualfarm.climate.temp')}: {config.temp}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Canvas Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div 
                className="h-[580px] w-full relative" 
                style={{ 
                  background: `linear-gradient(to bottom, ${currentSeason.skyColor}, #E8D5B7)`,
                  transition: 'background 0.5s ease'
                }}
              >
                <Canvas
                  camera={{ position: [18, 14, 20], fov: 50 }}
                  shadows={false}
                  dpr={[1, 1.5]}
                  gl={{ 
                    powerPreference: "high-performance",
                    antialias: false,
                    alpha: true
                  }}
                  style={{ background: 'transparent' }}
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <ambientLight intensity={0.7} />
                    <directionalLight 
                      position={[12, 20, 10]} 
                      intensity={0.9} 
                      castShadow={false}
                    />
                    <directionalLight position={[-6, 10, -4]} intensity={0.4} />
                    
                    {/* Summer sun glow */}
                    {season === "Summer" && (
                      <mesh position={[6, 30, -22]}>
                        <sphereGeometry args={[2.5, 16, 16]} />
                        <meshStandardMaterial color="#ffdd77" emissive="#ffaa33" emissiveIntensity={0.4} />
                      </mesh>
                    )}
                    
                    <OrbitControls 
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      zoomSpeed={0.8}
                      rotateSpeed={0.6}
                      target={[0, 3, 0]}
                      maxPolarAngle={Math.PI / 2.3}
                      minDistance={10}
                      maxDistance={35}
                    />
                    
                    <Soil season={season} />
                    
                    {/* Render plants */}
                    {plants.map((pos, i) => (
                      <Plant 
                        key={`plant-${i}`}
                        index={i}
                        position={pos}
                        season={season}
                        regrowthKey={regrowthTrigger}
                        isVisible={true}
                      />
                    ))}
                    
                    <Weather season={season} />
                  </Suspense>
                </Canvas>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌾</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('virtualfarm.stats.totalPlants')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {plants.length} {t('virtualfarm.stats.plants')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📐</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('virtualfarm.stats.farmArea')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      42 x 48 {t('virtualfarm.stats.meters')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentSeason.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('virtualfarm.stats.currentSeason')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {currentSeason.name}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('virtualfarm.stats.performance')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      60 {t('virtualfarm.stats.fpsTarget')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmVisualization;