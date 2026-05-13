import React from 'react';
import { sidequests } from '../../data/content';
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

const Sidequests: React.FC = () => {
  return (
    <section className="section" id="sidequests">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Quests.png" alt="" className="section-icon" />
          <div className="section-label">Side Quests</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          Things that don&rsquo;t fit <em>anywhere else</em> &mdash; but shape how I think.
        </div>
      </RevealDiv>

      <div className="sq-grid">
        {sidequests.map((sq, i) => (
          <RevealDiv key={i} className={i > 0 ? `d${i}` : ''}>
            <div className="sq-card">
              <div className="sq-top">
                <div className="sq-title-group">
                  <img src={sq.icon} alt="" className="sq-icon" />
                  <div className="sq-title">{sq.title}</div>
                </div>
                <div className="sq-tag">{sq.tag}</div>
              </div>
              <p className="sq-desc">{sq.summary}</p>
              <ExpandToggle showLabel="More" hideLabel="Less">
                <p className="sq-desc" style={{ marginTop: 8 }}>{sq.details}</p>
              </ExpandToggle>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
};

export default Sidequests;
