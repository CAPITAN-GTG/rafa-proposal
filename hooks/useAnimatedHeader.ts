'use client';

import { useEffect, useState } from 'react';

interface AnimatedHeaderOptions {
  shrinkPoint?: number;
  shrinkClass?: string;
}

const defaultOptions: AnimatedHeaderOptions = {
  shrinkPoint: 100,
  shrinkClass: 'header-shrink',
};

export function useAnimatedHeader(options: AnimatedHeaderOptions = {}) {
  const [isShrunk, setIsShrunk] = useState(false);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    let ticking = false;

    const updateHeader = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop >= opts.shrinkPoint!) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    updateHeader();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [opts.shrinkPoint]);

  return { isShrunk, shrinkClass: opts.shrinkClass };
}

