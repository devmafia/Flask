import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
