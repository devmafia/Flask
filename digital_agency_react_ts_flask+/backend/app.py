from flask import Flask
from config import Config
from models import db
from routes.messages import messages_bp
from routes.calls import calls_bp
from routes.auth import auth_bp
from routes.admin import admin_bp
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

migrate = Migrate(app, db)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(messages_bp)
app.register_blueprint(calls_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(admin_bp, url_prefix='/admin')

@app.before_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
