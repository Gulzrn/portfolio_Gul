import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Build with 💙 & ☕. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          padding: 30px 0;
          text-align: center;
          border-top: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
