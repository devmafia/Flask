import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookItem from './BookItem';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    progress: number;
  }

interface BookListProps {
    books: Book[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
  }

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
    return (
        <Row>
            {books.map(book => (
                <Col xs={12} sm={6} md={4} lg={3} key={book.id} className="mb-4">
                    <BookItem book={book} />
                </Col>
            ))}
        </Row>
    );
};

export default BookList;
