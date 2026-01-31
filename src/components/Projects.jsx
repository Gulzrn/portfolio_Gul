import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Wallet App",
      description: "Secure decentralized wallet with Flutter UI, allowing users to manage assets efficiently.",
      tags: ["Flutter", "Dart", "Blockchain"],
      link: "#"
    },
    {
      title: "Smart Contract System",
      description: "Ethereum-based contract logic for automated transactions and trustless agreements.",
      tags: ["Solidity", "Web3", "Ethereum"],
      link: "#"
    },
    {
      title: "Food Delivery App",
      description: "Feature-rich Flutter mobile application with modern UI, real-time tracking, and smooth animations.",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      link: "#"
    },
    {
      title: "AI-Based Medical Assistant",
      description: "Frontend interface for an AI diagnostics tool (Concept), focusing on accessibility and clarity.",
      tags: ["AI", "React", "UX Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container fade-in-section">
        <h2 className="title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Details &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .project-card {
          background: var(--bg-secondary);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--glass-border);
          transition: all 0.4s ease;
          min-height: 250px;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          border-color: var(--accent-purple);
        }
        /* Pseudo-element for gradient glow on hover */
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .project-card:hover::before {
          transform: scaleX(1);
        }
        
        .project-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--text-primary);
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .tag {
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 5px 12px;
          border-radius: 20px;
          color: var(--accent-blue);
          border: 1px solid rgba(0, 243, 255, 0.2);
        }
        .project-link {
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.3s;
        }
        .project-link:hover {
          color: var(--accent-purple);
        }
      `}</style>
    </section>
  );
};

export default Projects;
