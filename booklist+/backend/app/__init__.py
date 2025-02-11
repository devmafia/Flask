from flask import Flask
from flask_cors import CORS
from .database import init_db
from .routes import main
from app.config import Config

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)

    init_db(app)
    app.register_blueprint(main)

    return app
