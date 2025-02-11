import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUsPage></AboutUsPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />
        <Route path="/portfolio" element={<PortfolioPage></PortfolioPage>} />
        <Route path="/services" element={<ServicesPage></ServicesPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
