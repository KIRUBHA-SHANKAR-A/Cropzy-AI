import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

const resources = {
  en: {
    translation: {
      nav: {
    home: "Home",
    features: "Features",
    cropRecommendation: "Crop Recommendation",
    cropRecommendationDesc: "AI-powered crop suggestions based on soil and climate",
    diseasePrediction: "Disease Prediction",
    diseasePredictionDesc: "Detect diseases from leaf images using AI",
    farmVisualization: "Farm Visualization",
    farmVisualizationDesc: "Interactive 3D farm visualization with crops, irrigation, and seasonal insights",
    cropRotation: "Crop Rotation",
    cropRotationDesc: "Plan crop rotation for maximum yield",
    language: "Language",
    toggleTheme: "Toggle theme",
    toggleMenu: "Toggle menu"
  },
     // Add this to your existing en.js
home: {
  hero: {
    badge: "🇮🇳 AI-Powered Farming",
    title: "Intelligent Farming Solutions for",
    highlight: "Indian Farmers",
    subtitle: "Your AI farming assistant for smarter decisions and better harvests",
    imageAlt: "Smart farming with drone",
    aiBadge: "AI Analysis"
  },
  benefits: {
    free: {
      title: "Free to use",
      desc: "No hidden costs"
    },
    languages: {
      title: "6 languages",
      desc: "Tamil, Hindi & more"
    },
    noSignup: {
      title: "No signup",
      desc: "Instant access"
    },
    access: {
      title: "24/7 access",
      desc: "Anytime, anywhere"
    }
  },
  carousel: {
    title: "Explore Crops",
    subtitle: "Explore our extensive collection of crops with AI-powered insights and recommendations"
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Data-driven farming intelligence at your fingertips",
    step1: {
      title: "Enter Crop Details",
      desc: "Input your soil parameters, location, and crop preferences",
      alt: "Enter crop details icon"
    },
    step2: {
      title: "AI Processing",
      desc: "Our AI analyzes your data and generates personalized recommendations",
      alt: "AI processing icon"
    },
    step3: {
      title: "Get Insights",
      desc: "Receive instant crop predictions, disease alerts, and fertilizer advice",
      alt: "Get insights icon"
    }
  },
  features: {
    badge: "Smart Features",
    heading: "AI-Powered Farming Solutions",
    subheading: "Data-driven intelligence for every farming need",
    cropRecommendationDesc: "Machine learning algorithms analyze soil nutrients, temperature, humidity, and rainfall to recommend the most profitable crops.",
    diseasePredictionDesc: "Upload leaf images for instant disease detection using CNN. Get treatment suggestions and prevention tips.",
    farmVisualizationDesc: "Interactive 3D farm visualization with crops, irrigation, and seasonal insights for better planning.",
    cropRotationDesc: "Plan crop rotation for maximum yield and soil health with AI-powered recommendations."
  },
  testimonials: {
    farmer1: {
      name: "Mariyappan",
      role: "Rice Farmer, Tamil Nadu",
      content: "The AI crop recommendation helped me increase my profit by 40%! The disease detection feature saved my crop from blast disease."
    },
    farmer2: {
      name: "Lakshmi",
      role: "Tea Plantation, Kerala",
      content: "Market price prediction helped me sell at the right time. Earned 25% more than last season!"
    },
    farmer3: {
      name: "Krishna",
      role: "Sugarcane Farmer, Karnataka",
      content: "Soil nutrient tracker showed me exactly what my field needed. Fertilizer recommendations saved me money!"
    }
  }
},
crops: {
  grape: "Grape",
  peach: "Peach",
  bellPepper: "Bell Pepper",
  strawberry: "Strawberry",
  tea: "Tea",
  tomato: "Tomato",
  potato: "Potato",
  corn: "Corn",
  apple: "Apple",
  bean: "Bean",
  cherry: "Cherry"
},
carousel: {
  scrollingText: "Continuously scrolling • Hover to pause"
},
      footer: {
        description: 'Empowering Indian farmers with AI technology in their own language.',
        features: 'Features',
        schemes: 'Schemes',
        contact: 'Contact',
        rights: 'All rights reserved.',
        made: 'Made with ❤️ for Indian farmers'
      },
      cropRecommendation: {
        title: 'Crop Recommendation System',
        subtitle: 'Enter your soil and season details to find the best crop',
        aiBadge: '🌱 AI-Powered Recommendation',
        soilType: 'Soil Type',
        season: 'Season',
        temperature: 'Temperature (°C)',
        humidity: 'Humidity (%)',
        selectSoil: 'Select soil type',
        selectSeason: 'Select season',
        predictButton: 'Predict Best Crop',
        predicting: 'Predicting...',
        errorPrefix: 'Failed to get prediction. Please try again.',
        optimalTemp: '15-45°C optimal',
        optimalHumidity: '40-80% optimal',
        soilCount: '29 soil types',
        recommendedCrop: 'Recommended Crop',
        basedOn: 'Based on your',
        soilCondition: 'soil and',
        seasonCondition: 'season conditions, we recommend growing',
        soilTypes: {
          'Alluvial soil': 'Alluvial soil',
          'Loamy soil': 'Loamy soil',
          'Clay soil': 'Clay soil',
          'Well-drained soil': 'Well-drained soil',
          'Red soil': 'Red soil',
          'Clay loamy soil': 'Clay loamy soil',
          'Sandy loamy soil': 'Sandy loamy soil',
          'Black soil': 'Black soil',
          'Sandy soil': 'Sandy soil',
          'Shallow black soil': 'Shallow black soil',
          'Black cotton soil': 'Black cotton soil',
          'Cotton soil': 'Cotton soil',
          'Medium black soil': 'Medium black soil',
          'Heavy black soil': 'Heavy black soil',
          'Light soil': 'Light soil',
          'Heavy soil': 'Heavy soil',
          'Deep soil': 'Deep soil',
          'Sandy clay loamy soil': 'Sandy clay loamy soil',
          'Silty loamy soil': 'Silty loamy soil',
          'Salty clay loamy soil': 'Salty clay loamy soil',
          'Red loamy soil': 'Red loamy soil',
          'Brown loamy soil': 'Brown loamy soil',
          'Laterite soil': 'Laterite soil',
          'Well-drained Loamy soil': 'Well-drained Loamy soil',
          'Light loamy soil': 'Light loamy soil',
          'Friable soil': 'Friable soil',
          'Well-grained deep loamy moist soil': 'Well-grained deep loamy moist soil',
          'Red lateritic loamy soil': 'Red lateritic loamy soil',
          'Rich red loamy soil': 'Rich red loamy soil'
        },
        crops: {
          'Rice': 'Rice', 'Wheat': 'Wheat', 'Maize': 'Maize', 'Sorghum': 'Sorghum',
          'Pearl millet': 'Pearl millet', 'Ragi': 'Ragi', 'Panivaragu': 'Panivaragu',
          'Samai': 'Samai', 'Thinai': 'Thinai', 'Varagu': 'Varagu', 'Kudiraivali': 'Kudiraivali',
          'Blackgram': 'Blackgram', 'Greengram': 'Greengram', 'Cowpea': 'Cowpea',
          'Bengalgram': 'Bengalgram', 'Horsegram': 'Horsegram', 'Redgram': 'Redgram',
          'Soyabean': 'Soyabean', 'Groundnut': 'Groundnut', 'Sunflower': 'Sunflower',
          'Gingely': 'Gingely', 'Castor': 'Castor', 'Cotton': 'Cotton', 'Jute': 'Jute',
          'Sugarcane': 'Sugarcane', 'Sugarbeet': 'Sugarbeet', 'Tomato': 'Tomato',
          'Onion': 'Onion', 'Chillies': 'Chillies', 'Cabbage': 'Cabbage',
          'Bhendi': 'Bhendi', 'Brinjal': 'Brinjal', 'Capsicum': 'Capsicum',
          'Pumpkin': 'Pumpkin', 'Snake gourd': 'Snake gourd', 'Ribbed gourd': 'Ribbed gourd',
          'Bottle gourd': 'Bottle gourd', 'Bitter gourd': 'Bitter gourd', 'Ash gourd': 'Ash gourd',
          'Cucumber': 'Cucumber', 'Watermelon': 'Watermelon', 'Muskmelon': 'Muskmelon',
          'Tinda': 'Tinda', 'Chowchow': 'Chowchow', 'Cluster bean': 'Cluster bean',
          'Vegetable cowpea': 'Vegetable cowpea', 'French bean': 'French bean', 'Peas': 'Peas',
          'Annual moringa': 'Annual moringa', 'Carrot': 'Carrot', 'Beetroot': 'Beetroot',
          'Radish': 'Radish', 'Sweet potato': 'Sweet potato', 'Tapoica': 'Tapoica',
          'Elephant foot yam': 'Elephant foot yam', 'Cauliflower': 'Cauliflower', 'Small onion': 'Small onion'
        },
        
        seasons: {
          'Rainy': 'Rainy', 'Winter': 'Winter', 'Summer': 'Summer'
        }
      },
      cropDisease: {
    "aiBadge": "AI Disease Detection",
    "title": "Crop Disease Detection",
    "subtitle": "Upload a photo of your crop leaf to detect diseases and get treatment recommendations",
    "uploadImage": "Upload Leaf Image",
    "uploadButton": "Upload a file",
    "dragDrop": "or drag and drop",
    "fileRequirements": "PNG, JPG, GIF up to 5MB",
    "tip": "Pro Tip",
    "tipText": "For best results, take a clear photo of the affected leaf in natural lighting",
    "analyzing": "Analyzing...",
    "analyzeButton": "Analyze Leaf Image",
    "healthyPlant": "Healthy Plant Detected",
    "diseaseDetected": "Disease Detected",
    "confidence": "Confidence",
    "treatment": "Treatment",
    "prevention": "Prevention",
    "healthyTip": "Keep It Healthy",
    "healthyTipText": "Continue your good agricultural practices. Regular monitoring and preventive care will help maintain plant health.",
    "newAnalysis": "New Analysis",
    "uploadAnother": "Upload Another Image",
    "diseasesCovered": "Diseases Covered",
    "diseases": "Diseases",
    "cropsSupported": "Crops Supported",
    "crops": "Crops",
    "responseTime": "Response Time",
    "quickAnalysis": "Quick Analysis",
    "invalidFileType": "Please upload a valid image file",
    "fileTooLarge": "File size should be less than 5MB",
    "noImageSelected": "Please select an image first",
    "predictionFailed": "Prediction failed. Please try again",
    "errorPrefix": "Failed to analyze image. Please check your connection and try again.",
    "onCrop": "on",

    "diseaseNames": {
      "Corn___Common_Rust": "Common Rust",
      "Corn___Gray_Leaf_Spot": "Gray Leaf Spot",
      "Corn___Healthy": "Healthy",
      "Corn___Northern_Leaf_Blight": "Northern Leaf Blight",
      "Potato___Early_Blight": "Early Blight",
      "Potato___Healthy": "Healthy",
      "Potato___Late_Blight": "Late Blight",
      "Rice___Brown_Spot": "Brown Spot",
      "Rice___Healthy": "Healthy",
      "Rice___Leaf_Blast": "Leaf Blast",
      "Rice___Neck_Blast": "Neck Blast",
      "Wheat___Brown_Rust": "Brown Rust",
      "Wheat___Healthy": "Healthy",
      "Wheat___Yellow_Rust": "Yellow Rust",
      "Sugarcane__Red_Rot": "Red Rot",
      "Sugarcane__Healthy": "Healthy",
      "Sugarcane__Bacterial Blight": "Bacterial Blight",
      "Apple___Apple_scab": "Apple Scab",
      "Apple___Black_rot": "Black Rot",
      "Apple___Cedar_apple_rust": "Cedar Apple Rust",
      "Apple___healthy": "Healthy",
      "Blueberry___healthy": "Healthy",
      "Cherry_(including_sour)___Powdery_mildew": "Powdery Mildew",
      "Cherry_(including_sour)___healthy": "Healthy",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "Gray Leaf Spot",
      "Corn_(maize)___Common_rust_": "Common Rust",
      "Corn_(maize)___Northern_Leaf_Blight": "Northern Leaf Blight",
      "Corn_(maize)___healthy": "Healthy",
      "Grape___Black_rot": "Black Rot",
      "Grape___Esca_(Black_Measles)": "Esca Disease",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Leaf Blight",
      "Grape___healthy": "Healthy",
      "Orange___Haunglongbing_(Citrus_greening)": "Citrus Greening",
      "Peach___Bacterial_spot": "Bacterial Spot",
      "Peach___healthy": "Healthy",
      "Pepper,_bell___Bacterial_spot": "Bacterial Spot",
      "Pepper,_bell___healthy": "Healthy",
      "Potato___Early_blight": "Early Blight",
      "Potato___Late_blight": "Late Blight",
      "Potato___healthy": "Healthy",
      "Raspberry___healthy": "Healthy",
      "Soybean___healthy": "Healthy",
      "Squash___Powdery_mildew": "Powdery Mildew",
      "Strawberry___Leaf_scorch": "Leaf Scorch",
      "Strawberry___healthy": "Healthy",
      "Tomato___Bacterial_spot": "Bacterial Spot",
      "Tomato___Early_blight": "Early Blight",
      "Tomato___Late_blight": "Late Blight",
      "Tomato___Leaf_Mold": "Leaf Mold",
      "Tomato___Septoria_leaf_spot": "Septoria Leaf Spot",
      "Tomato___Spider_mites Two-spotted_spider_mite": "Spider Mites",
      "Tomato___Target_Spot": "Target Spot",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "Yellow Leaf Curl Virus",
      "Tomato___Tomato_mosaic_virus": "Mosaic Virus",
      "Tomato___healthy": "Healthy"
    },

    "treatments": {
      "Corn___Common_Rust": "Apply fungicide and remove infected leaves.",
      "Corn___Gray_Leaf_Spot": "Use foliar fungicides.",
      "Corn___Healthy": "No treatment needed.",
      "Corn___Northern_Leaf_Blight": "Spray fungicide during early stages.",
      "Potato___Early_Blight": "Apply copper fungicide.",
      "Potato___Healthy": "No treatment needed.",
      "Potato___Late_Blight": "Use fungicides immediately.",
      "Rice___Brown_Spot": "Apply potassium fertilizer and fungicide.",
      "Rice___Healthy": "No treatment needed.",
      "Rice___Leaf_Blast": "Use blast-resistant seeds and fungicide.",
      "Rice___Neck_Blast": "Apply tricyclazole fungicide.",
      "Wheat___Brown_Rust": "Apply rust fungicides.",
      "Wheat___Healthy": "No treatment needed.",
      "Wheat___Yellow_Rust": "Spray fungicide early.",
      "Sugarcane__Red_Rot": "Remove infected canes and apply fungicide.",
      "Sugarcane__Healthy": "No treatment needed.",
      "Sugarcane__Bacterial Blight": "Use bactericide spray.",
      "Apple___Apple_scab": "Apply fungicide regularly.",
      "Apple___Black_rot": "Remove infected fruits and branches.",
      "Apple___Cedar_apple_rust": "Use sulfur fungicide.",
      "Apple___healthy": "No treatment needed.",
      "Blueberry___healthy": "No treatment needed.",
      "Cherry_(including_sour)___Powdery_mildew": "Spray sulfur-based fungicide.",
      "Cherry_(including_sour)___healthy": "No treatment needed.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "Use foliar fungicides.",
      "Corn_(maize)___Common_rust_": "Apply fungicide and remove infected leaves.",
      "Corn_(maize)___Northern_Leaf_Blight": "Spray fungicide during early stages.",
      "Corn_(maize)___healthy": "No treatment needed.",
      "Grape___Black_rot": "Use fungicide and remove infected grapes.",
      "Grape___Esca_(Black_Measles)": "Remove infected wood.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Apply copper fungicide.",
      "Grape___healthy": "No treatment needed.",
      "Orange___Haunglongbing_(Citrus_greening)": "No complete cure available. Remove infected trees.",
      "Peach___Bacterial_spot": "Apply copper spray.",
      "Peach___healthy": "No treatment needed.",
      "Pepper,_bell___Bacterial_spot": "Use copper-based bactericide.",
      "Pepper,_bell___healthy": "No treatment needed.",
      "Potato___Early_blight": "Apply copper fungicide.",
      "Potato___Late_blight": "Use fungicides immediately.",
      "Potato___healthy": "No treatment needed.",
      "Raspberry___healthy": "No treatment needed.",
      "Soybean___healthy": "No treatment needed.",
      "Squash___Powdery_mildew": "Apply sulfur or neem oil.",
      "Strawberry___Leaf_scorch": "Remove infected leaves and apply fungicide.",
      "Strawberry___healthy": "No treatment needed.",
      "Tomato___Bacterial_spot": "Use copper-based bactericide.",
      "Tomato___Early_blight": "Apply fungicide and remove infected leaves.",
      "Tomato___Late_blight": "Apply fungicide immediately.",
      "Tomato___Leaf_Mold": "Improve air circulation and reduce humidity.",
      "Tomato___Septoria_leaf_spot": "Remove infected leaves and apply fungicide.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "Use miticide or neem oil.",
      "Tomato___Target_Spot": "Apply fungicide.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "Remove infected plants. No cure available.",
      "Tomato___Tomato_mosaic_virus": "Remove infected plants immediately. Disinfect tools.",
      "Tomato___healthy": "No treatment needed."
    },

    "preventions": {
      "Corn___Common_Rust": "Use resistant varieties and avoid overcrowding.",
      "Corn___Gray_Leaf_Spot": "Rotate crops and remove crop residue.",
      "Corn___Healthy": "Maintain proper irrigation and nutrients.",
      "Corn___Northern_Leaf_Blight": "Use resistant hybrids and crop rotation.",
      "Potato___Early_Blight": "Avoid overhead watering and rotate crops.",
      "Potato___Healthy": "Use balanced fertilizers and irrigation.",
      "Potato___Late_Blight": "Keep leaves dry and improve airflow.",
      "Rice___Brown_Spot": "Avoid nutrient deficiency.",
      "Rice___Healthy": "Maintain water and nutrients properly.",
      "Rice___Leaf_Blast": "Avoid excess nitrogen fertilizer.",
      "Rice___Neck_Blast": "Maintain proper spacing and irrigation.",
      "Wheat___Brown_Rust": "Use resistant wheat varieties.",
      "Wheat___Healthy": "Use proper field management.",
      "Wheat___Yellow_Rust": "Grow resistant cultivars.",
      "Sugarcane__Red_Rot": "Use disease-free planting material.",
      "Sugarcane__Healthy": "Maintain soil fertility.",
      "Sugarcane__Bacterial Blight": "Avoid waterlogging and infected seeds.",
      "Apple___Apple_scab": "Remove fallen leaves and prune trees.",
      "Apple___Black_rot": "Maintain orchard sanitation.",
      "Apple___Cedar_apple_rust": "Remove nearby cedar trees.",
      "Apple___healthy": "Maintain proper orchard care.",
      "Blueberry___healthy": "Ensure proper soil acidity and watering.",
      "Cherry_(including_sour)___Powdery_mildew": "Improve airflow and avoid humidity.",
      "Cherry_(including_sour)___healthy": "Prune regularly and irrigate properly.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "Rotate crops and remove residue.",
      "Corn_(maize)___Common_rust_": "Use resistant varieties.",
      "Corn_(maize)___Northern_Leaf_Blight": "Use resistant hybrids.",
      "Corn_(maize)___healthy": "Maintain proper irrigation and nutrients.",
      "Grape___Black_rot": "Prune vines for airflow.",
      "Grape___Esca_(Black_Measles)": "Avoid pruning wounds during wet weather.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Improve vineyard sanitation.",
      "Grape___healthy": "Maintain balanced nutrition.",
      "Orange___Haunglongbing_(Citrus_greening)": "Control psyllid insects. Use disease-free plants.",
      "Peach___Bacterial_spot": "Use resistant varieties.",
      "Peach___healthy": "Maintain proper pruning.",
      "Pepper,_bell___Bacterial_spot": "Avoid wet foliage and use clean seeds.",
      "Pepper,_bell___healthy": "Use proper watering techniques.",
      "Potato___Early_blight": "Avoid overhead watering and rotate crops.",
      "Potato___Late_blight": "Keep leaves dry and improve airflow.",
      "Potato___healthy": "Use balanced fertilizers and irrigation.",
      "Raspberry___healthy": "Maintain proper spacing and pruning.",
      "Soybean___healthy": "Practice crop rotation.",
      "Squash___Powdery_mildew": "Ensure good air circulation.",
      "Strawberry___Leaf_scorch": "Water at base of plants, avoid overhead irrigation.",
      "Strawberry___healthy": "Maintain proper spacing and remove weeds.",
      "Tomato___Bacterial_spot": "Use disease-free seeds. Avoid overhead watering.",
      "Tomato___Early_blight": "Rotate crops and use mulch.",
      "Tomato___Late_blight": "Keep leaves dry and improve airflow.",
      "Tomato___Leaf_Mold": "Reduce humidity and improve ventilation.",
      "Tomato___Septoria_leaf_spot": "Avoid overhead irrigation. Remove lower leaves.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "Maintain proper humidity. Introduce beneficial insects.",
      "Tomato___Target_Spot": "Ensure proper spacing and avoid overhead watering.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "Control whiteflies with yellow sticky traps.",
      "Tomato___Tomato_mosaic_virus": "Disinfect gardening tools. Use virus-free seeds.",
      "Tomato___healthy": "Maintain balanced fertilization and proper watering."
    }
  },
  virtualfarm: {
    header: {
      badge: "🌾 3D Farm Visualization",
      title: "Virtual Farm Experience",
      subtitle: "Explore your farm in 3D with real-time seasonal changes and weather effects"
    },
    seasonController: {
      title: "Season Controller",
      summer: "Summer",
      monsoon: "Monsoon",
      winter: "Winter",
      autumn: "Autumn"
    },
    seasonDescriptions: {
      summer: "Golden sunlight - Plants thrive with vibrant green colors.",
      monsoon: "Heavy rainfall - Fresh regrowth with deep green leaves.",
      winter: "Cold & frosty - Plants show evergreen winter tones.",
      autumn: "Harvest season - Plants transform with autumn colors!"
    },
    climate: {
      temp: "Temp",
      humidity: "Humidity"
    },
    weather: {
      sunny: "☀️ Sunny",
      rainy: "🌧️ Rainy",
      snowy: "❄️ Snowy"
    },
    stats: {
      totalPlants: "Total Plants",
      plants: "plants",
      farmArea: "Farm Area",
      meters: "meters",
      currentSeason: "Current Season",
      performance: "Performance",
      fpsTarget: "FPS Target"
    },
    loading: {
      model: "Loading 3D Model...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "Change Season",
      resetView: "Reset View",
      toggleInfo: "Toggle Info"
    },
    messages: {
      seasonChanged: "Season changed to {{season}}",
      weatherUpdated: "Weather updated",
      farmReady: "Farm is ready to explore"
    },
    tooltips: {
      rotate: "Rotate view",
      zoom: "Zoom in/out",
      pan: "Pan across farm"
    }
  },
  cropRotation: {
  header: {
    badge: "AI-Powered Crop Rotation Planner",
    title: "Crop Rotation System",
    subtitle: "Plan your crop rotation for maximum yield and soil health"
  },
  popularCrops: "Popular Crops",
  form: {
    selectCrop: "Select Crop",
    chooseCrop: "Choose a crop",
    numSeasons: "Number of Seasons"
  },
  seasons: {
    one: "1 Season",
    two: "2 Seasons",
    three: "3 Seasons (1 Year)",
    four: "4 Seasons",
    six: "6 Seasons (2 Years)"
  },
  buttons: {
    planning: "Planning...",
    generate: "Generate Rotation Plan"
  },
  errors: {
    selectCrop: "Please select a crop",
    requestFailed: "Failed to get crop rotation plan"
  },
  result: {
    title: "Crop Rotation Plan",
    currentCrop: "Current Crop",
    phase: "Phase",
    best: "Best",
    bestChoice: "Best Choice"
  },
  phases: {
    kharif: "Kharif",
    rabi: "Rabi",
    summer: "Summer",
    winter: "Winter",
    autumn: "Autumn",
    annual: "Annual"
  },
  benefits: {
    title: "Benefits",
    soilHealth: {
      title: "Soil Health",
      desc: "Prevents nutrient depletion"
    },
    pestControl: {
      title: "Pest Control",
      desc: "Breaks disease cycles"
    },
    waterEfficiency: {
      title: "Water Efficiency",
      desc: "Optimizes usage"
    },
    higherYields: {
      title: "Higher Yields",
      desc: "Increases productivity"
    }
  },
  howItWorks: {
    title: "How It Works",
    selectCrop: {
      title: "Select Crop",
      desc: "Choose from 50+ crops"
    },
    aiAnalysis: {
      title: "AI Analysis",
      desc: "Analyzes historical data"
    },
    viewCycle: {
      title: "View Cycle",
      desc: "See rotation plan"
    }
  },
  crops: {
    "Rice": "Rice",
    "Wheat": "Wheat",
    "Maize": "Maize",
    "Sugarcane": "Sugarcane",
    "Cotton": "Cotton",
    "Potato": "Potato",
    "Turmeric": "Turmeric",
    "Banana": "Banana",
    "Groundnut": "Groundnut",
    "Onion": "Onion",
    "Arecanut": "Arecanut",
    "Arhar/Tur": "Pigeon Pea",
    "Black pepper": "Black Pepper",
    "Cashewnut": "Cashew",
    "Coconut": "Coconut",
    "Cowpea(Lobia)": "Cowpea",
    "Dry chillies": "Dry Chillies",
    "Ginger": "Ginger",
    "Moong(Green Gram)": "Green Gram",
    "Oilseeds total": "Oilseeds",
    "Other Kharif pulses": "Other Kharif Pulses",
    "Other oilseeds": "Other Oilseeds",
    "Rapeseed & Mustard": "Rapeseed & Mustard",
    "Sesamum": "Sesame",
    "Sunflower": "Sunflower",
    "Sweet potato": "Sweet Potato",
    "Tapioca": "Cassava",
    "Urad": "Black Gram",
    "Bajra": "Pearl Millet",
    "Castor seed": "Castor",
    "Coriander": "Coriander",
    "Garlic": "Garlic",
    "Gram": "Chickpea",
    "Guar seed": "Guar",
    "Horse-gram": "Horse Gram",
    "Jowar": "Sorghum",
    "Linseed": "Flaxseed",
    "Masoor": "Red Lentil",
    "Mesta": "Kenaf",
    "Niger seed": "Niger Seed",
    "Other Rabi pulses": "Other Rabi Pulses",
    "Ragi": "Finger Millet",
    "Safflower": "Safflower",
    "Sannhamp": "Sunn Hemp",
    "Small millets": "Small Millets",
    "Soyabean": "Soybean",
    "Tobacco": "Tobacco",
    "Peas & beans (Pulses)": "Peas & Beans",
    "Jute": "Jute",
    "Barley": "Barley",
    "Khesari": "Grass Pea",
    "Moth": "Moth Bean",
    "Cardamom": "Cardamom"
  }
},
    weather: {
      badge: "🌤️ Weather Analysis based on your location",
      title: "Location Weather Analysis",
      subtitle: "Real-time weather data analysis",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 My Location",
      refresh: "Refresh",
      searchPlaceholder: "Enter city name...",
      search: "Search",
      currentLocation: "Current Location",
      updated: "Updated",
      fetchingWeather: "Fetching weather data...",
      unableToGetLocation: "Unable to get your location. Please enable location services.",
      geolocationNotSupported: "Geolocation is not supported by your browser",
      invalidCoordinates: "Invalid coordinates. Please try again.",
      cityNotFound: "City not found. Please check the city name.",
      requestTimeout: "Request timeout. Please try again.",
      currentWeather: "Current Weather",
      fiveDayForecast: "5-Day Forecast",
      feelsLike: "Feels like",
      humidity: "Humidity",
      windSpeed: "Wind Speed",
      pressure: "Pressure",
      cloudCover: "Cloud Cover",
      sunrise: "Sunrise",
      sunset: "Sunset",
      rain: "Rain (1h)",
      snow: "Snow (1h)",
      airQuality: "Air Quality Index",
      airQuality1: "Good - Perfect for outdoor activities",
      airQuality2: "Fair - Acceptable air quality",
      airQuality3: "Moderate - Sensitive individuals should limit time outdoors",
      airQuality4: "Poor - Limit outdoor activities",
      airQuality5: "Very Poor - Stay indoors",
      forecastTitle: "5-Day Weather Forecast",
      high: "H",
      low: "L",
      tempCard: "Temperature",
      tempDesc: "Real-time data",
      humidityCard: "Humidity",
      humidityDesc: "Precise measurement",
      windCard: "Wind Speed",
      windDesc: "Accurate readings",
      coverageCard: "Coverage",
      coverageDesc: "Worldwide"
    }

    }
  },
  ta: {
    translation: {
      nav: {
    home: "முகப்பு",
    features: "அம்சங்கள்",
    cropRecommendation: "பயிர் பரிந்துரை",
    cropRecommendationDesc: "மண் மற்றும் காலநிலையின் அடிப்படையில் AI-இயக்கப்படும் பயிர் பரிந்துரைகள்",
    diseasePrediction: "நோய் கணிப்பு",
    diseasePredictionDesc: "AI ஐப் பயன்படுத்தி இலைப் படங்களில் இருந்து நோய்களைக் கண்டறியவும்",
    farmVisualization: "பண்ணை காட்சிப்படுத்தல்",
    farmVisualizationDesc: "பயிர்கள், பாசனம் மற்றும் பருவகால நுண்ணறிவுகளுடன் ஊடாடும் 3D பண்ணை காட்சிப்படுத்தல்",
    cropRotation: "பயிர் சுழற்சி",
    cropRotationDesc: "அதிக மகசூலுக்காக பயிர் சுழற்சியை திட்டமிடுங்கள்",
    language: "மொழி",
    toggleTheme: "தீம் மாற்று",
    toggleMenu: "மெனுவை மாற்று"
  },
     // Add this to your existing ta.js
home: {
  hero: {
    badge: "🇮🇳 AI-இயங்கும் விவசாயம்",
    title: "நுண்ணறிவு விவசாய தீர்வுகள்",
    highlight: "இந்திய விவசாயிகளுக்கு",
    subtitle: "உங்கள் AI விவசாய உதவியாளர் - புத்திசாலித்தனமான முடிவுகளுக்கும் சிறந்த அறுவடைக்கும்",
    imageAlt: "ட்ரோனுடன் ஸ்மார்ட் விவசாயம்",
    aiBadge: "AI பகுப்பாய்வு"
  },
  benefits: {
    free: {
      title: "இலவச பயன்பாடு",
      desc: "மறைக்கப்பட்ட கட்டணங்கள் இல்லை"
    },
    languages: {
      title: "6 மொழிகள்",
      desc: "தமிழ், இந்தி & மேலும்"
    },
    noSignup: {
      title: "பதிவு தேவையில்லை",
      desc: "உடனடி அணுகல்"
    },
    access: {
      title: "24/7 அணுகல்",
      desc: "எப்போது வேண்டுமானாலும், எங்கு வேண்டுமானாலும்"
    }
  },
  carousel: {
    title: "பயிர்களை ஆராயுங்கள்",
    subtitle: "AI-இயங்கும் நுண்ணறிவுகள் மற்றும் பரிந்துரைகளுடன் எங்களின் விரிவான பயிர்கள் தொகுப்பை ஆராயுங்கள்"
  },
  howItWorks: {
    title: "இது எவ்வாறு செயல்படுகிறது",
    subtitle: "உங்கள் விரல் நுனியில் தரவு சார்ந்த விவசாய நுண்ணறிவு",
    step1: {
      title: "பயிர் விவரங்களை உள்ளிடுக",
      desc: "உங்கள் மண் அளவுருக்கள், இருப்பிடம் மற்றும் பயிர் விருப்பங்களை உள்ளிடுக",
      alt: "பயிர் விவரங்கள் ஐகானை உள்ளிடுக"
    },
    step2: {
      title: "AI செயலாக்கம்",
      desc: "எங்கள் AI உங்கள் தரவை பகுப்பாய்வு செய்து தனிப்பயனாக்கப்பட்ட பரிந்துரைகளை உருவாக்குகிறது",
      alt: "AI செயலாக்க ஐகான்"
    },
    step3: {
      title: "நுண்ணறிவுகளைப் பெறுக",
      desc: "உடனடி பயிர் கணிப்புகள், நோய் எச்சரிக்கைகள் மற்றும் உர ஆலோசனைகளைப் பெறுக",
      alt: "நுண்ணறிவுகளைப் பெறுக ஐகான்"
    }
  },
  features: {
    badge: "ஸ்மார்ட் அம்சங்கள்",
    heading: "AI-இயங்கும் விவசாய தீர்வுகள்",
    subheading: "ஒவ்வொரு விவசாயத் தேவைக்கும் தரவு சார்ந்த நுண்ணறிவு",
    cropRecommendationDesc: "இயந்திர கற்றல் வழிமுறைகள் மண் ஊட்டச்சத்துக்கள், வெப்பநிலை, ஈரப்பதம் மற்றும் மழையை பகுப்பாய்வு செய்து மிகவும் லாபகரமான பயிர்களை பரிந்துரைக்கின்றன.",
    diseasePredictionDesc: "உடனடி நோய் கண்டறிதலுக்காக இலை படங்களைப் பதிவேற்றுக. CNN ஐப் பயன்படுத்தி சிகிச்சை பரிந்துரைகள் மற்றும் தடுப்பு உதவிக்குறிப்புகளைப் பெறுக.",
    farmVisualizationDesc: "சிறந்த திட்டமிடலுக்காக பயிர்கள், நீர்ப்பாசனம் மற்றும் பருவகால நுண்ணறிவுகளுடன் ஊடாடும் 3D பண்ணை காட்சிப்படுத்தல்.",
    cropRotationDesc: "AI-இயங்கும் பரிந்துரைகளுடன் அதிகபட்ச மகசூல் மற்றும் மண் ஆரோக்கியத்திற்காக பயிர் சுழற்சியைத் திட்டமிடுக."
  },
  
},
crops: {
  grape: "திராட்சை",
  peach: "பீச்",
  bellPepper: "குடைமிளகாய்",
  strawberry: "ஸ்ட்ராபெரி",
  tea: "தேயிலை",
  tomato: "தக்காளி",
  potato: "உருளைக்கிழங்கு",
  corn: "மக்காச்சோளம்",
  apple: "ஆப்பிள்",
  bean: "பீன்ஸ்",
  cherry: "செர்ரி"
},
carousel: {
  scrollingText: "தொடர்ந்து ஸ்க்ரோலிங் • இடைநிறுத்த வட்டமிடுக"
},
      footer: {
        description: 'இந்திய விவசாயிகளை அவர்களது சொந்த மொழியில் AI தொழில்நுட்பத்துடன் மேம்படுத்துதல்.',
        features: 'அம்சங்கள்',
        schemes: 'திட்டங்கள்',
        contact: 'தொடர்பு',
        rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        made: 'இந்திய விவசாயிகளுக்காக ❤️ உடன் உருவாக்கப்பட்டது'
      },
      cropRecommendation: {
        title: 'பயிர் பரிந்துரை அமைப்பு',
        subtitle: 'சிறந்த பயிரைக் கண்டுபிடிக்க உங்கள் மண் மற்றும் பருவ விவரங்களை உள்ளிடவும்',
        aiBadge: '🌱 AI-இயங்கும் பரிந்துரை',
        soilType: 'மண் வகை',
        season: 'பருவம்',
        temperature: 'வெப்பநிலை (°C)',
        humidity: 'ஈரப்பதம் (%)',
        selectSoil: 'மண் வகையைத் தேர்ந்தெடுக்கவும்',
        selectSeason: 'பருவத்தைத் தேர்ந்தெடுக்கவும்',
        predictButton: 'சிறந்த பயிரைக் கணிக்கவும்',
        predicting: 'கணிக்கிறது...',
        errorPrefix: 'கணிப்பைப் பெற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
        optimalTemp: '15-45°C உகந்தது',
        optimalHumidity: '40-80% உகந்தது',
        soilCount: '29 மண் வகைகள்',
        recommendedCrop: 'பரிந்துரைக்கப்பட்ட பயிர்',
        basedOn: 'உங்கள்',
        soilCondition: 'மண் மற்றும்',
        seasonCondition: 'பருவ நிலைமைகளின் அடிப்படையில், வளர பரிந்துரைக்கிறோம்',
        soilTypes: {
                'Alluvial soil': 'வண்டல் மண்',
                'Loamy soil': 'லோமி மண்',
                'Clay soil': 'களிமண்',
                'Well-drained soil': 'நன்கு வடிகட்டிய மண்',
                'Red soil': 'சிவப்பு மண்',
                'Clay loamy soil': 'களி லோமி மண்',
                'Sandy loamy soil': 'மணல் லோமி மண்',
                'Black soil': 'கருப்பு மண்',
                'Sandy soil': 'மணல் மண்',
                'Shallow black soil': 'ஆழமற்ற கருப்பு மண்',
                'Black cotton soil': 'கருப்பு பருத்தி மண்',
                'Cotton soil': 'பருத்தி மண்',
                'Medium black soil': 'மிதமான கருப்பு மண்',
                'Heavy black soil': 'கனமான கருப்பு மண்',
                'Light soil': 'இலகுவான மண்',
                'Heavy soil': 'கனமான மண்',
                'Deep soil': 'ஆழமான மண்',
                'Sandy clay loamy soil': 'மணல் களி லோமி மண்',
                'Silty loamy soil': 'வண்டல் லோமி மண்',
                'Salty clay loamy soil': 'உப்பு களி லோமி மண்',
                'Red loamy soil': 'சிவப்பு லோமி மண்',
                'Brown loamy soil': 'பழுப்பு லோமி மண்',
                'Laterite soil': 'லேட்டரைட் மண்',
                'Well-drained Loamy soil': 'நன்கு வடிகட்டிய லோமி மண்',
                'Light loamy soil': 'இலகுவான லோமி மண்',
                'Friable soil': 'நொறுங்கும் மண்',
                'Well-grained deep loamy moist soil': 'நன்றாகக் கரடுமுரடான ஆழமான ஈரப்பத மண்',
                'Red lateritic loamy soil': 'சிவப்பு லேட்டரைட் லோமி மண்',
                'Rich red loamy soil': 'வளமான சிவப்பு லோமி மண்'
              },
        crops: {
          'Rice': 'நெல்', 'Wheat': 'கோதுமை', 'Maize': 'மக்காச்சோளம்', 'Sorghum': 'சோளம்',
          'Pearl millet': 'கம்பு', 'Ragi': 'கேழ்வரகு', 'Panivaragu': 'பனிவரகு',
          'Samai': 'சாமை', 'Thinai': 'தினை', 'Varagu': 'வரகு', 'Kudiraivali': 'குதிரைவாலி',
          'Blackgram': 'உளுந்து', 'Greengram': 'பச்சைப் பயறு', 'Cowpea': 'தட்டைப்பயறு',
          'Bengalgram': 'கொண்டைக்கடலை', 'Horsegram': 'கொள்ளு', 'Redgram': 'துவரை',
          'Soyabean': 'சோயா அவரை', 'Groundnut': 'நிலக்கடலை', 'Sunflower': 'சூரியகாந்தி',
          'Gingely': 'எள்ளு', 'Castor': 'ஆமணக்கு', 'Cotton': 'பருத்தி', 'Jute': 'சணல்',
          'Sugarcane': 'கரும்பு', 'Sugarbeet': 'சர்க்கரைவள்ளிக்கிழங்கு', 'Tomato': 'தக்காளி',
          'Onion': 'வெங்காயம்', 'Chillies': 'மிளகாய்', 'Cabbage': 'முட்டைக்கோஸ்',
          'Bhendi': 'வெண்டைக்காய்', 'Brinjal': 'கத்திரிக்காய்', 'Capsicum': 'குடைமிளகாய்',
          'Pumpkin': 'பரங்கிக்காய்', 'Snake gourd': 'புடலங்காய்', 'Ribbed gourd': 'பீர்க்கங்காய்',
          'Bottle gourd': 'சுரைக்காய்', 'Bitter gourd': 'பாகற்காய்', 'Ash gourd': 'நீர்க்குமிழங்காய்',
          'Cucumber': 'வெள்ளரிக்காய்', 'Watermelon': 'தர்பூசணி', 'Muskmelon': 'முலாம்பழம்',
          'Tinda': 'திண்டா', 'Chowchow': 'சௌசௌ', 'Cluster bean': 'கொத்தவரைக்காய்',
          'Vegetable cowpea': 'காராமணி', 'French bean': 'பிரஞ்சு அவரை', 'Peas': 'பட்டாணி',
          'Annual moringa': 'முருங்கைக்கீரை', 'Carrot': 'கேரட்', 'Beetroot': 'பீட்ரூட்',
          'Radish': 'முள்ளங்கி', 'Sweet potato': 'சர்க்கரைவள்ளிக்கிழங்கு', 'Tapoica': 'மரவள்ளிக்கிழங்கு',
          'Elephant foot yam': 'சேனைக்கிழங்கு', 'Cauliflower': 'காலிஃபிளவர்', 'Small onion': 'சின்ன வெங்காயம்'
        },
        
        seasons: {
          'Rainy': 'மழைக்காலம்', 'Winter': 'குளிர்காலம்', 'Summer': 'கோடைக்காலம்'
        }
      },
    cropDisease: {
    "aiBadge": "AI நோய் கண்டறிதல்",
    "title": "பயிர் நோய் கண்டறிதல்",
    "subtitle": "நோய்களைக் கண்டறிய மற்றும் சிகிச்சை பரிந்துரைகளைப் பெற உங்கள் பயிரின் இலையின் புகைப்படத்தைப் பதிவேற்றவும்",
    "uploadImage": "இலை படத்தை பதிவேற்றுக",
    "uploadButton": "கோப்பை பதிவேற்றுக",
    "dragDrop": "அல்லது இங்கே இழுத்து விடவும்",
    "fileRequirements": "PNG, JPG, GIF (5MB வரை)",
    "tip": "புரோ டிப்",
    "tipText": "சிறந்த முடிவுகளுக்கு, இயற்கை விளக்குகளில் பாதிக்கப்பட்ட இலையின் தெளிவான புகைப்படத்தை எடுக்கவும்",
    "analyzing": "பகுப்பாய்வு செய்கிறது...",
    "analyzeButton": "இலையை பகுப்பாய்வு செய்க",
    "healthyPlant": "ஆரோக்கியமான தாவரம்",
    "diseaseDetected": "நோய் கண்டறியப்பட்டது",
    "confidence": "நிச்சயத்தன்மை",
    "treatment": "சிகிச்சை",
    "prevention": "தடுப்பு",
    "healthyTip": "ஆரோக்கியமாக வைத்திருங்கள்",
    "healthyTipText": "உங்கள் நல்ல விவசாய நடைமுறைகளை தொடருங்கள். வழக்கமான கண்காணிப்பு மற்றும் தடுப்பு பராமரிப்பு தாவர ஆரோக்கியத்தை பராமரிக்க உதவும்.",
    "newAnalysis": "புதிய பகுப்பாய்வு",
    "uploadAnother": "மற்றொரு படத்தை பதிவேற்றுக",
    "diseasesCovered": "நோய் கவரேஜ்",
    "diseases": "நோய்கள்",
    "cropsSupported": "ஆதரிக்கப்படும் பயிர்கள்",
    "crops": "பயிர்கள்",
    "responseTime": "பதிலளிப்பு நேரம்",
    "quickAnalysis": "விரைவான பகுப்பாய்வு",
    "invalidFileType": "செல்லுபடியாகும் படக் கோப்பைப் பதிவேற்றவும்",
    "fileTooLarge": "கோப்பு அளவு 5MB க்கும் குறைவாக இருக்க வேண்டும்",
    "noImageSelected": "தயவுசெய்து முதலில் ஒரு படத்தைத் தேர்ந்தெடுக்கவும்",
    "predictionFailed": "கணிப்பு தோல்வியடைந்தது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்",
    "errorPrefix": "படத்தை பகுப்பாய்வு செய்ய முடியவில்லை. உங்கள் இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    "onCrop": "மீது",

    "diseaseNames": {
      "Corn___Common_Rust": "பொதுவான துரு",
      "Corn___Gray_Leaf_Spot": "சாம்பல் இலை புள்ளி",
      "Corn___Healthy": "ஆரோக்கியமான",
      "Corn___Northern_Leaf_Blight": "வடக்கு இலை சுடர் நோய்",
      "Potato___Early_Blight": "ஆரம்ப சுடர் நோய்",
      "Potato___Healthy": "ஆரோக்கியமான",
      "Potato___Late_Blight": "பிந்தைய சுடர் நோய்",
      "Rice___Brown_Spot": "பழுப்பு புள்ளி",
      "Rice___Healthy": "ஆரோக்கியமான",
      "Rice___Leaf_Blast": "இலை கருகல் நோய்",
      "Rice___Neck_Blast": "கழுத்து கருகல் நோய்",
      "Wheat___Brown_Rust": "பழுப்பு துரு",
      "Wheat___Healthy": "ஆரோக்கியமான",
      "Wheat___Yellow_Rust": "மஞ்சள் துரு",
      "Sugarcane__Red_Rot": "சிவப்பு அழுகல்",
      "Sugarcane__Healthy": "ஆரோக்கியமான",
      "Sugarcane__Bacterial Blight": "பாக்டீரியா சுடர் நோய்",
      "Apple___Apple_scab": "ஆப்பிள் தழும்பு",
      "Apple___Black_rot": "கருப்பு அழுகல்",
      "Apple___Cedar_apple_rust": "சிடார் ஆப்பிள் துரு",
      "Apple___healthy": "ஆரோக்கியமான",
      "Blueberry___healthy": "ஆரோக்கியமான",
      "Cherry_(including_sour)___Powdery_mildew": "வெள்ளை பூஞ்சை",
      "Cherry_(including_sour)___healthy": "ஆரோக்கியமான",
      "Grape___Black_rot": "கருப்பு அழுகல்",
      "Grape___Esca_(Black_Measles)": "எஸ்கா நோய்",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "இலை சுடர் நோய்",
      "Grape___healthy": "ஆரோக்கியமான",
      "Orange___Haunglongbing_(Citrus_greening)": "சிட்ரஸ் பச்சையாக்க நோய்",
      "Peach___Bacterial_spot": "பாக்டீரியா புள்ளி",
      "Peach___healthy": "ஆரோக்கியமான",
      "Pepper,_bell___Bacterial_spot": "பாக்டீரியா புள்ளி",
      "Pepper,_bell___healthy": "ஆரோக்கியமான",
      "Tomato___Bacterial_spot": "பாக்டீரியா புள்ளி",
      "Tomato___Early_blight": "ஆரம்ப சுடர் நோய்",
      "Tomato___Late_blight": "பிந்தைய சுடர் நோய்",
      "Tomato___Leaf_Mold": "இலை பூஞ்சை",
      "Tomato___Septoria_leaf_spot": "செப்டோரியா இலை புள்ளி",
      "Tomato___Spider_mites Two-spotted_spider_mite": "சிலந்திப் பூச்சிகள்",
      "Tomato___Target_Spot": "இலக்கு புள்ளி",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "மஞ்சள் இலை சுருள் வைரஸ்",
      "Tomato___Tomato_mosaic_virus": "மொசைக் வைரஸ்",
      "Tomato___healthy": "ஆரோக்கியமான"
    },

    "treatments": {
      "Corn___Common_Rust": "பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும் மற்றும் பாதிக்கப்பட்ட இலைகளை அகற்றவும்.",
      "Corn___Gray_Leaf_Spot": "இலை பூஞ்சைக் கொல்லிகளைப் பயன்படுத்தவும்.",
      "Corn___Healthy": "சிகிச்சை தேவையில்லை.",
      "Corn___Northern_Leaf_Blight": "ஆரம்ப கட்டங்களில் பூஞ்சைக் கொல்லியை தெளிக்கவும்.",
      "Potato___Early_Blight": "செப்பு பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Potato___Healthy": "சிகிச்சை தேவையில்லை.",
      "Potato___Late_Blight": "உடனடியாக பூஞ்சைக் கொல்லிகளைப் பயன்படுத்தவும்.",
      "Rice___Brown_Spot": "பொட்டாசியம் உரம் மற்றும் பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Rice___Healthy": "சிகிச்சை தேவையில்லை.",
      "Rice___Leaf_Blast": "வெடிப்பை எதிர்க்கும் விதைகள் மற்றும் பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Rice___Neck_Blast": "ட்ரைசைக்ளாசோல் பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Wheat___Brown_Rust": "துரு பூஞ்சைக் கொல்லிகளைப் பயன்படுத்தவும்.",
      "Wheat___Healthy": "சிகிச்சை தேவையில்லை.",
      "Wheat___Yellow_Rust": "ஆரம்பத்திலேயே பூஞ்சைக் கொல்லியை தெளிக்கவும்.",
      "Sugarcane__Red_Rot": "பாதிக்கப்பட்ட கரும்புகளை அகற்றி பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Sugarcane__Healthy": "சிகிச்சை தேவையில்லை.",
      "Sugarcane__Bacterial Blight": "பாக்டீரியா கொல்லி தெளிப்பைப் பயன்படுத்தவும்.",
      "Apple___Apple_scab": "தவறாமல் பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Apple___Black_rot": "பாதிக்கப்பட்ட பழங்கள் மற்றும் கிளைகளை அகற்றவும்.",
      "Apple___Cedar_apple_rust": "கந்தக பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Apple___healthy": "சிகிச்சை தேவையில்லை.",
      "Blueberry___healthy": "சிகிச்சை தேவையில்லை.",
      "Cherry_(including_sour)___Powdery_mildew": "கந்தக அடிப்படையிலான பூஞ்சைக் கொல்லியை தெளிக்கவும்.",
      "Cherry_(including_sour)___healthy": "சிகிச்சை தேவையில்லை.",
      "Grape___Black_rot": "பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும் மற்றும் பாதிக்கப்பட்ட திராட்சைகளை அகற்றவும்.",
      "Grape___Esca_(Black_Measles)": "பாதிக்கப்பட்ட மரத்தை அகற்றவும்.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "செப்பு பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Grape___healthy": "சிகிச்சை தேவையில்லை.",
      "Orange___Haunglongbing_(Citrus_greening)": "முழுமையான சிகிச்சை இல்லை. பாதிக்கப்பட்ட மரங்களை அகற்றவும்.",
      "Peach___Bacterial_spot": "செப்பு தெளிப்பைப் பயன்படுத்தவும்.",
      "Peach___healthy": "சிகிச்சை தேவையில்லை.",
      "Pepper,_bell___Bacterial_spot": "செப்பு அடிப்படையிலான பாக்டீரியா கொல்லியைப் பயன்படுத்தவும்.",
      "Pepper,_bell___healthy": "சிகிச்சை தேவையில்லை.",
      "Tomato___Bacterial_spot": "செப்பு அடிப்படையிலான பாக்டீரியா கொல்லியைப் பயன்படுத்தவும்.",
      "Tomato___Early_blight": "பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும் மற்றும் பாதிக்கப்பட்ட இலைகளை அகற்றவும்.",
      "Tomato___Late_blight": "உடனடியாக பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Tomato___Leaf_Mold": "காற்று சுழற்சியை மேம்படுத்தவும் மற்றும் ஈரப்பதத்தை குறைக்கவும்.",
      "Tomato___Septoria_leaf_spot": "பாதிக்கப்பட்ட இலைகளை அகற்றி பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "பூச்சிக்கொல்லி அல்லது வேப்ப எண்ணெய் பயன்படுத்தவும்.",
      "Tomato___Target_Spot": "பூஞ்சைக் கொல்லியைப் பயன்படுத்தவும்.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "பாதிக்கப்பட்ட தாவரங்களை அகற்றவும். சிகிச்சை இல்லை.",
      "Tomato___Tomato_mosaic_virus": "பாதிக்கப்பட்ட தாவரங்களை உடனடியாக அகற்றவும். கருவிகளை கிருமி நீக்கம் செய்யவும்.",
      "Tomato___healthy": "சிகிச்சை தேவையில்லை."
    },

    "preventions": {
      "Corn___Common_Rust": "எதிர்ப்பு வகைகளைப் பயன்படுத்தவும் மற்றும் நெரிசலைத் தவிர்க்கவும்.",
      "Corn___Gray_Leaf_Spot": "பயிர்களை சுழற்றவும் மற்றும் பயிர் எச்சத்தை அகற்றவும்.",
      "Corn___Healthy": "சரியான நீர்ப்பாசனம் மற்றும் ஊட்டச்சத்துக்களை பராமரிக்கவும்.",
      "Corn___Northern_Leaf_Blight": "எதிர்ப்பு கலப்பினங்கள் மற்றும் பயிர் சுழற்சியைப் பயன்படுத்தவும்.",
      "Potato___Early_Blight": "மேல்நிலை நீர்ப்பாசனத்தைத் தவிர்க்கவும் மற்றும் பயிர்களை சுழற்றவும்.",
      "Potato___Healthy": "சமச்சீர் உரங்கள் மற்றும் நீர்ப்பாசனத்தைப் பயன்படுத்தவும்.",
      "Potato___Late_Blight": "இலைகளை உலர வைக்கவும் மற்றும் காற்றோட்டத்தை மேம்படுத்தவும்.",
      "Rice___Brown_Spot": "ஊட்டச்சத்து குறைபாட்டைத் தவிர்க்கவும்.",
      "Rice___Healthy": "நீர் மற்றும் ஊட்டச்சத்துக்களை சரியாக பராமரிக்கவும்.",
      "Rice___Leaf_Blast": "அதிகப்படியான நைட்ரஜன் உரத்தைத் தவிர்க்கவும்.",
      "Rice___Neck_Blast": "சரியான இடைவெளி மற்றும் நீர்ப்பாசனத்தை பராமரிக்கவும்.",
      "Wheat___Brown_Rust": "எதிர்ப்பு கோதுமை வகைகளைப் பயன்படுத்தவும்.",
      "Wheat___Healthy": "சரியான வயல் மேலாண்மையைப் பயன்படுத்தவும்.",
      "Wheat___Yellow_Rust": "எதிர்ப்பு இரகங்களை வளர்க்கவும்.",
      "Sugarcane__Red_Rot": "நோய் இல்லாத நடவுப் பொருட்களைப் பயன்படுத்தவும்.",
      "Sugarcane__Healthy": "மண் வளத்தை பராமரிக்கவும்.",
      "Sugarcane__Bacterial Blight": "தேங்கும் நீர் மற்றும் பாதிக்கப்பட்ட விதைகளைத் தவிர்க்கவும்.",
      "Apple___Apple_scab": "விழுந்த இலைகளை அகற்றி மரங்களை கத்தரிக்கவும்.",
      "Apple___Black_rot": "தோட்ட சுகாதாரத்தை பராமரிக்கவும்.",
      "Apple___Cedar_apple_rust": "அருகிலுள்ள சிடார் மரங்களை அகற்றவும்.",
      "Apple___healthy": "சரியான தோட்ட பராமரிப்பை பராமரிக்கவும்.",
      "Blueberry___healthy": "சரியான மண் அமிலத்தன்மை மற்றும் நீர்ப்பாசனத்தை உறுதி செய்யவும்.",
      "Cherry_(including_sour)___Powdery_mildew": "காற்றோட்டத்தை மேம்படுத்தவும் மற்றும் ஈரப்பதத்தைத் தவிர்க்கவும்.",
      "Cherry_(including_sour)___healthy": "தவறாமல் கத்தரிக்கவும் மற்றும் சரியாக நீர்ப்பாசனம் செய்யவும்.",
      "Grape___Black_rot": "காற்றோட்டத்திற்காக கொடிகளை கத்தரிக்கவும்.",
      "Grape___Esca_(Black_Measles)": "ஈரமான காலநிலையில் கத்தரிப்பு காயங்களைத் தவிர்க்கவும்.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "திராட்சை தோட்ட சுகாதாரத்தை மேம்படுத்தவும்.",
      "Grape___healthy": "சமச்சீர் ஊட்டச்சத்தை பராமரிக்கவும்.",
      "Orange___Haunglongbing_(Citrus_greening)": "சைலிட் பூச்சிகளை கட்டுப்படுத்தவும். நோய் இல்லாத தாவரங்களைப் பயன்படுத்தவும்.",
      "Peach___Bacterial_spot": "எதிர்ப்பு வகைகளைப் பயன்படுத்தவும்.",
      "Peach___healthy": "சரியான கத்தரிப்பை பராமரிக்கவும்.",
      "Pepper,_bell___Bacterial_spot": "ஈரமான இலைகளைத் தவிர்க்கவும் மற்றும் சுத்தமான விதைகளைப் பயன்படுத்தவும்.",
      "Pepper,_bell___healthy": "சரியான நீர்ப்பாசன நுட்பங்களைப் பயன்படுத்தவும்.",
      "Tomato___Bacterial_spot": "நோய் இல்லாத விதைகளைப் பயன்படுத்தவும். மேல்நிலை நீர்ப்பாசனத்தைத் தவிர்க்கவும்.",
      "Tomato___Early_blight": "பயிர்களை சுழற்றவும் மற்றும் தழைக்கூளம் பயன்படுத்தவும்.",
      "Tomato___Late_blight": "இலைகளை உலர வைக்கவும் மற்றும் காற்றோட்டத்தை மேம்படுத்தவும்.",
      "Tomato___Leaf_Mold": "ஈரப்பதத்தை குறைக்கவும் மற்றும் காற்றோட்டத்தை மேம்படுத்தவும்.",
      "Tomato___Septoria_leaf_spot": "மேல்நிலை நீர்ப்பாசனத்தைத் தவிர்க்கவும். கீழ் இலைகளை அகற்றவும்.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "சரியான ஈரப்பதத்தை பராமரிக்கவும். நன்மை செய்யும் பூச்சிகளை அறிமுகப்படுத்தவும்.",
      "Tomato___Target_Spot": "சரியான இடைவெளியை உறுதி செய்யவும் மற்றும் மேல்நிலை நீர்ப்பாசனத்தைத் தவிர்க்கவும்.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "மஞ்சள் பிசின் பொறிகள் மூலம் வெள்ளை ஈக்களை கட்டுப்படுத்தவும்.",
      "Tomato___Tomato_mosaic_virus": "தோட்டக்கலை கருவிகளை கிருமி நீக்கம் செய்யவும். வைரஸ் இல்லாத விதைகளைப் பயன்படுத்தவும்.",
      "Tomato___healthy": "சமச்சீர் உரமிடுதல் மற்றும் சரியான நீர்ப்பாசனத்தை பராமரிக்கவும்."
    }
  },
  virtualfarm: {
    header: {
      badge: "🌾 3டி பண்ணை காட்சிப்படுத்தல்",
      title: "மெய்நிகர் பண்ணை அனுபவம்",
      subtitle: "நிகழ்நேர பருவகால மாற்றங்கள் மற்றும் வானிலை விளைவுகளுடன் 3டியில் உங்கள் பண்ணையை ஆராயுங்கள்"
    },
    seasonController: {
      title: "பருவ கட்டுப்படுத்தி",
      summer: "கோடை",
      monsoon: "பருவமழை",
      winter: "குளிர்காலம்",
      autumn: "இலையுதிர் காலம்"
    },
    seasonDescriptions: {
      summer: "பொன்னிற சூரிய ஒளி - தாவரங்கள் துடிப்பான பச்சை நிறங்களுடன் செழித்து வளரும்.",
      monsoon: "கனமழை - ஆழமான பச்சை இலைகளுடன் புத்துணர்ச்சியான மறுவளர்ச்சி.",
      winter: "குளிர் மற்றும் உறைபனி - தாவரங்கள் பசுமையான குளிர்கால நிறங்களைக் காட்டுகின்றன.",
      autumn: "அறுவடை காலம் - தாவரங்கள் இலையுதிர் நிறங்களுடன் மாறுகின்றன!"
    },
    climate: {
      temp: "வெப்பநிலை",
      humidity: "ஈரப்பதம்"
    },
    weather: {
      sunny: "☀️ வெயில்",
      rainy: "🌧️ மழை",
      snowy: "❄️ பனி"
    },
    stats: {
      totalPlants: "மொத்த தாவரங்கள்",
      plants: "தாவரங்கள்",
      farmArea: "பண்ணை பரப்பு",
      meters: "மீட்டர்கள்",
      currentSeason: "தற்போதைய பருவம்",
      performance: "செயல்திறன்",
      fpsTarget: "FPS இலக்கு"
    },
    loading: {
      model: "3டி மாதிரி ஏற்றப்படுகிறது...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "பருவத்தை மாற்று",
      resetView: "காட்சியை மீட்டமை",
      toggleInfo: "தகவலை மாற்று"
    },
    messages: {
      seasonChanged: "பருவம் {{season}} ஆக மாற்றப்பட்டது",
      weatherUpdated: "வானிலை புதுப்பிக்கப்பட்டது",
      farmReady: "பண்ணை ஆராய தயாராக உள்ளது"
    },
    tooltips: {
      rotate: "காட்சியை சுழற்று",
      zoom: "உள்ளே/வெளியே பெரிதாக்கு",
      pan: "பண்ணை முழுவதும் நகர்த்து"
    }
  },cropRotation: {
  header: {
    badge: "AI-இயக்கப்படும் பயிர் சுழற்சி திட்டமிடுபவர்",
    title: "பயிர் சுழற்சி முறை",
    subtitle: "அதிக மகசூல் மற்றும் மண் ஆரோக்கியத்திற்காக உங்கள் பயிர் சுழற்சியைத் திட்டமிடுங்கள்"
  },
  popularCrops: "பிரபலமான பயிர்கள்",
  form: {
    selectCrop: "பயிரைத் தேர்ந்தெடுக்கவும்",
    chooseCrop: "ஒரு பயிரைத் தேர்வு செய்யவும்",
    numSeasons: "பருவங்களின் எண்ணிக்கை"
  },
  seasons: {
    one: "1 பருவம்",
    two: "2 பருவங்கள்",
    three: "3 பருவங்கள் (1 வருடம்)",
    four: "4 பருவங்கள்",
    six: "6 பருவங்கள் (2 வருடங்கள்)"
  },
  buttons: {
    planning: "திட்டமிடுகிறது...",
    generate: "பயிர் சுழற்சி திட்டத்தை உருவாக்குக"
  },
  errors: {
    selectCrop: "தயவுசெய்து ஒரு பயிரைத் தேர்ந்தெடுக்கவும்",
    requestFailed: "பயிர் சுழற்சி திட்டத்தைப் பெற தோல்வியுற்றது"
  },
  result: {
    title: "பயிர் சுழற்சி திட்டம்",
    currentCrop: "தற்போதைய பயிர்",
    phase: "கட்டம்",
    best: "சிறந்தது",
    bestChoice: "சிறந்த தேர்வு"
  },
  phases: {
    kharif: "காரிப்",
    rabi: "ராபி",
    summer: "கோடை",
    winter: "குளிர்காலம்",
    autumn: "இலையுதிர்",
    annual: "ஆண்டு"
  },
  benefits: {
    title: "நன்மைகள்",
    soilHealth: {
      title: "மண் ஆரோக்கியம்",
      desc: "ஊட்டச்சத்து குறைபாட்டைத் தடுக்கிறது"
    },
    pestControl: {
      title: "பூச்சி கட்டுப்பாடு",
      desc: "நோய் சுழற்சிகளை உடைக்கிறது"
    },
    waterEfficiency: {
      title: "நீர் திறன்",
      desc: "பயன்பாட்டை மேம்படுத்துகிறது"
    },
    higherYields: {
      title: "அதிக மகசூல்",
      desc: "உற்பத்தித்திறனை அதிகரிக்கிறது"
    }
  },
  howItWorks: {
    title: "இது எவ்வாறு இயங்குகிறது",
    selectCrop: {
      title: "பயிரைத் தேர்ந்தெடுக்கவும்",
      desc: "50+ பயிர்களில் இருந்து தேர்வு செய்யவும்"
    },
    aiAnalysis: {
      title: "AI பகுப்பாய்வு",
      desc: "வரலாற்றுத் தரவுகளை பகுப்பாய்வு செய்கிறது"
    },
    viewCycle: {
      title: "சுழற்சியைக் காண்க",
      desc: "சுழற்சி திட்டத்தைப் பார்க்கவும்"
    }
  },
  crops: {
    "Rice": "நெல்",
    "Wheat": "கோதுமை",
    "Maize": "மக்காச்சோளம்",
    "Sugarcane": "கரும்பு",
    "Cotton": "பருத்தி",
    "Potato": "உருளைக்கிழங்கு",
    "Turmeric": "மஞ்சள்",
    "Banana": "வாழை",
    "Groundnut": "நிலக்கடலை",
    "Onion": "வெங்காயம்",
    "Arecanut": "பாக்கு",
    "Arhar/Tur": "துவரை",
    "Black pepper": "மிளகு",
    "Cashewnut": "முந்திரி",
    "Coconut": "தேங்காய்",
    "Cowpea(Lobia)": "காராமணி",
    "Dry chillies": "உலர் மிளகாய்",
    "Ginger": "இஞ்சி",
    "Moong(Green Gram)": "பச்சைப் பயறு",
    "Oilseeds total": "எண்ணெய் வித்துகள்",
    "Other Kharif pulses": "பிற காரிப் பயறுகள்",
    "Other oilseeds": "பிற எண்ணெய் வித்துகள்",
    "Rapeseed & Mustard": "கடுகு",
    "Sesamum": "எள்ளு",
    "Sunflower": "சூரியகாந்தி",
    "Sweet potato": "சர்க்கரைவள்ளிக்கிழங்கு",
    "Tapioca": "மரவள்ளிக்கிழங்கு",
    "Urad": "உழுந்து",
    "Bajra": "கம்பு",
    "Castor seed": "ஆமணக்கு",
    "Coriander": "கொத்தமல்லி",
    "Garlic": "பூண்டு",
    "Gram": "கொண்டைக் கடலை",
    "Guar seed": "கோவர்பீன்ஸ்",
    "Horse-gram": "கொள்ளு",
    "Jowar": "சோளம்",
    "Linseed": "ஆளி விதை",
    "Masoor": "மசூர்",
    "Mesta": "மெஸ்டா",
    "Niger seed": "நைஜர் விதை",
    "Other Rabi pulses": "பிற ராபி பயறுகள்",
    "Ragi": "கேழ்வரகு",
    "Safflower": "குசம்பா",
    "Sannhamp": "சணல்",
    "Small millets": "சிறு தானியங்கள்",
    "Soyabean": "சோயா அவரை",
    "Tobacco": "புகையிலை",
    "Peas & beans (Pulses)": "பட்டாணி மற்றும் அவரை",
    "Jute": "சணல்",
    "Barley": "பார்லி",
    "Khesari": "கேசரி",
    "Moth": "மோத்",
    "Cardamom": "ஏலக்காய்"
  }
},

    weather: {
      badge: "🌤️ உங்கள் இருப்பிடத்தின் அடிப்படையில் வானிலை பகுப்பாய்வு",
      title: "இருப்பிட வானிலை பகுப்பாய்வு",
      subtitle: "நிகழ்நேர வானிலை தரவு பகுப்பாய்வு",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 எனது இருப்பிடம்",
      refresh: "புதுப்பிக்கவும்",
      searchPlaceholder: "நகரத்தின் பெயரை உள்ளிடவும்...",
      search: "தேடுக",
      currentLocation: "தற்போதைய இருப்பிடம்",
      updated: "புதுப்பிக்கப்பட்டது",
      fetchingWeather: "வானிலை தரவுகளை பெற்றுக் கொண்டிருக்கிறது...",
      unableToGetLocation: "உங்கள் இருப்பிடத்தைப் பெற முடியவில்லை. இருப்பிட சேவைகளை இயக்கவும்.",
      geolocationNotSupported: "உங்கள் உலாவி புவியிடங்கண்டறிதலை ஆதரிக்கவில்லை",
      invalidCoordinates: "தவறான ஆயத்தொலைவுகள். மீண்டும் முயலவும்.",
      cityNotFound: "நகரம் கிடைக்கவில்லை. நகரத்தின் பெயரை சரிபார்க்கவும்.",
      requestTimeout: "கோரிக்கை நேரம் முடிந்தது. மீண்டும் முயலவும்.",
      currentWeather: "தற்போதைய வானிலை",
      fiveDayForecast: "5 நாள் முன்னறிவிப்பு",
      feelsLike: "உணரப்படும் வெப்பநிலை",
      humidity: "ஈரப்பதம்",
      windSpeed: "காற்றின் வேகம்",
      pressure: "அழுத்தம்",
      cloudCover: "மேக மூட்டம்",
      sunrise: "சூரிய உதயம்",
      sunset: "சூரிய அஸ்தமனம்",
      rain: "மழை (1 மணி)",
      snow: "பனி (1 மணி)",
      airQuality: "காற்றின் தரக் குறியீடு",
      airQuality1: "நல்லது - வெளிப்புற நடவடிக்கைகளுக்கு சிறந்தது",
      airQuality2: "சாதாரணம் - ஏற்றுக்கொள்ளக்கூடிய காற்றின் தரம்",
      airQuality3: "மிதமான - உணர்திறன் கொண்டவர்கள் வெளிப்புற நேரத்தை கட்டுப்படுத்த வேண்டும்",
      airQuality4: "மோசமானது - வெளிப்புற நடவடிக்கைகளை கட்டுப்படுத்தவும்",
      airQuality5: "மிகவும் மோசமானது - வீட்டிற்குள் இருங்கள்",
      forecastTitle: "5 நாள் வானிலை முன்னறிவிப்பு",
      high: "உயர்",
      low: "தாழ்",
      tempCard: "வெப்பநிலை",
      tempDesc: "நிகழ்நேர தரவு",
      humidityCard: "ஈரப்பதம்",
      humidityDesc: "துல்லியமான அளவீடு",
      windCard: "காற்றின் வேகம்",
      windDesc: "துல்லியமான அளவீடுகள்",
      coverageCard: "பரப்பு",
      coverageDesc: "உலகளாவிய"
    }


    }
  },
  ml: {
    translation: {
      nav: {
    home: "ഹോം",
    features: "സവിശേഷതകൾ",
    cropRecommendation: "വിള ശുപാർശ",
    cropRecommendationDesc: "മണ്ണിന്റെയും കാലാവസ്ഥയുടെയും അടിസ്ഥാനത്തിൽ AI-പവർ ചെയ്ത വിള നിർദ്ദേശങ്ങൾ",
    diseasePrediction: "രോഗ പ്രവചനം",
    diseasePredictionDesc: "AI ഉപയോഗിച്ച് ഇല ചിത്രങ്ങളിൽ നിന്ന് രോഗങ്ങൾ കണ്ടെത്തുക",
    farmVisualization: "ഫാം വിഷ്വലൈസേഷൻ",
    farmVisualizationDesc: "വിളകൾ, ജലസേചനം, കാലാനുസൃത ഉൾക്കാഴ്ചകൾ എന്നിവയുള്ള സംവേദനാത്മക 3D ഫാം ദൃശ്യവൽക്കരണം",
    cropRotation: "വിള ഭ്രമണം",
    cropRotationDesc: "പരമാവധി വിളവിനായി വിള ഭ്രമണം ആസൂത്രണം ചെയ്യുക",
    language: "ഭാഷ",
    toggleTheme: "തീം മാറ്റുക",
    toggleMenu: "മെനു മാറ്റുക"
  },
     
        // Add this to your existing ml.js
home: {
  hero: {
    badge: "🇮🇳 AI-പവർ കൃഷി",
    title: "ബുദ്ധിപരമായ പരിഹാരങ്ങൾ",
    highlight: "ഇന്ത്യൻ കർഷകർക്കായി",
    subtitle: "മികച്ച തീരുമാനങ്ങൾക്കും വിളവെടുപ്പിനുമുള്ള നിങ്ങളുടെ AI കാർഷിക സഹായി",
    imageAlt: "ഡ്രോൺ ഉപയോഗിച്ചുള്ള സ്മാർട്ട് കൃഷി",
    aiBadge: "AI വിശകലനം"
  },
  benefits: {
    free: {
      title: "സൗജന്യമായി ഉപയോഗിക്കാം",
      desc: "മറഞ്ഞിരിക്കുന്ന ചിലവുകളില്ല"
    },
    languages: {
      title: "6 ഭാഷകൾ",
      desc: "തമിഴ്, ഹിന്ദി & കൂടുതൽ"
    },
    noSignup: {
      title: "രജിസ്ട്രേഷൻ വേണ്ട",
      desc: "തൽക്ഷണ പ്രവേശനം"
    },
    access: {
      title: "24/7 പ്രവേശനം",
      desc: "എപ്പോൾ വേണമെങ്കിലും, എവിടെ വേണമെങ്കിലും"
    }
  },
  carousel: {
    title: "വിളകൾ പര്യവേക്ഷണം ചെയ്യുക",
    subtitle: "AI-പവർ ചെയ്ത ഉൾക്കാഴ്ചകളും ശുപാർശകളുമുള്ള ഞങ്ങളുടെ വിപുലമായ വിളകളുടെ ശേഖരം പര്യവേക്ഷണം ചെയ്യുക"
  },
  howItWorks: {
    title: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    subtitle: "നിങ്ങളുടെ വിരൽത്തുമ്പിൽ ഡാറ്റാധിഷ്ഠിത കാർഷിക ബുദ്ധി",
    step1: {
      title: "വിള വിവരങ്ങൾ നൽകുക",
      desc: "നിങ്ങളുടെ മണ്ണിന്റെ പാരാമീറ്ററുകൾ, സ്ഥലം, വിള മുൻഗണനകൾ എന്നിവ നൽകുക",
      alt: "വിള വിവരങ്ങൾ നൽകുക ഐക്കൺ"
    },
    step2: {
      title: "AI പ്രോസസ്സിംഗ്",
      desc: "ഞങ്ങളുടെ AI നിങ്ങളുടെ ഡാറ്റ വിശകലനം ചെയ്ത് വ്യക്തിഗത ശുപാർശകൾ സൃഷ്ടിക്കുന്നു",
      alt: "AI പ്രോസസ്സിംഗ് ഐക്കൺ"
    },
    step3: {
      title: "ഉൾക്കാഴ്ചകൾ നേടുക",
      desc: "തൽക്ഷണ വിള പ്രവചനങ്ങൾ, രോഗ അലേർട്ടുകൾ, വള ഉപദേശം എന്നിവ സ്വീകരിക്കുക",
      alt: "ഉൾക്കാഴ്ചകൾ നേടുക ഐക്കൺ"
    }
  },
  features: {
    badge: "സ്മാർട്ട് സവിശേഷതകൾ",
    heading: "AI-പവർ ചെയ്ത കാർഷിക പരിഹാരങ്ങൾ",
    subheading: "ഓരോ കാർഷിക ആവശ്യത്തിനും ഡാറ്റാധിഷ്ഠിത ബുദ്ധി",
    cropRecommendationDesc: "മെഷീൻ ലേണിംഗ് അൽഗരിതങ്ങൾ മണ്ണിലെ പോഷകങ്ങൾ, താപനില, ഈർപ്പം, മഴ എന്നിവ വിശകലനം ചെയ്ത് ഏറ്റവും ലാഭകരമായ വിളകൾ ശുപാർശ ചെയ്യുന്നു.",
    diseasePredictionDesc: "തൽക്ഷണ രോഗ കണ്ടെത്തലിനായി ഇലകളുടെ ചിത്രങ്ങൾ അപ്ലോഡ് ചെയ്യുക. CNN ഉപയോഗിച്ച് ചികിത്സാ നിർദ്ദേശങ്ങളും പ്രതിരോധ നുറുങ്ങുകളും നേടുക.",
    farmVisualizationDesc: "മികച്ച ആസൂത്രണത്തിനായി വിളകൾ, ജലസേചനം, സീസണൽ ഉൾക്കാഴ്ചകൾ എന്നിവയുള്ള സംവേദനാത്മക 3D ഫാം ദൃശ്യവൽക്കരണം.",
    cropRotationDesc: "AI-പവർ ചെയ്ത ശുപാർശകൾ ഉപയോഗിച്ച് പരമാവധി വിളവിനും മണ്ണിന്റെ ആരോഗ്യത്തിനും വിള ഭ്രമണം ആസൂത്രണം ചെയ്യുക."
  }
},
crops: {
  grape: "മുന്തിരി",
  peach: "പീച്ച്",
  bellPepper: "ബെൽ പെപ്പർ",
  strawberry: "സ്ട്രോബെറി",
  tea: "തേയില",
  tomato: "തക്കാളി",
  potato: "ഉരുളക്കിഴങ്ങ്",
  corn: "ചോളം",
  apple: "ആപ്പിൾ",
  bean: "ബീൻസ്",
  cherry: "ചെറി"
},
carousel: {
  scrollingText: "തുടർച്ചയായി സ്ക്രോൾ ചെയ്യുന്നു • മാറ്റിനിർത്താൻ ഹോവർ ചെയ്യുക"
},
      footer: {
        description: 'ഇന്ത്യൻ കർഷകരെ അവരുടെ സ്വന്തം ഭാഷയിൽ AI സാങ്കേതികവിദ്യ ഉപയോഗിച്ച് ശാക്തീകരിക്കുന്നു.',
        features: 'സവിശേഷതകൾ',
        schemes: 'പദ്ധതികൾ',
        contact: 'ബന്ധപ്പെടുക',
        rights: 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
        made: 'ഇന്ത്യൻ കർഷകർക്കായി ❤️ ഉപയോഗിച്ച് നിർമ്മിച്ചത്'
      },
      cropRecommendation: {
            title: 'വിള ശുപാർശ സംവിധാനം',
            subtitle: 'മികച്ച വിള കണ്ടെത്താൻ നിങ്ങളുടെ മണ്ണും സീസൺ വിശദാംശങ്ങളും നൽകുക',
            aiBadge: '🌱 AI-പവർ ശുപാർശ',
            soilType: 'മണ്ണിന്റെ തരം',
            season: 'സീസൺ',
            temperature: 'താപനില (°C)',
            humidity: 'ഈർപ്പം (%)',
            selectSoil: 'മണ്ണിന്റെ തരം തിരഞ്ഞെടുക്കുക',
            selectSeason: 'സീസൺ തിരഞ്ഞെടുക്കുക',
            predictButton: 'മികച്ച വിള പ്രവചിക്കുക',
            predicting: 'പ്രവചിക്കുന്നു...',
            errorPrefix: 'പ്രവചനം ലഭിച്ചില്ല. വീണ്ടും ശ്രമിക്കുക.',
            optimalTemp: '15-45°C അനുയോജ്യം',
            optimalHumidity: '40-80% അനുയോജ്യം',
            soilCount: '29 മണ്ണ് തരങ്ങൾ',
            recommendedCrop: 'ശുപാർശ ചെയ്യുന്ന വിള',
            basedOn: 'നിങ്ങളുടെ',
            soilCondition: 'മണ്ണും',
            seasonCondition: 'സീസൺ സാഹചര്യങ്ങളും അടിസ്ഥാനമാക്കി, വളർത്താൻ ശുപാർശ ചെയ്യുന്നു',
            soilTypes: {
                'Alluvial soil': 'എക്കൽ മണ്ണ്',
                'Loamy soil': 'ലോമി മണ്ണ്',
                'Clay soil': 'കളിമണ്ണ്',
                'Well-drained soil': 'നന്നായി വറ്റുന്ന മണ്ണ്',
                'Red soil': 'ചുവന്ന മണ്ണ്',
                'Clay loamy soil': 'കളി ലോമി മണ്ണ്',
                'Sandy loamy soil': 'മണൽ ലോമി മണ്ണ്',
                'Black soil': 'കറുത്ത മണ്ണ്',
                'Sandy soil': 'മണൽ മണ്ണ്',
                'Shallow black soil': 'ആഴം കുറഞ്ഞ കറുത്ത മണ്ണ്',
                'Black cotton soil': 'കറുത്ത പരുത്തി മണ്ണ്',
                'Cotton soil': 'പരുത്തി മണ്ണ്',
                'Medium black soil': 'ഇടത്തരം കറുത്ത മണ്ണ്',
                'Heavy black soil': 'കനത്ത കറുത്ത മണ്ണ്',
                'Light soil': 'ഭാരം കുറഞ്ഞ മണ്ണ്',
                'Heavy soil': 'കനത്ത മണ്ണ്',
                'Deep soil': 'ആഴമുള്ള മണ്ണ്',
                'Sandy clay loamy soil': 'മണൽ കളി ലോമി മണ്ണ്',
                'Silty loamy soil': 'എക്കൽ ലോമി മണ്ണ്',
                'Salty clay loamy soil': 'ഉപ്പുള്ള കളി ലോമി മണ്ണ്',
                'Red loamy soil': 'ചുവന്ന ലോമി മണ്ണ്',
                'Brown loamy soil': 'തവിട്ട് ലോമി മണ്ണ്',
                'Laterite soil': 'ലാറ്ററൈറ്റ് മണ്ണ്',
                'Well-drained Loamy soil': 'നന്നായി വറ്റുന്ന ലോമി മണ്ണ്',
                'Light loamy soil': 'ഭാരം കുറഞ്ഞ ലോമി മണ്ണ്',
                'Friable soil': 'പൊടിയുന്ന മണ്ണ്',
                'Well-grained deep loamy moist soil': 'നല്ല ധാന്യമുള്ള ആഴമുള്ള ഈർപ്പമുള്ള മണ്ണ്',
                'Red lateritic loamy soil': 'ചുവന്ന ലാറ്ററൈറ്റ് ലോമി മണ്ണ്',
                'Rich red loamy soil': 'സമ്പന്നമായ ചുവന്ന ലോമി മണ്ണ്'
              },
            crops: {
              'Rice': 'അരി', 'Wheat': 'ഗോതമ്പ്', 'Maize': 'ചോളം', 'Sorghum': 'ചോളം',
              'Pearl millet': 'കമ്പ്', 'Ragi': 'രാഗി', 'Panivaragu': 'പനിവരക്',
              'Samai': 'സാമൈ', 'Thinai': 'തിന', 'Varagu': 'വരക്', 'Kudiraivali': 'കുതിരവാലി',
              'Blackgram': 'ഉഴുന്ന്', 'Greengram': 'ചെറുപയർ', 'Cowpea': 'വൻപയർ',
              'Bengalgram': 'കടല', 'Horsegram': 'മുത്തിര', 'Redgram': 'തുവര',
              'Soyabean': 'സോയാബീൻ', 'Groundnut': 'നിലക്കടല', 'Sunflower': 'സൂര്യകാന്തി',
              'Gingely': 'എള്ള്', 'Castor': 'ആവണക്ക്', 'Cotton': 'പരുത്തി', 'Jute': 'ചണം',
              'Sugarcane': 'കരിമ്പ്', 'Sugarbeet': 'ഷുഗർബീറ്റ്', 'Tomato': 'തക്കാളി',
              'Onion': 'സവാള', 'Chillies': 'മുളക്', 'Cabbage': 'മുട്ടക്കൂസ്',
              'Bhendi': 'വെണ്ട', 'Brinjal': 'വഴുതന', 'Capsicum': 'കാപ്സിക്കം',
              'Pumpkin': 'മത്തങ്ങ', 'Snake gourd': 'പടവലം', 'Ribbed gourd': 'പീച്ചിങ്ങ',
              'Bottle gourd': 'ചുരക്ക', 'Bitter gourd': 'പാവയ്ക്ക', 'Ash gourd': 'കുമ്പളം',
              'Cucumber': 'വെള്ളരി', 'Watermelon': 'തണ്ണിമത്തൻ', 'Muskmelon': 'മത്തൻ',
              'Tinda': 'ടിൻഡ', 'Chowchow': 'ചൗചൗ', 'Cluster bean': 'കൊത്തവര',
              'Vegetable cowpea': 'പയർ', 'French bean': 'ഫ്രഞ്ച് ബീൻ', 'Peas': 'പട്ടാണി',
              'Annual moringa': 'മുരിങ്ങ', 'Carrot': 'കാരറ്റ്', 'Beetroot': 'ബീറ്റ്റൂട്ട്',
              'Radish': 'മുള്ളങ്കി', 'Sweet potato': 'മധുരക്കിഴങ്ങ്', 'Tapoica': 'കപ്പ',
              'Elephant foot yam': 'ചേന', 'Cauliflower': 'കോളിഫ്ലവർ', 'Small onion': 'ചെറിയ ഉള്ളി'
            },
            
            seasons: {
              'Rainy': 'മഴക്കാലം', 'Winter': 'ശൈത്യകാലം', 'Summer': 'വേനൽക്കാലം'
            }
        },
  cropDisease: {
    "aiBadge": "AI രോഗ നിർണയം",
    "title": "വിള രോഗ നിർണയ സംവിധാനം",
    "subtitle": "രോഗങ്ങൾ കണ്ടെത്തുന്നതിനും ചികിത്സാ ശുപാർശകൾ ലഭിക്കുന്നതിനും നിങ്ങളുടെ വിളയുടെ ഇലയുടെ ഫോട്ടോ അപ്ലോഡ് ചെയ്യുക",
    "uploadImage": "ഇലയുടെ ചിത്രം അപ്ലോഡ് ചെയ്യുക",
    "uploadButton": "ഫയൽ അപ്ലോഡ് ചെയ്യുക",
    "dragDrop": "അല്ലെങ്കിൽ ഇവിടെ വലിച്ചിടുക",
    "fileRequirements": "PNG, JPG, GIF (5MB വരെ)",
    "tip": "പ്രോ ടിപ്പ്",
    "tipText": "മികച്ച ഫലങ്ങൾക്കായി, സ്വാഭാവിക വെളിച്ചത്തിൽ ബാധിച്ച ഇലയുടെ വ്യക്തമായ ഫോട്ടോ എടുക്കുക",
    "analyzing": "വിശകലനം ചെയ്യുന്നു...",
    "analyzeButton": "ഇല വിശകലനം ചെയ്യുക",
    "healthyPlant": "ആരോഗ്യമുള്ള സസ്യം",
    "diseaseDetected": "രോഗം കണ്ടെത്തി",
    "confidence": "വിശ്വാസ്യത",
    "treatment": "ചികിത്സ",
    "prevention": "പ്രതിരോധം",
    "healthyTip": "ആരോഗ്യമുള്ളതായി സൂക്ഷിക്കുക",
    "healthyTipText": "നിങ്ങളുടെ നല്ല കാർഷിക രീതികൾ തുടരുക. പതിവ് നിരീക്ഷണവും പ്രതിരോധ പരിചരണവും സസ്യത്തിന്റെ ആരോഗ്യം നിലനിർത്താൻ സഹായിക്കും.",
    "newAnalysis": "പുതിയ വിശകലനം",
    "uploadAnother": "മറ്റൊരു ചിത്രം അപ്ലോഡ് ചെയ്യുക",
    "diseasesCovered": "രോഗ കവറേജ്",
    "diseases": "രോഗങ്ങൾ",
    "cropsSupported": "പിന്തുണയ്ക്കുന്ന വിളകൾ",
    "crops": "വിളകൾ",
    "responseTime": "പ്രതികരണ സമയം",
    "quickAnalysis": "ദ്രുത വിശകലനം",
    "invalidFileType": "ദയവായി സാധുവായ ഒരു ഇമേജ് ഫയൽ അപ്ലോഡ് ചെയ്യുക",
    "fileTooLarge": "ഫയൽ വലുപ്പം 5MB ൽ കുറവായിരിക്കണം",
    "noImageSelected": "ദയവായി ആദ്യം ഒരു ചിത്രം തിരഞ്ഞെടുക്കുക",
    "predictionFailed": "പ്രവചനം പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക",
    "errorPrefix": "ചിത്രം വിശകലനം ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. നിങ്ങളുടെ കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
    "onCrop": "ൽ",

    "diseaseNames": {
      "Corn___Common_Rust": "സാധാരണ തുരുമ്പ്",
      "Corn___Gray_Leaf_Spot": "ചാര ഇല പുള്ളി",
      "Corn___Healthy": "ആരോഗ്യമുള്ള",
      "Corn___Northern_Leaf_Blight": "വടക്കൻ ഇല ചുട്ടുപഴുപ്പ്",
      "Potato___Early_Blight": "ആദ്യകാല ചുട്ടുപഴുപ്പ്",
      "Potato___Healthy": "ആരോഗ്യമുള്ള",
      "Potato___Late_Blight": "വൈകിയുള്ള ചുട്ടുപഴുപ്പ്",
      "Rice___Brown_Spot": "തവിട്ട് പുള്ളി",
      "Rice___Healthy": "ആരോഗ്യമുള്ള",
      "Rice___Leaf_Blast": "ഇല പൊട്ടൽ രോഗം",
      "Rice___Neck_Blast": "കഴുത്ത് പൊട്ടൽ",
      "Wheat___Brown_Rust": "തവിട്ട് തുരുമ്പ്",
      "Wheat___Healthy": "ആരോഗ്യമുള്ള",
      "Wheat___Yellow_Rust": "മഞ്ഞ തുരുമ്പ്",
      "Sugarcane__Red_Rot": "ചുവന്ന ചെംചീയൽ",
      "Sugarcane__Healthy": "ആരോഗ്യമുള്ള",
      "Sugarcane__Bacterial Blight": "ബാക്ടീരിയ ചുട്ടുപഴുപ്പ്",
      "Apple___Apple_scab": "ആപ്പിൾ പൊട്ട്",
      "Apple___Black_rot": "കറുത്ത ചെംചീയൽ",
      "Apple___Cedar_apple_rust": "സീഡർ ആപ്പിൾ തുരുമ്പ്",
      "Apple___healthy": "ആരോഗ്യമുള്ള",
      "Blueberry___healthy": "ആരോഗ്യമുള്ള",
      "Cherry_(including_sour)___Powdery_mildew": "പൊടിപൂപ്പ്",
      "Cherry_(including_sour)___healthy": "ആരോഗ്യമുള്ള",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ചാര ഇല പുള്ളി",
      "Corn_(maize)___Common_rust_": "സാധാരണ തുരുമ്പ്",
      "Corn_(maize)___Northern_Leaf_Blight": "വടക്കൻ ഇല ചുട്ടുപഴുപ്പ്",
      "Corn_(maize)___healthy": "ആരോഗ്യമുള്ള",
      "Grape___Black_rot": "കറുത്ത ചെംചീയൽ",
      "Grape___Esca_(Black_Measles)": "എസ്ക രോഗം",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ഇല ചുട്ടുപഴുപ്പ്",
      "Grape___healthy": "ആരോഗ്യമുള്ള",
      "Orange___Haunglongbing_(Citrus_greening)": "സിട്രസ് പച്ചപ്പിക്കൽ രോഗം",
      "Peach___Bacterial_spot": "ബാക്ടീരിയ പുള്ളി",
      "Peach___healthy": "ആരോഗ്യമുള്ള",
      "Pepper,_bell___Bacterial_spot": "ബാക്ടീരിയ പുള്ളി",
      "Pepper,_bell___healthy": "ആരോഗ്യമുള്ള",
      "Potato___Early_blight": "ആദ്യകാല ചുട്ടുപഴുപ്പ്",
      "Potato___Late_blight": "വൈകിയുള്ള ചുട്ടുപഴുപ്പ്",
      "Potato___healthy": "ആരോഗ്യമുള്ള",
      "Raspberry___healthy": "ആരോഗ്യമുള്ള",
      "Soybean___healthy": "ആരോഗ്യമുള്ള",
      "Squash___Powdery_mildew": "പൊടിപൂപ്പ്",
      "Strawberry___Leaf_scorch": "ഇല കരിയൽ",
      "Strawberry___healthy": "ആരോഗ്യമുള്ള",
      "Tomato___Bacterial_spot": "ബാക്ടീരിയ പുള്ളി",
      "Tomato___Early_blight": "ആദ്യകാല ചുട്ടുപഴുപ്പ്",
      "Tomato___Late_blight": "വൈകിയുള്ള ചുട്ടുപഴുപ്പ്",
      "Tomato___Leaf_Mold": "ഇല പൂപ്പൽ",
      "Tomato___Septoria_leaf_spot": "സെപ്റ്റോറിയ ഇല പുള്ളി",
      "Tomato___Spider_mites Two-spotted_spider_mite": "ചിലന്തി കാശ്",
      "Tomato___Target_Spot": "ലക്ഷ്യ പുള്ളി",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "മഞ്ഞ ഇല ചുരുൾ വൈറസ്",
      "Tomato___Tomato_mosaic_virus": "മൊസൈക് വൈറസ്",
      "Tomato___healthy": "ആരോഗ്യമുള്ള"
    },

    "treatments": {
      "Corn___Common_Rust": "കുമിൾനാശിനി പ്രയോഗിക്കുകയും ബാധിച്ച ഇലകൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Corn___Gray_Leaf_Spot": "ഇല കുമിൾനാശിനികൾ ഉപയോഗിക്കുക.",
      "Corn___Healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Corn___Northern_Leaf_Blight": "ആദ്യ ഘട്ടങ്ങളിൽ കുമിൾനാശിനി തളിക്കുക.",
      "Potato___Early_Blight": "ചെമ്പ് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Potato___Healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Potato___Late_Blight": "ഉടൻ തന്നെ കുമിൾനാശിനികൾ ഉപയോഗിക്കുക.",
      "Rice___Brown_Spot": "പൊട്ടാസ്യം വളവും കുമിൾനാശിനിയും പ്രയോഗിക്കുക.",
      "Rice___Healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Rice___Leaf_Blast": "ബ്ലാസ്റ്റ് പ്രതിരോധശേഷിയുള്ള വിത്തുകളും കുമിൾനാശിനിയും ഉപയോഗിക്കുക.",
      "Rice___Neck_Blast": "ട്രൈസൈക്ലാസോൾ കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Wheat___Brown_Rust": "തുരുമ്പ് കുമിൾനാശിനികൾ പ്രയോഗിക്കുക.",
      "Wheat___Healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Wheat___Yellow_Rust": "നേരത്തെ കുമിൾനാശിനി തളിക്കുക.",
      "Sugarcane__Red_Rot": "ബാധിച്ച കരിമ്പുകൾ നീക്കം ചെയ്ത് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Sugarcane__Healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Sugarcane__Bacterial Blight": "ബാക്ടീരിയ നാശിനി തളിക്കുക.",
      "Apple___Apple_scab": "പതിവായി കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Apple___Black_rot": "ബാധിച്ച പഴങ്ങളും ശാഖകളും നീക്കം ചെയ്യുക.",
      "Apple___Cedar_apple_rust": "ഗന്ധക കുമിൾനാശിനി ഉപയോഗിക്കുക.",
      "Apple___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Blueberry___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Cherry_(including_sour)___Powdery_mildew": "ഗന്ധക അടിസ്ഥാനമാക്കിയുള്ള കുമിൾനാശിനി തളിക്കുക.",
      "Cherry_(including_sour)___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ഇല കുമിൾനാശിനികൾ ഉപയോഗിക്കുക.",
      "Corn_(maize)___Common_rust_": "കുമിൾനാശിനി പ്രയോഗിക്കുകയും ബാധിച്ച ഇലകൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Corn_(maize)___Northern_Leaf_Blight": "ആദ്യ ഘട്ടങ്ങളിൽ കുമിൾനാശിനി തളിക്കുക.",
      "Corn_(maize)___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Grape___Black_rot": "കുമിൾനാശിനി ഉപയോഗിക്കുകയും ബാധിച്ച മുന്തിരിപ്പഴങ്ങൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Grape___Esca_(Black_Measles)": "ബാധിച്ച തടി നീക്കം ചെയ്യുക.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ചെമ്പ് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Grape___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Orange___Haunglongbing_(Citrus_greening)": "പൂർണ്ണ ചികിത്സയില്ല. ബാധിച്ച മരങ്ങൾ നീക്കം ചെയ്യുക.",
      "Peach___Bacterial_spot": "ചെമ്പ് സ്പ്രേ ഉപയോഗിക്കുക.",
      "Peach___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Pepper,_bell___Bacterial_spot": "ചെമ്പ് അടിസ്ഥാനമാക്കിയുള്ള ബാക്ടീരിയ നാശിനി ഉപയോഗിക്കുക.",
      "Pepper,_bell___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Potato___Early_blight": "ചെമ്പ് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Potato___Late_blight": "ഉടൻ തന്നെ കുമിൾനാശിനികൾ ഉപയോഗിക്കുക.",
      "Potato___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Raspberry___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Soybean___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Squash___Powdery_mildew": "ഗന്ധകമോ വേപ്പെണ്ണയോ പ്രയോഗിക്കുക.",
      "Strawberry___Leaf_scorch": "ബാധിച്ച ഇലകൾ നീക്കം ചെയ്ത് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Strawberry___healthy": "ചികിത്സ ആവശ്യമില്ല.",
      "Tomato___Bacterial_spot": "ചെമ്പ് അടിസ്ഥാനമാക്കിയുള്ള ബാക്ടീരിയ നാശിനി ഉപയോഗിക്കുക.",
      "Tomato___Early_blight": "കുമിൾനാശിനി പ്രയോഗിക്കുകയും ബാധിച്ച ഇലകൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Tomato___Late_blight": "ഉടൻ തന്നെ കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Tomato___Leaf_Mold": "വായു സഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ഈർപ്പം കുറയ്ക്കുകയും ചെയ്യുക.",
      "Tomato___Septoria_leaf_spot": "ബാധിച്ച ഇലകൾ നീക്കം ചെയ്ത് കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "മൈറ്റിസൈഡ് അല്ലെങ്കിൽ വേപ്പെണ്ണ ഉപയോഗിക്കുക.",
      "Tomato___Target_Spot": "കുമിൾനാശിനി പ്രയോഗിക്കുക.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "ബാധിച്ച ചെടികൾ നീക്കം ചെയ്യുക. ചികിത്സയില്ല.",
      "Tomato___Tomato_mosaic_virus": "ബാധിച്ച ചെടികൾ ഉടൻ നീക്കം ചെയ്യുക. ഉപകരണങ്ങൾ അണുവിമുക്തമാക്കുക.",
      "Tomato___healthy": "ചികിത്സ ആവശ്യമില്ല."
    },

    "preventions": {
      "Corn___Common_Rust": "പ്രതിരോധശേഷിയുള്ള ഇനങ്ങൾ ഉപയോഗിക്കുകയും തിങ്ങിപ്പാർപ്പ് ഒഴിവാക്കുകയും ചെയ്യുക.",
      "Corn___Gray_Leaf_Spot": "വിളകൾ മാറ്റി കൃഷി ചെയ്യുകയും വിള അവശിഷ്ടങ്ങൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Corn___Healthy": "ശരിയായ ജലസേചനവും പോഷകങ്ങളും നിലനിർത്തുക.",
      "Corn___Northern_Leaf_Blight": "പ്രതിരോധശേഷിയുള്ള ഹൈബ്രിഡുകളും വിള മാറ്റികൃഷിയും ഉപയോഗിക്കുക.",
      "Potato___Early_Blight": "മേൽജലസേചനം ഒഴിവാക്കുകയും വിളകൾ മാറ്റി കൃഷി ചെയ്യുകയും ചെയ്യുക.",
      "Potato___Healthy": "സമതുലിതമായ വളങ്ങളും ജലസേചനവും ഉപയോഗിക്കുക.",
      "Potato___Late_Blight": "ഇലകൾ ഉണങ്ങിയ നിലയിൽ സൂക്ഷിക്കുകയും വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ചെയ്യുക.",
      "Rice___Brown_Spot": "പോഷകക്കുറവ് ഒഴിവാക്കുക.",
      "Rice___Healthy": "വെള്ളവും പോഷകങ്ങളും ശരിയായി നിലനിർത്തുക.",
      "Rice___Leaf_Blast": "അമിതമായ നൈട്രജൻ വളം ഒഴിവാക്കുക.",
      "Rice___Neck_Blast": "ശരിയായ അകലവും ജലസേചനവും നിലനിർത്തുക.",
      "Wheat___Brown_Rust": "പ്രതിരോധശേഷിയുള്ള ഗോതമ്പ് ഇനങ്ങൾ ഉപയോഗിക്കുക.",
      "Wheat___Healthy": "ശരിയായ വയൽ മാനേജ്മെന്റ് ഉപയോഗിക്കുക.",
      "Wheat___Yellow_Rust": "പ്രതിരോധശേഷിയുള്ള ഇനങ്ങൾ വളർത്തുക.",
      "Sugarcane__Red_Rot": "രോഗമുക്തമായ നടീൽ വസ്തുക്കൾ ഉപയോഗിക്കുക.",
      "Sugarcane__Healthy": "മണ്ണിന്റെ ഫലഭൂയിഷ്ഠത നിലനിർത്തുക.",
      "Sugarcane__Bacterial Blight": "വെള്ളക്കെട്ടും ബാധിച്ച വിത്തുകളും ഒഴിവാക്കുക.",
      "Apple___Apple_scab": "വീണ ഇലകൾ നീക്കം ചെയ്ത് മരങ്ങൾ അരിവാൾ ചെയ്യുക.",
      "Apple___Black_rot": "തോട്ടത്തിന്റെ ശുചിത്വം നിലനിർത്തുക.",
      "Apple___Cedar_apple_rust": "സമീപത്തുള്ള ദേവദാരു മരങ്ങൾ നീക്കം ചെയ്യുക.",
      "Apple___healthy": "ശരിയായ തോട്ട പരിചരണം നിലനിർത്തുക.",
      "Blueberry___healthy": "ശരിയായ മണ്ണിന്റെ അസിഡിറ്റിയും ജലസേചനവും ഉറപ്പാക്കുക.",
      "Cherry_(including_sour)___Powdery_mildew": "വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ഈർപ്പം ഒഴിവാക്കുകയും ചെയ്യുക.",
      "Cherry_(including_sour)___healthy": "പതിവായി അരിവാൾ ചെയ്യുകയും ശരിയായി ജലസേചനം നടത്തുകയും ചെയ്യുക.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "വിളകൾ മാറ്റി കൃഷി ചെയ്യുകയും അവശിഷ്ടങ്ങൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Corn_(maize)___Common_rust_": "പ്രതിരോധശേഷിയുള്ള ഇനങ്ങൾ ഉപയോഗിക്കുക.",
      "Corn_(maize)___Northern_Leaf_Blight": "പ്രതിരോധശേഷിയുള്ള ഹൈബ്രിഡുകൾ ഉപയോഗിക്കുക.",
      "Corn_(maize)___healthy": "ശരിയായ ജലസേചനവും പോഷകങ്ങളും നിലനിർത്തുക.",
      "Grape___Black_rot": "വായുസഞ്ചാരത്തിനായി മുന്തിരിവള്ളികൾ അരിവാൾ ചെയ്യുക.",
      "Grape___Esca_(Black_Measles)": "നനഞ്ഞ കാലാവസ്ഥയിൽ അരിവാൾ മുറിവുകൾ ഒഴിവാക്കുക.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "മുന്തിരിത്തോട്ടത്തിന്റെ ശുചിത്വം മെച്ചപ്പെടുത്തുക.",
      "Grape___healthy": "സമതുലിതമായ പോഷകാഹാരം നിലനിർത്തുക.",
      "Orange___Haunglongbing_(Citrus_greening)": "സൈലിഡ് പ്രാണികളെ നിയന്ത്രിക്കുക. രോഗമുക്തമായ ചെടികൾ ഉപയോഗിക്കുക.",
      "Peach___Bacterial_spot": "പ്രതിരോധശേഷിയുള്ള ഇനങ്ങൾ ഉപയോഗിക്കുക.",
      "Peach___healthy": "ശരിയായ അരിവാൾ നിലനിർത്തുക.",
      "Pepper,_bell___Bacterial_spot": "നനഞ്ഞ ഇലകൾ ഒഴിവാക്കുകയും ശുദ്ധമായ വിത്തുകൾ ഉപയോഗിക്കുകയും ചെയ്യുക.",
      "Pepper,_bell___healthy": "ശരിയായ ജലസേചന രീതികൾ ഉപയോഗിക്കുക.",
      "Potato___Early_blight": "മേൽജലസേചനം ഒഴിവാക്കുകയും വിളകൾ മാറ്റി കൃഷി ചെയ്യുകയും ചെയ്യുക.",
      "Potato___Late_blight": "ഇലകൾ ഉണങ്ങിയ നിലയിൽ സൂക്ഷിക്കുകയും വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ചെയ്യുക.",
      "Potato___healthy": "സമതുലിതമായ വളങ്ങളും ജലസേചനവും ഉപയോഗിക്കുക.",
      "Raspberry___healthy": "ശരിയായ അകലവും അരിവാളും നിലനിർത്തുക.",
      "Soybean___healthy": "വിളകൾ മാറ്റി കൃഷി ചെയ്യുക.",
      "Squash___Powdery_mildew": "നല്ല വായു സഞ്ചാരം ഉറപ്പാക്കുക.",
      "Strawberry___Leaf_scorch": "ചെടികളുടെ ചുവട്ടിൽ വെള്ളം നൽകുക, മേൽജലസേചനം ഒഴിവാക്കുക.",
      "Strawberry___healthy": "ശരിയായ അകലം പാലിക്കുകയും കളകൾ നീക്കം ചെയ്യുകയും ചെയ്യുക.",
      "Tomato___Bacterial_spot": "രോഗമുക്തമായ വിത്തുകൾ ഉപയോഗിക്കുക. മേൽജലസേചനം ഒഴിവാക്കുക.",
      "Tomato___Early_blight": "വിളകൾ മാറ്റി കൃഷി ചെയ്യുകയും പുതയിടൽ ഉപയോഗിക്കുകയും ചെയ്യുക.",
      "Tomato___Late_blight": "ഇലകൾ ഉണങ്ങിയ നിലയിൽ സൂക്ഷിക്കുകയും വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ചെയ്യുക.",
      "Tomato___Leaf_Mold": "ഈർപ്പം കുറയ്ക്കുകയും വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുകയും ചെയ്യുക.",
      "Tomato___Septoria_leaf_spot": "മേൽജലസേചനം ഒഴിവാക്കുക. താഴത്തെ ഇലകൾ നീക്കം ചെയ്യുക.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "ശരിയായ ഈർപ്പം നിലനിർത്തുക. ഗുണം ചെയ്യുന്ന പ്രാണികളെ അവതരിപ്പിക്കുക.",
      "Tomato___Target_Spot": "ശരിയായ അകലം ഉറപ്പാക്കുകയും മേൽജലസേചനം ഒഴിവാക്കുകയും ചെയ്യുക.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "മഞ്ഞ പശ കെണികൾ ഉപയോഗിച്ച് വെള്ളീച്ചകളെ നിയന്ത്രിക്കുക.",
      "Tomato___Tomato_mosaic_virus": "തോട്ടക്കല്ലുപകരണങ്ങൾ അണുവിമുക്തമാക്കുക. വൈറസ് രഹിത വിത്തുകൾ ഉപയോഗിക്കുക.",
      "Tomato___healthy": "സമതുലിതമായ വളപ്രയോഗവും ശരിയായ ജലസേചനവും നിലനിർത്തുക."
    }
  }, 
  virtualfarm: {
    header: {
      badge: "🌾 3ഡി ഫാം വിഷ്വലൈസേഷൻ",
      title: "വെർച്വൽ ഫാം അനുഭവം",
      subtitle: "തത്സമയ സീസണൽ മാറ്റങ്ങളും കാലാവസ്ഥാ പ്രഭാവങ്ങളും ഉപയോഗിച്ച് 3ഡിയിൽ നിങ്ങളുടെ ഫാം പര്യവേക്ഷണം ചെയ്യുക"
    },
    seasonController: {
      title: "സീസൺ കൺട്രോളർ",
      summer: "വേനൽ",
      monsoon: "മൺസൂൺ",
      winter: "ശീതകാലം",
      autumn: "ശരത്കാലം"
    },
    seasonDescriptions: {
      summer: "സുവർണ്ണ സൂര്യപ്രകാശം - സസ്യങ്ങൾ തിളക്കമുള്ള പച്ച നിറങ്ങളിൽ തഴച്ചുവളരുന്നു.",
      monsoon: "കനത്ത മഴ - ആഴത്തിലുള്ള പച്ച ഇലകളോടെ പുതിയ വളർച്ച.",
      winter: "തണുപ്പും മഞ്ഞും - സസ്യങ്ങൾ എവർഗ്രീൻ ശീതകാല ടോണുകൾ കാണിക്കുന്നു.",
      autumn: "വിളവെടുപ്പ് കാലം - സസ്യങ്ങൾ ശരത്കാല നിറങ്ങളാൽ രൂപാന്തരപ്പെടുന്നു!"
    },
    climate: {
      temp: "താപനില",
      humidity: "ഈർപ്പം"
    },
    weather: {
      sunny: "☀️ സണ്ണി",
      rainy: "🌧️ മഴ",
      snowy: "❄️ ഹിമം"
    },
    stats: {
      totalPlants: "ആകെ സസ്യങ്ങൾ",
      plants: "സസ്യങ്ങൾ",
      farmArea: "ഫാം ഏരിയ",
      meters: "മീറ്ററുകൾ",
      currentSeason: "നിലവിലെ സീസൺ",
      performance: "പെർഫോമൻസ്",
      fpsTarget: "എഫ്പിഎസ് ലക്ഷ്യം"
    },
    loading: {
      model: "3ഡി മോഡൽ ലോഡുചെയ്യുന്നു...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "സീസൺ മാറ്റുക",
      resetView: "കാഴ്ച പുനഃസജ്ജമാക്കുക",
      toggleInfo: "വിവരങ്ങൾ മാറ്റുക"
    },
    messages: {
      seasonChanged: "സീസൺ {{season}} ലേക്ക് മാറ്റി",
      weatherUpdated: "കാലാവസ്ഥ അപ്ഡേറ്റ് ചെയ്തു",
      farmReady: "ഫാം പര്യവേക്ഷണത്തിന് തയ്യാറാണ്"
    },
    tooltips: {
      rotate: "കാഴ്ച തിരിക്കുക",
      zoom: "സൂം ഇൻ/ഔട്ട്",
      pan: "ഫാമിന് കുറുകെ പാൻ ചെയ്യുക"
    }
  },
  cropRotation: {
  header: {
    badge: "AI-പവർ ചെയ്ത വിള ഭ്രമണ ആസൂത്രകൻ",
    title: "വിള ഭ്രമണ സമ്പ്രദായം",
    subtitle: "പരമാവധി വിളവും മണ്ണിന്റെ ആരോഗ്യവും ഉറപ്പാക്കാൻ നിങ്ങളുടെ വിള ഭ്രമണം ആസൂത്രണം ചെയ്യുക"
  },
  popularCrops: "ജനപ്രിയ വിളകൾ",
  form: {
    selectCrop: "വിള തിരഞ്ഞെടുക്കുക",
    chooseCrop: "ഒരു വിള തിരഞ്ഞെടുക്കുക",
    numSeasons: "സീസണുകളുടെ എണ്ണം"
  },
  seasons: {
    one: "1 സീസൺ",
    two: "2 സീസണുകൾ",
    three: "3 സീസണുകൾ (1 വർഷം)",
    four: "4 സീസണുകൾ",
    six: "6 സീസണുകൾ (2 വർഷം)"
  },
  buttons: {
    planning: "ആസൂത്രണം ചെയ്യുന്നു...",
    generate: "വിള ഭ്രമണ പദ്ധതി രൂപപ്പെടുത്തുക"
  },
  errors: {
    selectCrop: "ദയവായി ഒരു വിള തിരഞ്ഞെടുക്കുക",
    requestFailed: "വിള ഭ്രമണ പദ്ധതി ലഭിക്കുന്നതിൽ പരാജയപ്പെട്ടു"
  },
  result: {
    title: "വിള ഭ്രമണ പദ്ധതി",
    currentCrop: "നിലവിലെ വിള",
    phase: "ഘട്ടം",
    best: "മികച്ചത്",
    bestChoice: "മികച്ച തിരഞ്ഞെടുപ്പ്"
  },
  phases: {
    kharif: "ഖരീഫ്",
    rabi: "റാബി",
    summer: "വേനൽ",
    winter: "ശീതകാലം",
    autumn: "ശരത്കാലം",
    annual: "വാർഷിക"
  },
  benefits: {
    title: "ഗുണങ്ങൾ",
    soilHealth: {
      title: "മണ്ണിന്റെ ആരോഗ്യം",
      desc: "പോഷക ക്ഷയം തടയുന്നു"
    },
    pestControl: {
      title: "കീട നിയന്ത്രണം",
      desc: "രോഗ ചക്രങ്ങൾ തകർക്കുന്നു"
    },
    waterEfficiency: {
      title: "ജല കാര്യക്ഷമത",
      desc: "ഉപയോഗം ഒപ്റ്റിമൈസ് ചെയ്യുന്നു"
    },
    higherYields: {
      title: "ഉയർന്ന വിളവ്",
      desc: "ഉൽപ്പാദനക്ഷമത വർദ്ധിപ്പിക്കുന്നു"
    }
  },
  howItWorks: {
    title: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    selectCrop: {
      title: "വിള തിരഞ്ഞെടുക്കുക",
      desc: "50+ വിളകളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക"
    },
    aiAnalysis: {
      title: "AI വിശകലനം",
      desc: "ചരിത്ര ഡാറ്റ വിശകലനം ചെയ്യുന്നു"
    },
    viewCycle: {
      title: "ചക്രം കാണുക",
      desc: "ഭ്രമണ പദ്ധതി കാണുക"
    }
  },
  crops: {
    "Rice": "അരി",
    "Wheat": "ഗോതമ്പ്",
    "Maize": "ചോളം",
    "Sugarcane": "കരിമ്പ്",
    "Cotton": "പരുത്തി",
    "Potato": "ഉരുളക്കിഴങ്ങ്",
    "Turmeric": "മഞ്ഞൾ",
    "Banana": "വാഴ",
    "Groundnut": "നിലക്കടല",
    "Onion": "സവാള",
    "Arecanut": "അടക്ക",
    "Arhar/Tur": "തുവര",
    "Black pepper": "കുരുമുളക്",
    "Cashewnut": "കശുവണ്ടി",
    "Coconut": "തെങ്ങ്",
    "Cowpea(Lobia)": "വൻ പയർ",
    "Dry chillies": "ഉണക്ക മുളക്",
    "Ginger": "ഇഞ്ചി",
    "Moong(Green Gram)": "ചെറുപയർ",
    "Oilseeds total": "എണ്ണ വിത്തുകൾ",
    "Other Kharif pulses": "മറ്റ് ഖരീഫ് പയറുകൾ",
    "Other oilseeds": "മറ്റ് എണ്ണ വിത്തുകൾ",
    "Rapeseed & Mustard": "കടുക്",
    "Sesamum": "എള്ള്",
    "Sunflower": "സൂര്യകാന്തി",
    "Sweet potato": "മധുരക്കിഴങ്ങ്",
    "Tapioca": "കപ്പ",
    "Urad": "ഉഴുന്ന്",
    "Bajra": "കമ്പ്",
    "Castor seed": "ആവണക്ക്",
    "Coriander": "മല്ലി",
    "Garlic": "വെളുത്തുള്ളി",
    "Gram": "കടല",
    "Guar seed": "ഗോര് ചിക്കുഡു",
    "Horse-gram": "മുതിര",
    "Jowar": "ചോളം",
    "Linseed": "ചണവിത്ത്",
    "Masoor": "മസൂർ",
    "Mesta": "മെസ്റ്റ",
    "Niger seed": "നൈജർ വിത്ത്",
    "Other Rabi pulses": "മറ്റ് റാബി പയറുകൾ",
    "Ragi": "രാഗി",
    "Safflower": "കുസും",
    "Sannhamp": "സന്ന്",
    "Small millets": "ചെറു ധാന്യങ്ങൾ",
    "Soyabean": "സോയാബീൻ",
    "Tobacco": "പുകയില",
    "Peas & beans (Pulses)": "പയറും ബീൻസും",
    "Jute": "ചണം",
    "Barley": "ബാർലി",
    "Khesari": "ഖേസാരി",
    "Moth": "മോത്ത്",
    "Cardamom": "ഏലക്ക"
  }
},

    weather: {
      badge: "🌤️ നിങ്ങളുടെ സ്ഥലത്തെ അടിസ്ഥാനമാക്കിയുള്ള കാലാവസ്ഥാ വിശകലനം",
      title: "സ്ഥല കാലാവസ്ഥാ വിശകലനം",
      subtitle: "തത്സമയ കാലാവസ്ഥാ ഡാറ്റ വിശകലനം",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 എന്റെ സ്ഥലം",
      refresh: "പുതുക്കുക",
      searchPlaceholder: "നഗരത്തിന്റെ പേര് നൽകുക...",
      search: "തിരയുക",
      currentLocation: "നിലവിലെ സ്ഥലം",
      updated: "അപ്ഡേറ്റ് ചെയ്തത്",
      fetchingWeather: "കാലാവസ്ഥാ ഡാറ്റ ശേഖരിക്കുന്നു...",
      unableToGetLocation: "നിങ്ങളുടെ സ്ഥലം കണ്ടെത്താൻ കഴിയുന്നില്ല. ലൊക്കേഷൻ സേവനങ്ങൾ ഓണാക്കുക.",
      geolocationNotSupported: "നിങ്ങളുടെ ബ്രൗസർ ജിയോലൊക്കേഷൻ പിന്തുണയ്ക്കുന്നില്ല",
      invalidCoordinates: "അസാധുവായ കോർഡിനേറ്റുകൾ. വീണ്ടും ശ്രമിക്കുക.",
      cityNotFound: "നഗരം കണ്ടെത്തിയില്ല. നഗരത്തിന്റെ പേര് പരിശോധിക്കുക.",
      requestTimeout: "അഭ്യർത്ഥന സമയം കഴിഞ്ഞു. വീണ്ടും ശ്രമിക്കുക.",
      currentWeather: "നിലവിലെ കാലാവസ്ഥ",
      fiveDayForecast: "5 ദിവസത്തെ പ്രവചനം",
      feelsLike: "അനുഭവപ്പെടുന്ന താപനില",
      humidity: "ഈർപ്പം",
      windSpeed: "കാറ്റിന്റെ വേഗത",
      pressure: "മർദ്ദം",
      cloudCover: "മേഘാവൃതം",
      sunrise: "സൂര്യോദയം",
      sunset: "സൂര്യാസ്തമയം",
      rain: "മഴ (1 മണിക്കൂർ)",
      snow: "ഹിമപാതം (1 മണിക്കൂർ)",
      airQuality: "വായു ഗുണമേന്മ സൂചിക",
      airQuality1: "നല്ലത് - ഔട്ട്ഡോർ പ്രവർത്തനങ്ങൾക്ക് അനുയോജ്യം",
      airQuality2: "മിതമായത് - സ്വീകാര്യമായ വായു ഗുണമേന്മ",
      airQuality3: "ഇടത്തരം - സെൻസിറ്റീവ് ആളുകൾ ഔട്ട്ഡോർ സമയം പരിമിതപ്പെടുത്തുക",
      airQuality4: "മോശം - ഔട്ട്ഡോർ പ്രവർത്തനങ്ങൾ പരിമിതപ്പെടുത്തുക",
      airQuality5: "വളരെ മോശം - വീടിനുള്ളിൽ തുടരുക",
      forecastTitle: "5 ദിവസത്തെ കാലാവസ്ഥാ പ്രവചനം",
      high: "ഉയർന്ന",
      low: "താഴ്ന്ന",
      tempCard: "താപനില",
      tempDesc: "തത്സമയ ഡാറ്റ",
      humidityCard: "ഈർപ്പം",
      humidityDesc: "കൃത്യമായ അളവ്",
      windCard: "കാറ്റിന്റെ വേഗത",
      windDesc: "കൃത്യമായ റീഡിംഗുകൾ",
      coverageCard: "പരിധി",
      coverageDesc: "ലോകവ്യാപകം"
    }
    }
  },
  te: {
    translation: {
      nav: {
    home: "హోమ్",
    features: "లక్షణాలు",
    cropRecommendation: "పంట సిఫార్సు",
    cropRecommendationDesc: "నేల మరియు వాతావరణం ఆధారంగా AI-ఆధారిత పంట సూచనలు",
    diseasePrediction: "వ్యాధి అంచనా",
    diseasePredictionDesc: "AI ఉపయోగించి ఆకు చిత్రాల నుండి వ్యాధులను గుర్తించండి",
    farmVisualization: "ఫార్మ్ విజువలైజేషన్",
    farmVisualizationDesc: "పంటలు, నీటిపారుదల మరియు కాలానుగుణ అంతర్దృష్టులతో ఇంటరాక్టివ్ 3D ఫార్మ్ దృశ్యీకరణ",
    cropRotation: "పంట మార్పిడి",
    cropRotationDesc: "గరిష్ట దిగుబడి కోసం పంట మార్పిడిని ప్లాన్ చేయండి",
    language: "భాష",
    toggleTheme: "థీమ్ మార్చు",
    toggleMenu: "మెను మార్చు"
  },
    // Add this to your existing te.js
home: {
  hero: {
    badge: "🇮🇳 AI-ఆధారిత వ్యవసాయం",
    title: "తెలివైన వ్యవసాయ పరిష్కారాలు",
    highlight: "భారతీయ రైతుల కోసం",
    subtitle: "తెలివైన నిర్ణయాలు మరియు మంచి పంటల కోసం మీ AI వ్యవసాయ సహాయకుడు",
    imageAlt: "డ్రోన్తో స్మార్ట్ వ్యవసాయం",
    aiBadge: "AI విశ్లేషణ"
  },
  benefits: {
    free: {
      title: "ఉపయోగించడానికి ఉచితం",
      desc: "దాచిన ఖర్చులు లేవు"
    },
    languages: {
      title: "6 భాషలు",
      desc: "తమిళం, హిందీ & మరిన్ని"
    },
    noSignup: {
      title: "సైన్ అప్ అవసరం లేదు",
      desc: "తక్షణ ప్రాప్యత"
    },
    access: {
      title: "24/7 ప్రాప్యత",
      desc: "ఎప్పుడైనా, ఎక్కడైనా"
    }
  },
  carousel: {
    title: "పంటలను అన్వేషించండి",
    subtitle: "AI-ఆధారిత అంతర్దృష్టులు మరియు సిఫార్సులతో మా విస్తృతమైన పంటల సేకరణను అన్వేషించండి"
  },
  howItWorks: {
    title: "ఇది ఎలా పనిచేస్తుంది",
    subtitle: "మీ వేళ్ల కొనల వద్ద డేటా ఆధారిత వ్యవసాయ మేధస్సు",
    step1: {
      title: "పంట వివరాలను నమోదు చేయండి",
      desc: "మీ నేల పారామితులు, స్థానం మరియు పంట ప్రాధాన్యతలను ఇన్పుట్ చేయండి",
      alt: "పంట వివరాలను నమోదు చేయండి చిహ్నం"
    },
    step2: {
      title: "AI ప్రాసెసింగ్",
      desc: "మా AI మీ డేటాను విశ్లేషిస్తుంది మరియు వ్యక్తిగతీకరించిన సిఫార్సులను రూపొందిస్తుంది",
      alt: "AI ప్రాసెసింగ్ చిహ్నం"
    },
    step3: {
      title: "అంతర్దృష్టులను పొందండి",
      desc: "తక్షణ పంట అంచనాలు, వ్యాధి హెచ్చరికలు మరియు ఎరువుల సలహాలను స్వీకరించండి",
      alt: "అంతర్దృష్టులను పొందండి చిహ్నం"
    }
  },
  features: {
    badge: "స్మార్ట్ ఫీచర్లు",
    heading: "AI-ఆధారిత వ్యవసాయ పరిష్కారాలు",
    subheading: "ప్రతి వ్యవసాయ అవసరం కోసం డేటా ఆధారిత మేధస్సు",
    cropRecommendationDesc: "మెషిన్ లెర్నింగ్ అల్గోరిథంలు నేల పోషకాలు, ఉష్ణోగ్రత, తేమ మరియు వర్షపాతాన్ని విశ్లేషించి అత్యంత లాభదాయకమైన పంటలను సిఫార్సు చేస్తాయి.",
    diseasePredictionDesc: "తక్షణ వ్యాధి గుర్తింపు కోసం ఆకు చిత్రాలను అప్లోడ్ చేయండి. CNN ఉపయోగించి చికిత్స సూచనలు మరియు నివారణ చిట్కాలను పొందండి.",
    farmVisualizationDesc: "మంచి ప్రణాళిక కోసం పంటలు, నీటిపారుదల మరియు కాలానుగుణ అంతర్దృష్టులతో ఇంటరాక్టివ్ 3D ఫార్మ్ విజువలైజేషన్.",
    cropRotationDesc: "AI-ఆధారిత సిఫార్సులతో గరిష్ట దిగుబడి మరియు నేల ఆరోగ్యం కోసం పంట మార్పిడిని ప్లాన్ చేయండి."
  },
},
crops: {
  grape: "ద్రాక్ష",
  peach: "పీచ్",
  bellPepper: "బెల్ పెప్పర్",
  strawberry: "స్ట్రాబెర్రీ",
  tea: "టీ",
  tomato: "టమోటా",
  potato: "బంగాళాదుంప",
  corn: "మొక్కజొన్న",
  apple: "ఆపిల్",
  bean: "బీన్",
  cherry: "చెర్రీ"
},
carousel: {
  scrollingText: "నిరంతరం స్క్రోలింగ్ • పాజ్ చేయడానికి హోవర్ చేయండి"
}  ,
      footer: {
        description: 'భారతీయ రైతులను వారి స్వంత భాషలో AI సాంకేతికతతో శక్తివంతం చేయడం.',
        features: 'ఫీచర్లు',
        schemes: 'పథకాలు',
        contact: 'సంప్రదించండి',
        rights: 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
        made: 'భారతీయ రైతుల కోసం ❤️ తో తయారు చేయబడింది'
      },
      cropRecommendation: {
        title: 'పంట సిఫార్సు వ్యవస్థ',
        subtitle: 'ఉత్తమ పంటను కనుగొనడానికి మీ నేల మరియు సీజన్ వివరాలను నమోదు చేయండి',
        aiBadge: '🌱 AI-ఆధారిత సిఫార్సు',
        soilType: 'నేల రకం',
        season: 'సీజన్',
        temperature: 'ఉష్ణోగ్రత (°C)',
        humidity: 'తేమ (%)',
        selectSoil: 'నేల రకాన్ని ఎంచుకోండి',
        selectSeason: 'సీజన్ ఎంచుకోండి',
        predictButton: 'ఉత్తమ పంటను అంచనా వేయండి',
        predicting: 'అంచనా వేస్తోంది...',
        errorPrefix: 'అంచనా పొందడం విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
        optimalTemp: '15-45°C సరైనది',
        optimalHumidity: '40-80% సరైనది',
        soilCount: '29 నేల రకాలు',
        recommendedCrop: 'సిఫార్సు చేయబడిన పంట',
        basedOn: 'మీ',
        soilCondition: 'నేల మరియు',
        seasonCondition: 'సీజన్ పరిస్థితుల ఆధారంగా, పెంచడానికి సిఫార్సు చేస్తున్నాము',
        soilTypes: {
            'Alluvial soil': 'మట్టి నేల',
            'Loamy soil': 'లోమీ నేల',
            'Clay soil': 'బంకమట్టి నేల',
            'Well-drained soil': 'బాగా ఎండిపోయే నేల',
            'Red soil': 'ఎర్ర నేల',
            'Clay loamy soil': 'బంకమట్టి లోమీ నేల',
            'Sandy loamy soil': 'ఇసుక లోమీ నేల',
            'Black soil': 'నల్ల నేల',
            'Sandy soil': 'ఇసుక నేల',
            'Shallow black soil': 'నిస్సార నల్ల నేల',
            'Black cotton soil': 'నల్ల ప్రత్తి నేల',
            'Cotton soil': 'ప్రత్తి నేల',
            'Medium black soil': 'మధ్యస్థ నల్ల నేల',
            'Heavy black soil': 'భారీ నల్ల నేల',
            'Light soil': 'తేలికపాటి నేల',
            'Heavy soil': 'భారీ నేల',
            'Deep soil': 'లోతైన నేల',
            'Sandy clay loamy soil': 'ఇసుక బంకమట్టి లోమీ నేల',
            'Silty loamy soil': 'అవక్షేప లోమీ నేల',
            'Salty clay loamy soil': 'ఉప్పు బంకమట్టి లోమీ నేల',
            'Red loamy soil': 'ఎర్ర లోమీ నేల',
            'Brown loamy soil': 'గోధుమ లోమీ నేల',
            'Laterite soil': 'లేటరైట్ నేల',
            'Well-drained Loamy soil': 'బాగా ఎండిపోయే లోమీ నేల',
            'Light loamy soil': 'తేలికపాటి లోమీ నేల',
            'Friable soil': 'విరిగిపోయే నేల',
            'Well-grained deep loamy moist soil': 'మంచి కణాల లోతైన తేమ నేల',
            'Red lateritic loamy soil': 'ఎర్ర లేటరైట్ లోమీ నేల',
            'Rich red loamy soil': 'సారవంతమైన ఎర్ర లోమీ నేల'
          },
        crops: {
          'Rice': 'వరి', 'Wheat': 'గోధుమ', 'Maize': 'మొక్కజొన్న', 'Sorghum': 'జొన్న',
          'Pearl millet': 'సజ్జలు', 'Ragi': 'రాగి', 'Panivaragu': 'పనివరగు',
          'Samai': 'సామై', 'Thinai': 'తిన', 'Varagu': 'వరగు', 'Kudiraivali': 'కుదిరవాలి',
          'Blackgram': 'మినుములు', 'Greengram': 'పెసలు', 'Cowpea': 'బొబ్బర్లు',
          'Bengalgram': 'శనగలు', 'Horsegram': 'ఉలవలు', 'Redgram': 'కందులు',
          'Soyabean': 'సోయాబీన్స్', 'Groundnut': 'వేరుశనగ', 'Sunflower': 'పొద్దుతిరుగుడు',
          'Gingely': 'నువ్వులు', 'Castor': 'ఆముదం', 'Cotton': 'ప్రత్తి', 'Jute': 'జనపనార',
          'Sugarcane': 'చెరకు', 'Sugarbeet': 'చక్కెర దుంప', 'Tomato': 'టమోటా',
          'Onion': 'ఉల్లిపాయ', 'Chillies': 'మిరపకాయలు', 'Cabbage': 'క్యాబేజీ',
          'Bhendi': 'బెండకాయ', 'Brinjal': 'వంకాయ', 'Capsicum': 'క్యాప్సికం',
          'Pumpkin': 'గుమ్మడికాయ', 'Snake gourd': 'పొట్లకాయ', 'Ribbed gourd': 'బీరకాయ',
          'Bottle gourd': 'సొరకాయ', 'Bitter gourd': 'కాకరకాయ', 'Ash gourd': 'బూడిద గుమ్మడి',
          'Cucumber': 'దోసకాయ', 'Watermelon': 'పుచ్చకాయ', 'Muskmelon': 'ఖర్బూజ',
          'Tinda': 'టిండా', 'Chowchow': 'చౌచౌ', 'Cluster bean': 'గోరుచిక్కుడు',
          'Vegetable cowpea': 'ఆకుపెసలు', 'French bean': 'ఫ్రెంచ్ బీన్స్', 'Peas': 'బటానీలు',
          'Annual moringa': 'మునగాకు', 'Carrot': 'క్యారెట్', 'Beetroot': 'బీట్రూట్',
          'Radish': 'ముల్లంగి', 'Sweet potato': 'చిలగడదుంప', 'Tapoica': 'కర్రపెండలం',
          'Elephant foot yam': 'కందగడ్డ', 'Cauliflower': 'కాలీఫ్లవర్', 'Small onion': 'చిన్న ఉల్లిపాయ'
        },
        
        seasons: {
          'Rainy': 'వర్షాకాలం', 'Winter': 'శీతాకాలం', 'Summer': 'వేసవికాలం'
        }
      },
      cropDisease: {
    "aiBadge": "AI వ్యాధి గుర్తింపు",
    "title": "పంట వ్యాధి గుర్తింపు",
    "subtitle": "వ్యాధులను గుర్తించడానికి మరియు చికిత్స సూచనలను పొందడానికి మీ పంట ఆకు ఫోటోను అప్లోడ్ చేయండి",
    "uploadImage": "ఆకు చిత్రాన్ని అప్లోడ్ చేయండి",
    "uploadButton": "ఫైల్ అప్లోడ్ చేయండి",
    "dragDrop": "లేదా ఇక్కడకు లాగండి",
    "fileRequirements": "PNG, JPG, GIF (5MB వరకు)",
    "tip": "ప్రో చిట్కా",
    "tipText": "ఉత్తమ ఫలితాల కోసం, సహజ కాంతిలో ప్రభావితమైన ఆకు యొక్క స్పష్టమైన ఫోటో తీయండి",
    "analyzing": "విశ్లేషిస్తోంది...",
    "analyzeButton": "ఆకును విశ్లేషించండి",
    "healthyPlant": "ఆరోగ్యకరమైన మొక్క",
    "diseaseDetected": "వ్యాధి కనుగొనబడింది",
    "confidence": "విశ్వసనీయత",
    "treatment": "చికిత్స",
    "prevention": "నివారణ",
    "healthyTip": "ఆరోగ్యంగా ఉంచండి",
    "healthyTipText": "మీ మంచి వ్యవసాయ పద్ధతులను కొనసాగించండి. క్రమం తప్పకుండా పర్యవేక్షణ మరియు నివారణ సంరక్షణ మొక్క ఆరోగ్యాన్ని కాపాడుకోవడానికి సహాయపడుతుంది.",
    "newAnalysis": "కొత్త విశ్లేషణ",
    "uploadAnother": "మరొక చిత్రాన్ని అప్లోడ్ చేయండి",
    "diseasesCovered": "వ్యాధి కవరేజీ",
    "diseases": "వ్యాధులు",
    "cropsSupported": "మద్దతు ఉన్న పంటలు",
    "crops": "పంటలు",
    "responseTime": "ప్రతిస్పందన సమయం",
    "quickAnalysis": "శీఘ్ర విశ్లేషణ",
    "invalidFileType": "దయచేసి చెల్లుబాటు అయ్యే ఇమేజ్ ఫైల్ను అప్లోడ్ చేయండి",
    "fileTooLarge": "ఫైల్ పరిమాణం 5MB కంటే తక్కువ ఉండాలి",
    "noImageSelected": "దయచేసి ముందుగా ఒక చిత్రాన్ని ఎంచుకోండి",
    "predictionFailed": "అంచనా విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి",
    "errorPrefix": "చిత్రాన్ని విశ్లేషించడంలో విఫలమైంది. దయచేసి మీ కనెక్షన్ని తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
    "onCrop": "పై",

    "diseaseNames": {
      "Corn___Common_Rust": "సాధారణ తుప్పు",
      "Corn___Gray_Leaf_Spot": "బూడిద ఆకు మచ్చ",
      "Corn___Healthy": "ఆరోగ్యకరమైన",
      "Corn___Northern_Leaf_Blight": "ఉత్తర ఆకు మంట",
      "Potato___Early_Blight": "ప్రారంభ మంట",
      "Potato___Healthy": "ఆరోగ్యకరమైన",
      "Potato___Late_Blight": "చివరి మంట",
      "Rice___Brown_Spot": "గోధుమ మచ్చ",
      "Rice___Healthy": "ఆరోగ్యకరమైన",
      "Rice___Leaf_Blast": "ఆకు బ్లాస్ట్",
      "Rice___Neck_Blast": "మెడ బ్లాస్ట్",
      "Wheat___Brown_Rust": "గోధుమ తుప్పు",
      "Wheat___Healthy": "ఆరోగ్యకరమైన",
      "Wheat___Yellow_Rust": "పసుపు తుప్పు",
      "Sugarcane__Red_Rot": "ఎర్ర తెగులు",
      "Sugarcane__Healthy": "ఆరోగ్యకరమైన",
      "Sugarcane__Bacterial Blight": "బాక్టీరియల్ మంట",
      "Apple___Apple_scab": "ఆపిల్ దురద",
      "Apple___Black_rot": "నల్ల తెగులు",
      "Apple___Cedar_apple_rust": "సీడర్ ఆపిల్ తుప్పు",
      "Apple___healthy": "ఆరోగ్యకరమైన",
      "Blueberry___healthy": "ఆరోగ్యకరమైన",
      "Cherry_(including_sour)___Powdery_mildew": "పొడి బూజు",
      "Cherry_(including_sour)___healthy": "ఆరోగ్యకరమైన",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "బూడిద ఆకు మచ్చ",
      "Corn_(maize)___Common_rust_": "సాధారణ తుప్పు",
      "Corn_(maize)___Northern_Leaf_Blight": "ఉత్తర ఆకు మంట",
      "Corn_(maize)___healthy": "ఆరోగ్యకరమైన",
      "Grape___Black_rot": "నల్ల తెగులు",
      "Grape___Esca_(Black_Measles)": "ఎస్కా వ్యాధి",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ఆకు మంట",
      "Grape___healthy": "ఆరోగ్యకరమైన",
      "Orange___Haunglongbing_(Citrus_greening)": "సిట్రస్ పచ్చదనం",
      "Peach___Bacterial_spot": "బాక్టీరియల్ మచ్చ",
      "Peach___healthy": "ఆరోగ్యకరమైన",
      "Pepper,_bell___Bacterial_spot": "బాక్టీరియల్ మచ్చ",
      "Pepper,_bell___healthy": "ఆరోగ్యకరమైన",
      "Potato___Early_blight": "ప్రారంభ మంట",
      "Potato___Late_blight": "చివరి మంట",
      "Potato___healthy": "ఆరోగ్యకరమైన",
      "Raspberry___healthy": "ఆరోగ్యకరమైన",
      "Soybean___healthy": "ఆరోగ్యకరమైన",
      "Squash___Powdery_mildew": "పొడి బూజు",
      "Strawberry___Leaf_scorch": "ఆకు కాలిన గాయం",
      "Strawberry___healthy": "ఆరోగ్యకరమైన",
      "Tomato___Bacterial_spot": "బాక్టీరియల్ మచ్చ",
      "Tomato___Early_blight": "ప్రారంభ మంట",
      "Tomato___Late_blight": "చివరి మంట",
      "Tomato___Leaf_Mold": "ఆకు బూజు",
      "Tomato___Septoria_leaf_spot": "సెప్టోరియా ఆకు మచ్చ",
      "Tomato___Spider_mites Two-spotted_spider_mite": "సాలీడు పురుగులు",
      "Tomato___Target_Spot": "లక్ష్య మచ్చ",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "పసుపు ఆకు వంకర వైరస్",
      "Tomato___Tomato_mosaic_virus": "మొజాయిక్ వైరస్",
      "Tomato___healthy": "ఆరోగ్యకరమైన"
    },

    "treatments": {
      "Corn___Common_Rust": "శిలీంద్ర సంహారిణి వాడండి మరియు సోకిన ఆకులను తొలగించండి.",
      "Corn___Gray_Leaf_Spot": "ఆకు శిలీంద్ర సంహారిణులను ఉపయోగించండి.",
      "Corn___Healthy": "చికిత్స అవసరం లేదు.",
      "Corn___Northern_Leaf_Blight": "ప్రారంభ దశలలో శిలీంద్ర సంహారిణి పిచికారీ చేయండి.",
      "Potato___Early_Blight": "రాగి శిలీంద్ర సంహారిణి వాడండి.",
      "Potato___Healthy": "చికిత్స అవసరం లేదు.",
      "Potato___Late_Blight": "వెంటనే శిలీంద్ర సంహారిణులు వాడండి.",
      "Rice___Brown_Spot": "పొటాషియం ఎరువులు మరియు శిలీంద్ర సంహారిణి వాడండి.",
      "Rice___Healthy": "చికిత్స అవసరం లేదు.",
      "Rice___Leaf_Blast": "బ్లాస్ట్-నిరోధక విత్తనాలు మరియు శిలీంద్ర సంహారిణి ఉపయోగించండి.",
      "Rice___Neck_Blast": "ట్రైసైక్లాజోల్ శిలీంద్ర సంహారిణి వాడండి.",
      "Wheat___Brown_Rust": "తుప్పు శిలీంద్ర సంహారిణులు వాడండి.",
      "Wheat___Healthy": "చికిత్స అవసరం లేదు.",
      "Wheat___Yellow_Rust": "ముందుగానే శిలీంద్ర సంహారిణి పిచికారీ చేయండి.",
      "Sugarcane__Red_Rot": "సోకిన చెరకు ముక్కలను తొలగించి శిలీంద్ర సంహారిణి వాడండి.",
      "Sugarcane__Healthy": "చికిత్స అవసరం లేదు.",
      "Sugarcane__Bacterial Blight": "బాక్టీరిసైడ్ పిచికారీ ఉపయోగించండి.",
      "Apple___Apple_scab": "క్రమం తప్పకుండా శిలీంద్ర సంహారిణి వాడండి.",
      "Apple___Black_rot": "సోకిన పండ్లు మరియు కొమ్మలను తొలగించండి.",
      "Apple___Cedar_apple_rust": "సల్ఫర్ శిలీంద్ర సంహారిణి ఉపయోగించండి.",
      "Apple___healthy": "చికిత్స అవసరం లేదు.",
      "Blueberry___healthy": "చికిత్స అవసరం లేదు.",
      "Cherry_(including_sour)___Powdery_mildew": "సల్ఫర్-ఆధారిత శిలీంద్ర సంహారిణి పిచికారీ చేయండి.",
      "Cherry_(including_sour)___healthy": "చికిత్స అవసరం లేదు.",
      "Grape___Black_rot": "శిలీంద్ర సంహారిణి ఉపయోగించండి మరియు సోకిన ద్రాక్షను తొలగించండి.",
      "Grape___Esca_(Black_Measles)": "సోకిన కలపను తొలగించండి.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "రాగి శిలీంద్ర సంహారిణి వాడండి.",
      "Grape___healthy": "చికిత్స అవసరం లేదు.",
      "Orange___Haunglongbing_(Citrus_greening)": "పూర్తి చికిత్స లేదు. సోకిన చెట్లను తొలగించండి.",
      "Peach___Bacterial_spot": "రాగి స్ప్రే ఉపయోగించండి.",
      "Peach___healthy": "చికిత్స అవసరం లేదు.",
      "Pepper,_bell___Bacterial_spot": "రాగి-ఆధారిత బాక్టీరిసైడ్ ఉపయోగించండి.",
      "Pepper,_bell___healthy": "చికిత్స అవసరం లేదు.",
      "Tomato___Bacterial_spot": "రాగి-ఆధారిత బాక్టీరిసైడ్ ఉపయోగించండి.",
      "Tomato___Early_blight": "శిలీంద్ర సంహారిణి వాడండి మరియు సోకిన ఆకులను తొలగించండి.",
      "Tomato___Late_blight": "వెంటనే శిలీంద్ర సంహారిణి వాడండి.",
      "Tomato___Leaf_Mold": "గాలి ప్రసరణను మెరుగుపరచండి మరియు తేమను తగ్గించండి.",
      "Tomato___Septoria_leaf_spot": "సోకిన ఆకులను తొలగించి శిలీంద్ర సంహారిణి వాడండి.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "మైటిసైడ్ లేదా వేప నూనె ఉపయోగించండి.",
      "Tomato___Target_Spot": "శిలీంద్ర సంహారిణి వాడండి.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "సోకిన మొక్కలను తొలగించండి. చికిత్స లేదు.",
      "Tomato___Tomato_mosaic_virus": "సోకిన మొక్కలను వెంటనే తొలగించండి. సాధనాలను క్రిమిరహితం చేయండి.",
      "Tomato___healthy": "చికిత్స అవసరం లేదు."
    },

    "preventions": {
      "Corn___Common_Rust": "నిరోధక రకాలను ఉపయోగించండి మరియు రద్దీని నివారించండి.",
      "Corn___Gray_Leaf_Spot": "పంటల మార్పిడి చేయండి మరియు పంట అవశేషాలను తొలగించండి.",
      "Corn___Healthy": "సరైన నీటిపారుదల మరియు పోషకాలను నిర్వహించండి.",
      "Corn___Northern_Leaf_Blight": "నిరోధక సంకరాలు మరియు పంట మార్పిడి ఉపయోగించండి.",
      "Potato___Early_Blight": "పైన నీరు పోయడం మానుకోండి మరియు పంటల మార్పిడి చేయండి.",
      "Potato___Healthy": "సమతుల్య ఎరువులు మరియు నీటిపారుదల ఉపయోగించండి.",
      "Potato___Late_Blight": "ఆకులను పొడిగా ఉంచండి మరియు గాలి ప్రవాహాన్ని మెరుగుపరచండి.",
      "Rice___Brown_Spot": "పోషకాల లోపాన్ని నివారించండి.",
      "Rice___Healthy": "నీరు మరియు పోషకాలను సరిగ్గా నిర్వహించండి.",
      "Rice___Leaf_Blast": "అధిక నత్రజని ఎరువులను నివారించండి.",
      "Rice___Neck_Blast": "సరైన దూరం మరియు నీటిపారుదల నిర్వహించండి.",
      "Wheat___Brown_Rust": "నిరోధక గోధుమ రకాలను ఉపయోగించండి.",
      "Wheat___Healthy": "సరైన ఫీల్డ్ నిర్వహణ ఉపయోగించండి.",
      "Wheat___Yellow_Rust": "నిరోధక సాగులను పెంచండి.",
      "Sugarcane__Red_Rot": "వ్యాధి లేని నాటు పదార్థాలను ఉపయోగించండి.",
      "Sugarcane__Healthy": "నేల సారాన్ని నిర్వహించండి.",
      "Sugarcane__Bacterial Blight": "నీటి నిల్వ మరియు సోకిన విత్తనాలను నివారించండి.",
      "Apple___Apple_scab": "పడిపోయిన ఆకులను తొలగించండి మరియు చెట్లను కత్తిరించండి.",
      "Apple___Black_rot": "తోట పరిశుభ్రతను నిర్వహించండి.",
      "Apple___Cedar_apple_rust": "సమీపంలోని దేవదారు చెట్లను తొలగించండి.",
      "Apple___healthy": "సరైన తోట సంరక్షణ నిర్వహించండి.",
      "Blueberry___healthy": "సరైన నేల ఆమ్లత్వం మరియు నీటిపారుదల నిర్ధారించుకోండి.",
      "Cherry_(including_sour)___Powdery_mildew": "గాలి ప్రవాహాన్ని మెరుగుపరచండి మరియు తేమను నివారించండి.",
      "Cherry_(including_sour)___healthy": "క్రమం తప్పకుండా కత్తిరించండి మరియు సరిగ్గా నీటిపారుదల చేయండి.",
      "Grape___Black_rot": "గాలి ప్రవాహం కోసం తీగలను కత్తిరించండి.",
      "Grape___Esca_(Black_Measles)": "తడి వాతావరణంలో కత్తిరింపు గాయాలను నివారించండి.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ద్రాక్ష తోట పరిశుభ్రతను మెరుగుపరచండి.",
      "Grape___healthy": "సమతుల్య పోషణను నిర్వహించండి.",
      "Orange___Haunglongbing_(Citrus_greening)": "సైలిడ్ కీటకాలను నియంత్రించండి. వ్యాధి లేని మొక్కలను ఉపయోగించండి.",
      "Peach___Bacterial_spot": "నిరోధక రకాలను ఉపయోగించండి.",
      "Peach___healthy": "సరైన కత్తిరింపు నిర్వహించండి.",
      "Pepper,_bell___Bacterial_spot": "తడి ఆకులను నివారించండి మరియు శుభ్రమైన విత్తనాలను ఉపయోగించండి.",
      "Pepper,_bell___healthy": "సరైన నీటిపారుదల పద్ధతులను ఉపయోగించండి.",
      "Tomato___Bacterial_spot": "వ్యాధి లేని విత్తనాలను ఉపయోగించండి. పైన నీరు పోయడం మానుకోండి.",
      "Tomato___Early_blight": "పంటల మార్పిడి చేయండి మరియు కప్పడం ఉపయోగించండి.",
      "Tomato___Late_blight": "ఆకులను పొడిగా ఉంచండి మరియు గాలి ప్రవాహాన్ని మెరుగుపరచండి.",
      "Tomato___Leaf_Mold": "తేమను తగ్గించండి మరియు వెంటిలేషన్ మెరుగుపరచండి.",
      "Tomato___Septoria_leaf_spot": "పైన నీటిపారుదల నివారించండి. దిగువ ఆకులను తొలగించండి.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "సరైన తేమను నిర్వహించండి. ప్రయోజనకరమైన కీటకాలను పరిచయం చేయండి.",
      "Tomato___Target_Spot": "సరైన దూరం నిర్ధారించుకోండి మరియు పైన నీరు పోయడం నివారించండి.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "పసుపు జిగురు ఉచ్చులతో తెల్లదోమలను నియంత్రించండి.",
      "Tomato___Tomato_mosaic_virus": "తోటపని సాధనాలను క్రిమిరహితం చేయండి. వైరస్ లేని విత్తనాలను ఉపయోగించండి.",
      "Tomato___healthy": "సమతుల్య ఎరువులు మరియు సరైన నీటిపారుదల నిర్వహించండి."
    }
  },
  virtualfarm: {
    header: {
      badge: "🌾 3డి ఫార్మ్ విజువలైజేషన్",
      title: "వర్చువల్ ఫార్మ్ అనుభవం",
      subtitle: "నిజ-సమయ సీజన్ మార్పులు మరియు వాతావరణ ప్రభావాలతో 3డిలో మీ ఫార్మ్ను అన్వేషించండి"
    },
    seasonController: {
      title: "సీజన్ కంట్రోలర్",
      summer: "వేసవి",
      monsoon: "వర్షాకాలం",
      winter: "శీతాకాలం",
      autumn: "శరదృతువు"
    },
    seasonDescriptions: {
      summer: "బంగారు సూర్యకాంతి - మొక్కలు ప్రకాశవంతమైన ఆకుపచ్చ రంగులతో వృద్ధి చెందుతాయి.",
      monsoon: "భారీ వర్షపాతం - లోతైన ఆకుపచ్చ ఆకులతో తాజా పునర్వృద్ధి.",
      winter: "చల్లని మరియు మంచుగడ్డ - మొక్కలు సతత హరిత శీతాకాలపు రంగులను చూపిస్తాయి.",
      autumn: "పంట కోత సీజన్ - మొక్కలు శరదృతువు రంగులతో రూపాంతరం చెందుతాయి!"
    },
    climate: {
      temp: "ఉష్ణోగ్రత",
      humidity: "తేమ"
    },
    weather: {
      sunny: "☀️ ఎండ",
      rainy: "🌧️ వర్షం",
      snowy: "❄️ మంచు"
    },
    stats: {
      totalPlants: "మొత్తం మొక్కలు",
      plants: "మొక్కలు",
      farmArea: "ఫార్మ్ విస్తీర్ణం",
      meters: "మీటర్లు",
      currentSeason: "ప్రస్తుత సీజన్",
      performance: "పనితీరు",
      fpsTarget: "ఎఫ్పిఎస్ లక్ష్యం"
    },
    loading: {
      model: "3డి మోడల్ లోడ్ అవుతోంది...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "సీజన్ మార్చు",
      resetView: "వీక్షణను రీసెట్ చేయి",
      toggleInfo: "సమాచారాన్ని టోగుల్ చేయి"
    },
    messages: {
      seasonChanged: "సీజన్ {{season}} కు మార్చబడింది",
      weatherUpdated: "వాతావరణం నవీకరించబడింది",
      farmReady: "ఫార్మ్ అన్వేషించడానికి సిద్ధంగా ఉంది"
    },
    tooltips: {
      rotate: "వీక్షణను తిప్పండి",
      zoom: "జూమ్ ఇన్/ఔట్",
      pan: "ఫార్మ్ అంతటా పాన్ చేయండి"
    }
  },
  cropRotation: {
  header: {
    badge: "AI-ఆధారిత పంట మార్పిడి ప్రణాళిక",
    title: "పంట మార్పిడి వ్యవస్థ",
    subtitle: "గరిష్ట దిగుబడి మరియు నేల ఆరోగ్యం కోసం మీ పంట మార్పిడిని ప్లాన్ చేయండి"
  },
  popularCrops: "ప్రముఖ పంటలు",
  form: {
    selectCrop: "పంటను ఎంచుకోండి",
    chooseCrop: "ఒక పంటను ఎంచుకోండి",
    numSeasons: "సీజన్ల సంఖ్య"
  },
  seasons: {
    one: "1 సీజన్",
    two: "2 సీజన్లు",
    three: "3 సీజన్లు (1 సంవత్సరం)",
    four: "4 సీజన్లు",
    six: "6 సీజన్లు (2 సంవత్సరాలు)"
  },
  buttons: {
    planning: "ప్లాన్ చేస్తోంది...",
    generate: "పంట మార్పిడి ప్రణాళికను రూపొందించండి"
  },
  errors: {
    selectCrop: "దయచేసి ఒక పంటను ఎంచుకోండి",
    requestFailed: "పంట మార్పిడి ప్రణాళికను పొందడంలో విఫలమైంది"
  },
  result: {
    title: "పంట మార్పిడి ప్రణాళిక",
    currentCrop: "ప్రస్తుత పంట",
    phase: "దశ",
    best: "ఉత్తమమైనది",
    bestChoice: "ఉత్తమ ఎంపిక"
  },
  phases: {
    kharif: "ఖరీఫ్",
    rabi: "రబీ",
    summer: "వేసవి",
    winter: "శీతాకాలం",
    autumn: "శరదృతువు",
    annual: "వార్షిక"
  },
  benefits: {
    title: "ప్రయోజనాలు",
    soilHealth: {
      title: "నేల ఆరోగ్యం",
      desc: "పోషకాల కొరతను నివారిస్తుంది"
    },
    pestControl: {
      title: "తెగులు నియంత్రణ",
      desc: "వ్యాధి చక్రాలను విచ్ఛిన్నం చేస్తుంది"
    },
    waterEfficiency: {
      title: "నీటి సామర్థ్యం",
      desc: "వినియోగాన్ని ఆప్టిమైజ్ చేస్తుంది"
    },
    higherYields: {
      title: "అధిక దిగుబడులు",
      desc: "ఉత్పాదకతను పెంచుతుంది"
    }
  },
  howItWorks: {
    title: "ఇది ఎలా పనిచేస్తుంది",
    selectCrop: {
      title: "పంటను ఎంచుకోండి",
      desc: "50+ పంటల నుండి ఎంచుకోండి"
    },
    aiAnalysis: {
      title: "AI విశ్లేషణ",
      desc: "చారిత్రక డేటాను విశ్లేషిస్తుంది"
    },
    viewCycle: {
      title: "చక్రం చూడండి",
      desc: "మార్పిడి ప్రణాళికను చూడండి"
    }
  },
  crops: {
    "Rice": "వరి",
    "Wheat": "గోధుమ",
    "Maize": "మొక్కజొన్న",
    "Sugarcane": "చెరకు",
    "Cotton": "పత్తి",
    "Potato": "బంగాళదుంప",
    "Turmeric": "పసుపు",
    "Banana": "అరటి",
    "Groundnut": "వేరుశనగ",
    "Onion": "ఉల్లిపాయ",
    "Arecanut": "పోక",
    "Arhar/Tur": "కందులు",
    "Black pepper": "నల్ల మిరియాలు",
    "Cashewnut": "జీడి",
    "Coconut": "కొబ్బరి",
    "Cowpea(Lobia)": "బొబ్బర్లు",
    "Dry chillies": "ఎండు మిరపకాయలు",
    "Ginger": "అల్లం",
    "Moong(Green Gram)": "పెసలు",
    "Oilseeds total": "నూనె గింజలు",
    "Other Kharif pulses": "ఇతర ఖరీఫ్ పప్పులు",
    "Other oilseeds": "ఇతర నూనె గింజలు",
    "Rapeseed & Mustard": "ఆవాలు",
    "Sesamum": "నువ్వులు",
    "Sunflower": "పొద్దుతిరుగుడు",
    "Sweet potato": "చిలగడదుంప",
    "Tapioca": "కర్రపెండలం",
    "Urad": "మినుములు",
    "Bajra": "సజ్జలు",
    "Castor seed": "ఆముదం",
    "Coriander": "కొత్తిమీర",
    "Garlic": "వెల్లుల్లి",
    "Gram": "శనగలు",
    "Guar seed": "గోరు చిక్కుడు",
    "Horse-gram": "ఉలవలు",
    "Jowar": "జొన్న",
    "Linseed": "అవిశ",
    "Masoor": "మసూర్",
    "Mesta": "మెస్టా",
    "Niger seed": "నైజర్ గింజలు",
    "Other Rabi pulses": "ఇతర రబీ పప్పులు",
    "Ragi": "రాగులు",
    "Safflower": "కుసుమ",
    "Sannhamp": "సన్నలు",
    "Small millets": "చిన్న మిల్లెట్లు",
    "Soyabean": "సోయాబీన్స్",
    "Tobacco": "పొగాకు",
    "Peas & beans (Pulses)": "బఠానీలు మరియు బీన్స్",
    "Jute": "జనపనార",
    "Barley": "బార్లీ",
    "Khesari": "ఖేసరి",
    "Moth": "మోత్",
    "Cardamom": "ఏలకులు"
  }
},
    weather: {
      badge: "🌤️ మీ స్థానం ఆధారంగా వాతావరణ విశ్లేషణ",
      title: "స్థాన వాతావరణ విశ్లేషణ",
      subtitle: "నిజ-సమయ వాతావరణ డేటా విశ్లేషణ",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 నా స్థానం",
      refresh: "రిఫ్రెష్ చేయండి",
      searchPlaceholder: "నగరం పేరు నమోదు చేయండి...",
      search: "వెతకండి",
      currentLocation: "ప్రస్తుత స్థానం",
      updated: "నవీకరించబడింది",
      fetchingWeather: "వాతావరణ డేటాను సేకరిస్తుంది...",
      unableToGetLocation: "మీ స్థానాన్ని పొందలేకపోయాము. దయచేసి లొకేషన్ సేవలను ప్రారంభించండి.",
      geolocationNotSupported: "మీ బ్రౌజర్ జియోలొకేషన్కు మద్దతు ఇవ్వదు",
      invalidCoordinates: "చెల్లని కోఆర్డినేట్లు. దయచేసి మళ్లీ ప్రయత్నించండి.",
      cityNotFound: "నగరం కనుగొనబడలేదు. నగరం పేరును తనిఖీ చేయండి.",
      requestTimeout: "అభ్యర్థన సమయం ముగిసింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
      currentWeather: "ప్రస్తుత వాతావరణం",
      fiveDayForecast: "5 రోజుల సూచన",
      feelsLike: "అనిపిస్తుంది",
      humidity: "తేమ",
      windSpeed: "గాలి వేగం",
      pressure: "పీడనం",
      cloudCover: "మేఘ కవరేజీ",
      sunrise: "సూర్యోదయం",
      sunset: "సూర్యాస్తమయం",
      rain: "వర్షం (1 గం)",
      snow: "మంచు (1 గం)",
      airQuality: "గాలి నాణ్యత సూచిక",
      airQuality1: "మంచిది - బహిరంగ కార్యకలాపాలకు సరైనది",
      airQuality2: "సాధారణం - ఆమోదయోగ్యమైన గాలి నాణ్యత",
      airQuality3: "మితమైన - సున్నితమైన వ్యక్తులు బహిరంగ సమయాన్ని పరిమితం చేయాలి",
      airQuality4: "పేలవం - బహిరంగ కార్యకలాపాలను పరిమితం చేయండి",
      airQuality5: "చాలా పేలవం - ఇంటి లోపలే ఉండండి",
      forecastTitle: "5 రోజుల వాతావరణ సూచన",
      high: "అధిక",
      low: "తక్కువ",
      tempCard: "ఉష్ణోగ్రత",
      tempDesc: "నిజ-సమయ డేటా",
      humidityCard: "తేమ",
      humidityDesc: "ఖచ్చితమైన కొలత",
      windCard: "గాలి వేగం",
      windDesc: "ఖచ్చితమైన రీడింగ్లు",
      coverageCard: "కవరేజీ",
      coverageDesc: "ప్రపంచవ్యాప్తంగా"
    }


    }
  },
  hi: {
    translation: {
      nav: {
    home: "होम",
    features: "विशेषताएँ",
    cropRecommendation: "फसल अनुशंसा",
    cropRecommendationDesc: "मिट्टी और जलवायु के आधार पर AI-संचालित फसल सुझाव",
    diseasePrediction: "रोग भविष्यवाणी",
    diseasePredictionDesc: "AI का उपयोग करके पत्ती की छवियों से रोगों का पता लगाएं",
    farmVisualization: "फार्म विज़ुअलाइज़ेशन",
    farmVisualizationDesc: "फसलों, सिंचाई और मौसमी जानकारी के साथ इंटरैक्टिव 3D फार्म दृश्य",
    cropRotation: "फसल चक्र",
    cropRotationDesc: "अधिकतम उपज के लिए फसल चक्र की योजना बनाएं",
    language: "भाषा",
    toggleTheme: "थीम बदलें",
    toggleMenu: "मेनू बदलें"
  },
    // Add this to your existing hi.js
home: {
  hero: {
    badge: "🇮🇳 AI-संचालित कृषि",
    title: "बुद्धिमान कृषि समाधान",
    highlight: "भारतीय किसानों के लिए",
    subtitle: "स्मार्ट निर्णयों और बेहतर फसल के लिए आपका AI कृषि सहायक",
    imageAlt: "ड्रोन के साथ स्मार्ट खेती",
    aiBadge: "AI विश्लेषण"
  },
  benefits: {
    free: {
      title: "उपयोग करने के लिए स्वतंत्र",
      desc: "कोई छिपा हुआ खर्च नहीं"
    },
    languages: {
      title: "6 भाषाएँ",
      desc: "तमिल, हिंदी और अधिक"
    },
    noSignup: {
      title: "कोई साइनअप नहीं",
      desc: "तत्काल पहुंच"
    },
    access: {
      title: "24/7 पहुंच",
      desc: "कभी भी, कहीं भी"
    }
  },
  carousel: {
    title: "फसलों का अन्वेषण करें",
    subtitle: "AI-संचालित अंतर्दृष्टि और सिफारिशों के साथ फसलों के हमारे व्यापक संग्रह का अन्वेषण करें"
  },
  howItWorks: {
    title: "यह कैसे काम करता है",
    subtitle: "आपकी उंगलियों पर डेटा-संचालित कृषि बुद्धिमत्ता",
    step1: {
      title: "फसल का विवरण दर्ज करें",
      desc: "अपनी मिट्टी के पैरामीटर, स्थान और फसल प्राथमिकताएं इनपुट करें",
      alt: "फसल विवरण आइकन दर्ज करें"
    },
    step2: {
      title: "AI प्रोसेसिंग",
      desc: "हमारा AI आपके डेटा का विश्लेषण करता है और व्यक्तिगत सिफारिशें उत्पन्न करता है",
      alt: "AI प्रोसेसिंग आइकन"
    },
    step3: {
      title: "अंतर्दृष्टि प्राप्त करें",
      desc: "तत्काल फसल भविष्यवाणियां, रोग अलर्ट और उर्वरक सलाह प्राप्त करें",
      alt: "अंतर्दृष्टि प्राप्त करें आइकन"
    }
  },
  features: {
    badge: "स्मार्ट विशेषताएँ",
    heading: "AI-संचालित कृषि समाधान",
    subheading: "हर कृषि आवश्यकता के लिए डेटा-संचालित बुद्धिमत्ता",
    cropRecommendationDesc: "मशीन लर्निंग एल्गोरिदम मिट्टी के पोषक तत्वों, तापमान, आर्द्रता और वर्षा का विश्लेषण करके सबसे लाभदायक फसलों की सिफारिश करते हैं।",
    diseasePredictionDesc: "तत्काल रोग का पता लगाने के लिए पत्तियों की छवियां अपलोड करें। CNN का उपयोग करके उपचार सुझाव और रोकथाम युक्तियाँ प्राप्त करें।",
    farmVisualizationDesc: "बेहतर योजना के लिए फसलों, सिंचाई और मौसमी अंतर्दृष्टि के साथ इंटरैक्टिव 3D फार्म विज़ुअलाइज़ेशन।",
    cropRotationDesc: "AI-संचालित सिफारिशों के साथ अधिकतम उपज और मिट्टी के स्वास्थ्य के लिए फसल चक्र की योजना बनाएं।"
  },
  
},
crops: {
  grape: "अंगूर",
  peach: "आड़ू",
  bellPepper: "शिमला मिर्च",
  strawberry: "स्ट्रॉबेरी",
  tea: "चाय",
  tomato: "टमाटर",
  potato: "आलू",
  corn: "मक्का",
  apple: "सेब",
  bean: "बीन",
  cherry: "चेरी"
},
carousel: {
  scrollingText: "निरंतर स्क्रॉलिंग • रोकने के लिए होवर करें"
},  
      
      
      footer: {
        description: 'भारतीय किसानों को उनकी अपनी भाषा में AI तकनीक के साथ सशक्त बनाना।',
        features: 'विशेषताएं',
        schemes: 'योजनाएं',
        contact: 'संपर्क',
        rights: 'सर्वाधिकार सुरक्षित।',
        made: 'भारतीय किसानों के लिए ❤️ के साथ बनाया गया'
      },
      cropRecommendation: {
        title: 'फसल अनुशंसा प्रणाली',
        subtitle: 'सबसे अच्छी फसल खोजने के लिए अपनी मिट्टी और मौसम का विवरण दर्ज करें',
        aiBadge: '🌱 AI-संचालित अनुशंसा',
        soilType: 'मिट्टी का प्रकार',
        season: 'मौसम',
        temperature: 'तापमान (°C)',
        humidity: 'आर्द्रता (%)',
        selectSoil: 'मिट्टी का प्रकार चुनें',
        selectSeason: 'मौसम चुनें',
        predictButton: 'सर्वोत्तम फसल का अनुमान लगाएं',
        predicting: 'अनुमान लगा रहा है...',
        errorPrefix: 'अनुमान प्राप्त करने में विफल। कृपया पुनः प्रयास करें।',
        optimalTemp: '15-45°C इष्टतम',
        optimalHumidity: '40-80% इष्टतम',
        soilCount: '29 मिट्टी के प्रकार',
        recommendedCrop: 'अनुशंसित फसल',
        basedOn: 'आपके',
        soilCondition: 'मिट्टी और',
        seasonCondition: 'मौसम की स्थितियों के आधार पर, हम उगाने की सलाह देते हैं',
        soilTypes: {
            'Alluvial soil': 'जलोढ़ मिट्टी',
            'Loamy soil': 'दोमट मिट्टी',
            'Clay soil': 'चिकनी मिट्टी',
            'Well-drained soil': 'अच्छी जल निकासी वाली मिट्टी',
            'Red soil': 'लाल मिट्टी',
            'Clay loamy soil': 'चिकनी दोमट मिट्टी',
            'Sandy loamy soil': 'रेतीली दोमट मिट्टी',
            'Black soil': 'काली मिट्टी',
            'Sandy soil': 'रेतीली मिट्टी',
            'Shallow black soil': 'उथली काली मिट्टी',
            'Black cotton soil': 'काली कपास मिट्टी',
            'Cotton soil': 'कपास मिट्टी',
            'Medium black soil': 'मध्यम काली मिट्टी',
            'Heavy black soil': 'भारी काली मिट्टी',
            'Light soil': 'हल्की मिट्टी',
            'Heavy soil': 'भारी मिट्टी',
            'Deep soil': 'गहरी मिट्टी',
            'Sandy clay loamy soil': 'रेतीली चिकनी दोमट मिट्टी',
            'Silty loamy soil': 'गाद दोमट मिट्टी',
            'Salty clay loamy soil': 'खारी चिकनी दोमट मिट्टी',
            'Red loamy soil': 'लाल दोमट मिट्टी',
            'Brown loamy soil': 'भूरी दोमट मिट्टी',
            'Laterite soil': 'लेटराइट मिट्टी',
            'Well-drained Loamy soil': 'अच्छी जल निकासी वाली दोमट मिट्टी',
            'Light loamy soil': 'हल्की दोमट मिट्टी',
            'Friable soil': 'भुरभुरी मिट्टी',
            'Well-grained deep loamy moist soil': 'अच्छे दाने वाली गहरी नम दोमट मिट्टी',
            'Red lateritic loamy soil': 'लाल लेटराइट दोमट मिट्टी',
            'Rich red loamy soil': 'समृद्ध लाल दोमट मिट्टी'
          },
        crops: {
          'Rice': 'चावल', 'Wheat': 'गेहूं', 'Maize': 'मक्का', 'Sorghum': 'ज्वार',
          'Pearl millet': 'बाजरा', 'Ragi': 'रागी', 'Panivaragu': 'पनिवरगु',
          'Samai': 'सामाई', 'Thinai': 'थिनाई', 'Varagu': 'वरगु', 'Kudiraivali': 'कुदिरैवाली',
          'Blackgram': 'उड़द दाल', 'Greengram': 'मूंग दाल', 'Cowpea': 'लोबिया',
          'Bengalgram': 'चना', 'Horsegram': 'कुल्थी दाल', 'Redgram': 'अरहर दाल',
          'Soyabean': 'सोयाबीन', 'Groundnut': 'मूंगफली', 'Sunflower': 'सूरजमुखी',
          'Gingely': 'तिल', 'Castor': 'अरंडी', 'Cotton': 'कपास', 'Jute': 'जूट',
          'Sugarcane': 'गन्ना', 'Sugarbeet': 'चुकंदर', 'Tomato': 'टमाटर',
          'Onion': 'प्याज', 'Chillies': 'मिर्च', 'Cabbage': 'पत्तागोभी',
          'Bhendi': 'भिंडी', 'Brinjal': 'बैंगन', 'Capsicum': 'शिमला मिर्च',
          'Pumpkin': 'कद्दू', 'Snake gourd': 'चिचिंडा', 'Ribbed gourd': 'तोरई',
          'Bottle gourd': 'लौकी', 'Bitter gourd': 'करेला', 'Ash gourd': 'पेठा',
          'Cucumber': 'खीरा', 'Watermelon': 'तरबूज', 'Muskmelon': 'खरबूज',
          'Tinda': 'टिंडा', 'Chowchow': 'चाउचाउ', 'Cluster bean': 'गवार फली',
          'Vegetable cowpea': 'बोड़ा', 'French bean': 'फ्रेंच बीन्स', 'Peas': 'मटर',
          'Annual moringa': 'सहजन', 'Carrot': 'गाजर', 'Beetroot': 'चुकंदर',
          'Radish': 'मूली', 'Sweet potato': 'शकरकंद', 'Tapoica': 'साबूदाना',
          'Elephant foot yam': 'सूरन', 'Cauliflower': 'फूलगोभी', 'Small onion': 'छोटा प्याज'
        },
        
        seasons: {
          'Rainy': 'बरसात का मौसम', 'Winter': 'सर्दी का मौसम', 'Summer': 'गर्मी का मौसम'
        }
      },
      cropDisease: {
    "aiBadge": "AI रोग पहचान",
    "title": "फसल रोग पहचान प्रणाली",
    "subtitle": "रोग का पता लगाने और उपचार के सुझाव पाने के लिए फसल के पत्ते की फोटो अपलोड करें",
    "uploadImage": "पत्ते की फोटो अपलोड करें",
    "uploadButton": "फाइल अपलोड करें",
    "dragDrop": "या यहां खींचें और छोड़ें",
    "fileRequirements": "PNG, JPG, GIF (5MB तक)",
    "tip": "विशेष सुझाव",
    "tipText": "बेहतर परिणामों के लिए, प्राकृतिक रोशनी में प्रभावित पत्ते की साफ तस्वीर लें",
    "analyzing": "विश्लेषण हो रहा है...",
    "analyzeButton": "पत्ते का विश्लेषण करें",
    "healthyPlant": "स्वस्थ पौधा",
    "diseaseDetected": "रोग का पता चला",
    "confidence": "विश्वसनीयता",
    "treatment": "उपचार",
    "prevention": "रोकथाम",
    "healthyTip": "स्वस्थ रखें",
    "healthyTipText": "अपनी अच्छी कृषि पद्धतियों को जारी रखें। नियमित निगरानी और सावधानी पौधे के स्वास्थ्य को बनाए रखने में मदद करेगी।",
    "newAnalysis": "नया विश्लेषण",
    "uploadAnother": "दूसरी फोटो अपलोड करें",
    "diseasesCovered": "रोग कवरेज",
    "diseases": "रोग",
    "cropsSupported": "समर्थित फसलें",
    "crops": "फसलें",
    "responseTime": "प्रतिक्रिया समय",
    "quickAnalysis": "त्वरित विश्लेषण",
    "invalidFileType": "कृपया एक मान्य छवि फ़ाइल अपलोड करें",
    "fileTooLarge": "फ़ाइल का आकार 5MB से कम होना चाहिए",
    "noImageSelected": "कृपया पहले एक छवि चुनें",
    "predictionFailed": "पूर्वानुमान विफल। कृपया पुनः प्रयास करें",
    "errorPrefix": "छवि का विश्लेषण विफल। कृपया अपने कनेक्शन की जांच करें और पुनः प्रयास करें।",
    "onCrop": "पर",

    "diseaseNames": {
      "Corn___Common_Rust": "सामान्य जंग",
      "Corn___Gray_Leaf_Spot": "ग्रे पत्ती धब्बा",
      "Corn___Healthy": "स्वस्थ",
      "Corn___Northern_Leaf_Blight": "उत्तरी पत्ती झुलसा",
      "Potato___Early_Blight": "प्रारंभिक झुलसा",
      "Potato___Healthy": "स्वस्थ",
      "Potato___Late_Blight": "उत्तरवर्ती झुलसा",
      "Rice___Brown_Spot": "भूरा धब्बा",
      "Rice___Healthy": "स्वस्थ",
      "Rice___Leaf_Blast": "पत्ती ब्लास्ट",
      "Rice___Neck_Blast": "गर्दन ब्लास्ट",
      "Wheat___Brown_Rust": "भूरा जंग",
      "Wheat___Healthy": "स्वस्थ",
      "Wheat___Yellow_Rust": "पीला जंग",
      "Sugarcane__Red_Rot": "लाल सड़न",
      "Sugarcane__Healthy": "स्वस्थ",
      "Sugarcane__Bacterial Blight": "जीवाणु झुलसा",
      "Apple___Apple_scab": "सेब की पपड़ी",
      "Apple___Black_rot": "काली सड़न",
      "Apple___Cedar_apple_rust": "देवदार सेब जंग",
      "Apple___healthy": "स्वस्थ",
      "Blueberry___healthy": "स्वस्थ",
      "Cherry_(including_sour)___Powdery_mildew": "चूर्णिल आसिता",
      "Cherry_(including_sour)___healthy": "स्वस्थ",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ग्रे पत्ती धब्बा",
      "Corn_(maize)___Common_rust_": "सामान्य जंग",
      "Corn_(maize)___Northern_Leaf_Blight": "उत्तरी पत्ती झुलसा",
      "Corn_(maize)___healthy": "स्वस्थ",
      "Grape___Black_rot": "काली सड़न",
      "Grape___Esca_(Black_Measles)": "एस्का रोग",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "पत्ती झुलसा",
      "Grape___healthy": "स्वस्थ",
      "Orange___Haunglongbing_(Citrus_greening)": "साइट्रस ग्रीनिंग",
      "Peach___Bacterial_spot": "जीवाणु धब्बा",
      "Peach___healthy": "स्वस्थ",
      "Pepper,_bell___Bacterial_spot": "जीवाणु धब्बा",
      "Pepper,_bell___healthy": "स्वस्थ",
      "Potato___Early_blight": "प्रारंभिक झुलसा",
      "Potato___Late_blight": "उत्तरवर्ती झुलसा",
      "Potato___healthy": "स्वस्थ",
      "Raspberry___healthy": "स्वस्थ",
      "Soybean___healthy": "स्वस्थ",
      "Squash___Powdery_mildew": "चूर्णिल आसिता",
      "Strawberry___Leaf_scorch": "पत्ती झुलसा",
      "Strawberry___healthy": "स्वस्थ",
      "Tomato___Bacterial_spot": "जीवाणु धब्बा",
      "Tomato___Early_blight": "प्रारंभिक झुलसा",
      "Tomato___Late_blight": "उत्तरवर्ती झुलसा",
      "Tomato___Leaf_Mold": "पत्ती फफूंद",
      "Tomato___Septoria_leaf_spot": "सेप्टोरिया पत्ती धब्बा",
      "Tomato___Spider_mites Two-spotted_spider_mite": "मकड़ी कण",
      "Tomato___Target_Spot": "लक्ष्य धब्बा",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "पीली पत्ती कर्ल वायरस",
      "Tomato___Tomato_mosaic_virus": "मोज़ेक वायरस",
      "Tomato___healthy": "स्वस्थ"
    },

    "treatments": {
      "Corn___Common_Rust": "कवकनाशी लगाएं और संक्रमित पत्तियों को हटाएं।",
      "Corn___Gray_Leaf_Spot": "पर्णीय कवकनाशी का उपयोग करें।",
      "Corn___Healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Corn___Northern_Leaf_Blight": "शुरुआती अवस्था में कवकनाशी का छिड़काव करें।",
      "Potato___Early_Blight": "कॉपर कवकनाशी लगाएं।",
      "Potato___Healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Potato___Late_Blight": "तुरंत कवकनाशी का उपयोग करें।",
      "Rice___Brown_Spot": "पोटाश उर्वरक और कवकनाशी लगाएं।",
      "Rice___Healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Rice___Leaf_Blast": "ब्लास्ट-प्रतिरोधी बीज और कवकनाशी का उपयोग करें।",
      "Rice___Neck_Blast": "ट्राइसाइक्लाजोल कवकनाशी लगाएं।",
      "Wheat___Brown_Rust": "जंग रोधी कवकनाशी लगाएं।",
      "Wheat___Healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Wheat___Yellow_Rust": "जल्दी कवकनाशी का छिड़काव करें।",
      "Sugarcane__Red_Rot": "संक्रमित गन्ने हटाएं और कवकनाशी लगाएं।",
      "Sugarcane__Healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Sugarcane__Bacterial Blight": "जीवाणुनाशक का छिड़काव करें।",
      "Apple___Apple_scab": "नियमित रूप से कवकनाशी लगाएं।",
      "Apple___Black_rot": "संक्रमित फल और शाखाएं हटाएं।",
      "Apple___Cedar_apple_rust": "सल्फर कवकनाशी का उपयोग करें।",
      "Apple___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Blueberry___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Cherry_(including_sour)___Powdery_mildew": "सल्फर-आधारित कवकनाशी का छिड़काव करें।",
      "Cherry_(including_sour)___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "पर्णीय कवकनाशी का उपयोग करें।",
      "Corn_(maize)___Common_rust_": "कवकनाशी लगाएं और संक्रमित पत्तियों को हटाएं।",
      "Corn_(maize)___Northern_Leaf_Blight": "शुरुआती अवस्था में कवकनाशी का छिड़काव करें।",
      "Corn_(maize)___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Grape___Black_rot": "कवकनाशी का उपयोग करें और संक्रमित अंगूर हटाएं।",
      "Grape___Esca_(Black_Measles)": "संक्रमित लकड़ी हटाएं।",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "कॉपर कवकनाशी लगाएं।",
      "Grape___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Orange___Haunglongbing_(Citrus_greening)": "कोई पूर्ण इलाज नहीं। संक्रमित पेड़ हटाएं।",
      "Peach___Bacterial_spot": "कॉपर स्प्रे का उपयोग करें।",
      "Peach___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Pepper,_bell___Bacterial_spot": "कॉपर-आधारित जीवाणुनाशक का उपयोग करें।",
      "Pepper,_bell___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Potato___Early_blight": "कॉपर कवकनाशी लगाएं।",
      "Potato___Late_blight": "तुरंत कवकनाशी का उपयोग करें।",
      "Potato___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Raspberry___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Soybean___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Squash___Powdery_mildew": "सल्फर या नीम तेल लगाएं।",
      "Strawberry___Leaf_scorch": "संक्रमित पत्तियां हटाएं और कवकनाशी लगाएं।",
      "Strawberry___healthy": "किसी उपचार की आवश्यकता नहीं।",
      "Tomato___Bacterial_spot": "कॉपर-आधारित जीवाणुनाशक का उपयोग करें।",
      "Tomato___Early_blight": "कवकनाशी लगाएं और संक्रमित पत्तियां हटाएं।",
      "Tomato___Late_blight": "तुरंत कवकनाशी लगाएं।",
      "Tomato___Leaf_Mold": "वायु संचार बढ़ाएं और नमी कम करें।",
      "Tomato___Septoria_leaf_spot": "संक्रमित पत्तियां हटाएं और कवकनाशी लगाएं।",
      "Tomato___Spider_mites Two-spotted_spider_mite": "माइटिसाइड या नीम तेल का उपयोग करें।",
      "Tomato___Target_Spot": "कवकनाशी लगाएं।",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "संक्रमित पौधे हटाएं। कोई इलाज नहीं।",
      "Tomato___Tomato_mosaic_virus": "संक्रमित पौधे तुरंत हटाएं। उपकरण कीटाणुरहित करें।",
      "Tomato___healthy": "किसी उपचार की आवश्यकता नहीं।"
    },

    "preventions": {
      "Corn___Common_Rust": "प्रतिरोधी किस्मों का उपयोग करें और भीड़भाड़ से बचें।",
      "Corn___Gray_Leaf_Spot": "फसल चक्र अपनाएं और फसल अवशेष हटाएं।",
      "Corn___Healthy": "उचित सिंचाई और पोषक तत्व बनाए रखें।",
      "Corn___Northern_Leaf_Blight": "प्रतिरोधी संकर और फसल चक्र का उपयोग करें।",
      "Potato___Early_Blight": "ऊपर से पानी देने से बचें और फसल चक्र अपनाएं।",
      "Potato___Healthy": "संतुलित उर्वरक और सिंचाई का उपयोग करें।",
      "Potato___Late_Blight": "पत्तियों को सूखा रखें और वायु प्रवाह बढ़ाएं।",
      "Rice___Brown_Spot": "पोषक तत्वों की कमी से बचें।",
      "Rice___Healthy": "पानी और पोषक तत्वों को ठीक से बनाए रखें।",
      "Rice___Leaf_Blast": "अत्यधिक नाइट्रोजन उर्वरक से बचें।",
      "Rice___Neck_Blast": "उचित दूरी और सिंचाई बनाए रखें।",
      "Wheat___Brown_Rust": "प्रतिरोधी गेहूं किस्मों का उपयोग करें।",
      "Wheat___Healthy": "उचित खेत प्रबंधन का उपयोग करें।",
      "Wheat___Yellow_Rust": "प्रतिरोधी किस्में उगाएं।",
      "Sugarcane__Red_Rot": "रोग मुक्त रोपण सामग्री का उपयोग करें।",
      "Sugarcane__Healthy": "मिट्टी की उर्वरता बनाए रखें।",
      "Sugarcane__Bacterial Blight": "जलभराव और संक्रमित बीजों से बचें।",
      "Apple___Apple_scab": "गिरी हुई पत्तियां हटाएं और पेड़ों की छंटाई करें।",
      "Apple___Black_rot": "बाग की स्वच्छता बनाए रखें।",
      "Apple___Cedar_apple_rust": "आस-पास के देवदार के पेड़ हटाएं।",
      "Apple___healthy": "उचित बाग देखभाल बनाए रखें।",
      "Blueberry___healthy": "उचित मिट्टी अम्लता और पानी सुनिश्चित करें।",
      "Cherry_(including_sour)___Powdery_mildew": "वायु प्रवाह बढ़ाएं और नमी से बचें।",
      "Cherry_(including_sour)___healthy": "नियमित छंटाई करें और उचित सिंचाई करें।",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "फसल चक्र अपनाएं और अवशेष हटाएं।",
      "Corn_(maize)___Common_rust_": "प्रतिरोधी किस्मों का उपयोग करें।",
      "Corn_(maize)___Northern_Leaf_Blight": "प्रतिरोधी संकर का उपयोग करें।",
      "Corn_(maize)___healthy": "उचित सिंचाई और पोषक तत्व बनाए रखें।",
      "Grape___Black_rot": "वायु प्रवाह के लिए बेलों की छंटाई करें।",
      "Grape___Esca_(Black_Measles)": "गीले मौसम में छंटाई के घावों से बचें।",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "अंगूर के बाग की स्वच्छता में सुधार करें।",
      "Grape___healthy": "संतुलित पोषण बनाए रखें।",
      "Orange___Haunglongbing_(Citrus_greening)": "साइलिड कीटों को नियंत्रित करें। रोग मुक्त पौधों का उपयोग करें।",
      "Peach___Bacterial_spot": "प्रतिरोधी किस्मों का उपयोग करें।",
      "Peach___healthy": "उचित छंटाई बनाए रखें।",
      "Pepper,_bell___Bacterial_spot": "गीली पत्तियों से बचें और साफ बीजों का उपयोग करें।",
      "Pepper,_bell___healthy": "उचित पानी देने की तकनीक का उपयोग करें।",
      "Potato___Early_blight": "ऊपर से पानी देने से बचें और फसल चक्र अपनाएं।",
      "Potato___Late_blight": "पत्तियों को सूखा रखें और वायु प्रवाह बढ़ाएं।",
      "Potato___healthy": "संतुलित उर्वरक और सिंचाई का उपयोग करें।",
      "Raspberry___healthy": "उचित दूरी और छंटाई बनाए रखें।",
      "Soybean___healthy": "फसल चक्र अपनाएं।",
      "Squash___Powdery_mildew": "अच्छा वायु संचार सुनिश्चित करें।",
      "Strawberry___Leaf_scorch": "पौधों के आधार पर पानी दें, ऊपर से सिंचाई से बचें।",
      "Strawberry___healthy": "उचित दूरी बनाए रखें और खरपतवार हटाएं।",
      "Tomato___Bacterial_spot": "रोग मुक्त बीजों का उपयोग करें। ऊपर से पानी देने से बचें।",
      "Tomato___Early_blight": "फसल चक्र अपनाएं और मल्च का उपयोग करें।",
      "Tomato___Late_blight": "पत्तियों को सूखा रखें और वायु प्रवाह बढ़ाएं।",
      "Tomato___Leaf_Mold": "नमी कम करें और वेंटिलेशन बढ़ाएं।",
      "Tomato___Septoria_leaf_spot": "ऊपर से सिंचाई से बचें। निचली पत्तियां हटाएं।",
      "Tomato___Spider_mites Two-spotted_spider_mite": "उचित नमी बनाए रखें। लाभकारी कीड़ों का परिचय दें।",
      "Tomato___Target_Spot": "उचित दूरी सुनिश्चित करें और ऊपर से पानी देने से बचें।",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "पीले चिपचिपे जाल से सफेद मक्खियों को नियंत्रित करें।",
      "Tomato___Tomato_mosaic_virus": "बागवानी उपकरणों को कीटाणुरहित करें। वायरस मुक्त बीजों का उपयोग करें।",
      "Tomato___healthy": "संतुलित उर्वरक और उचित पानी बनाए रखें।"
    }
  },
  virtualfarm: {
    header: {
      badge: "🌾 3डी फार्म विज़ुअलाइज़ेशन",
      title: "वर्चुअल फार्म अनुभव",
      subtitle: "3डी में अपने फार्म का अन्वेषण करें वास्तविक समय के मौसमी बदलावों और मौसम प्रभावों के साथ"
    },
    seasonController: {
      title: "मौसम नियंत्रक",
      summer: "गर्मी",
      monsoon: "बरसात",
      winter: "सर्दी",
      autumn: "शरद ऋतु"
    },
    seasonDescriptions: {
      summer: "सुनहरी धूप - पौधे जीवंत हरे रंग के साथ पनपते हैं।",
      monsoon: "भारी वर्षा - गहरी हरी पत्तियों के साथ नई वृद्धि।",
      winter: "ठंडा और ठंढा - पौधे सदाबहार सर्दियों के रंग दिखाते हैं।",
      autumn: "कटाई का मौसम - पौधे शरद ऋतु के रंगों में बदल जाते हैं!"
    },
    climate: {
      temp: "तापमान",
      humidity: "आर्द्रता"
    },
    weather: {
      sunny: "☀️ धूप",
      rainy: "🌧️ बारिश",
      snowy: "❄️ बर्फ"
    },
    stats: {
      totalPlants: "कुल पौधे",
      plants: "पौधे",
      farmArea: "फार्म क्षेत्र",
      meters: "मीटर",
      currentSeason: "वर्तमान मौसम",
      performance: "प्रदर्शन",
      fpsTarget: "एफपीएस लक्ष्य"
    },
    loading: {
      model: "3डी मॉडल लोड हो रहा है...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "मौसम बदलें",
      resetView: "दृश्य रीसेट करें",
      toggleInfo: "जानकारी टॉगल करें"
    },
    messages: {
      seasonChanged: "मौसम बदलकर {{season}} हो गया",
      weatherUpdated: "मौसम अपडेट हुआ",
      farmReady: "फार्म अन्वेषण के लिए तैयार है"
    },
    tooltips: {
      rotate: "दृश्य घुमाएं",
      zoom: "ज़ूम इन/आउट करें",
      pan: "फार्म के पार पैन करें"
    }
  },
  cropRotation: {
  header: {
    badge: "एआई-संचालित फसल चक्र योजनाकार",
    title: "फसल चक्र प्रणाली",
    subtitle: "अधिकतम उपज और मिट्टी स्वास्थ्य के लिए अपनी फसल चक्र की योजना बनाएं"
  },
  popularCrops: "लोकप्रिय फसलें",
  form: {
    selectCrop: "फसल चुनें",
    chooseCrop: "फसल चुनें",
    numSeasons: "मौसमों की संख्या"
  },
  seasons: {
    one: "1 मौसम",
    two: "2 मौसम",
    three: "3 मौसम (1 वर्ष)",
    four: "4 मौसम",
    six: "6 मौसम (2 वर्ष)"
  },
  buttons: {
    planning: "योजना बन रही है...",
    generate: "फसल चक्र योजना बनाएं"
  },
  errors: {
    selectCrop: "कृपया एक फसल चुनें",
    requestFailed: "फसल चक्र योजना प्राप्त करने में विफल"
  },
  result: {
    title: "फसल चक्र योजना",
    currentCrop: "वर्तमान फसल",
    phase: "चरण",
    best: "सर्वोत्तम",
    bestChoice: "सर्वोत्तम विकल्प"
  },
  phases: {
    kharif: "खरीफ",
    rabi: "रबी",
    summer: "ग्रीष्म ऋतु",
    winter: "शीत ऋतु",
    autumn: "शरद ऋतु",
    annual: "वार्षिक"
  },
  benefits: {
    title: "लाभ",
    soilHealth: {
      title: "मिट्टी का स्वास्थ्य",
      desc: "पोषक तत्वों की कमी को रोकता है"
    },
    pestControl: {
      title: "कीट नियंत्रण",
      desc: "रोग चक्र को तोड़ता है"
    },
    waterEfficiency: {
      title: "जल दक्षता",
      desc: "उपयोग को अनुकूलित करता है"
    },
    higherYields: {
      title: "उच्च उपज",
      desc: "उत्पादकता बढ़ाता है"
    }
  },
  howItWorks: {
    title: "यह कैसे काम करता है",
    selectCrop: {
      title: "फसल चुनें",
      desc: "50+ फसलों में से चुनें"
    },
    aiAnalysis: {
      title: "एआई विश्लेषण",
      desc: "ऐतिहासिक डेटा का विश्लेषण करता है"
    },
    viewCycle: {
      title: "चक्र देखें",
      desc: "चक्र योजना देखें"
    }
  },
  crops: {
    "Rice": "धान/चावल",
    "Wheat": "गेहूं",
    "Maize": "मक्का",
    "Sugarcane": "गन्ना",
    "Cotton": "कपास",
    "Potato": "आलू",
    "Turmeric": "हल्दी",
    "Banana": "केला",
    "Groundnut": "मूंगफली",
    "Onion": "प्याज",
    "Arecanut": "सुपारी",
    "Arhar/Tur": "अरहर",
    "Black pepper": "काली मिर्च",
    "Cashewnut": "काजू",
    "Coconut": "नारियल",
    "Cowpea(Lobia)": "लोबिया",
    "Dry chillies": "सूखी मिर्च",
    "Ginger": "अदरक",
    "Moong(Green Gram)": "मूंग",
    "Oilseeds total": "तिलहन",
    "Other Kharif pulses": "अन्य खरीफ दलहन",
    "Other oilseeds": "अन्य तिलहन",
    "Rapeseed & Mustard": "सरसों",
    "Sesamum": "तिल",
    "Sunflower": "सूरजमुखी",
    "Sweet potato": "शकरकंद",
    "Tapioca": "कसावा",
    "Urad": "उड़द",
    "Bajra": "बाजरा",
    "Castor seed": "अरंडी",
    "Coriander": "धनिया",
    "Garlic": "लहसुन",
    "Gram": "चना",
    "Guar seed": "ग्वार",
    "Horse-gram": "कुल्थी",
    "Jowar": "ज्वार",
    "Linseed": "अलसी",
    "Masoor": "मसूर",
    "Mesta": "मेस्ता",
    "Niger seed": "रामतिल",
    "Other Rabi pulses": "अन्य रबी दलहन",
    "Ragi": "रागी",
    "Safflower": "कुसुम",
    "Sannhamp": "सनई",
    "Small millets": "छोटे मोटे अनाज",
    "Soyabean": "सोयाबीन",
    "Tobacco": "तम्बाकू",
    "Peas & beans (Pulses)": "मटर और सेम",
    "Jute": "जूट",
    "Barley": "जौ",
    "Khesari": "खेसारी",
    "Moth": "मोठ",
    "Cardamom": "इलायची"
  }
},
    weather: {
      badge: "🌤️ आपके स्थान के आधार पर मौसम विश्लेषण",
      title: "स्थान मौसम विश्लेषण",
      subtitle: "वास्तविक समय मौसम डेटा विश्लेषण",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 मेरा स्थान",
      refresh: "ताज़ा करें",
      searchPlaceholder: "शहर का नाम दर्ज करें...",
      search: "खोजें",
      currentLocation: "वर्तमान स्थान",
      updated: "अपडेट किया गया",
      fetchingWeather: "मौसम डेटा प्राप्त किया जा रहा है...",
      unableToGetLocation: "आपका स्थान प्राप्त नहीं कर सकता। कृपया लोकेशन सेवाएं चालू करें।",
      geolocationNotSupported: "आपका ब्राउज़र जियोलोकेशन का समर्थन नहीं करता है",
      invalidCoordinates: "अमान्य निर्देशांक। कृपया पुनः प्रयास करें।",
      cityNotFound: "शहर नहीं मिला। कृपया शहर का नाम जांचें।",
      requestTimeout: "अनुरोध समय समाप्त। कृपया पुनः प्रयास करें।",
      currentWeather: "वर्तमान मौसम",
      fiveDayForecast: "5 दिवसीय पूर्वानुमान",
      feelsLike: "एहसास होता है",
      humidity: "आर्द्रता",
      windSpeed: "हवा की गति",
      pressure: "दबाव",
      cloudCover: "बादलों का आवरण",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      rain: "बारिश (1 घंटा)",
      snow: "बर्फबारी (1 घंटा)",
      airQuality: "वायु गुणवत्ता सूचकांक",
      airQuality1: "अच्छा - बाहरी गतिविधियों के लिए उत्तम",
      airQuality2: "सामान्य - स्वीकार्य वायु गुणवत्ता",
      airQuality3: "मध्यम - संवेदनशील लोग बाहरी समय सीमित करें",
      airQuality4: "खराब - बाहरी गतिविधियां सीमित करें",
      airQuality5: "बहुत खराब - घर के अंदर रहें",
      forecastTitle: "5 दिवसीय मौसम पूर्वानुमान",
      high: "उच्च",
      low: "निम्न",
      tempCard: "तापमान",
      tempDesc: "वास्तविक समय डेटा",
      humidityCard: "आर्द्रता",
      humidityDesc: "सटीक माप",
      windCard: "हवा की गति",
      windDesc: "सटीक रीडिंग",
      coverageCard: "कवरेज",
      coverageDesc: "विश्वव्यापी"
    }



    }
  },
  kn: {
    translation: {
       nav: {
    home: "ಮುಖಪುಟ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    cropRecommendation: "ಬೆಳೆ ಶಿಫಾರಸು",
    cropRecommendationDesc: "ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನದ ಆಧಾರದ ಮೇಲೆ AI-ಚಾಲಿತ ಬೆಳೆ ಸಲಹೆಗಳು",
    diseasePrediction: "ರೋಗ ಮುನ್ಸೂಚನೆ",
    diseasePredictionDesc: "AI ಬಳಸಿಕೊಂಡು ಎಲೆ ಚಿತ್ರಗಳಿಂದ ರೋಗಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ",
    farmVisualization: "ಫಾರ್ಮ್ ದೃಶ್ಯೀಕರಣ",
    farmVisualizationDesc: "ಬೆಳೆಗಳು, ನೀರಾವರಿ ಮತ್ತು ಕಾಲೋಚಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ಸಂವಾದಾತ್ಮಕ 3D ಫಾರ್ಮ್ ದೃಶ್ಯೀಕರಣ",
    cropRotation: "ಬೆಳೆ ಸುತ್ತು",
    cropRotationDesc: "ಗರಿಷ್ಠ ಇಳುವರಿಗಾಗಿ ಬೆಳೆ ಸುತ್ತು ಯೋಜಿಸಿ",
    language: "ಭಾಷೆ",
    toggleTheme: "ಥೀಮ್ ಬದಲಾಯಿಸಿ",
    toggleMenu: "ಮೆನು ಬದಲಾಯಿಸಿ"
  },
    // Add this to your existing kn.js
home: {
  hero: {
    badge: "🇮🇳 AI-ಚಾಲಿತ ಕೃಷಿ",
    title: "ಬುದ್ಧಿವಂತ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    highlight: "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ",
    subtitle: "ಸ್ಮಾರ್ಟ್ ನಿರ್ಧಾರಗಳು ಮತ್ತು ಉತ್ತಮ ಸುಗ್ಗಿಗಾಗಿ ನಿಮ್ಮ AI ಕೃಷಿ ಸಹಾಯಕ",
    imageAlt: "ಡ್ರೋನ್ ನೊಂದಿಗೆ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ",
    aiBadge: "AI ವಿಶ್ಲೇಷಣೆ"
  },
  benefits: {
    free: {
      title: "ಉಪಯೋಗಿಸಲು ಉಚಿತ",
      desc: "ಯಾವುದೇ ಗುಪ್ತ ವೆಚ್ಚಗಳಿಲ್ಲ"
    },
    languages: {
      title: "6 ಭಾಷೆಗಳು",
      desc: "ತಮಿಳು, ಹಿಂದಿ & ಹೆಚ್ಚು"
    },
    noSignup: {
      title: "ಸೈನ್ ಅಪ್ ಇಲ್ಲ",
      desc: "ತಕ್ಷಣದ ಪ್ರವೇಶ"
    },
    access: {
      title: "24/7 ಪ್ರವೇಶ",
      desc: "ಯಾವಾಗ ಬೇಕಾದರೂ, ಎಲ್ಲಿಯಾದರೂ"
    }
  },
  carousel: {
    title: "ಬೆಳೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    subtitle: "AI-ಚಾಲಿತ ಒಳನೋಟಗಳು ಮತ್ತು ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ನಮ್ಮ ವ್ಯಾಪಕವಾದ ಬೆಳೆಗಳ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ"
  },
  howItWorks: {
    title: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    subtitle: "ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ ಡೇಟಾ-ಚಾಲಿತ ಕೃಷಿ ಬುದ್ಧಿಮತ್ತೆ",
    step1: {
      title: "ಬೆಳೆ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ",
      desc: "ನಿಮ್ಮ ಮಣ್ಣಿನ ನಿಯತಾಂಕಗಳು, ಸ್ಥಳ ಮತ್ತು ಬೆಳೆ ಆದ್ಯತೆಗಳನ್ನು ಇನ್ಪುಟ್ ಮಾಡಿ",
      alt: "ಬೆಳೆ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ ಐಕಾನ್"
    },
    step2: {
      title: "AI ಪ್ರಕ್ರಿಯೆ",
      desc: "ನಮ್ಮ AI ನಿಮ್ಮ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿದ ಶಿಫಾರಸುಗಳನ್ನು ರಚಿಸುತ್ತದೆ",
      alt: "AI ಪ್ರಕ್ರಿಯೆ ಐಕಾನ್"
    },
    step3: {
      title: "ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ",
      desc: "ತಕ್ಷಣದ ಬೆಳೆ ಮುನ್ನೋಟಗಳು, ರೋಗ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಗೊಬ್ಬರ ಸಲಹೆಯನ್ನು ಸ್ವೀಕರಿಸಿ",
      alt: "ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ ಐಕಾನ್"
    }
  },
  features: {
    badge: "ಸ್ಮಾರ್ಟ್ ವೈಶಿಷ್ಟ್ಯಗಳು",
    heading: "AI-ಚಾಲಿತ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    subheading: "ಪ್ರತಿಯೊಂದು ಕೃಷಿ ಅಗತ್ಯಕ್ಕೂ ಡೇಟಾ-ಚಾಲಿತ ಬುದ್ಧಿಮತ್ತೆ",
    cropRecommendationDesc: "ಯಂತ್ರ ಕಲಿಕೆ ಕ್ರಮಾವಳಿಗಳು ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳು, ತಾಪಮಾನ, ಆರ್ದ್ರತೆ ಮತ್ತು ಮಳೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಅತ್ಯಂತ ಲಾಭದಾಯಕ ಬೆಳೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತವೆ.",
    diseasePredictionDesc: "ತಕ್ಷಣದ ರೋಗ ಪತ್ತೆಗಾಗಿ ಎಲೆಗಳ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ. CNN ಬಳಸಿ ಚಿಕಿತ್ಸಾ ಸಲಹೆಗಳು ಮತ್ತು ತಡೆಗಟ್ಟುವ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
    farmVisualizationDesc: "ಉತ್ತಮ ಯೋಜನೆಗಾಗಿ ಬೆಳೆಗಳು, ನೀರಾವರಿ ಮತ್ತು ಕಾಲೋಚಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ಸಂವಾದಾತ್ಮಕ 3D ಫಾರ್ಮ್ ದೃಶ್ಯೀಕರಣ.",
    cropRotationDesc: "AI-ಚಾಲಿತ ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ಗರಿಷ್ಠ ಇಳುವರಿ ಮತ್ತು ಮಣ್ಣಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಬೆಳೆ ಸುತ್ತು ಯೋಜಿಸಿ."
  }
},
crops: {
  grape: "ದ್ರಾಕ್ಷಿ",
  peach: "ಪೀಚ್",
  bellPepper: "ದೊಡ್ಡ ಮೆಣಸಿನಕಾಯಿ",
  strawberry: "ಸ್ಟ್ರಾಬೆರಿ",
  tea: "ಚಹಾ",
  tomato: "ಟೊಮ್ಯಾಟೊ",
  potato: "ಆಲೂಗಡ್ಡೆ",
  corn: "ಮೆಕ್ಕೆಜೋಳ",
  apple: "ಸೇಬು",
  bean: "ಬೀನ್ಸ್",
  cherry: "ಚೆರ್ರಿ"
},
carousel: {
  scrollingText: "ನಿರಂತರವಾಗಿ ಸ್ಕ್ರೋಲಿಂಗ್ • ವಿರಾಮಗೊಳಿಸಲು ಹೋವರ್ ಮಾಡಿ"
},
      footer: {
        description: 'ಭಾರತೀಯ ರೈತರನ್ನು ಅವರ ಸ್ವಂತ ಭಾಷೆಯಲ್ಲಿ AI ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಸಶಕ್ತಗೊಳಿಸುವುದು.',
        features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
        schemes: 'ಯೋಜನೆಗಳು',
        contact: 'ಸಂಪರ್ಕ',
        rights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
        made: 'ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ❤️ ಜೊತೆ ಮಾಡಲಾಗಿದೆ'
      },
      cropRecommendation: {
        title: 'ಬೆಳೆ ಶಿಫಾರಸು ವ್ಯವಸ್ಥೆ',
        subtitle: 'ಉತ್ತಮ ಬೆಳೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಮಣ್ಣು ಮತ್ತು ಋತುವಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
        aiBadge: '🌱 AI-ಚಾಲಿತ ಶಿಫಾರಸು',
        soilType: 'ಮಣ್ಣಿನ ವಿಧ',
        season: 'ಋತು',
        temperature: 'ತಾಪಮಾನ (°C)',
        humidity: 'ಆರ್ದ್ರತೆ (%)',
        selectSoil: 'ಮಣ್ಣಿನ ವಿಧವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        selectSeason: 'ಋತುವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        predictButton: 'ಉತ್ತಮ ಬೆಳೆಯನ್ನು ಊಹಿಸಿ',
        predicting: 'ಊಹಿಸುತ್ತಿದೆ...',
        errorPrefix: 'ಮುನ್ಸೂಚನೆ ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
        optimalTemp: '15-45°C ಸೂಕ್ತ',
        optimalHumidity: '40-80% ಸೂಕ್ತ',
        soilCount: '29 ಮಣ್ಣಿನ ವಿಧಗಳು',
        recommendedCrop: 'ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆ',
        basedOn: 'ನಿಮ್ಮ',
        soilCondition: 'ಮಣ್ಣು ಮತ್ತು',
        seasonCondition: 'ಋತುವಿನ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದಲ್ಲಿ, ಬೆಳೆಯಲು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ',
        soilTypes: {
          'Alluvial soil': 'ಮೆಕ್ಕಲು ಮಣ್ಣು',
          'Loamy soil': 'ಲೋಮಿ ಮಣ್ಣು',
          'Clay soil': 'ಜೇಡಿಮಣ್ಣು',
          'Well-drained soil': 'ಚೆನ್ನಾಗಿ ಬಸಿಯುವ ಮಣ್ಣು',
          'Red soil': 'ಕೆಂಪು ಮಣ್ಣು',
          'Clay loamy soil': 'ಜೇಡಿ ಲೋಮಿ ಮಣ್ಣು',
          'Sandy loamy soil': 'ಮರಳು ಲೋಮಿ ಮಣ್ಣು',
          'Black soil': 'ಕಪ್ಪು ಮಣ್ಣು',
          'Sandy soil': 'ಮರಳು ಮಣ್ಣು',
          'Shallow black soil': 'ಆಳವಿಲ್ಲದ ಕಪ್ಪು ಮಣ್ಣು',
          'Black cotton soil': 'ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು',
          'Cotton soil': 'ಹತ್ತಿ ಮಣ್ಣು',
          'Medium black soil': 'ಮಧ್ಯಮ ಕಪ್ಪು ಮಣ್ಣು',
          'Heavy black soil': 'ಭಾರೀ ಕಪ್ಪು ಮಣ್ಣು',
          'Light soil': 'ಲಘು ಮಣ್ಣು',
          'Heavy soil': 'ಭಾರೀ ಮಣ್ಣು',
          'Deep soil': 'ಆಳವಾದ ಮಣ್ಣು',
          'Sandy clay loamy soil': 'ಮರಳು ಜೇಡಿ ಲೋಮಿ ಮಣ್ಣು',
          'Silty loamy soil': 'ಮೆಕ್ಕಲು ಲೋಮಿ ಮಣ್ಣು',
          'Salty clay loamy soil': 'ಉಪ್ಪು ಜೇಡಿ ಲೋಮಿ ಮಣ್ಣು',
          'Red loamy soil': 'ಕೆಂಪು ಲೋಮಿ ಮಣ್ಣು',
          'Brown loamy soil': 'ಕಂದು ಲೋಮಿ ಮಣ್ಣು',
          'Laterite soil': 'ಲ್ಯಾಟರೈಟ್ ಮಣ್ಣು',
          'Well-drained Loamy soil': 'ಚೆನ್ನಾಗಿ ಬಸಿಯುವ ಲೋಮಿ ಮಣ್ಣು',
          'Light loamy soil': 'ಲಘು ಲೋಮಿ ಮಣ್ಣು',
          'Friable soil': 'ಪುಡಿಪುಡಿಯಾಗುವ ಮಣ್ಣು',
          'Well-grained deep loamy moist soil': 'ಉತ್ತಮ ಕಣಗಳ ಆಳವಾದ ತೇವಾಂಶದ ಲೋಮಿ ಮಣ್ಣು',
          'Red lateritic loamy soil': 'ಕೆಂಪು ಲ್ಯಾಟರೈಟ್ ಲೋಮಿ ಮಣ್ಣು',
          'Rich red loamy soil': 'ಸಮೃದ್ಧ ಕೆಂಪು ಲೋಮಿ ಮಣ್ಣು'
        },
        crops: {
          'Rice': 'ಭತ್ತ', 'Wheat': 'ಗೋಧಿ', 'Maize': 'ಮೆಕ್ಕೆಜೋಳ', 'Sorghum': 'ಜೋಳ',
          'Pearl millet': 'ಸಜ್ಜೆ', 'Ragi': 'ರಾಗಿ', 'Panivaragu': 'ಪನಿವರಗು',
          'Samai': 'ಸಾಮೈ', 'Thinai': 'ತಿನೈ', 'Varagu': 'ವರಗು', 'Kudiraivali': 'ಕುದಿರೈವಾಲಿ',
          'Blackgram': 'ಉದ್ದಿನ ಬೇಳೆ', 'Greengram': 'ಹೆಸರು ಬೇಳೆ', 'Cowpea': 'ಅಲಸಂಡೆ',
          'Bengalgram': 'ಕಡಲೆ', 'Horsegram': 'ಹುರುಳಿ', 'Redgram': 'ತೊಗರಿ ಬೇಳೆ',
          'Soyabean': 'ಸೋಯಾಬೀನ್', 'Groundnut': 'ಕಡಲೆಕಾಯಿ', 'Sunflower': 'ಸೂರ್ಯಕಾಂತಿ',
          'Gingely': 'ಎಳ್ಳು', 'Castor': 'ಹರಳೆಣ್ಣೆ', 'Cotton': 'ಹತ್ತಿ', 'Jute': 'ಸೆಣಬು',
          'Sugarcane': 'ಕಬ್ಬು', 'Sugarbeet': 'ಸಕ್ಕರೆ ಬೀಟ್', 'Tomato': 'ಟೊಮೇಟೊ',
          'Onion': 'ಈರುಳ್ಳಿ', 'Chillies': 'ಮೆಣಸಿನಕಾಯಿ', 'Cabbage': 'ಎಲೆಕೋಸು',
          'Bhendi': 'ಬೆಂಡೆಕಾಯಿ', 'Brinjal': 'ಬದನೆಕಾಯಿ', 'Capsicum': 'ದೊಡ್ಡ ಮೆಣಸಿನಕಾಯಿ',
          'Pumpkin': 'ಕುಂಬಳಕಾಯಿ', 'Snake gourd': 'ಪಡವಲಕಾಯಿ', 'Ribbed gourd': 'ಹೀರೆಕಾಯಿ',
          'Bottle gourd': 'ಸೋರೆಕಾಯಿ', 'Bitter gourd': 'ಹಾಗಲಕಾಯಿ', 'Ash gourd': 'ಬೂದು ಗುಮ್ಮಡಿ',
          'Cucumber': 'ಸೌತೆಕಾಯಿ', 'Watermelon': 'ಕಲ್ಲಂಗಡಿ', 'Muskmelon': 'ಖರ್ಬೂಜ',
          'Tinda': 'ಟಿಂಡಾ', 'Chowchow': 'ಚೌಚೌ', 'Cluster bean': 'ಗೋರಿಕಾಯಿ',
          'Vegetable cowpea': 'ಚವಳಿ', 'French bean': 'ಫ್ರೆಂಚ್ ಬೀನ್ಸ್', 'Peas': 'ಬಟಾಣಿ',
          'Annual moringa': 'ನುಗ್ಗೆಕಾಯಿ', 'Carrot': 'ಕ್ಯಾರೆಟ್', 'Beetroot': 'ಬೀಟ್ರೂಟ್',
          'Radish': 'ಮೂಲಂಗಿ', 'Sweet potato': 'ಸಿಹಿ ಗೆಣಸು', 'Tapoica': 'ಮರಗೆಣಸು',
          'Elephant foot yam': 'ಸುವರ್ಣ ಗಡ್ಡೆ', 'Cauliflower': 'ಹೂಕೋಸು', 'Small onion': 'ಚಿಕ್ಕ ಈರುಳ್ಳಿ'
        },
        
        seasons: {
          'Rainy': 'ಮಳೆಗಾಲ', 'Winter': 'ಚಳಿಗಾಲ', 'Summer': 'ಬೇಸಿಗೆ'
        }
      },
    cropDisease: {
    "aiBadge": "AI ರೋಗ ಪತ್ತೆ",
    "title": "ಬೆಳೆ ರೋಗ ಪತ್ತೆ ವ್ಯವಸ್ಥೆ",
    "subtitle": "ರೋಗಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ಚಿಕಿತ್ಸೆಯ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಬೆಳೆಯ ಎಲೆಯ ಫೋಟೋವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "uploadImage": "ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "uploadButton": "ಫೈಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "dragDrop": "ಅಥವಾ ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿ",
    "fileRequirements": "PNG, JPG, GIF (5MB ವರೆಗೆ)",
    "tip": "ಪ್ರೋ ಸಲಹೆ",
    "tipText": "ಉತ್ತಮ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ, ನೈಸರ್ಗಿಕ ಬೆಳಕಿನಲ್ಲಿ ಬಾಧಿತ ಎಲೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ",
    "analyzing": "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
    "analyzeButton": "ಎಲೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
    "healthyPlant": "ಆರೋಗ್ಯಕರ ಸಸ್ಯ",
    "diseaseDetected": "ರೋಗ ಪತ್ತೆಯಾಗಿದೆ",
    "confidence": "ವಿಶ್ವಾಸಾರ್ಹತೆ",
    "treatment": "ಚಿಕಿತ್ಸೆ",
    "prevention": "ತಡೆಗಟ್ಟುವಿಕೆ",
    "healthyTip": "ಆರೋಗ್ಯಕರವಾಗಿಡಿ",
    "healthyTipText": "ನಿಮ್ಮ ಉತ್ತಮ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಮುಂದುವರಿಸಿ. ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ತಡೆಗಟ್ಟುವ ಆರೈಕೆ ಸಸ್ಯದ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "newAnalysis": "ಹೊಸ ವಿಶ್ಲೇಷಣೆ",
    "uploadAnother": "ಮತ್ತೊಂದು ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "diseasesCovered": "ರೋಗ ಕವರೇಜ್",
    "diseases": "ರೋಗಗಳು",
    "cropsSupported": "ಬೆಂಬಲಿತ ಬೆಳೆಗಳು",
    "crops": "ಬೆಳೆಗಳು",
    "responseTime": "ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ",
    "quickAnalysis": "ತ್ವರಿತ ವಿಶ್ಲೇಷಣೆ",
    "invalidFileType": "ದಯವಿಟ್ಟು ಮಾನ್ಯ ಚಿತ್ರ ಫೈಲ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "fileTooLarge": "ಫೈಲ್ ಗಾತ್ರ 5MB ಗಿಂತ ಕಡಿಮೆ ಇರಬೇಕು",
    "noImageSelected": "ದಯವಿಟ್ಟು ಮೊದಲು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "predictionFailed": "ಮುನ್ಸೂಚನೆ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    "errorPrefix": "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ವಿಫಲವಾಗಿದೆ. ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    "onCrop": "ಮೇಲೆ",

    "diseaseNames": {
      "Corn___Common_Rust": "ಸಾಮಾನ್ಯ ತುಕ್ಕು",
      "Corn___Gray_Leaf_Spot": "ಬೂದು ಎಲೆ ಚುಕ್ಕೆ",
      "Corn___Healthy": "ಆರೋಗ್ಯಕರ",
      "Corn___Northern_Leaf_Blight": "ಉತ್ತರ ಎಲೆ ಸುಡು ರೋಗ",
      "Potato___Early_Blight": "ಆರಂಭಿಕ ಸುಡು ರೋಗ",
      "Potato___Healthy": "ಆರೋಗ್ಯಕರ",
      "Potato___Late_Blight": "ತಡವಾದ ಸುಡು ರೋಗ",
      "Rice___Brown_Spot": "ಕಂದು ಚುಕ್ಕೆ",
      "Rice___Healthy": "ಆರೋಗ್ಯಕರ",
      "Rice___Leaf_Blast": "ಎಲೆ ಸ್ಫೋಟ",
      "Rice___Neck_Blast": "ಕುತ್ತಿಗೆ ಸ್ಫೋಟ",
      "Wheat___Brown_Rust": "ಕಂದು ತುಕ್ಕು",
      "Wheat___Healthy": "ಆರೋಗ್ಯಕರ",
      "Wheat___Yellow_Rust": "ಹಳದಿ ತುಕ್ಕು",
      "Sugarcane__Red_Rot": "ಕೆಂಪು ಕೊಳೆತ",
      "Sugarcane__Healthy": "ಆರೋಗ್ಯಕರ",
      "Sugarcane__Bacterial Blight": "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಸುಡು ರೋಗ",
      "Apple___Apple_scab": "ಸೇಬಿನ ಹುರುಪು",
      "Apple___Black_rot": "ಕಪ್ಪು ಕೊಳೆತ",
      "Apple___Cedar_apple_rust": "ಸೀಡರ್ ಸೇಬು ತುಕ್ಕು",
      "Apple___healthy": "ಆರೋಗ್ಯಕರ",
      "Blueberry___healthy": "ಆರೋಗ್ಯಕರ",
      "Cherry_(including_sour)___Powdery_mildew": "ಪುಡಿ ಬೂಷ್ಟು",
      "Cherry_(including_sour)___healthy": "ಆರೋಗ್ಯಕರ",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ಬೂದು ಎಲೆ ಚುಕ್ಕೆ",
      "Corn_(maize)___Common_rust_": "ಸಾಮಾನ್ಯ ತುಕ್ಕು",
      "Corn_(maize)___Northern_Leaf_Blight": "ಉತ್ತರ ಎಲೆ ಸುಡು ರೋಗ",
      "Corn_(maize)___healthy": "ಆರೋಗ್ಯಕರ",
      "Grape___Black_rot": "ಕಪ್ಪು ಕೊಳೆತ",
      "Grape___Esca_(Black_Measles)": "ಎಸ್ಕ ರೋಗ",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ಎಲೆ ಸುಡು ರೋಗ",
      "Grape___healthy": "ಆರೋಗ್ಯಕರ",
      "Orange___Haunglongbing_(Citrus_greening)": "ಸಿಟ್ರಸ್ ಗ್ರೀನಿಂಗ್",
      "Peach___Bacterial_spot": "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಚುಕ್ಕೆ",
      "Peach___healthy": "ಆರೋಗ್ಯಕರ",
      "Pepper,_bell___Bacterial_spot": "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಚುಕ್ಕೆ",
      "Pepper,_bell___healthy": "ಆರೋಗ್ಯಕರ",
      "Potato___Early_blight": "ಆರಂಭಿಕ ಸುಡು ರೋಗ",
      "Potato___Late_blight": "ತಡವಾದ ಸುಡು ರೋಗ",
      "Potato___healthy": "ಆರೋಗ್ಯಕರ",
      "Raspberry___healthy": "ಆರೋಗ್ಯಕರ",
      "Soybean___healthy": "ಆರೋಗ್ಯಕರ",
      "Squash___Powdery_mildew": "ಪುಡಿ ಬೂಷ್ಟು",
      "Strawberry___Leaf_scorch": "ಎಲೆ ಸುಟ್ಟು ಹೋಗುವಿಕೆ",
      "Strawberry___healthy": "ಆರೋಗ್ಯಕರ",
      "Tomato___Bacterial_spot": "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಚುಕ್ಕೆ",
      "Tomato___Early_blight": "ಆರಂಭಿಕ ಸುಡು ರೋಗ",
      "Tomato___Late_blight": "ತಡವಾದ ಸುಡು ರೋಗ",
      "Tomato___Leaf_Mold": "ಎಲೆ ಬೂಷ್ಟು",
      "Tomato___Septoria_leaf_spot": "ಸೆಪ್ಟೋರಿಯಾ ಎಲೆ ಚುಕ್ಕೆ",
      "Tomato___Spider_mites Two-spotted_spider_mite": "ಸ್ಪೈಡರ್ ಮಿಟೆ",
      "Tomato___Target_Spot": "ಗುರಿ ಚುಕ್ಕೆ",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "ಹಳದಿ ಎಲೆ ಸುರುಳಿ ವೈರಸ್",
      "Tomato___Tomato_mosaic_virus": "ಮೊಸಾಯಿಕ್ ವೈರಸ್",
      "Tomato___healthy": "ಆರೋಗ್ಯಕರ"
    },

    "treatments": {
      "Corn___Common_Rust": "ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ ಮತ್ತು ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Corn___Gray_Leaf_Spot": "ಎಲೆ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಿ.",
      "Corn___Healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Corn___Northern_Leaf_Blight": "ಆರಂಭಿಕ ಹಂತಗಳಲ್ಲಿ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಸಿಂಪಡಿಸಿ.",
      "Potato___Early_Blight": "ತಾಮ್ರದ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Potato___Healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Potato___Late_Blight": "ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಿ.",
      "Rice___Brown_Spot": "ಪೊಟ್ಯಾಸಿಯಮ್ ಗೊಬ್ಬರ ಮತ್ತು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Rice___Healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Rice___Leaf_Blast": "ಸ್ಫೋಟ-ನಿರೋಧಕ ಬೀಜಗಳು ಮತ್ತು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಬಳಸಿ.",
      "Rice___Neck_Blast": "ಟ್ರೈಸೈಕ್ಲಾಜೋಲ್ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Wheat___Brown_Rust": "ತುಕ್ಕು ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಅನ್ವಯಿಸಿ.",
      "Wheat___Healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Wheat___Yellow_Rust": "ಮೊದಲೇ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಸಿಂಪಡಿಸಿ.",
      "Sugarcane__Red_Rot": "ಸೋಂಕಿತ ಕಬ್ಬನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Sugarcane__Healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Sugarcane__Bacterial Blight": "ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕ ಸಿಂಪಡಿಕೆಯನ್ನು ಬಳಸಿ.",
      "Apple___Apple_scab": "ನಿಯಮಿತವಾಗಿ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Apple___Black_rot": "ಸೋಂಕಿತ ಹಣ್ಣುಗಳು ಮತ್ತು ಕೊಂಬೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Apple___Cedar_apple_rust": "ಸಲ್ಫರ್ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಬಳಸಿ.",
      "Apple___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Blueberry___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Cherry_(including_sour)___Powdery_mildew": "ಸಲ್ಫರ್-ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಸಿಂಪಡಿಸಿ.",
      "Cherry_(including_sour)___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ಎಲೆ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಿ.",
      "Corn_(maize)___Common_rust_": "ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ ಮತ್ತು ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Corn_(maize)___Northern_Leaf_Blight": "ಆರಂಭಿಕ ಹಂತಗಳಲ್ಲಿ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಸಿಂಪಡಿಸಿ.",
      "Corn_(maize)___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Grape___Black_rot": "ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಬಳಸಿ ಮತ್ತು ಸೋಂಕಿತ ದ್ರಾಕ್ಷಿಯನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Grape___Esca_(Black_Measles)": "ಸೋಂಕಿತ ಮರವನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ತಾಮ್ರದ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Grape___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Orange___Haunglongbing_(Citrus_greening)": "ಸಂಪೂರ್ಣ ಚಿಕಿತ್ಸೆ ಇಲ್ಲ. ಸೋಂಕಿತ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Peach___Bacterial_spot": "ತಾಮ್ರದ ಸಿಂಪಡಿಕೆಯನ್ನು ಬಳಸಿ.",
      "Peach___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Pepper,_bell___Bacterial_spot": "ತಾಮ್ರ-ಆಧಾರಿತ ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕವನ್ನು ಬಳಸಿ.",
      "Pepper,_bell___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Potato___Early_blight": "ತಾಮ್ರದ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Potato___Late_blight": "ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಿ.",
      "Potato___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Raspberry___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Soybean___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Squash___Powdery_mildew": "ಸಲ್ಫರ್ ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆಯನ್ನು ಅನ್ವಯಿಸಿ.",
      "Strawberry___Leaf_scorch": "ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Strawberry___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ.",
      "Tomato___Bacterial_spot": "ತಾಮ್ರ-ಆಧಾರಿತ ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕವನ್ನು ಬಳಸಿ.",
      "Tomato___Early_blight": "ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ ಮತ್ತು ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Tomato___Late_blight": "ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Tomato___Leaf_Mold": "ಗಾಳಿಯ ಪ್ರಸರಣವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ತೇವಾಂಶವನ್ನು ಕಡಿಮೆ ಮಾಡಿ.",
      "Tomato___Septoria_leaf_spot": "ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "ಮೈಟಿಸೈಡ್ ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆಯನ್ನು ಬಳಸಿ.",
      "Tomato___Target_Spot": "ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಚಿಕಿತ್ಸೆ ಇಲ್ಲ.",
      "Tomato___Tomato_mosaic_virus": "ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತಕ್ಷಣ ತೆಗೆದುಹಾಕಿ. ಉಪಕರಣಗಳನ್ನು ಸೋಂಕುರಹಿತಗೊಳಿಸಿ.",
      "Tomato___healthy": "ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ."
    },

    "preventions": {
      "Corn___Common_Rust": "ನಿರೋಧಕ ಪ್ರಭೇದಗಳನ್ನು ಬಳಸಿ ಮತ್ತು ದಟ್ಟಣೆಯನ್ನು ತಪ್ಪಿಸಿ.",
      "Corn___Gray_Leaf_Spot": "ಬೆಳೆಗಳನ್ನು ಸುತ್ತಿಸಿ ಮತ್ತು ಬೆಳೆಯ ಅವಶೇಷಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Corn___Healthy": "ಸರಿಯಾದ ನೀರಾವರಿ ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Corn___Northern_Leaf_Blight": "ನಿರೋಧಕ ಸಂಕರಗಳು ಮತ್ತು ಬೆಳೆ ಸುತ್ತುವಿಕೆಯನ್ನು ಬಳಸಿ.",
      "Potato___Early_Blight": "ಮೇಲಿನ ನೀರುಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಬೆಳೆಗಳನ್ನು ಸುತ್ತಿಸಿ.",
      "Potato___Healthy": "ಸಮತೋಲಿತ ಗೊಬ್ಬರಗಳು ಮತ್ತು ನೀರಾವರಿಯನ್ನು ಬಳಸಿ.",
      "Potato___Late_Blight": "ಎಲೆಗಳನ್ನು ಒಣಗಿಸಿ ಮತ್ತು ಗಾಳಿಯ ಹರಿವನ್ನು ಸುಧಾರಿಸಿ.",
      "Rice___Brown_Spot": "ಪೋಷಕಾಂಶಗಳ ಕೊರತೆಯನ್ನು ತಪ್ಪಿಸಿ.",
      "Rice___Healthy": "ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಿ.",
      "Rice___Leaf_Blast": "ಅತಿಯಾದ ಸಾರಜನಕ ಗೊಬ್ಬರವನ್ನು ತಪ್ಪಿಸಿ.",
      "Rice___Neck_Blast": "ಸರಿಯಾದ ಅಂತರ ಮತ್ತು ನೀರಾವರಿಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Wheat___Brown_Rust": "ನಿರೋಧಕ ಗೋಧಿ ಪ್ರಭೇದಗಳನ್ನು ಬಳಸಿ.",
      "Wheat___Healthy": "ಸರಿಯಾದ ಕ್ಷೇತ್ರ ನಿರ್ವಹಣೆಯನ್ನು ಬಳಸಿ.",
      "Wheat___Yellow_Rust": "ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬೆಳೆಸಿ.",
      "Sugarcane__Red_Rot": "ರೋಗ-ಮುಕ್ತ ನೆಟ್ಟ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ.",
      "Sugarcane__Healthy": "ಮಣ್ಣಿನ ಫಲವತ್ತತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
      "Sugarcane__Bacterial Blight": "ನೀರು ನಿಲ್ಲುವುದು ಮತ್ತು ಸೋಂಕಿತ ಬೀಜಗಳನ್ನು ತಪ್ಪಿಸಿ.",
      "Apple___Apple_scab": "ಬಿದ್ದ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಮರಗಳನ್ನು ಸಮರುವಿಕೆ ಮಾಡಿ.",
      "Apple___Black_rot": "ತೋಟದ ನೈರ್ಮಲ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
      "Apple___Cedar_apple_rust": "ಹತ್ತಿರದ ಸೀಡರ್ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Apple___healthy": "ಸರಿಯಾದ ತೋಟದ ಆರೈಕೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Blueberry___healthy": "ಸರಿಯಾದ ಮಣ್ಣಿನ ಆಮ್ಲೀಯತೆ ಮತ್ತು ನೀರುಹಾಕುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
      "Cherry_(including_sour)___Powdery_mildew": "ಗಾಳಿಯ ಹರಿವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ತೇವಾಂಶವನ್ನು ತಪ್ಪಿಸಿ.",
      "Cherry_(including_sour)___healthy": "ನಿಯಮಿತವಾಗಿ ಸಮರುವಿಕೆ ಮಾಡಿ ಮತ್ತು ಸರಿಯಾಗಿ ನೀರಾವರಿ ಮಾಡಿ.",
      "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "ಬೆಳೆಗಳನ್ನು ಸುತ್ತಿಸಿ ಮತ್ತು ಅವಶೇಷಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Corn_(maize)___Common_rust_": "ನಿರೋಧಕ ಪ್ರಭೇದಗಳನ್ನು ಬಳಸಿ.",
      "Corn_(maize)___Northern_Leaf_Blight": "ನಿರೋಧಕ ಸಂಕರಗಳನ್ನು ಬಳಸಿ.",
      "Corn_(maize)___healthy": "ಸರಿಯಾದ ನೀರಾವರಿ ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Grape___Black_rot": "ಗಾಳಿಯ ಹರಿವಿಗಾಗಿ ಬಳ್ಳಿಗಳನ್ನು ಸಮರುವಿಕೆ ಮಾಡಿ.",
      "Grape___Esca_(Black_Measles)": "ತೇವದ ಹವಾಮಾನದಲ್ಲಿ ಸಮರುವಿಕೆಯ ಗಾಯಗಳನ್ನು ತಪ್ಪಿಸಿ.",
      "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "ದ್ರಾಕ್ಷಿ ತೋಟದ ನೈರ್ಮಲ್ಯವನ್ನು ಸುಧಾರಿಸಿ.",
      "Grape___healthy": "ಸಮತೋಲಿತ ಪೋಷಣೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Orange___Haunglongbing_(Citrus_greening)": "ಸೈಲಿಡ್ ಕೀಟಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ. ರೋಗ-ಮುಕ್ತ ಸಸ್ಯಗಳನ್ನು ಬಳಸಿ.",
      "Peach___Bacterial_spot": "ನಿರೋಧಕ ಪ್ರಭೇದಗಳನ್ನು ಬಳಸಿ.",
      "Peach___healthy": "ಸರಿಯಾದ ಸಮರುವಿಕೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Pepper,_bell___Bacterial_spot": "ತೇವದ ಎಲೆಗಳನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಸ್ವಚ್ಛ ಬೀಜಗಳನ್ನು ಬಳಸಿ.",
      "Pepper,_bell___healthy": "ಸರಿಯಾದ ನೀರುಹಾಕುವ ತಂತ್ರಗಳನ್ನು ಬಳಸಿ.",
      "Potato___Early_blight": "ಮೇಲಿನ ನೀರುಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಬೆಳೆಗಳನ್ನು ಸುತ್ತಿಸಿ.",
      "Potato___Late_blight": "ಎಲೆಗಳನ್ನು ಒಣಗಿಸಿ ಮತ್ತು ಗಾಳಿಯ ಹರಿವನ್ನು ಸುಧಾರಿಸಿ.",
      "Potato___healthy": "ಸಮತೋಲಿತ ಗೊಬ್ಬರಗಳು ಮತ್ತು ನೀರಾವರಿಯನ್ನು ಬಳಸಿ.",
      "Raspberry___healthy": "ಸರಿಯಾದ ಅಂತರ ಮತ್ತು ಸಮರುವಿಕೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      "Soybean___healthy": "ಬೆಳೆ ಸುತ್ತುವಿಕೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ.",
      "Squash___Powdery_mildew": "ಉತ್ತಮ ಗಾಳಿಯ ಪ್ರಸರಣವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
      "Strawberry___Leaf_scorch": "ಸಸ್ಯಗಳ ಬುಡದಲ್ಲಿ ನೀರು ಹಾಕಿ, ಮೇಲಿನ ನೀರಾವರಿಯನ್ನು ತಪ್ಪಿಸಿ.",
      "Strawberry___healthy": "ಸರಿಯಾದ ಅಂತರವನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಕಳೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Tomato___Bacterial_spot": "ರೋಗ-ಮುಕ್ತ ಬೀಜಗಳನ್ನು ಬಳಸಿ. ಮೇಲಿನ ನೀರುಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ.",
      "Tomato___Early_blight": "ಬೆಳೆಗಳನ್ನು ಸುತ್ತಿಸಿ ಮತ್ತು ಮಲ್ಚ್ ಬಳಸಿ.",
      "Tomato___Late_blight": "ಎಲೆಗಳನ್ನು ಒಣಗಿಸಿ ಮತ್ತು ಗಾಳಿಯ ಹರಿವನ್ನು ಸುಧಾರಿಸಿ.",
      "Tomato___Leaf_Mold": "ತೇವಾಂಶವನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ವಾತಾಯನವನ್ನು ಸುಧಾರಿಸಿ.",
      "Tomato___Septoria_leaf_spot": "ಮೇಲಿನ ನೀರಾವರಿಯನ್ನು ತಪ್ಪಿಸಿ. ಕೆಳಗಿನ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
      "Tomato___Spider_mites Two-spotted_spider_mite": "ಸರಿಯಾದ ತೇವಾಂಶವನ್ನು ನಿರ್ವಹಿಸಿ. ಪ್ರಯೋಜನಕಾರಿ ಕೀಟಗಳನ್ನು ಪರಿಚಯಿಸಿ.",
      "Tomato___Target_Spot": "ಸರಿಯಾದ ಅಂತರವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ಮೇಲಿನ ನೀರುಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ.",
      "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "ಹಳದಿ ಅಂಟಿಕೊಳ್ಳುವ ಬಲೆಗಳಿಂದ ಬಿಳಿನೊಣಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.",
      "Tomato___Tomato_mosaic_virus": "ತೋಟಗಾರಿಕಾ ಉಪಕರಣಗಳನ್ನು ಸೋಂಕುರಹಿತಗೊಳಿಸಿ. ವೈರಸ್-ಮುಕ್ತ ಬೀಜಗಳನ್ನು ಬಳಸಿ.",
      "Tomato___healthy": "ಸಮತೋಲಿತ ಫಲೀಕರಣ ಮತ್ತು ಸರಿಯಾದ ನೀರುಹಾಕುವುದನ್ನು ನಿರ್ವಹಿಸಿ."
    }
  },
  virtualfarm: {
    header: {
      badge: "🌾 3ಡಿ ಫಾರ್ಮ್ ವಿಷುಲೈಸೇಶನ್",
      title: "ವರ್ಚುವಲ್ ಫಾರ್ಮ್ ಅನುಭವ",
      subtitle: "ನೈಜ-ಸಮಯದ ಋತುಮಾನದ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಹವಾಮಾನ ಪರಿಣಾಮಗಳೊಂದಿಗೆ 3ಡಿಯಲ್ಲಿ ನಿಮ್ಮ ಫಾರ್ಮ್ ಅನ್ನು ಅನ್ವೇಷಿಸಿ"
    },
    seasonController: {
      title: "ಋತು ನಿಯಂತ್ರಕ",
      summer: "ಬೇಸಿಗೆ",
      monsoon: "ಮಳೆಗಾಲ",
      winter: "ಚಳಿಗಾಲ",
      autumn: "ಶರತ್ಕಾಲ"
    },
    seasonDescriptions: {
      summer: "ಚಿನ್ನದ ಸೂರ್ಯನ ಬೆಳಕು - ಸಸ್ಯಗಳು ರೋಮಾಂಚಕ ಹಸಿರು ಬಣ್ಣಗಳೊಂದಿಗೆ ಬೆಳೆಯುತ್ತವೆ.",
      monsoon: "ಭಾರೀ ಮಳೆ - ಆಳವಾದ ಹಸಿರು ಎಲೆಗಳೊಂದಿಗೆ ತಾಜಾ ಪುನರ್ವಳಿಕೆ.",
      winter: "ಶೀತ ಮತ್ತು ಹಿಮಾವೃತ - ಸಸ್ಯಗಳು ನಿತ್ಯಹರಿದ್ವರ್ಣ ಚಳಿಗಾಲದ ಛಾಯೆಗಳನ್ನು ತೋರಿಸುತ್ತವೆ.",
      autumn: "ಸುಗ್ಗಿಯ ಕಾಲ - ಸಸ್ಯಗಳು ಶರತ್ಕಾಲದ ಬಣ್ಣಗಳೊಂದಿಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತವೆ!"
    },
    climate: {
      temp: "ತಾಪಮಾನ",
      humidity: "ಆರ್ದ್ರತೆ"
    },
    weather: {
      sunny: "☀️ ಬಿಸಿಲು",
      rainy: "🌧️ ಮಳೆ",
      snowy: "❄️ ಹಿಮ"
    },
    stats: {
      totalPlants: "ಒಟ್ಟು ಸಸ್ಯಗಳು",
      plants: "ಸಸ್ಯಗಳು",
      farmArea: "ಫಾರ್ಮ್ ಪ್ರದೇಶ",
      meters: "ಮೀಟರ್ಗಳು",
      currentSeason: "ಪ್ರಸ್ತುತ ಋತು",
      performance: "ಕಾರ್ಯಕ್ಷಮತೆ",
      fpsTarget: "ಎಫ್ಪಿಎಸ್ ಗುರಿ"
    },
    loading: {
      model: "3ಡಿ ಮಾದರಿಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
      plantFile: "plant.glb"
    },
    buttons: {
      changeSeason: "ಋತು ಬದಲಾಯಿಸಿ",
      resetView: "ದೃಶ್ಯವನ್ನು ಮರುಹೊಂದಿಸಿ",
      toggleInfo: "ಮಾಹಿತಿ ಟಾಗಲ್ ಮಾಡಿ"
    },
    messages: {
      seasonChanged: "ಋತುವನ್ನು {{season}} ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ",
      weatherUpdated: "ಹವಾಮಾನವನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ",
      farmReady: "ಫಾರ್ಮ್ ಅನ್ವೇಷಿಸಲು ಸಿದ್ಧವಾಗಿದೆ"
    },
    tooltips: {
      rotate: "ದೃಶ್ಯವನ್ನು ತಿರುಗಿಸಿ",
      zoom: "ಜೂಮ್ ಇನ್/ಔಟ್",
      pan: "ಫಾರ್ಮ್ ಅಡ್ಡಲಾಗಿ ಪ್ಯಾನ್ ಮಾಡಿ"
    }
  },
  cropRotation: {
    "header": {
      "badge": "AI-ಚಾಲಿತ ಬೆಳೆ ಸುತ್ತು ಯೋಜಕ",
      "title": "ಬೆಳೆ ಸುತ್ತು ವ್ಯವಸ್ಥೆ",
      "subtitle": "ಗರಿಷ್ಠ ಇಳುವರಿ ಮತ್ತು ಮಣ್ಣಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಬೆಳೆ ಸುತ್ತು ಯೋಜಿಸಿ"
    },
    "popularCrops": "ಜನಪ್ರಿಯ ಬೆಳೆಗಳು",
    "form": {
      "selectCrop": "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
      "chooseCrop": "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
      "numSeasons": "ಋತುಗಳ ಸಂಖ್ಯೆ"
    },
    "seasons": {
      "one": "1 ಋತು",
      "two": "2 ಋತುಗಳು",
      "three": "3 ಋತುಗಳು (1 ವರ್ಷ)",
      "four": "4 ಋತುಗಳು",
      "six": "6 ಋತುಗಳು (2 ವರ್ಷಗಳು)"
    },
    "buttons": {
      "planning": "ಯೋಜಿಸಲಾಗುತ್ತಿದೆ...",
      "generate": "ಬೆಳೆ ಸುತ್ತು ಯೋಜನೆಯನ್ನು ರಚಿಸಿ"
    },
    "errors": {
      "selectCrop": "ದಯವಿಟ್ಟು ಒಂದು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "requestFailed": "ಬೆಳೆ ಸುತ್ತು ಯೋಜನೆಯನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ"
    },
    "result": {
      "title": "ಬೆಳೆ ಸುತ್ತು ಯೋಜನೆ",
      "currentCrop": "ಪ್ರಸ್ತುತ ಬೆಳೆ",
      "phase": "ಹಂತ",
      "best": "ಅತ್ಯುತ್ತಮ",
      "bestChoice": "ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ"
    },
    "phases": {
      "kharif": "ಖರೀಫ್",
      "rabi": "ರಬೀ",
      "summer": "ಬೇಸಿಗೆ ಋತು",
      "winter": "ಚಳಿಗಾಲದ ಋತು",
      "autumn": "ಶರತ್ಕಾಲ",
      "annual": "ವಾರ್ಷಿಕ"
    },
    "benefits": {
      "title": "ಲಾಭಗಳು",
      "soilHealth": {
        "title": "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
        "desc": "ಪೋಷಕಾಂಶಗಳ ಕೊರತೆಯನ್ನು ತಡೆಯುತ್ತದೆ"
      },
      "pestControl": {
        "title": "ಕೀಟ ನಿಯಂತ್ರಣ",
        "desc": "ರೋಗದ ಚಕ್ರವನ್ನು ಮುರಿಯುತ್ತದೆ"
      },
      "waterEfficiency": {
        "title": "ನೀರಿನ ದಕ್ಷತೆ",
        "desc": "ಬಳಕೆಯನ್ನು ಸಮರ್ಥವಾಗಿ ಮಾಡುತ್ತದೆ"
      },
      "higherYields": {
        "title": "ಹೆಚ್ಚಿನ ಇಳುವರಿ",
        "desc": "ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ"
      }
    },
    "howItWorks": {
      "title": "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      "selectCrop": {
        "title": "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
        "desc": "50+ ಬೆಳೆಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ"
      },
      "aiAnalysis": {
        "title": "AI ವಿಶ್ಲೇಷಣೆ",
        "desc": "ಐತಿಹಾಸಿಕ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ"
      },
      "viewCycle": {
        "title": "ಸುತ್ತು ವೀಕ್ಷಿಸಿ",
        "desc": "ಸುತ್ತು ಯೋಜನೆಯನ್ನು ನೋಡಿ"
      }
    },
    "crops": {
      "Rice": "ಭತ್ತ/ಅಕ್ಕಿ",
      "Wheat": "ಗೋಧಿ",
      "Maize": "ಮೆಕ್ಕೆಜೋಳ",
      "Sugarcane": "ಕಬ್ಬು",
      "Cotton": "ಹತ್ತಿ",
      "Potato": "ಆಲೂಗಡ್ಡೆ",
      "Turmeric": "ಅರಿಶಿನ",
      "Banana": "ಬಾಳೆ",
      "Groundnut": "ಕಡಲೆಕಾಯಿ",
      "Onion": "ಈರುಳ್ಳಿ",
      "Arecanut": "ಅಡಕೆ",
      "Arhar/Tur": "ತೊಗರಿ",
      "Black pepper": "ಕರಿಮೆಣಸು",
      "Cashewnut": "ಗೋಡಂಬಿ",
      "Coconut": "ತೆಂಗು",
      "Cowpea(Lobia)": "ಅಲಸಂಡೆ",
      "Dry chillies": "ಒಣಗಿದ ಮೆಣಸಿನಕಾಯಿ",
      "Ginger": "ಶುಂಠಿ",
      "Moong(Green Gram)": "ಹೆಸರು ಕಾಳು",
      "Oilseeds total": "ಎಣ್ಣೆ ಬೀಜಗಳು",
      "Other Kharif pulses": "ಇತರ ಖರೀಫ್ ದ್ವಿದಳ ಧಾನ್ಯಗಳು",
      "Other oilseeds": "ಇತರ ಎಣ್ಣೆ ಬೀಜಗಳು",
      "Rapeseed & Mustard": "ಸಾಸಿವೆ",
      "Sesamum": "ಎಳ್ಳು",
      "Sunflower": "ಸೂರ್ಯಕಾಂತಿ",
      "Sweet potato": "ಸಿಹಿ ಆಲೂಗಡ್ಡೆ",
      "Tapioca": "ಮರಗೆಣಸು",
      "Urad": "ಉದ್ದಿನ ಬೇಳೆ",
      "Bajra": "ಸಜ್ಜೆ",
      "Castor seed": "ಹರಳು ಬೀಜ",
      "Coriander": "ಕೊತ್ತಂಬರಿ",
      "Garlic": "ಬೆಳ್ಳುಳ್ಳಿ",
      "Gram": "ಕಡಲೆ",
      "Guar seed": "ಗೋರಿಕಾಯಿ",
      "Horse-gram": "ಹುರುಳಿ",
      "Jowar": "ಜೋಳ",
      "Linseed": "ಅಗಸೆ ಬೀಜ",
      "Masoor": "ಮಸೂರ",
      "Mesta": "ಮೆಸ್ಟಾ",
      "Niger seed": "ರಾಮತಿಲ",
      "Other Rabi pulses": "ಇತರ ರಬೀ ದ್ವಿದಳ ಧಾನ್ಯಗಳು",
      "Ragi": "ರಾಗಿ",
      "Safflower": "ಕುಸುಬೆ",
      "Sannhamp": "ಸನ್ ಹೆಂಪ್",
      "Small millets": "ಸಣ್ಣ ಧಾನ್ಯಗಳು",
      "Soyabean": "ಸೋಯಾಬೀನ್",
      "Tobacco": "ಹೊಗೆಸೊಪ್ಪು",
      "Peas & beans (Pulses)": "ಬಟಾಣಿ ಮತ್ತು ಬೀನ್ಸ್",
      "Jute": "ಸೆಣಬು",
      "Barley": "ಬಾರ್ಲಿ",
      "Khesari": "ಖೇಸಾರಿ",
      "Moth": "ಮೋಠ್",
      "Cardamom": "ಏಲಕ್ಕಿ"
    }
  },

    weather: {
      badge: "🌤️ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಧರಿಸಿದ ಹವಾಮಾನ ವಿಶ್ಲೇಷಣೆ",
      title: "ಸ್ಥಳ ಹವಾಮಾನ ವಿಶ್ಲೇಷಣೆ",
      subtitle: "ನೈಜ-ಸಮಯದ ಹವಾಮಾನ ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ",
      celsiusToFahrenheit: "°C → °F",
      fahrenheitToCelsius: "°F → °C",
      myLocation: "📍 ನನ್ನ ಸ್ಥಳ",
      refresh: "ರಿಫ್ರೆಶ್",
      searchPlaceholder: "ನಗರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ...",
      search: "ಹುಡುಕಿ",
      currentLocation: "ಪ್ರಸ್ತುತ ಸ್ಥಳ",
      updated: "ನವೀಕರಿಸಲಾಗಿದೆ",
      fetchingWeather: "ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...",
      unableToGetLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ಥಳ ಸೇವೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ.",
      geolocationNotSupported: "ನಿಮ್ಮ ಬ್ರೌಸರ್ ಜಿಯೋಲೊಕೇಶನ್ ಅನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ",
      invalidCoordinates: "ಅಮಾನ್ಯ ನಿರ್ದೇಶಾಂಕಗಳು. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      cityNotFound: "ನಗರ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ನಗರದ ಹೆಸರನ್ನು ಪರಿಶೀಲಿಸಿ.",
      requestTimeout: "ವಿನಂತಿ ಸಮಯ ಮೀರಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      currentWeather: "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
      fiveDayForecast: "5 ದಿನಗಳ ಮುನ್ಸೂಚನೆ",
      feelsLike: "ಅನುಭವವಾಗುತ್ತದೆ",
      humidity: "ಆರ್ದ್ರತೆ",
      windSpeed: "ಗಾಳಿಯ ವೇಗ",
      pressure: "ಒತ್ತಡ",
      cloudCover: "ಮೋಡ ಆವರಣ",
      sunrise: "ಸೂರ್ಯೋದಯ",
      sunset: "ಸೂರ್ಯಾಸ್ತ",
      rain: "ಮಳೆ (1 ಗಂ)",
      snow: "ಹಿಮ (1 ಗಂ)",
      airQuality: "ವಾಯು ಗುಣಮಟ್ಟ ಸೂಚ್ಯಂಕ",
      airQuality1: "ಉತ್ತಮ - ಹೊರಾಂಗಣ ಚಟುವಟಿಕೆಗಳಿಗೆ ಪರಿಪೂರ್ಣ",
      airQuality2: "ಸಾಮಾನ್ಯ - ಸ್ವೀಕಾರಾರ್ಹ ವಾಯು ಗುಣಮಟ್ಟ",
      airQuality3: "ಮಧ್ಯಮ - ಸೂಕ್ಷ್ಮ ವ್ಯಕ್ತಿಗಳು ಹೊರಾಂಗಣ ಸಮಯವನ್ನು ಮಿತಿಗೊಳಿಸಬೇಕು",
      airQuality4: "ಕಳಪೆ - ಹೊರಾಂಗಣ ಚಟುವಟಿಕೆಗಳನ್ನು ಮಿತಿಗೊಳಿಸಿ",
      airQuality5: "ತುಂಬಾ ಕಳಪೆ - ಮನೆಯೊಳಗೆ ಇರಿ",
      forecastTitle: "5 ದಿನಗಳ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
      high: "ಹೆಚ್ಚಿನ",
      low: "ಕಡಿಮೆ",
      tempCard: "ತಾಪಮಾನ",
      tempDesc: "ನೈಜ-ಸಮಯದ ಡೇಟಾ",
      humidityCard: "ಆರ್ದ್ರತೆ",
      humidityDesc: "ನಿಖರ ಅಳತೆ",
      windCard: "ಗಾಳಿಯ ವೇಗ",
      windDesc: "ನಿಖರ ಓದುವಿಕೆಗಳು",
      coverageCard: "ವ್ಯಾಪ್ತಿ",
      coverageDesc: "ವಿಶ್ವಾದ್ಯಂತ"
    }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Use saved language from localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Save to localStorage whenever language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('selectedLanguage', lng);
});

export default i18n;