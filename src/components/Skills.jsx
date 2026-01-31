import React from 'react';
import { FaCode, FaMobileAlt, FaBrain, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain",
      icon: <FaCode />,
      skills: ["Smart Contracts", "Web3", "Solidity (Conceptual)"]
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      skills: ["Flutter", "Dart", "State Management"]
    },
    {
      title: "AI & ML",
      icon: <FaBrain />,
      skills: ["Machine Learning Fundamentals", "Model Integration"]
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt />,
      skills: ["Secure Systems", "Authentication", "Data Protection"]
    },
    {
      title: "Web Technologies",
      icon: <FaGlobe />,
      skills: ["HTML5", "CSS3", "JavaScript", "React/Vite"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container fade-in-section">
        <h2 className="title">Skills & Tech Stack</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .skill-card {
          background: var(--bg-secondary);
          padding: 30px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          border-color: var(--accent-blue);
        }
        .skill-icon {
          font-size: 2.5rem;
          color: var(--accent-blue);
          margin-bottom: 20px;
        }
        .skill-title {
          font-size: 1.25rem;
          margin-bottom: 15px;
          color: var(--text-primary);
        }
        .skill-list li {
          color: var(--text-secondary);
          margin-bottom: 8px;
          padding-left: 15px;
          position: relative;
        }
        .skill-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-purple);
        }
      `}</style>
    </section>
  );
};

export default Skills;
