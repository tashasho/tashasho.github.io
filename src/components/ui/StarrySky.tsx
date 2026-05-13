import React, { useEffect, useRef, useMemo } from 'react';

const StarrySky: React.FC = () => {
  const skyRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(() => {
    const count = typeof window !== 'undefined' && window.innerWidth < 600 ? 80 : 180;
    return Array.from({ length: count }, () => ({
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: 2 + Math.random() * 4,
      o1: 0.2 + Math.random() * 0.4,
      o2: 0.6 + Math.random() * 0.4,
      delay: Math.random() * 4,
    }));
  }, []);

  useEffect(() => {
    const sky = skyRef.current;
    if (!sky) return;
    const handleScroll = () => {
      sky.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="starry-sky" ref={skyRef}>
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            '--dur': `${s.dur}s`,
            '--o1': s.o1.toString(),
            '--o2': s.o2.toString(),
            animationDelay: `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarrySky;
