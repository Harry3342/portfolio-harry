import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    setTransitionStage('leave');

    const timeoutId = setTimeout(() => {
      setDisplayLocation(location);
      setTransitionStage('enter');
    }, 180);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className={`page-shell ${transitionStage === 'leave' ? 'is-leaving' : 'is-entering'}`}>
      <Routes location={displayLocation} key={displayLocation.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col apple-shell">
        <Navbar />
        <main className="page-container flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
