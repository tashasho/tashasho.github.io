import React, { useState } from 'react';

interface ExpandToggleProps {
  showLabel?: string;
  hideLabel?: string;
  children: React.ReactNode;
}

const ExpandToggle: React.FC<ExpandToggleProps> = ({
  showLabel = 'Show more',
  hideLabel = 'Show less',
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="expand-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? hideLabel : showLabel} {open ? '▲' : '▼'}
      </button>
      <div className={`expand-content ${open ? 'open' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default ExpandToggle;
