import { Link } from 'react-scroll';
import './navbar.css';

import logo from '../assets/social-logo/logo.png'; 

export default function Navbar() {
  return (
    <nav className="navbar-firstpage">
      <Link 
        to="home" 
        smooth={true} 
        duration={500} 
        className="navbar-logo-firstpage"
      >
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className="navbar-container-firstpage">
        <div className="navbar-links-firstpage">
          <Link to="home" smooth={true} duration={500} className="nav-link-firstpage">Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-link-firstpage">About Me</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link-firstpage">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
