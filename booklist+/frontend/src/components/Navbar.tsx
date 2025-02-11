import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">BookListHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
