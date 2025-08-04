import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ExternalLink,
} from "lucide-react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Updated skills focusing on .NET with highest levels
  const skills = [
    { name: "ASP.NET Core", level: 95 },
    { name: "Entity Framework", level: 90 },
    { name: "C#", level: 90 },
    { name: "C++", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "SQL", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "Data Structures", level: 85 },
    { name: "OOP", level: 90 },
  ];

  // Mina's actual experience from CV
  const experiences = [
    {
      title: ".NET Developer Intern",
      company: "Orascom, Cairo",
      period: "August 2024 - September 2024",
      description:
        "Worked as a .NET developer on a recruitment platform using ASP.NET MVC, with a strong focus on backend development. Gained hands-on experience in integrating databases and optimizing server-side performance for scalable solutions.",
    },
    {
      title: "Web Development Intern",
      company: "Cairo University, Cairo",
      period: "July 2023 - September 2023",
      description:
        "Learned many web development technologies and made 3+ big projects in less than 2 months. Developed a dynamic personal portfolio website using pure JavaScript, HTML, and CSS. Built a professional resume maker website using React with JavaScript and Node.js for the backend.",
    },
    {
      title: "DEPI Trainee",
      company: "Digital Egypt Pioneers Initiative, Cairo",
      period: "April 2024 - November 2024",
      description:
        "Learned .NET, C#, ASP.NET, SQL, and Entity Framework through hands-on training and project-based learning. Developed an online learning platform as a final project using .NET 8 and featuring secure authentication.",
    },
  ];

  // Updated projects with new .NET projects
  const projects = [
    {
      title: "Contacts Manager",
      description:
        "A comprehensive contact management system built with ASP.NET Core 8+, MVC pattern, and Clean Architecture. Features include CRUD operations, user authentication, and responsive design.",
      tech: [
        "ASP.NET Core 8+",
        "MVC",
        "Clean Architecture",
        "Entity Framework",
        "C#",
        "SQL Server",
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      link: "https://github.com/Mina-H-William/ASP.NET-CORE-COURSE",
    },
    {
      title: "Cities Manager API",
      description:
        "RESTful API for city management with JWT authentication and refresh tokens. Built with ASP.NET Core and consumed by Angular frontend.",
      tech: [
        "ASP.NET Core",
        "Web API",
        "JWT",
        "Refresh Tokens",
        "Angular",
        "Entity Framework",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      link: "https://github.com/Mina-H-William/ASP.NET-CORE-COURSE",
    },
    {
      title: "Telegrammy",
      description:
        "A real-time messaging application with video calling capabilities, built with modern web technologies and WebRTC for peer-to-peer communication.",
      tech: [
        "JavaScript",
        "React",
        "Tailwind-CSS",
        "Jest",
        "Redux",
        "Socket.io",
        "WebRTC",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      link: "https://github.com/Mina-H-William",
    },
    {
      title: "Intra Link",
      description:
        "A comprehensive web application with real-time features, user authentication, and database management.",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Socket.io",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      link: "https://github.com/Mina-H-William",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mina_Hany_CV.pdf";
    link.download = "Mina_Hany_William_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <motion.div
          className="nav-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Mina Hany William</h2>
        </motion.div>

        <div className="nav-menu">
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>
              Hi, I'm <span className="highlight">Mina Hany William</span>
            </h1>
            <h2>
              Final Year Computer Engineering Student & .NET Developer &
              Software Developer
            </h2>
            <p>
              I am a final-year computer engineering student with a diverse
              programming background, specializing in .NET development.
              Proficient in ASP.NET Core, Entity Framework, C#, and modern web
              technologies. Passionate about building scalable applications with
              clean architecture.
            </p>
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
              >
                <Download size={20} />
                Download CV
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="profile-card">
              <div className="profile-image">
                <img
                  src="/profile.jpg"
                  alt="Mina Hany William"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h3>Mina Hany William</h3>
                <p>Final Year Computer Engineering Student</p>
                <div className="social-links">
                  <a
                    href="https://github.com/Mina-H-William"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mina-h-william/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:mina309hany@gmail.com"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a final-year computer engineering student at Cairo
                University with a diverse programming background, specializing
                in .NET development and modern web technologies. I am seeking
                opportunities to gain hands-on experience in software
                engineering and learn from the best in the industry.
              </p>
              <p>
                I am proficient in ASP.NET Core, Entity Framework, C#, and
                JavaScript, with extensive experience in building scalable
                applications using Clean Architecture principles. I excel at
                learning and innovation, quickly adapting to new tools and
                concepts to enhance my projects.
              </p>
              <p>
                My academic journey includes excellent performance with a
                cumulative GPA of 3.5, and I've completed various courses
                including Data Structures and Algorithms, Programming Techniques
                (OOP), Database Management, and more. I'm also fluent in English
                and Arabic, with beginner German skills.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3.5</h3>
                  <p>GPA (Excellent)</p>
                </div>
                <div className="stat">
                  <h3>12+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="additional-skills">
            <h3>Additional Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Verilog</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">WebRTC</span>
              <span className="skill-tag">AWS</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                  </div>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="explore-more-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Mina-H-William"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary explore-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Explore More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <p>mina309hany@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Phone size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>+20 120 799 9220</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MapPin size={24} />
                <div>
                  <h3>Location</h3>
                  <p>Shubra, Cairo, Egypt</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="contact-cta"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>
              <div className="contact-buttons">
                <motion.a
                  href="mailto:mina309hany@gmail.com"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Send Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mina-h-william/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Mina Hany William. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
