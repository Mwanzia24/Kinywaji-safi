import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import DrinkList from './components/DrinkList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="quote">
        <p>Enjoy the finest drinks with Kinywaji Safi. Step right up and be taken a bliss by us</p>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <h1>
          <FontAwesomeIcon icon={faGlassCheers} /> Kinywaji Safi Drink Tracker
        </h1>
        <Routes>
          <Route path="/drinks" element={<DrinkList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
