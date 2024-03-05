function App() {
    const [activeSection, setActiveSection] = useState('summary');
  
    useEffect(() => {
      const sections = document.querySelectorAll('.section');
  
      const handleScroll = () => {
        sections.forEach((section) => {
          const top = section.getBoundingClientRect().top;
          const bottom = section.getBoundingClientRect().bottom;
  
          if (top < window.innerHeight && bottom >= 0) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Initial call to set active section on page load
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToSection = (sectionId, event) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="App">
        <header className="header">
          <div className="header-content">
            <img className="profile-pic" src={myPic} alt="Profile" />
            <div className="header-details">
              <h1 className="header-title">Rohith R</h1>
              <p className="header-subtitle">Full Stack Developer</p>
              <p className="header-contact">rohithgowdar1999@gmail.com | +91 6361910673 | Rajajinagar, Bangalore, Karnataka</p>
              <div className="header-links">
                <a href="linkedin.com/in/rohith-r-693b771a6">LinkedIn</a>
                <a href="github.com/Rohith296-a">GitHub</a>
              </div>
            </div>
          </div>
        </header>
        <nav className="nav">
          <a href="#summary" onClick={(e) => scrollToSection('summary', e)} className={activeSection === 'summary' ? 'active' : ''}>Summary</a>
          <a href="#experience" onClick={(e) => scrollToSection('experience', e)} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#projects" onClick={(e) => scrollToSection('projects', e)} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#education" onClick={(e) => scrollToSection('education', e)} className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
        <div className="main-content">
        <section id="summary" className={`section ${activeSection === 'summary' ? 'reveal' : 'hidden'}`}>
        {/* Summary section content */}
        <h2 className="section-title">About Me</h2>
        <p>Welcome to my portfolio website! I am Rohith, a passionate individual dedicated to creating innovative solutions.</p>
        <p>Highly skilled Full Stack Developer with a strong background in web development and a focus on delivering
          robust and user-friendly applications. Currently serving as a Senior Software Engineer at Comviva Technologies, adept at utilizing a wide range of technologies, including JavaScript, ReactJS, NodeJS, Java, HTML5,
          Bootstrap, CSS3, JSON, SQL, RDBMS, Hibernate, and RESTful Web Services. Passionate about leveraging
          innovative solutions and collaborating with cross-functional teams to drive business growth and exceed client
          expectations.</p>
      </section>
      <section id="experience" className={`section ${activeSection === 'experience' ? 'reveal' : 'hidden'}`}>
        {/* Experience section content */}
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3>Associate Developer, SAP LABS INDIA</h3>
          <p>Aug 2023 - Present</p>
          <ul>
            <li>Provided technical and functional support to SAP’s major customers in utilizing SAP S/4 HANA and ECC solutions effectively.</li>
            <li>Took ownership of specific modules, developing a profound functional expertise to optimize and enhance their performance.</li>
            <li>Contributed significantly to transformational projects, aiding clients in migrating to SAP S/4 HANA for improved operational efficiency.</li>
            <li>Proactively pursued continuous learning, acquiring expertise in HANA, ABAP, ABAP OO, Fiori, and other high-demand areas.</li>
            <li>Established credibility as a trusted advisor by aligning technical solutions with clients’ business needs, fostering strategic growth.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Senior Software Engineer, Comviva</h3>
          <p>Sep 2021 - Aug 2023</p>
          <ul>
            <li>Worked as Full Stack Developer with the roles mentioned below:</li>
            <li>Effectively coded software changes and alterations based on specific design specifications.</li>
            <li>Developed the complete front-end side using JavaScript, ReactJS, HTML5, and CSS3.</li>
            <li>Implemented responsive and user-friendly interfaces, ensuring seamless user experiences.</li>
            <li>Collaborated with UI/UX designers to translate wireframes and mockups into functional web applications.</li>
            <li>Utilized modern front-end frameworks and libraries to optimize performance and enhance the overall user interface.</li>
            <li>Integrated third-party APIs and services to enhance functionality and provide seamless data integration.</li>
            <li>Worked on the complete back-end side, building Rest API services using Node.js and PostgreSQL.</li>
            <li>Implemented database schemas and optimized queries for efficient data retrieval and manipulation.</li>
            <li>Utilized Strapi, Kafka, and Nifi to design and develop scalable and robust back-end systems.</li>
            <li>Ensured data integrity and security by implementing authentication and authorization mechanisms.</li>
            <li>Collaborated with cross-functional teams, including designers, QA engineers, and project managers, to deliver high-quality software solutions.</li>
            <li>Actively participated in code reviews and provided constructive feedback to improve code quality and maintainability.</li>
            <li>Maintained thorough documentation of code, APIs, and system architecture for future reference and team collaboration.</li>
            <li>Kept up-to-date with industry trends and emerging technologies to continuously enhance technical skills and knowledge.</li>
          </ul>
        </div>
      </section>
      <section id="projects" className={`section ${activeSection === 'projects' ? 'reveal' : 'hidden'}`}>
      <h2 className="section-title">Projects</h2>
        <div className="project-item">
          <h3>Factoreal - Marketing Automation Tool</h3>
          <p>It is a tool designed for marketers from the ground-up. This tool can help SMB marketing users to target their customers through emails, website tracking, social media posts and ads, among others.</p>
          <p>Implemented the 1:1 conversational chatbot module using Instabot to build bots for business messaging.</p>
        </div>
      </section>
      <section id="education" className={`section ${activeSection === 'education' ? 'reveal' : 'hidden'}`}>
      <h2 className="section-title">Education</h2>
        <p>Bachelor of Engineering, Electronics and Telecommunication Engineering</p>
        <p>Bangalore Institute of Technology</p>
        <p>GPA: 8.6</p>
      </section>
      <section id="contact" className={`section ${activeSection === 'contact' ? 'reveal' : 'hidden'}`}>
      <h2 className="section-title">Contact Me</h2>
        <p>Email: rohithgowdar1999@gmail.com</p>
        <p>Phone: +91 6361910673</p>
        <p>Location: Rajajinagar, Bangalore, Karnataka</p>
        <p>LinkedIn: <a href="linkedin.com/in/rohith-r-693b771a6">linkedin.com/in/rohith-r-693b771a6</a></p>
        <p>GitHub: <a href="github.com/Rohith296-a">github.com/Rohith296-a</a></p>
      </section>
        </div>
      </div>
    );
  }
  
  export default App;
  