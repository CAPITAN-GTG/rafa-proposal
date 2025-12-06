'use client';

import { useEffect } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
}

const defaultEasing = (t: number): number => {
  // Ease in out cubic
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const duration = options.duration || 1200;
  const easing = options.easing || defaultEasing;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        
        const start = window.pageYOffset;
        const target = targetElement.getBoundingClientRect().top + window.pageYOffset - 60; // Offset for header
        const distance = target - start;
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easing(progress);

          window.scrollTo(0, start + distance * ease);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [duration, easing]);
}

