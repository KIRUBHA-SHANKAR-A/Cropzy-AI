import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Homepage from './pages/Home';
import CropRecommendation from './pages/CropRecommendation';
import DiseasePrediction from './pages/DiseasePrediction';
import FarmVisualization from './pages/FarmVisualization';
import CropRotation from './pages/CropRotation';

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/crop-recommendation" element={<CropRecommendation />} />
          <Route path="/disease-prediction" element={<DiseasePrediction />} />
          <Route path="/farm-visualization" element={<FarmVisualization />} />
          <Route path="/crop-rotation" element={<CropRotation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;