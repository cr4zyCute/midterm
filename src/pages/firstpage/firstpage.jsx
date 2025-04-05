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
       
      </div>

      <div className="main-section">
        <div className="intro-text">
          <h1>Hi! I'm Nikki Sixx Acosta</h1>
          <h4>id do!</h4>
        <div className='typing-wrapper ' >
          <span style={{ margin: '50px', width:'45px'}}>
                <span style={{color: 'white' }}>
                    {text}
                    <Cursor cursorStyle='|' cursorColor='green' />
                </span>
            </span>
        </div>

        </div>

        <div className="profile-image">
           <img src={Profile} alt="Profile" className="profile-image" />

        </div>
      </div>

      {/* <div className="info-cards">
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default FirstPage;
