# schemas.py

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import Message, CallRequest, User

class MessageSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Message
        load_instance = True

class CallRequestSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CallRequest
        load_instance = True

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        exclude = ('_password',)
