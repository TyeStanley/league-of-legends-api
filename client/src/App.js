import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/nav.js';
import Footer from './components/Footer/footer.js'
import HomePage from './pages/HomePage/homepage.js';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
