import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container fade-in-section">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a software developer focused on building secure, scalable, and user-centric digital products. My core expertise lies in <strong>Blockchain</strong> and <strong>Flutter</strong>, where I create efficient mobile and decentralized solutions.
            </p>
            <br />
            <p>
              I’m actively working in the fields of <strong>Artificial Intelligence</strong> and <strong>Cybersecurity</strong>, exploring intelligent systems and secure architectures to solve real-world problems. I believe in clean code, continuous learning, and building technology that scales with trust.
            </p>
          </div>
          <div className="about-visual">
            <img src="/profile_placeholder.png" alt="Gul - Software Developer" className="profile-img" />
          </div>
        </div>
      </div>
      <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .about-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .about-text strong {
          color: var(--text-primary);
        }
        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .profile-img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
          border: 2px solid var(--accent-blue);
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.2);
          transition: transform 0.3s ease;
        }
        .profile-img:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(188, 19, 254, 0.3);
          border-color: var(--accent-purple);
        }
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
