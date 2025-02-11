from flask import Blueprint, request, jsonify
from models import db, Message, CallRequest
from schemas import MessageSchema, CallRequestSchema

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/admin/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    schema = MessageSchema(many=True)
    result = schema.dump(messages)
    return jsonify(result)

@admin_bp.route('/admin/messages/<int:id>', methods=['DELETE'])
def delete_message(id):
    message = Message.query.get_or_404(id)
    db.session.delete(message)
    db.session.commit()
    return '', 204

@admin_bp.route('/admin/calls', methods=['GET'])
def get_calls():
    calls = CallRequest.query.all()
    schema = CallRequestSchema(many=True)
    result = schema.dump(calls)
    return jsonify(result)

@admin_bp.route('/admin/calls/<int:id>', methods=['DELETE'])
def delete_call(id):
    call = CallRequest.query.get_or_404(id)
    db.session.delete(call)
    db.session.commit()
    return '', 204
