import React from 'react';
import { awards } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';

const RevealDiv: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Awards: React.FC = () => {
  return (
    <section className="section" id="awards">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Diamond.png" alt="" className="section-icon" />
          <div className="section-label">Achievements Unlocked</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          Recognition along <em>the way.</em>
        </div>
      </RevealDiv>

      <div className="awards-grid">
        {awards.map((award, i) => (
          <RevealDiv key={i} className={i > 0 ? `d${i}` : ''}>
            <div className="award-card">
              <img src={award.icon} alt="" className="award-icon" />
              <div className="award-year">{award.year}</div>
              <div className="award-title">{award.title}</div>
              <div className="award-sub">{award.sub}</div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
};

export default Awards;
