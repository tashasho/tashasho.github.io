import React from 'react';
import { writingCards } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';

const RevealDiv: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Writing: React.FC = () => {
  return (
    <section className="section" id="writing">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Secret_Note.png" alt="" className="section-icon" />
          <div className="section-label">Secret Notes</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          I think clearly <em>in public.</em>
        </div>
      </RevealDiv>

      <div className="writing-grid">
        {writingCards.map((card, i) => {
          const delays = ['', 'd1', 'd2', 'd3', 'd4', ''];
          return (
            <RevealDiv key={card.num} className={delays[i] || ''}>
              <a href={card.url} className="secret-note" target="_blank" rel="noopener">
                <div className="wc-num">{card.num}</div>
                <div className="wc-title">{card.title}</div>
                <div className="wc-arrow">&rarr;</div>
              </a>
            </RevealDiv>
          );
        })}
      </div>

      <RevealDiv>
        <div className="writing-cta">
          <a href="https://substack.com/@bhumikamarmat" target="_blank" rel="noopener">
            Read All on Substack &rarr;
          </a>
        </div>
      </RevealDiv>
    </section>
  );
};

export default Writing;
