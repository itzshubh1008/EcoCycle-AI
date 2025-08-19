
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your API key
openai.api_key = "your_api_key_here"

@app.route("/eco-advice", methods=["POST"])
def eco_advice():
    data = request.get_json()
    user_input = data.get("query", "")

    if not user_input:
        return jsonify({"error": "No query provided"}), 400

    # Call OpenAI API
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"Give me eco-friendly advice about: {user_input}",
        max_tokens=100
    )

    advice = response.choices[0].text.strip()
    return jsonify({"advice": advice})

if __name__ == "__main__":
    app.run(debug=True)  
