import React from 'react';
import { contactLinks } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';

const RevealDiv: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="section" id="contact">
      <RevealDiv>
        <div className="section-header" style={{ justifyContent: 'center' }}>
          <img src="/images/Mail.png" alt="" className="section-icon" />
          <div className="section-label">Send Letter</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title" style={{ textAlign: 'center' }}>
          If you&rsquo;re building <em>that team</em>, I&rsquo;d love to talk.
        </div>
      </RevealDiv>

      <RevealDiv>
        <div className="contact-card">
          <a href="mailto:bhumika.marmat@gmail.com" className="contact-cta-big">
            Let&rsquo;s Connect &rarr;
          </a>

          <div className="contact-links-row">
            {contactLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                className="contact-link-item"
                {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                <span className="cl-type">{link.type}</span>
                <span className="cl-val">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </RevealDiv>
    </section>
  );
};

export default Contact;
