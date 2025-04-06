import '../firstpage/firstpage.css';

import Profile from '../../assets/profilepro.png';
import Uc from '../../assets/underconstruction.gif';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import fb from '../../assets/social-logo/facebook.png';
import gmail from '../../assets/social-logo/gmail.png';
import github from '../../assets/social-logo/github.png';
import linkedin from '../../assets/social-logo/linkedin.png';

function FirstPage() {
    const [text] = useTypewriter({
        words: ['Web Development', 'App Development', 'Web Designing'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    })

    return (
        <div className="firstpage">
            <div className="left-icons">
                <div className="social-icons-firstpage">
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" />
                    </a>
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
            <div className="main-section">
                <div className="intro-text">
                      <h1 className="name">Hi! I'm Nikki Sixx Acosta</h1>
                          <p style={{fontWeight: 'bold'}}>I do</p>
                          <p className="typing-wrapper">
                            <span>{text}</span><Cursor cursorStyle='|' cursorColor='green' />
                          </p>
                    <div className="bottom-image">
                      <img src={Uc} alt="Under Construction" style={{ width: '50%', height: 'auto' }} />
                    </div>
                </div>
              <div className="profile-image">
                  <img src={Profile} alt="Profile" />
              </div>
          </div>

        </div>
    );
}
export default FirstPage;