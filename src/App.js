import './App.css';
import './pages/css/home.css';
import './pages/css/about.css'
import './pages/css/skills.css'
import './pages/css/services.css'
import './pages/css/work.css'
import './pages/css/footer.css'
import './pages/css/responsive.css'
import './pages/js/main.js'
import 'swiper/css/bundle'
import { FaHome, FaBriefcase, FaLinkedin, FaGithub, FaAward } from 'react-icons/fa';
import { CgArrowsScrollV } from 'react-icons/cg'
import { HiBadgeCheck } from 'react-icons/hi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiFillPhone, AiFillMessage } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import { MdWork } from 'react-icons/md'


function App() {

  return (
    <div>
      <header className='header scroll-header' id='header'>
        <nav className='nav container'>
          <a href="#" className='nav_logo'>
            DIANNA
          </a>

                <a href='#' className='nav_home'>
                    <FaHome className='home-icon'/>
                </a>

        </nav>
      </header>

      <main className='main'>
        <section className='home section' id='home'>
          <div className='home_container container grid'>
            <div className='home_data'>
              <span className='home_greeting'> HELLO, I'M  </span>

              <h1 className='home_name name'> DIANNA PHAM </h1>
              <h3 className='home_name developer'> JUNIOR WEB DEVELOPER </h3>

              <div className='home_buttons'>
                <a download='' href='/items/pdf/phamdianna_resume.pdf' className='button button--ghost'>
                  DOWNLOAD RESUME
                </a>
                <a href='#about' className='button'> ABOUT ME </a>

              </div>
            </div>

            <div className='home_handle'>
                <img src='items/img/profile-pic.jpg' alt='' className='home_img'/>
            </div>

            <div className='home_social'>
                <a href='https://www.linkedin.com/in/diannapham-se/' target='_blank' className='home_social-link'>
                  <FaLinkedin/>
                </a>

                <a href='https://github.com/dianna-SE' target='_blank' className='home_social-link'>
                  <FaGithub/>
                </a>
            </div>

            <a href='#about' className='home_scroll'>
              <CgArrowsScrollV />
              
              <span className='home_scroll-name'>SCROLL DOWN</span>
            </a>

          </div>
        </section>

        <section className='about section' id='about'>
          <span className='section_subtitle'>
            INTRODUCTION
          </span>

          <h2 className='section_title'>
            ABOUT ME
          </h2>

          <div className='about_description1 container'>
                <h1 className='about_header1'>JUNIOR WEB DEVELOPER               
                <button href='mailto:diannapham.opt@gmail.com' className='contact-button button'>CONTACT ME</button></h1>
                <p className='about_paragraph'>
                A SELF-TAUGHT DEVELOPER WITH A BACHELOR OF ARTS IN HUMAN DEVELOPMENT AND A PASSION FOR TECHNOLOGY, INNOVATION, AND ADVANCEMENT THROUGH DEVELOPMENT.
                </p>
          </div>

          <div className='skills_container container grid'>
            <img src='' alt='' className='about_img'></img>

            <div className='about_data'>
              <div className='about_info'>


                <div className='about_box'>
                  <div className='about_icon'>
                    <FaAward/>
                  </div>
                    <h3 className='about_title'>EDUCATION</h3>
                    <span className='about_subtitle'>BACHELOR OF ARTS | HUMAN DEVELOPMENT</span>
                </div>

                <div className='about_box'>
                  <div className='about_icon'>
                    <FaBriefcase/>
                  </div>
                    <h3 className='about_title'>PROJECTS</h3>
                    <span className='about_subtitle'> LANGUAGES & FRAMEWORKS</span>
                </div>

                <div className='about_box'>
                  <div className='about_icon'>
                    <FaAward/>
                  </div>
                    <h3 className='about_title'>EXPERIENCE</h3>
                    <span className='about_subtitle'>SELF-TAUGHT DEVELOPER</span>
                </div>
                
              </div>

            </div>
          </div>
        </section>
  




        <section className='skills section' id='skills'>
          <span className='section_subtitle'>SKILLS</span>
          <h2 className='section_title'>EXPERIENCE</h2>
        </section>



      <div className='skills_container container grid'>
            <div className='class skills_content-frontend'>
              <h3 className='skills_title'>
                FRONT END DEVELOPMENT
              </h3>

              <div className='skills_box'>
                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>HTML</h3>
                        <span className='skills_level'></span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>CSS</h3>
                        <span className='skills_level'></span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>JAVASCRIPT</h3>
                        <span className='skills_level'></span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>REACT</h3>
                        <span className='skills_level'></span>
                  </div>
              </div>
              </div>
            </div>
   


      <div className='skills_container container grid'>
            <div className='class skills_content-frontend'>
              <h3 className='skills_title'>
                BACK END DEVELOPMENT
              </h3>

              <div className='skills_box'>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>NODE JS</h3>
                        <span className='skills_level'></span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>FIREBASE</h3>
                        <span className='skills_level'></span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>AWS</h3>
                        <span className='skills_level'></span>
                  </div>

              </div>
          </div>
        </div>




        <div className='skills_container container grid'>
            <div className='class skills_content-frontend'>
              <h3 className='skills_title'>
                TECHNICAL
              </h3>

              <div className='skills_box'>
                <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>GIT | GITHUB</h3>
                        <span className='skills_level'>VERSION CONTROL</span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>CHROME</h3>
                        <span className='skills_level'>DEVTOOLS</span>
                  </div>

                  <div className='skills_group'>
                      <div className='skills_data'>
                        <HiBadgeCheck/>
                      </div>
                        <h3 className='skills_name'>REDUX</h3>
                        <span className='skills_level'>DEVTOOLS</span>
                  </div>

              </div>
          </div>
        </div>







        <section className='work section' id='skills'>
          <span className='section_subtitle'>MY PORTFOLIO</span>
          <h2 className='section_title'>RECENT WORKS</h2>


          <div className='work_container container grid'>
              <div className='work_card'>
                  <img src='items/img/milk-messaging.jpg' alt ='' className='work_img'/>
                  <h3 className='work_title'>MILK | MESSAGING WEBSITE</h3>
                  <MdWork className='work_icon'/> 
                  <span className='span_text'>REACTJS, REDUX, FIREBASE</span>
                  <a className='work-link' href='https://milk-messaging.web.app/' target='blank'>CLICK TO VIEW<BsFillArrowRightCircleFill className='work-logo'/></a>
                  
              </div>

              <div className='work_card'>
                  <img src='items/img/maxres.jpg' alt ='' className='work_img'/>
                  <h3 className='work_title'>HTML | JAVASCRIPT SIMULATION</h3>
                  <MdWork className='work_icon'/> 
                  <span className='span_text'>HTML, CSS, JAVASCRIPT, AWS</span>
                  <a className='work-link' href='https://milk-messaging.web.app/' target='blank'>CLICK TO VIEW <BsFillArrowRightCircleFill className='work-logo'/></a>
              </div>

          </div>
        </section>

        <footer className='footer'>
            <div className='footer_container container'>
                <h3 className='footer_title'>GET IN TOUCH</h3>
                <ul className='footer_social'>
                  <a className='footer-contact footer-link' href='mailto:diannapham.opt@gmail.com'>
                      <IoIosMail className='footer_contact-icon'/>
                      <h3>E-MAIL</h3>
                      diannapham.opt@gmail.com
                  </a>


                  <a className='footer-contact'>
                      <AiFillPhone className='footer_contact-icon'/>
                      <h3>PHONE</h3>
                      (714) 260 5595
                  </a>


                  <a className='footer-contact footer-link' href='https://www.linkedin.com/in/diannapham-se/' target='blank'>
                      <AiFillMessage className='footer_contact-icon'/>
                      <h3>LINKEDIN</h3>
                      diannapham-se
                  </a>
                </ul>

                <span className='footer_copy'>
                    &#169; DEVELOPED BY DIANNA
                </span>


            </div>
        </footer>

      </main> 
    </div>
  );
}

export default App;
