import React from 'react';
import { aboutText } from '../../data/content';
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

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Catalogue.png" alt="" className="section-icon" />
          <div className="section-label">Character Bio</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          The player behind <em>the profile.</em>
        </div>
      </RevealDiv>

      <RevealDiv>
        <div className="about-card">
          {/* TO ADD PHOTO */}
          <div className="about-body">
            <p>{aboutText.summary}</p>
            <ExpandToggle showLabel="Read full bio" hideLabel="Show less">
              {aboutText.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} style={{ marginTop: i > 0 ? 16 : 8 }} />
              ))}
            </ExpandToggle>
          </div>
        </div>
      </RevealDiv>
    </section>
  );
};

export default About;
