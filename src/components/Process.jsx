import React from 'react';

const Process = () => {
  const steps = [
    { title: "Ideation", icon: "01" },
    { title: "Design", icon: "02" },
    { title: "Development", icon: "03" },
    { title: "Testing & Security", icon: "04" },
    { title: "Deployment", icon: "05" }
  ];

  return (
    <section className="section process">
      <div className="container fade-in-section">
        <h2 className="title">Workflow</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .process-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 40px 0;
        }
        .step-item {
          text-align: center;
          position: relative;
          z-index: 1;
          flex: 1;
        }
        .step-number {
          width: 60px;
          height: 60px;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--accent-blue);
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }
        .step-item:hover .step-number {
          background: var(--accent-blue);
          color: #000;
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);
        }
        .step-title {
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .step-line {
          position: absolute;
          top: 30px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: var(--glass-border);
          z-index: -1;
        }
        @media (max-width: 768px) {
          .process-steps {
            flex-direction: column;
            gap: 30px;
          }
          .step-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
