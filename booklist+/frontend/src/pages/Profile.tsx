import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ThemeToggle from '../components/ThemeToggle';

const Profile: React.FC = () => {
    const user = { username: "JohnDoe", email: "john@example.com" }; // Приклад даних

    return (
        <Container>
            <h1>User Profile</h1>
            <Card>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                    <Card.Text>
                        Here you can manage your profile settings.
                    </Card.Text>
                    <ThemeToggle></ThemeToggle>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;
