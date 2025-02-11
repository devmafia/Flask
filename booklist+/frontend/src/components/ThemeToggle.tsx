import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} variant="secondary">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
    );
};

export default ThemeToggle;
