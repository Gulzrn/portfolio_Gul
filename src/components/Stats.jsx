import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Projects Built", value: "12+" },
    { label: "Technologies", value: "8+" },
    { label: "Domains Explored", value: "4" },
    { label: "Months Experience", value: "18+" },
  ];

  return (
    <div className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in-section">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-section {
          padding: 50px 0;
          background: linear-gradient(to right, rgba(16, 16, 30, 0.5), rgba(10, 10, 10, 0.5));
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }
        .stats-grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          text-align: center;
        }
        .stat-value {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(180deg, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 5px;
        }
        .stat-label {
          color: var(--accent-blue);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Stats;
