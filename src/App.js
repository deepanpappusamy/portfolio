import React, { useState }from 'react';
import './App.css';
import avatar from './assets/mainavatar.png'
import web01 from './assets/burger-web.jpg'
import messagee from './assets/message01.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faQuoteLeft, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faLinkedin, faInstagram, } from "@fortawesome/free-brands-svg-icons";

function App() {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <nav>
        <a href='#home' className='title'><span className='letter'>D</span>eepan</a>
            <div className='bar' onClick={()=>setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars}  color='white' className={menuOpen? "menu-open" : ""}/>
                <FontAwesomeIcon icon={faXmark}  color='white' className={menuOpen? "cross-0n" : "cross-off"}/>
            </div>
        <ul className={menuOpen? "open" : ""}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#mywork'>My Work</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        </nav>
      </header>
      <main>
        {/* ----HOME---- */}

        <div id='home' className='page01'>
        <div className='home-page'>
          <div className='left01'>
              <div className='text'>
                <h3>Hii There!</h3>
                <h1>I'm <span>Deepan</span></h1>
                <p>Front-End-Developer</p>
                <br/>
                <a href='#contact' target='_blank' className='btn-home-contact'>Contact</a>
              </div>
          </div>
          <div className='right01'>
          <div className='img-div'><img src={avatar} alt='img' className='hero-img'/></div>
          </div>
            </div>     
        </div>

        {/* ----ABOUT---- */}

        <div id='about' className='page02'>
        <div className='about-page'>
          <div className='left02'>
            <div className='wave'>
                <FontAwesomeIcon icon={faQuoteLeft} className='quatation'/>
            </div>
            <div className='aboutsocial'>
                  <a href='https://github.com/deepanpappusamy' target='_blank'><FontAwesomeIcon icon={faGithub} className='git'/></a>
                  <a href='linkedin'><FontAwesomeIcon icon={faLinkedin} className='linkin'/></a>
                  <a href='mailto:todeepan4714@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} className='mail'/></a>
                  {/* <a><FontAwesomeIcon icon={faInstagram} className='insta'/></a> */}
                  {/* <a><FontAwesomeIcon icon={faLink} /></a> */}
            </div>
          </div>
          <div className='right02'><h1 className='abt-title'>About Me</h1>
              <p>Hello There, I am Deepan and I have a strong passion for web development with  a MERN  Developer credential. I have a solid foundation in HTML 5, CSS 3, JavaScript Es6+, React and Redux.
                <br/>
              Although my professional journey is in its early stages, I am a swift learner and can easily adjust to new methods and technologies. I am eager to contribute my skills and commitment to creating a dynamic and innovative website with your team</p>
              <a href='https://drive.google.com/file/d/17u-kDV1-5cwLnsOReyx0prn6mjZ44gTr/view?usp=sharing' target='_blank' className='btn-about-resume'>View Resume</a>
              <div className='skill-div'>
                <h3 className='skill-h3'>Tecnical Skills</h3>
                <ul>
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>JAVA SCRIPT ES 6+</li>
                  <li>REACT</li>
                  <li>GIT</li>
                  <li>GITHUB</li>
                  <li>BOOTSTRAP</li>
                </ul>
              </div></div>
        </div>
        </div>

         {/* ----WORK---- */}

        <div id='mywork' className='page03'>
        <div className='work-page'>
             {/* <div className='cave'></div> */}
             <h1>My Portfolio</h1>
              <div className='box'>
                <div className='card'><img src={web01} alt='img'/><a href='https://github.com/deepanpappusamy'>Burger-Web</a></div>
                <div className='card'><img src={web01} alt='img'/><a href='https://github.com/deepanpappusamy'>Burger-Web</a></div>
                <div className='card'><img src={web01} alt='img'/><a href='https://github.com/deepanpappusamy'>Burger-Web</a></div>
                {/* <div className='card'><img src={web01} alt='img'/><a href='#about'>Burger-Web</a></div> */}
                {/* <div className='card'><img src={web01} alt='img'/><a href='#about'>Burger-Web</a></div> */}
              </div>
              <a href='https://github.com/deepanpappusamy' target='_blank' className='btn-work-see'>See More</a>
        </div>
        </div>

         {/* ----CONTACT---- */}

        <div id='contact' className='page04'>
        <div className='contact-page'>
          <div className='left04'>
          <h2 className='cnt-title'>Connect Us</h2>
                  <p>I'm genuinely excited about establishing connections with developers, potential employers, and collaborators. I'm open new opportunities and always excited to engage with individuals who share a common passion within the vibrant tech community. Let's connect and explore the endless potential for collaboration and growth together.</p>
                  <div className='social-contact'>
                  <a href='mailto:todeepan4714@gmail.com' target='_blank' className='btn-connect'>Message</a>
                  </div>
          </div>
          <div className='right04'>
          <img src={messagee} alt='img' className='message'/>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;

