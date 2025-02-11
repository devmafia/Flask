import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') or 'postgresql+psycopg2://postgres:tiger7W!@localhost/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


