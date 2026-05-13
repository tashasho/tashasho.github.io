import React, { useState } from 'react';
import { projects, Project } from '../../data/content';
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

const tabs: { key: string; label: string }[] = [
  { key: 'vcTools', label: 'VC Tools' },
  { key: 'startupTools', label: 'Startup Tools' },
  { key: 'sideBuilds', label: 'Side Builds' },
];

const ProjectCard: React.FC<{ project: Project; delay: string }> = ({ project, delay }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${delay}`}>
      <div className="tool-card">
        {/* TO ADD IMAGE */}
        <img src={project.icon} alt="" className="tool-card-icon" />
        <div className="tool-top">
          <div className="tool-name">{project.name}</div>
          <div className="tool-num">{project.num}</div>
        </div>
        <p className="tool-desc">{project.summary}</p>
        <div className="tool-links">
          <a href={project.github} className="tool-link" target="_blank" rel="noopener">
            View on GitHub
          </a>
          {project.liveDemo && (
            <a href={project.liveDemo} className="tool-link tool-link--alt" target="_blank" rel="noopener">
              Live Demo
            </a>
          )}
        </div>
        <ExpandToggle showLabel="Details" hideLabel="Hide details">
          <p className="tool-desc" style={{ marginTop: 10 }}>{project.details}</p>
          <div className="tool-impact">{project.impact}</div>
          <div className="tag-row" style={{ marginBottom: 10 }}>
            {project.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </ExpandToggle>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vcTools');

  return (
    <section className="section" id="tools">
      <RevealDiv>
        <div className="section-header">
          <img src="/images/Iridium_Axe.png" alt="" className="section-icon" />
          <div className="section-label">Crafted Items</div>
        </div>
      </RevealDiv>
      <RevealDiv>
        <div className="section-title">
          Tools for funds. <em>Systems for founders.</em> And everything else.
        </div>
      </RevealDiv>

      <RevealDiv>
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </RevealDiv>

      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`tab-panel ${activeTab === tab.key ? 'active' : ''}`}
        >
          <div className="tools-grid">
            {(projects[tab.key] || []).map((project, i) => (
              <ProjectCard key={project.num} project={project} delay={i > 0 ? `d${i}` : ''} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
