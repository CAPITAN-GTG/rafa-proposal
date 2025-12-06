'use client';

import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  xpos?: string;
  outerHeight?: boolean;
}

const defaultOptions: ParallaxOptions = {
  speed: 0.5,
  xpos: '50%',
  outerHeight: true,
};

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let windowHeight = window.innerHeight;
    let firstTop = 0;

    const updateHeight = () => {
      windowHeight = window.innerHeight;
    };

    const getElementTop = () => {
      let offsetTop = 0;
      let currentEl: HTMLElement | null = element;

      while (currentEl) {
        if (!isNaN(currentEl.offsetTop)) {
          offsetTop += currentEl.offsetTop;
        }
        currentEl = currentEl.offsetParent as HTMLElement | null;
      }

      return offsetTop;
    };

    const getElementHeight = () => {
      if (opts.outerHeight) {
        return element.offsetHeight;
      }
      return element.clientHeight;
    };

    // Get initial position
    firstTop = getElementTop();

    const update = () => {
      const pos = window.pageYOffset;
      const top = getElementTop();
      const height = getElementHeight();

      // Check if element is in viewport
      if (top + height < pos || top > pos + windowHeight) {
        return;
      }

      const yPos = Math.round((firstTop - pos) * opts.speed!);
      element.style.backgroundPosition = `${opts.xpos} ${yPos}px`;
    };

    // Initial update
    update();

    // Listen to scroll and resize
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', () => {
      updateHeight();
      firstTop = getElementTop();
      update();
    }, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [opts.speed, opts.xpos, opts.outerHeight]);

  return elementRef;
}

