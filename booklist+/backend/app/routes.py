from flask import Blueprint, jsonify, request
from .models import db, User, Book

main = Blueprint('main', __name__)

@main.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([book.serialize() for book in books])


@main.route('/api/books', methods=['POST'])
def add_book():
    data = request.json
    user_id = 1 # Використовуйте .get() для уникнення KeyError
    if user_id is None:
        return jsonify({"error": "user_id is required"}), 400

    new_book = Book(
        title=data['title'],
        author=data['author'],
        genre=data['genre'],
        rating=data['rating'],
        progress=data['progress'],
        user_id=user_id  # Використовуйте user_id з запиту
    )
    
    db.session.add(new_book)
    db.session.commit()
    
    new_book_dict = {
        'id': new_book.id,
        'title': new_book.title,
        'author': new_book.author,
        'genre': new_book.genre,
        'rating': new_book.rating,
        'progress': new_book.progress,
        'user_id': new_book.user_id
    }
    
    return jsonify(new_book_dict), 200