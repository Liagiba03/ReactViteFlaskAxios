from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Origen de peticiones desde cualquier lugar
# Se sustituye * por el origen (ip)
cors = CORS(app, origins = '*')

@app.route("/api/users", methods=["GET"])
def users():
    number = 54
    return jsonify(
        {
            "users": [
                "JUAN",
                "Diana",
                "Maria"
            ],
            "number": number
        }
    )

if __name__ == "__main__":
    app.run(debug=True, port=8080)