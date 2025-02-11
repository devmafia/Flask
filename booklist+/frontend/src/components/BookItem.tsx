import React from 'react';
import { Card } from 'react-bootstrap';
import ProgressBar from './ProgressBar';

interface Book {
    title: string;
    author: string;
    rating: number;
    progress: number;
}

interface Props {
    book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => {
    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                <Card>
                    <ProgressBar progress={book.progress} />
                </Card>
                <Card.Text>Rating: {book.rating} ⭐</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BookItem;
