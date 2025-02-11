# calls.py

from flask import Blueprint, request, jsonify
from models import db, CallRequest
from schemas import CallRequestSchema

calls_bp = Blueprint('calls', __name__)

@calls_bp.route('/api/calls', methods=['GET'])
def get_calls():
    calls = CallRequest.query.all()
    schema = CallRequestSchema(many=True)
    result = schema.dump(calls)
    return jsonify(result)

@calls_bp.route('/api/calls', methods=['POST'])
def create_call_request():
    data = request.get_json()
    schema = CallRequestSchema()
    call_request = schema.load(data, session=db.session)
    db.session.add(call_request)
    db.session.commit()
    return schema.dump(call_request), 201

@calls_bp.route('/api/calls/<int:id>', methods=['DELETE'])
def delete_call_request(id):
    call_request = CallRequest.query.get_or_404(id)
    db.session.delete(call_request)
    db.session.commit()
    return '', 204
