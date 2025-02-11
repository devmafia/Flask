from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from config import Config

jwt = JWTManager()

def init_jwt(app):
    jwt.init_app(app)

def create_token(identity):
    return create_access_token(identity=identity)
