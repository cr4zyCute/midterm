import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Nikki Sixx</Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
         <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfolio</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
        
        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}