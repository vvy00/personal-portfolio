
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">Vanessa.</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <p className="eyebrow">ASPIRING FULL-STACK SOFTWARE DEV</p>

          <h1>
            Hi, I'm <span className="typing-wrapper">
              <span className="typing-name">Vanessa.</span>
              </span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science student at UT Dallas, originally from Houston, Texas. I enjoy building projects, exploring new technologies, and solving real-world problems through software. I'm always looking for opportunities to learn, collaborate, and turn ideas into something meaningful.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button">
              Explore My Projects
            </a>
            <a
              href="https://github.com/vvy00"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p>
            I'm a Computer Science student passionate about
            software development and exploring how AI can
            be applied to real-world challenges. I enjoy
            learning new technologies, collaborating with
            others, and turning ideas into working projects.
          </p>

          <h3>Technical Skills</h3>

          <div className="skills">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML & CSS</span>
            <span>Machine Learning</span>
            <span>Arduino</span>
            <span>C++</span>
            <span>Assembly</span>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Experience</h2>

          <div className="experience-card">
            <h3>Digital Health Young Scholars Intern</h3>
            <p className="muted">
              Rice University
            </p>
            <p>
              Participated in a digital health research program
              exploring how computer science, electronics, and
              engineering can be applied to healthcare technology.
            </p>
          </div>

          <div className="experience-card">
            <h3>Student Leadership</h3>
            <p className="muted">
              College Organizations
            </p>
            <p>
              Built leadership, communication, and teamwork
              skills through student organization involvement.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="eyebrow">WHAT I'VE BUILT</p>
          <h2>Projects</h2>

          <div className="project-grid">
            <article className="project-card">
              <p className="project-number">01 / HARDWARE</p>
              <h3>Smart Health Ring</h3>
              <p>
                A wearable health-monitoring prototype using
                an Arduino Nano and MAX30102 sensor to explore
                pulse and blood oxygen measurements.
              </p>
              <div className="skills">
                <span>Arduino C++</span>
                <span>Sensors</span>
                <span>Health Tech</span>
              </div>
            </article>

            <article className="project-card">
              <p className="project-number">02 / MACHINE LEARNING</p>
              <h3>Machine Learning Models</h3>
              <p>
                Built and evaluated classification models,
                exploring logistic regression, decision trees,
                and neural networks.
              </p>
              <div className="skills">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>TensorFlow</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>Designed & built by Vanessa.</p>
        <a href="https://github.com/vvy00"
           target="_blank"
           rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </>
  );
}

export default App;
