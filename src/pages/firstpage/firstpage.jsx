import '../firstpage/firstpage.css';

import Profile from '../../assets/profilepro.png';
import Uc from '../../assets/underconstruction.gif';
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