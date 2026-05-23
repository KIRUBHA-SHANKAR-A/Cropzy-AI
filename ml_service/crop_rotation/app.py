from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

df = pd.read_csv("APY.csv")
df.columns = df.columns.str.strip()

df['Crop'] = df['Crop'].astype(str).str.strip()
df = df[df['Crop'] != 'nan']  # Remove any 'nan' strings
df = df[df['Crop'] != '']      # Remove empty strings

# Calculate average yield per season-crop
season_crops = df.groupby(["Season", "Crop"])["Yield"].mean().reset_index()
season_crops = season_crops.sort_values(by=["Season", "Yield"], ascending=False)

# Get all unique crops for autocomplete (ensure they're strings)
all_crops = sorted([str(crop).strip() for crop in df['Crop'].unique() if pd.notna(crop)])

print(f"✅ Loaded {len(df)} records with {len(all_crops)} unique crops")
print(f"📊 Sample crops: {all_crops[:10]}")

@app.route('/search-crops', methods=['GET'])
def search_crops():
    """Search crops for autocomplete"""
    query = request.args.get('q', '').lower().strip()
    if not query or len(query) < 2:
        return jsonify({'crops': []})
    
    # Filter crops that match the query
    matches = [crop for crop in all_crops if query in crop.lower()]
    return jsonify({'crops': matches[:10]})  # Return top 10 matches

@app.route('/recommend', methods=['POST'])
def recommend():
    """Get crop rotation recommendations"""
    try:
        data = request.get_json()
        start_crop = data.get('start_crop', '').lower().strip()
        num_seasons = int(data.get('num_seasons', 3))
        
        print(f"🔍 Searching for crop: '{start_crop}'")
        
        # Find the crop in dataset (case insensitive)
        df['Crop_lower'] = df['Crop'].str.lower().str.strip()
        crop_match = df[df['Crop_lower'] == start_crop]
        
        if crop_match.empty:
            # Try partial match for suggestions
            similar_crops = df[df['Crop_lower'].str.contains(start_crop[:3], na=False)]
            if not similar_crops.empty:
                suggestions = similar_crops['Crop'].unique()[:5].tolist()
                return jsonify({
                    'error': f"Crop '{start_crop}' not found",
                    'suggestions': suggestions
                }), 404
            else:
                return jsonify({'error': f"Crop '{start_crop}' not found in dataset"}), 404
        
        # Get primary season for this crop (most common)
        season_counts = crop_match['Season'].value_counts()
        start_season = season_counts.index[0].strip()
        
        # Get all unique seasons
        all_seasons = sorted([str(s).strip() for s in df['Season'].unique() if pd.notna(s)])
        
        # Create rotation plan
        try:
            current_season_idx = all_seasons.index(start_season)
        except ValueError:
            return jsonify({'error': f"Season '{start_season}' not found"}), 500
        
        recommendations = []
        
        for i in range(1, num_seasons + 1):
            # Calculate next season index
            next_idx = (current_season_idx + i) % len(all_seasons)
            next_season = all_seasons[next_idx]
            
            # Get top crops for that season
            season_data = season_crops[season_crops["Season"].str.strip() == next_season]
            top_crops = season_data.head(3)
            
            # Prepare recommendations with yields
            crops_list = []
            yields_list = []
            
            for _, row in top_crops.iterrows():
                crop_name = str(row['Crop']).strip()
                crops_list.append(crop_name)
                yields_list.append({
                    'crop': crop_name,
                    'yield': round(float(row['Yield']), 2) if pd.notna(row['Yield']) else 0
                })
            
            recommendations.append({
                'season': next_season,
                'recommended_crops': crops_list,
                'yields': yields_list
            })
        
        # Also grown in other seasons
        other_seasons = [str(s).strip() for s in season_counts.index[1:3] if len(season_counts) > 1]
        
        return jsonify({
            'success': True,
            'start_crop': start_crop,
            'start_season': start_season,
            'also_grown_in': other_seasons,
            'recommendations': recommendations
        })
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/crops', methods=['GET'])
def get_all_crops():
    """Get all available crops"""
    return jsonify({
        'count': len(all_crops),
        'crops': all_crops[:100]  # Return first 100 for performance
    })

@app.route('/seasons', methods=['GET'])
def get_seasons():
    """Get all seasons"""
    seasons = sorted([str(s).strip() for s in df['Season'].unique() if pd.notna(s)])
    return jsonify({'seasons': seasons})

if __name__ == '__main__':
    
    # app.run(debug=True, port=5003)
    app.run(host="0.0.0.0", port=7860)
