import React, { useState, useEffect, useCallback } from 'react';

const navItems = [
  { href: '#experience', label: 'Quest Log' },
  { href: '#tools', label: 'Crafted' },
  { href: '#research', label: 'Library' },
  { href: '#writing', label: 'Notes' },
  { href: '#awards', label: 'Achievements' },
  { href: '#sidequests', label: 'Side Quests' },
  { href: '#about', label: 'Bio' },
  { href: '#contact', label: 'Mail' },
];

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const sy = window.scrollY;
    setHidden(sy > 200 && sy > (handleScroll as any).lastScroll);
    (handleScroll as any).lastScroll = sy;
  }, []);

  useEffect(() => {
    (handleScroll as any).lastScroll = 0;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}>
      <div className="nav-inner">
        <a
          href="#"
          className="nav-name"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          B.Marmat
        </a>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
