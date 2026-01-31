import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container fade-in-section">
        <h2 className="title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Collaborate</h3>
            <p>
              Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="social-links-large">
              <a href="https://github.com/Gulzrn" target="_blank" rel="noreferrer" className="social-link"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/gul-zareen-905552305/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin /> LinkedIn</a>
              <a href="mailto:zarinkhaaaa@gmail.com" className="social-link"><FaEnvelope /> Email Me</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const name = encodeURIComponent(e.target.name.value);
            const email = encodeURIComponent(e.target.email.value);
            const message = encodeURIComponent(e.target.message.value);
            window.location.href = `mailto:zarinkhaaaa@gmail.com?subject=Portfolio%20Contact%20from%20${name}&body=Message%20from:%20${name}%20(${email})%0D%0A%0D%0A${message}`;
          }}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" className="form-input" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" className="form-input form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <p style={{ marginTop: '15px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              (Opens your default email client. No app? Email me manually at <strong>zarinkhaaaa@gmail.com</strong>)
            </p>
          </form>
        </div>
      </div>
      <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        .contact-subtitle {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }
        .social-links-large {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.2rem;
          color: var(--text-secondary);
          transition: color 0.3s;
        }
        .social-link:hover {
          color: var(--accent-blue);
        }
        
        .contact-form {
          background: var(--bg-secondary);
          padding: 40px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-input {
          width: 100%;
          padding: 15px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          border-radius: 5px;
          color: var(--text-primary);
          font-family: inherit;
          transition: border-color 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent-purple);
        }
        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
