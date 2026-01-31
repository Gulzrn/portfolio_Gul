import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">Gul Portfolio</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/Gulzrn" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gul-zareen-905552305/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-links a:hover {
          color: var(--accent-blue);
        }
        .social-icons {
          display: flex;
          gap: 15px;
        }
        .social-icons a {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }
        .social-icons a:hover {
          color: var(--accent-purple);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; 
            /* Simple mobile handling for now */
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
