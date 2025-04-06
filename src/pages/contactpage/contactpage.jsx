import React from 'react';
import './contactpage.css';

import fb from '../../assets/social-logo/facebook.png';

import gmail from '../../assets/social-logo/gmail.png';
import github from '../../assets/social-logo/github.png';
import linkedin from '../../assets/social-logo/linkedin.png';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Hire Me!</h1>
      <div className="contact-content">
        <div className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Email Me..."></textarea>
          <div className="email-footer">
            <span className="email-text">nikiskyacosta083@gmail.com</span>
            <button className="send-btn">➤</button>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-image"></div>
          <h2>Contact me!</h2>
          <div className="info-row">
            <button className="icon-btn">💬</button>
            <span>@1234</span>
            <button>📋</button>
          </div>
          <div className="info-row">
            <button className="icon-btn">📱</button>
            <span>0963212248</span>
            <button>📋</button>
          </div>
          <div className="info-row">
            <button className="icon-btn">📄</button>
            <span>Resume</span>
            <button>👁️</button>
            <button>⬇️</button>
          </div>
          <div className="info-row">
            <button className="icon-btn">📄</button>
            <span>Curriculum Vitae</span>
            <button>👁️</button>
            <button>⬇️</button>
          </div>
        </div>
      </div>

        <div className="social-icons">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
          {/* <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a> */}
          <a href="mailto:nikiskyacosta083@gmail.com">
            <img src={gmail} alt="Gmail" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>

    </div>
  );
};

export default Contact;
