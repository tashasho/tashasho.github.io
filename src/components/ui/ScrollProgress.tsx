import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ScrollProgress;
