import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Correct Font Awesome import
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS
import TypeIt from 'typeit'; // Correct TypeIt import
import './style.css';
// Header Component
const Header = () => {
  return (
    <header className="fixed-top" data-aos="fade-down">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h6>Sneha</h6>
            {/* <img src="https://i.postimg.cc/XJFMdqW2/signature.png" alt="signature" width="100" /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link nav-hover" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link nav-hover" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link nav-hover" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link nav-hover" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link nav-hover" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link nav-hover" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Home Component
const Home = () => {
  return (
    <section id="home">
      <div className="container row flex-wrap-reverse">
        <div className="col-md-8 d-flex flex-column justify-content-center" data-aos="fade-right">
          <h1 className="display-5 fw-bold mb-3">👋 Hello I am Snehalatha Reddy</h1>
          <p className="px-2 flex">I am currently pursuing my Master of Computer Applications (MCA) and have a strong passion for technology and software development.  <span id="typed-text"></span></p>
          <div className="d-flex gap-3 fs-3 px-2">
            <a href="https://www.linkedin.com/in/yash-koladiya/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/mr_yash_koladiya/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100080077067443"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/YashKoladiya913"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-left">
          <img src="/profileimage.jpeg" className="img-fluid border rounded-circle" alt="Sneha Latha Reddy profile" loading="lazy" width="300" />
        </div>
      </div>
      <button className="btn btn-dark" id="scrollBtn">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about">
      <div className="container py-5 mb-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" data-aos="fade-up">About Me</h1>
        <p className="fs-5" data-aos="fade-up">
          I am a highly motivated Master of Computer Applications (MCA) graduate from College, Bengaluru. With a strong passion for software development, I have honed my skills in Java, Python, HTML, CSS, and JavaScript through various hands-on projects. My experience includes designing and developing a personal portfolio website and an eCommerce website, which showcase my ability to create responsive and dynamic web applications. I am proficient in user authentication, data security, and advanced search and filtering options. Additionally, I hold certifications in Google Analytics and Data Studio. I am eager to contribute to a dynamic team, leveraging my strong communication, problem-solving, and creative skills to tackle challenging projects. Fluent in English and Gujarati, I am ready to bring my expertise to a collaborative and innovative work environment. Thank you for visiting my website. Feel free to contact me or connect with me on social media.
        </p>
        <div className="d-flex gap-2" data-aos="fade-up">
          <a href="https://drive.google.com/file/d/1EF-Udc1UV2yxhBXXKRy1kfCt-O-nktV0/view?usp=sharing" className="list-group-item"><button type="button" className="btn btn-dark">My Resume</button></a>
          <a href="#contact" className="btn btn-outline-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  return (
    <section id="education">
      <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom border-dark" data-aos="fade-up">Education</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col p-3">
            <div className="education p-3 rounded" data-aos="flip-right">
              <i className="fa-solid fa-graduation-cap fs-2 mb-4"></i>
              <h3 className="fs-3">BCA (2022-2024)</h3>
              <p className="fs-5">SILVER OAK UNIVERSITY</p>
              <p>Passed the examination in 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <h2 className="text-center mb-5" data-aos="fade-up">My Skills</h2>
      <div className="container-fluid d-flex flex-wrap gap-3 align-items-center justify-content-center display-5">
        <i className="fa-brands fa-html5" data-aos="zoom-in"></i>
        <i className="fa-brands fa-css3" data-aos="zoom-in"></i>
        <i className="fa-brands fa-js" data-aos="zoom-in"></i>
        <i className="fa-brands fa-bootstrap" data-aos="zoom-in"></i>
        <i className="fa-brands fa-java" data-aos="zoom-in"></i>
        <i className="fa-brands fa-c" data-aos="zoom-in"></i>
        <i className="fa-brands fa-python" data-aos="zoom-in"></i>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "P1. WORKSURVAYFORM",
      description: "Workplace Satisfaction Survey This project contains the source code for a simple yet elegant workplace satisfaction survey form.",
      link: "https://github.com/KOLADIYAYASH/WORKSURVAY-",
    },
    {
      title: "P2. TIC TAC TOE",
      description: "Tic-Tac-Toe Web application USING HTML/CSS/JS.",
      link: "https://github.com/KOLADIYAYASH/Tic-Tac-Toe-Web-application",
    },
    {
      title: "P3. UNIT_CALCULATER",
      description: "A versatile Unit Calculator that converts between Imperial and Metric units.",
      link: "https://github.com/KOLADIYAYASH/UNIT_CALCULATER",
    },
    {
      title: "P4. Silver Oak University Website",
      description: "A responsive and modern website for Silver Oak University.",
      link: "https://github.com/KOLADIYAYASH/210430100361-B.C.A-sou-25-5-22-",
    },
    {
      title: "P5. Flomic_Logistics_Website",
      description: "This project is a comprehensive and responsive website for Flomic Logistics.",
      link: "https://github.com/KOLADIYAYASH/Flomic_Logistics_Website",
    },
    {
      title: "P6. BASICSWEBPAGMAINPAG",
      description: "This project provides a foundational guide to HTML, CSS, and JavaScript.",
      link: "https://github.com/KOLADIYAYASH/BASICSWEBPAGMAINPAG",
    },
  ];

  return (
    <section id="projects" className="py-5 my-5">
      <h2 className="text-center" data-aos="fade-up">My Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <img src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2plY3R8ZW58MHx8MHx8fDA%3D" alt="project" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex gap-3 fs-4">
                    <a href={project.link} className="list-group-item"><i className="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
            <h1 className="display-5 fw-bold mb-3">Contact Me</h1>
            <p className="fs-5">Prefer email? Reach out to me at <i className="fa-solid envelope"></i> <a href="mailto:YKOLADIYA193@gmail.com" target="_blank"></a></p>
            <p className="fs-5"><i className="fa-solid fa-phone"></i>+91 6361679639</p>
          </div>
          <div className="col-md-6">
            <p className="fs-5">Send me a message</p>
            <form action="other_page.php" method="POST/GET">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" />
                <label htmlFor="email"> Email</label>
              </div>
              <div className="form-floating mb-3">
                <textarea name="message" id="message" className="form-control" placeholder="Hello Ankit"></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button className="w-100 btn btn-lg btn-success" type="submit">Send <i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="text-center">
      <p className="fs-5">Made With <i className="fa-solid text-danger fa-heart"></i> By SnehaLatha</p>
    </footer>
  );
};
// Education, Skills, Projects, Contact, and Footer components remain the same as in your original code.

// Main App Component
const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;