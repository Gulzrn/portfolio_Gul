import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content fade-in-section">
        <h1 className="hero-title">
          Blockchain & Flutter Developer <br />
          Building <span className="highlight">Secure, Scalable</span> Digital Products
        </h1>
        <p className="hero-subtitle">
          Working at the intersection of Blockchain, Mobile Development, AI, and Cybersecurity
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      
      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(29, 29, 58, 0.4) 0%, rgba(10, 10, 10, 1) 70%);
          z-index: -1;
        }
        /* Animated glow effect */
        .hero-bg::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: var(--accent-blue);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
          top: -200px;
          left: -100px;
          animation: float 10s infinite alternate;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: var(--accent-purple);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
          bottom: -100px;
          right: -100px;
          animation: float 8s infinite alternate-reverse;
        }
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 50px); }
        }

        .hero-content {
          text-align: center;
          z-index: 1;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .highlight {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-cta {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
