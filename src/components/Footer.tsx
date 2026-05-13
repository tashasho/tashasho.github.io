import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-l">&copy; 2026 Bhumika Marmat</div>
      <div className="footer-r">
        <img src="/images/Cat.gif" alt="" style={{ width: 28, height: 28 }} />
        <span>IIT Kharagpur &middot; Mathematics &amp; Computing</span>
      </div>
    </footer>
  );
};

export default Footer;
