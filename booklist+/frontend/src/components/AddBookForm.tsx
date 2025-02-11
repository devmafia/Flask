import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    progress: number;
  }

interface AddBookFormProps {
    onAdd: (book: Omit<Book, 'id'>) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({ title, author, genre, rating, progress });
        setTitle('');
        setAuthor('');
        setGenre("");
        setRating(0);
        setProgress(0);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter author's name"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter genre"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter rating"
                    value={rating}
                    onChange={e => setRating(parseFloat(e.target.value))}
                    min="0"
                    max="5"
                    step="0.1"
                />
            </Form.Group>
            <Form.Group controlId="formProgress">
                <Form.Label>Progress (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter progress"
                    value={progress}
                    onChange={e => setProgress(parseFloat(e.target.value))}
                    min="0"
                    max="100"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Book
            </Button>
        </Form>
    );
};

export default AddBookForm;
