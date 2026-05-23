from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import traceback

app = Flask(__name__)


CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})


try:
    model = joblib.load("model.pkl")
    le_soil = joblib.load("soil_encoder.pkl")
    le_season = joblib.load("season_encoder.pkl")
    le_crop = joblib.load("crop_encoder.pkl")
    print("Models loaded successfully!")
except Exception as e:
    print(f"Error loading models: {e}")

    model = None
    le_soil = None
    le_season = None
    le_crop = None

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'OK'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response, 200
    
    try:
        # Log received data for debugging
        print("Received data:", request.json)
        
        data = request.json
        
        soil = data.get('soil')
        season = data.get('season')
        temp = float(data.get('temp'))
        humidity = float(data.get('humidity'))
        
        # Validate inputs
        if not all([soil, season, temp, humidity]):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # For testing without actual models, return a mock response
        # Remove this block once your models are ready
        if model is None:
            mock_crops = {
                'Rainy': 'Rice',
                'Winter': 'Wheat', 
                'Summer': 'Maize'
            }
            crop = mock_crops.get(season, 'Rice')
            return jsonify({'recommended_crop': crop})
        
        # Encode inputs (your actual model code)
        soil_encoded = le_soil.transform([soil])[0]
        season_encoded = le_season.transform([season])[0]
        
        # Create feature array
        features = np.array([[soil_encoded, season_encoded, temp, humidity]])
        
        # Predict
        prediction = model.predict(features)
        crop = le_crop.inverse_transform(prediction)[0]
        
        response = jsonify({'recommended_crop': crop})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        print(traceback.format_exc())
        response = jsonify({'error': str(e)})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 400

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    response = jsonify({'status': 'ok', 'models_loaded': model is not None})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    # app.run(debug=True, port=5000, host='0.0.0.0')
    app.run(host="0.0.0.0", port=7860)
