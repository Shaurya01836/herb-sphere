import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ARPage from './pages/ARPage';  // Import the AR page
import AboutPage from './pages/About';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />   {/* Home Page */}
          <Route path="/ar" element={<ARPage />} /> {/* AR Page */}
          <Route path="/about" element={<AboutPage />} /> {/* About Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
