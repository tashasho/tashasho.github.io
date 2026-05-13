import React, { useEffect, useRef, useState } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { statBars } from '../../data/content';

const phrases = ['VC Intern', 'Tool Builder', 'Math Nerd', 'Substack Writer'];

const Hero: React.FC = () => {
  const typed = useTypewriter(phrases);
  const [animated, setAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animated]);

  // Instant reveal for hero
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <div className={`player-card reveal ${visible ? 'visible' : ''}`}>
        <div className="player-card-header">
          <img src="/images/Stardrop.png" alt="" className="section-icon" style={{ width: 48, height: 48 }} />
          {/* TO ADD IMAGE */}
          {/* TO ADD PHOTO */}
          <div className="player-name">BHUMIKA MARMAT</div>
          <div className="player-label">IIT Kharagpur &middot; Mathematics &amp; Computing &middot; Class of 2026</div>
        </div>

        <div className="hero-typing">
          {typed}<span className="cursor-blink" />
        </div>

        <p className="hero-bio">
          I build the tools <strong>VCs wish they had.</strong> Three internships across Palo Alto, Bengaluru, and the Japan&ndash;India corridor.
        </p>

        <div className="stat-bars" ref={statRef} id="statBars">
          {statBars.map((bar) => (
            <div className="stat-bar-row" key={bar.label}>
              <span className="stat-bar-label">
                <span className="pixel-heart">&hearts;</span> {bar.label}
              </span>
              <div className="stat-bar-track">
                <div
                  className={`stat-bar-fill ${bar.colorClass}`}
                  style={{
                    width: animated ? `${bar.width}%` : '0%',
                    ...(bar.colorClass === '' ? { background: 'linear-gradient(90deg, var(--green), #7abf5c)' } : {}),
                  }}
                />
              </div>
              <span className="stat-bar-val">{bar.value}</span>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a href="Bhumika_Marmat_Resume_VC.pdf" className="cta cta-primary" target="_blank" rel="noopener">
            Download CV
          </a>
          <a href="mailto:bhumika.marmat@gmail.com" className="cta">Email</a>
          <a href="https://linkedin.com/in/bhumikamarmat" className="cta" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/tashasho" className="cta" target="_blank" rel="noopener">GitHub</a>
          <a href="https://substack.com/@bhumikamarmat" className="cta" target="_blank" rel="noopener">Substack</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
