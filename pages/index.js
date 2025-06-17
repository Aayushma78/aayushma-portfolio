export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: '#ffffff',
        marginBottom: '2rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Hello, I’m Aayushma Bhattarai 👋
        </h1>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          Welcome to my portfolio website! I am an international student from Nepal.
          I am currently in my senior year at University of North Texas majoring in Information Technology.
          I enjoy working with different people to solve problems and reach goals together.
          I have a huge interest in Technology and get excited about solving problems,
          especially when it involves coding and coming up with new solutions.
          I enjoy working in a team and presenting the best outcome.
        </p>
      </section>

      {/* Resume & Certifications Section */}
      <section style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: '#ffffff',
        marginBottom: '2rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📄 Resume & Certifications</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><a href='/files/Resume_aayuuu.pdf' target='_blank'>📄 View My Resume (PDF)</a></li>
          <li><a href='/files/certification.pdf' target='_blank'>🎓 Cybersecurity Awareness Certification – UNT</a></li>
          <li><a href='/files/cerificate.pdf' target='_blank'>🏆 Website Audience Analysis Project – Recording Academy</a></li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🔗 Connect With Me</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><a href='mailto:aayushmabhattarai@gmail.com'>📧 aayushmabhattarai@gmail.com</a></li>
          <li><a href='https://github.com/aayushma' target='_blank'>🐱 GitHub</a></li>
          <li><a href='https://linkedin.com/in/aayushma-bhattarai' target='_blank'>💼 LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
}

