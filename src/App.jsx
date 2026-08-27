import{useRef,useState}from"react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
const [soundOn, setSoundOn] = useState(false);

const toggleSound = () => {
  if (videoRef.current) {
    videoRef.current.muted = !videoRef.current.muted;
    setSoundOn(!videoRef.current.muted);
  }
};
  return (
    <div className="portfolio">

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <video
          
  ref={videoRef}
  className="background-video"
  src="/portfolio.mp4"
  autoPlay
  muted
  loop
  playsInline
/>

<button className="sound-button" onClick={toggleSound}>
  {soundOn ? "🔊 Sound On" : "🔇 Sound Off"}
</button>

        <div className="video-overlay"></div>

        <nav className="navbar">
          <div className="logo">JANANI.R.S</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
<br></br>
        <div className="hero-content">
          <p className="small-title">
            COMPUTER SCIENCE ENGINEERING STUDENT
          </p>

      
          <p className="hero-description">
            Passionate Computer Science Engineering student who enjoys
            building applications, exploring technology and turning
            ideas into useful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="scroll-text">
          ↓ SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="section about" id="about">

        <div className="section-number">01</div>

        <div className="section-content">

          <p className="section-label">ABOUT ME</p>

          <h2>
            Building ideas into
            <span> digital experiences.</span>
          </h2>

          <p className="about-text">
            Hello! I'm Janani R.S, a third-year Computer Science and
            Engineering student at Arunachala Engineering College for Women,
            Nagercoil.
          </p>

          <p className="about-text">
            I am interested in software development, application development,
            full-stack development, networking and emerging technologies.
            I enjoy learning new technologies and applying them to real-world
            problems.
          </p>

          <div className="personal-info">

            <div>
              <strong>NAME</strong>
              <span>Janani R.S</span>
            </div>

            <div>
              <strong>LOCATION</strong>
              <span>Nagercoil, Tamil Nadu</span>
            </div>

            <div>
              <strong>DEGREE</strong>
              <span>B.E Computer Science & Engineering</span>
            </div>

            <div>
              <strong>CGPA</strong>
              <span>---</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section className="section education" id="education">

        <div className="section-number">02</div>

        <div className="section-content">

          <p className="section-label">EDUCATION</p>

          <h2>
            My <span>academic journey.</span>
          </h2>

          <div className="education-card">

            <p className="year">2024 — 2028</p>

            <h3>
              B.E. COMPUTER SCIENCE AND ENGINEERING
            </h3>

            <p>
              ARUNACHALA ENGINEERING COLLEGE FOR WOMEN
            </p>

            <p>
              Currently pursuing my third year with a CGPA of ---.
              Building a strong foundation in programming, web development,
              databases, networking and software development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="section experience">

        <div className="section-number">03</div>

        <div className="section-content">

          <p className="section-label">INTERNSHIPS</p>

          <h2>
            My <span>experience.</span>
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <span className="year">
                07/07/2025 — 12/07/2025
              </span>

              <div>
                <h3>ANDROID APP DEVELOPMENT INTERN</h3>

                <p>
                  SRISHTI INNOVATIVE EDUCATIONAL SERVICE
                </p>

                <p>
                  Developed a prototype Android application and delivered
                  a functional user interface mock-up.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <span className="year">
                03/06/2026 — 03/07/2026
              </span>

              <div>
                <h3>FULL STACK DEVELOPMENT INTERN</h3>

                <p>
                  EDUTANTR
                </p>

                <p>
                  Built a full-stack web application integrating a
                  HTML/CSS front-end with a Python back-end.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

     {/* ==================== PROJECTS ==================== */}
<section className="section work" id="work">

  <div className="section-number">04</div>

  <div className="section-content">

    <p className="section-label">SELECTED PROJECTS</p>

    <h2>
      Things I've <span>built.</span>
    </h2>

    <div className="project-grid">

      {/* 01 - Smart Classroom */}
      <article className="project-card">
        <div className="project-image project-one">
          <span>01</span>
        </div>

        <div className="project-info">
          <p>APP DEVELOPMENT</p>

          <h3>
            SMART CLASSROOM &
            <br />
            TIMETABLE SCHEDULER
          </h3>

          <p>
            A user-friendly application designed for students
            and faculty to view and manage class timetables
            and schedules.
          </p>

          <div className="tech">
            Application Development
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>


      {/* 02 - Personalized Recipe */}
      <article className="project-card">
        <div className="project-image project-two">
          <span>02</span>
        </div>

        <div className="project-info">
          <p>FULL STACK DEVELOPMENT</p>

          <h3>
            PERSONALIZED RECIPE &
            <br />
            MEAL PLANNER
          </h3>

          <p>
            A meal planning application that helps users plan
            meals for the week and manage an available grocery list.
          </p>

          <div className="tech">
            Full Stack Development
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>


      {/* 03 - Travel AI */}
      <article className="project-card">
        <div className="project-image project-three">
          <span>03</span>
        </div>

        <div className="project-info">
          <p>AI & WEB DEVELOPMENT</p>

          <h3>TRAVEL AI</h3>

          <p>
            An AI-powered travel assistant that helps users
            discover destinations, plan trips, and create
            personalized travel experiences.
          </p>

          <div className="tech">
            React · JavaScript · AI
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>


      {/* 04 - Go Net */}
      <article className="project-card">
        <div className="project-image project-four">
          <span>04</span>
        </div>

        <div className="project-info">
          <p>WEB DEVELOPMENT</p>

          <h3>GO NET</h3>

          <p>
            A modern web application designed to provide
            a simple, fast, and user-friendly digital experience.
          </p>

          <div className="tech">
            React · JavaScript · Web Development
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>


      {/* 05 - Hoxa Travel */}
      <article className="project-card">
        <div className="project-image project-five">
          <span>05</span>
        </div>

        <div className="project-info">
          <p>TRAVEL WEB DEVELOPMENT</p>

          <h3>HOXA TRAVEL</h3>

          <p>
            A travel-focused website for exploring destinations,
            discovering places, and creating an engaging
            travel experience.
          </p>

          <div className="tech">
            React · JavaScript · Responsive Design
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>


      {/* 06 - Hoxa */}
      <article className="project-card">
        <div className="project-image project-six">
          <span>06</span>
        </div>

        <div className="project-info">
          <p>WEB DEVELOPMENT</p>

          <h3>HOXA</h3>

          <p>
            A creative web project focused on a clean interface,
            smooth user experience, and modern responsive design.
          </p>

          <div className="tech">
            React · JavaScript · CSS
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

      {/* ================= SKILLS ================= */}
      <section className="section skills" id="skills">

        <div className="section-number">05</div>

        <div className="section-content">

          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>
            What I <span>know.</span>
          </h2>

          <div className="skills-grid">

            <div className="skill">
              <span>01</span>
              <h3>PROGRAMMING</h3>
              <p>
                C · C++ · Java · Python · JavaScript
              </p>
            </div>

            <div className="skill">
              <span>02</span>
              <h3>WEB DEVELOPMENT</h3>
              <p>
                HTML · CSS · JavaScript · React
              </p>
            </div>

            <div className="skill">
              <span>03</span>
              <h3>DATABASES</h3>
              <p>
                MySQL · MongoDB
              </p>
            </div>

            <div className="skill">
              <span>04</span>
              <h3>TOOLS</h3>
              <p>
                Git · GitHub · VS Code
              </p>
            </div>

            <div className="skill">
              <span>05</span>
              <h3>NETWORKING</h3>
              <p>
                Networking fundamentals and concepts
              </p>
            </div>

            <div className="skill">
              <span>06</span>
              <h3>SOFT SKILLS</h3>
              <p>
                Communication · Teamwork · Problem Solving ·
                Leadership · Time Management
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section className="section certifications">

        <div className="section-number">06</div>

        <div className="section-content">

          <p className="section-label">CERTIFICATIONS & ACTIVITIES</p>

          <h2>
            Always <span>learning.</span>
          </h2>

          <div className="certification-list">

            <div>Paper Presentation — College Symposium</div>

            <div>IEI Students' Chapter Certificate of Membership</div>

            <div>Uyirai Colloquium Workshop</div>

            <div>Ethical Hacking Masterclass — Cydenium</div>

            <div>Cyber Security and Ethical Hacking — J Clicks</div>

            <div>AI Tools and Prompt Engineering Webinar — Task Veda</div>

            <div>Innovation Development and Technologies Workshop</div>

            <div>Git and GitHub Workshop</div>

            <div>Centre for Chip and Design Webinar</div>

            <div>Alo Gan 2025 — Paper Presentation</div>

            <div>AI Agent and Automation — Evonuera</div>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section className="section achievements">

        <div className="section-number">07</div>

        <div className="section-content">

          <p className="section-label">ACHIEVEMENTS</p>

          <h2>
            Moments I'm <span>proud of.</span>
          </h2>

          <div className="achievement-card">

            <div className="achievement">
              <span>01</span>
              <div>
                <h3>BEST TEAM AWARD</h3>
                <p>
                  Earned the Best Team Award at Student Startup Leadership.
                </p>
              </div>
            </div>

            <div className="achievement">
              <span>02</span>
              <div>
                <h3>TOP PROMPT CREATOR</h3>
                <p>
                  Earned the Top Prompt Creator Award in the
                  Google Student Ambassador Program.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's build
          <br />
          <span>something together.</span>
        </h2>

        <p className="contact-text">
          I'm open to internships, collaborations, projects and
          opportunities to learn and grow.
        </p>

        <a
          href="mailto:jananirs1707@gmail.com"
          className="email-button"
        >
          jananirs1707@gmail.com
        </a>

        <div className="contact-details">
          <p>Nagercoil, Tamil Nadu</p>
          <p>+91 6374240830</p>
        </div>

        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/janani-r-s-749504376"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jananirs2005-del"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Janani R.S. All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
