import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv();

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": { "origins": "http://localhost:4200" }})
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    @app.route('/version', methods=['GET'])
    def version():
        return jsonify({
            "app": "Inventory Management System",
            "version": "1.0.0"
        })

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host="0.0.0.0", port=4200, debug=True)
