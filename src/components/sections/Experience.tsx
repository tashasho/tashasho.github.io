import React from 'react';
import { experiences } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import ExpandToggle from '../ui/ExpandToggle';

const RevealDiv: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Quests_Icon.png" alt="" className="section-icon" />
          <div className="section-label">Quest Log</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          A progression through <em>deal depth, automation</em>, and cross-border investing.
        </div>
      </RevealDiv>

      {/* TO ADD IMAGE */}

      <div className="quest-log">
        {experiences.map((exp, i) => (
          <RevealDiv key={i} className={i > 0 ? `d${i}` : ''}>
            <div className="quest-card">
              <div className="quest-status">&#10003; Quest Complete</div>
              <div className="quest-firm">
                {exp.firmUrl ? (
                  <a href={exp.firmUrl} target="_blank" rel="noopener">{exp.firm}</a>
                ) : (
                  exp.firm
                )}
              </div>
              <div className="quest-meta">
                {exp.dates} &middot; {exp.role} &middot; {exp.location}
              </div>
              <p className="quest-summary">{exp.summary}</p>
              <ExpandToggle showLabel="Show rewards" hideLabel="Hide rewards">
                <div className="quest-rewards-label">Rewards Earned</div>
                <ul className="quest-rewards">
                  {exp.details.map((d, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: d }} />
                  ))}
                </ul>
                <div className="tag-row">
                  {exp.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </ExpandToggle>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
};

export default Experience;
