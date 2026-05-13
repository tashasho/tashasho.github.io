import React from 'react';
import { research } from '../../data/content';
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

const Research: React.FC = () => {
  return (
    <section className="section" id="research">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Book.png" alt="" className="section-icon" />
          <div className="section-label">Library</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title" style={{ textAlign: 'center' }}>
          Bayesian statistics meets <em>early-stage investment theory.</em>
        </div>
      </RevealDiv>

      <div className="research-list">
        {research.map((item, i) => (
          <RevealDiv key={item.num} className={i > 0 ? `d${i}` : ''}>
            <div className="research-item">
              <div className="research-num">{item.num}</div>
              <div className="research-title">
                {item.titleUrl ? (
                  <a href={item.titleUrl} target="_blank" rel="noopener">{item.title}</a>
                ) : (
                  item.title
                )}
              </div>
              <div className="research-super">{item.supervisor}</div>
              <p className="research-desc">{item.summary}</p>
              <ExpandToggle showLabel="Full details" hideLabel="Hide details">
                <p className="research-desc" style={{ marginTop: 8 }}>{item.details}</p>
                <div className="findings">
                  {item.findings.map((f, j) => (
                    <span className="finding" key={j}>{f}</span>
                  ))}
                </div>
                {item.link && (
                  <div className="tool-links" style={{ marginTop: 14 }}>
                    <a href={item.link.url} className="tool-link" target="_blank" rel="noopener">
                      {item.link.text}
                    </a>
                  </div>
                )}
              </ExpandToggle>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
};

export default Research;
