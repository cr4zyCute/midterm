import '../firstpage/firstpage.css';
 // Make sure to place your image in /assets and adjust path accordingly.
import Profile from '../../assets/profilepro.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


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
                {/* Your icon content here */}
            </div>

<div className="main-section">
  <div className="intro-text">
    <h1 className="name">Hi! I'm Nikki Sixx Acosta</h1>
    <p className="typing-wrapper">
      <span>{text}</span><Cursor cursorStyle='|' cursorColor='green' />
    </p>
    <div className="bottom-image">
      <img src="/assets/landscape.png" alt="landscape" />
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