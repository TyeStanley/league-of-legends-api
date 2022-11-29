import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/nav.js';
import Footer from './components/Footer/footer.js';
import HomePage from './pages/HomePage/homepage.js';
import PlayerStatsPage from './pages/PlayerStatsPage/playerstatspage.js';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/player"
              element={<PlayerStatsPage />}
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
