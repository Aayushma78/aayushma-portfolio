import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
  

 <nav style={{
  position: 'sticky',
  top: 0,
  background: darkMode ? '#111' : '#fff',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 10
}}>
  <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>
    Aayushma
  </div>
  <div style={{ display: 'flex', gap: '1rem' }}>
    {['About', 'Projects', 'Resume', 'Contact'].map((tab) => (
      <button
        key={tab}
        onClick={() => {
          document.getElementById(tab.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          color: darkMode ? '#fff' : '#000',
          fontWeight: '500'
        }}
      >
        {tab}
      </button>
    ))}
  </div>
</nav>


 <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      padding: '2rem',
      minHeight: '100vh',
      backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
      color: darkMode ? '#f5f5f5' : '#1a1a1a',
      transition: 'all 0.4s ease'
    }}>


          {/* Toggle Theme (moved below and made smaller) */}
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                background: darkMode ? '#eee' : '#333',
                color: darkMode ? '#333' : '#eee',
                border: 'none'
              }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <img
          src='/Me1.jpg'
          alt='Aayushma'
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '70%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          border: '1px solid #ccc',
          borderRadius: '12px',
          padding: '2rem',
          backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
          marginBottom: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
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
      </motion.section>

      {/* Projects Section */}
      <section id="projects" style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🧠 Projects</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>Portfolio Website</strong> – Built with Next.js + FastAPI backend</li>
          <li><strong>Clothing Store API</strong> – Python/SQL backend to manage orders</li>
          <li><strong>Career Center Site</strong> – Assisted with live website updates</li>
        </ul>
      </section>

      {/* Resume & Certifications Section */}
      <section id="resume" style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📄 Resume & Certifications</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><a href='/files/Resume_aayuuu.pdf' target='_blank' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }} > 📄 View My Resume (PDF) </a> </li>
          <li><a href='/files/certification.pdf' target='_blank' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }} > 🎓 Cybersecurity Awareness Certification – UNT </a></li>
          <li><a href='/files/cerificate.pdf' target='_blank' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }} > 🏆 Website Audience Analysis Project – Recording Academy </a></li>
        </ul>
      </section>

      {/* Certifications dummy section for tab scroll */}
      <section id="certifications" style={{ display: 'none' }}></section>

      {/* Contact Section */}
      <section id="contact" style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🔗 Connect With Me</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><a href='mailto:aayushmabtr@gmail.com' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }}> 📧 aayushmabtr@gmail.com </a></li>
          <li><a href='https://github.com/aayushma' target='_blank' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }}> 🐱 GitHub </a></li>
          <li><a href='https://linkedin.com/in/aayushma-bhattarai' target='_blank' style={{ textDecoration: 'none', color: darkMode ? '#aad' : '#06c' }}> 💼 LinkedIn </a></li>
        </ul>
      </section>

    </div>
  );
}

