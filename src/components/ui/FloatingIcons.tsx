import React, { useEffect, useRef, useCallback } from 'react';
import { floatingIconsConfig } from '../../data/content';

const FloatingIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const setupDrag = useCallback((el: HTMLImageElement) => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      el.classList.add('dragging');
      const rect = el.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      el.style.position = 'fixed';
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
      el.style.right = 'auto';
      el.style.zIndex = '1000';
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
    };

    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      el.classList.add('dragging');
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
      el.style.position = 'fixed';
      el.style.left = `${touch.clientX - offsetX}px`;
      el.style.top = `${touch.clientY - offsetY}px`;
      el.style.right = 'auto';
      el.style.zIndex = '1000';
      e.preventDefault();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      el.style.left = `${touch.clientX - offsetX}px`;
      el.style.top = `${touch.clientY - offsetY}px`;
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
    };

    el.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pageHeight = Math.max(document.body.scrollHeight, 4000);
    const cleanups: (() => void)[] = [];

    floatingIconsConfig.forEach((icon, i) => {
      const el = document.createElement('img');
      el.src = icon.src;
      el.className = 'floating-icon';
      el.style.width = `${icon.size}px`;
      el.style.height = `${icon.size}px`;
      el.draggable = false;

      const side = i % 2 === 0 ? 'left' : 'right';
      if (side === 'left') {
        el.style.left = `${Math.random() * 80 + 10}px`;
      } else {
        el.style.right = `${Math.random() * 80 + 10}px`;
      }
      el.style.top = `${Math.random() * pageHeight * 0.9 + 100}px`;

      const bobDur = 3 + Math.random() * 4;
      const bobDelay = Math.random() * 3;
      const bobY = -(8 + Math.random() * 16);
      const rot = (Math.random() - 0.5) * 10;
      el.style.setProperty('--bob-dur', `${bobDur}s`);
      el.style.setProperty('--bob-delay', `${bobDelay}s`);
      el.style.setProperty('--bob-y', `${bobY}px`);
      el.style.setProperty('--rot', `${rot}deg`);

      container.appendChild(el);
      const cleanup = setupDrag(el);
      cleanups.push(cleanup);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [setupDrag]);

  return <div ref={containerRef} id="floatingIcons" />;
};

export default FloatingIcons;
