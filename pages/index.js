export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Hello, I’m Aayushma Bhattarai 👋
        </h1>
        <p style={{ marginTop: '0.5rem' }}>Welcome to my portfolio website! I am an international student from Nepal. I am currently in my senior year at University of North Texas majoring in Information Technology. I enjoy working with different poeple to solve problems and reach goals together. I have a huge interest in Technology and get excited about solving problems, when it involves coding and coming to with new solution I enjoy working in a team and presenting the best outcome.  </p>
      </section>

      {/* Resume and Certifications Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📄 Resume & Certifications</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li>
            <a href='/files/Resume_aayuuu.pdf' target='_blank' rel='noopener noreferrer'>
              📄 View My Resume (PDF)
            </a>
          </li>
          <li>
            <a href='/files/certification.pdf' target='_blank' rel='noopener noreferrer'>
              🎓 Cybersecurity Awareness Certification – UNT
            </a>
          </li>
          <li>
            <a href='/files/cerificate.pdf' target='_blank' rel='noopener noreferrer'>
              🏆 Website Audience Analysis Project – Recording Academy
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🔗 Connect With Me</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li>
            <a href='mailto:aayushmabtr@gmail.com'>📧 aayushmabtr@gmail.com</a>
          </li>
          <li>
            <a href='https://github.com/Aayushma78' target='_blank' rel='noopener noreferrer'>
              🐱 GitHub
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/aayushma-bhattarai/' target='_blank' rel='noopener noreferrer'>
              💼 LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

