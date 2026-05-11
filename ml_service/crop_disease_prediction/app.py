from flask import Flask, request, jsonify
from flask_cors import CORS

import tensorflow as tf
import numpy as np
from PIL import Image

import json
import os

# ======================================
# FLASK SETUP
# ======================================

app = Flask(__name__)

CORS(app)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ======================================
# LOAD MODEL
# ======================================

model = tf.keras.models.load_model(
    "leaf_disease_model.h5"
)

# ======================================
# LOAD CLASS NAMES
# ======================================

with open("class_names.json", "r") as f:

    class_names = json.load(f)

# ======================================
# DISEASE DETAILS
# ======================================

disease_info = {

    # =====================================
    # CORN
    # =====================================

    "Corn___Common_Rust": {

        "treatment":
        "Apply fungicide and remove infected leaves.",

        "prevention":
        "Use resistant varieties and avoid overcrowding."
    },

    "Corn___Gray_Leaf_Spot": {

        "treatment":
        "Use foliar fungicides.",

        "prevention":
        "Rotate crops and remove crop residue."
    },

    "Corn___Healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain proper irrigation and nutrients."
    },

    "Corn___Northern_Leaf_Blight": {

        "treatment":
        "Spray fungicide during early stages.",

        "prevention":
        "Use resistant hybrids and crop rotation."
    },

    # =====================================
    # POTATO
    # =====================================

    "Potato___Early_Blight": {

        "treatment":
        "Apply copper fungicide.",

        "prevention":
        "Avoid overhead watering and rotate crops."
    },

    "Potato___Healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Use balanced fertilizers and irrigation."
    },

    "Potato___Late_Blight": {

        "treatment":
        "Use fungicides immediately.",

        "prevention":
        "Keep leaves dry and improve airflow."
    },

    # =====================================
    # RICE
    # =====================================

    "Rice___Brown_Spot": {

        "treatment":
        "Apply potassium fertilizer and fungicide.",

        "prevention":
        "Avoid nutrient deficiency."
    },

    "Rice___Healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain water and nutrients properly."
    },

    "Rice___Leaf_Blast": {

        "treatment":
        "Use blast-resistant seeds and fungicide.",

        "prevention":
        "Avoid excess nitrogen fertilizer."
    },

    "Rice___Neck_Blast": {

        "treatment":
        "Apply tricyclazole fungicide.",

        "prevention":
        "Maintain proper spacing and irrigation."
    },

    # =====================================
    # WHEAT
    # =====================================

    "Wheat___Brown_Rust": {

        "treatment":
        "Apply rust fungicides.",

        "prevention":
        "Use resistant wheat varieties."
    },

    "Wheat___Healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Use proper field management."
    },

    "Wheat___Yellow_Rust": {

        "treatment":
        "Spray fungicide early.",

        "prevention":
        "Grow resistant cultivars."
    },

    # =====================================
    # SUGARCANE
    # =====================================

    "Sugarcane__Red_Rot": {

        "treatment":
        "Remove infected canes and apply fungicide.",

        "prevention":
        "Use disease-free planting material."
    },

    "Sugarcane__Healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain soil fertility."
    },

    "Sugarcane__Bacterial Blight": {

        "treatment":
        "Use bactericide spray.",

        "prevention":
        "Avoid waterlogging and infected seeds."
    },

    # =====================================
    # APPLE
    # =====================================

    "Apple___Apple_scab": {

        "treatment":
        "Apply fungicide regularly.",

        "prevention":
        "Remove fallen leaves and prune trees."
    },

    "Apple___Black_rot": {

        "treatment":
        "Remove infected fruits and branches.",

        "prevention":
        "Maintain orchard sanitation."
    },

    "Apple___Cedar_apple_rust": {

        "treatment":
        "Use sulfur fungicide.",

        "prevention":
        "Remove nearby cedar trees."
    },

    "Apple___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain proper orchard care."
    },

    # =====================================
    # BLUEBERRY
    # =====================================

    "Blueberry___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Ensure proper soil acidity and watering."
    },

    # =====================================
    # CHERRY
    # =====================================

    "Cherry_(including_sour)___Powdery_mildew": {

        "treatment":
        "Spray sulfur-based fungicide.",

        "prevention":
        "Improve airflow and avoid humidity."
    },

    "Cherry_(including_sour)___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Prune regularly and irrigate properly."
    },

    # =====================================
    # GRAPE
    # =====================================

    "Grape___Black_rot": {

        "treatment":
        "Use fungicide and remove infected grapes.",

        "prevention":
        "Prune vines for airflow."
    },

    "Grape___Esca_(Black_Measles)": {

        "treatment":
        "Remove infected wood.",

        "prevention":
        "Avoid pruning wounds during wet weather."
    },

    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {

        "treatment":
        "Apply copper fungicide.",

        "prevention":
        "Improve vineyard sanitation."
    },

    "Grape___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain balanced nutrition."
    },

    # =====================================
    # ORANGE
    # =====================================

    "Orange___Haunglongbing_(Citrus_greening)": {

        "treatment":
        "No complete cure available.",

        "prevention":
        "Control psyllid insects and remove infected trees."
    },

    # =====================================
    # PEACH
    # =====================================

    "Peach___Bacterial_spot": {

        "treatment":
        "Apply copper spray.",

        "prevention":
        "Use resistant varieties."
    },

    "Peach___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain proper pruning."
    },

    # =====================================
    # PEPPER
    # =====================================

    "Pepper,_bell___Bacterial_spot": {

        "treatment":
        "Use copper-based bactericide.",

        "prevention":
        "Avoid wet foliage."
    },

    "Pepper,_bell___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Use proper watering techniques."
    },

    # =====================================
    # TOMATO
    # =====================================

    "Tomato___Bacterial_spot": {

        "treatment":
        "Use bactericide spray.",

        "prevention":
        "Avoid overhead watering."
    },

    "Tomato___Early_blight": {

        "treatment":
        "Apply fungicide and remove infected leaves.",

        "prevention":
        "Rotate crops and use mulch."
    },

    "Tomato___Late_blight": {

        "treatment":
        "Apply fungicide immediately.",

        "prevention":
        "Keep leaves dry and improve airflow."
    },

    "Tomato___Leaf_Mold": {

        "treatment":
        "Use fungicide spray.",

        "prevention":
        "Reduce humidity in greenhouse."
    },

    "Tomato___Septoria_leaf_spot": {

        "treatment":
        "Remove infected leaves and spray fungicide.",

        "prevention":
        "Avoid overhead irrigation."
    },

    "Tomato___Spider_mites Two-spotted_spider_mite": {

        "treatment":
        "Use miticide or neem oil.",

        "prevention":
        "Maintain proper humidity."
    },

    "Tomato___Target_Spot": {

        "treatment":
        "Apply fungicide.",

        "prevention":
        "Ensure proper spacing."
    },

    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {

        "treatment":
        "Remove infected plants.",

        "prevention":
        "Control whiteflies."
    },

    "Tomato___Tomato_mosaic_virus": {

        "treatment":
        "Remove infected plants immediately.",

        "prevention":
        "Disinfect gardening tools."
    },

    "Tomato___healthy": {

        "treatment":
        "No treatment needed.",

        "prevention":
        "Maintain balanced fertilization."
    }
}
# ======================================
# HOME ROUTE
# ======================================

@app.route("/")

def home():

    return "Leaf Disease Prediction API Running"

# ======================================
# PREDICTION ROUTE
# ======================================

@app.route("/predict", methods=["POST"])

def predict():

    # ==============================
    # CHECK IMAGE
    # ==============================

    if "image" not in request.files:

        return jsonify({

            "success": False,

            "message": "No image uploaded"
        })

    file = request.files["image"]

    # ==============================
    # SAVE IMAGE
    # ==============================

    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    file.save(filepath)

    # ==============================
    # PREPROCESS IMAGE
    # ==============================

    img = Image.open(filepath).convert("RGB")

    img = img.resize((224,224))

    img_array = np.array(img) / 255.0

    img_array = np.expand_dims(
        img_array,
        axis=0
    )

    # ==============================
    # MODEL PREDICTION
    # ==============================

    prediction = model.predict(img_array)

    predicted_index = np.argmax(prediction)

    predicted_class = class_names[predicted_index]

    confidence = float(
        np.max(prediction) * 100
    )

    # ==============================
    # GET DISEASE INFO
    # ==============================

    info = disease_info.get(

        predicted_class,

        {

            "treatment":
            "No treatment available.",

            "prevention":
            "No prevention available."
        }
    )

    # ==============================
    # RESPONSE
    # ==============================

    return jsonify({

        "success": True,

        "disease":
        predicted_class,

        "confidence":
        round(confidence, 2),

        "treatment":
        info["treatment"],

        "prevention":
        info["prevention"]
    })

if __name__ == "__main__":

    app.run(debug=True,port=5001)