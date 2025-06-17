import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      padding: '2rem',
      minHeight: '100vh',
      backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
      color: darkMode ? '#f5f5f5' : '#1a1a1a',
      transition: 'all 0.4s ease'
    }}>
      {/* Toggle Theme */}
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            background: darkMode ? '#eee' : '#333',
            color: darkMode ? '#333' : '#eee',
            border: 'none'
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
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
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <motion.section
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
      </motion.section>


 {/* Projects Section */}
      <section style={{
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
<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <img src='/certs/cert1.jpg' alt='Cert 1' style={{ width: '200px', borderRadius: '8px' }} />
          <img src='/certs/cert2.jpg' alt='Cert 2' style={{ width: '200px', borderRadius: '8px' }} />
        </div>
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

