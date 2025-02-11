import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://127.0.0.1:5000/api/books/${id}`);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <Container>
            <h1>{book.title}</h1>
            <Card>
                <Card.Body>
                    <Card.Title>Author: {book.author}</Card.Title>
                    <Card.Text>
                        <strong>Rating:</strong> {book.rating} ⭐<br />
                        <strong>Progress:</strong> {book.progress}%
                    </Card.Text>
                    <Card.Text>
                        <strong>Notes:</strong> {book.notes}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BookDetails;
