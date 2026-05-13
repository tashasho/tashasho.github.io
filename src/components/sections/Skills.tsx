import React from 'react';
import { skills } from '../../data/content';

const Skills: React.FC = () => {
  // Duplicate for seamless scroll
  const doubled = [...skills, ...skills];

  return (
    <div className="inventory-bar">
      <div className="marquee">
        {doubled.map((s, i) => (
          <div className="marquee-item" key={i}>
            <img src={s.icon} alt="" />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
