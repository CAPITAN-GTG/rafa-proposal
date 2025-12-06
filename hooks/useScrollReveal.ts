'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  axis?: 'x' | 'y';
  distance?: string;
  duration?: string;
  delay?: string;
  viewportFactor?: number;
  origin?: string;
  reset?: boolean;
}

const defaultOptions: ScrollRevealOptions = {
  axis: 'y',
  distance: '25px',
  duration: '0.66s',
  delay: '0s',
  viewportFactor: 0.33,
  origin: 'bottom',
  reset: false,
};

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getViewportHeight = () => {
      const client = document.documentElement.clientHeight;
      const inner = window.innerHeight;
      return client < inner ? inner : client;
    };

    const getOffset = (el: HTMLElement) => {
      let offsetTop = 0;
      let offsetLeft = 0;
      let currentEl: HTMLElement | null = el;

      while (currentEl) {
        if (!isNaN(currentEl.offsetTop)) {
          offsetTop += currentEl.offsetTop;
        }
        if (!isNaN(currentEl.offsetLeft)) {
          offsetLeft += currentEl.offsetLeft;
        }
        currentEl = currentEl.offsetParent as HTMLElement | null;
      }

      return { top: offsetTop, left: offsetLeft };
    };

    const isElementInViewport = (el: HTMLElement, factor: number) => {
      const scrolled = window.pageYOffset;
      const viewed = scrolled + getViewportHeight();
      const elH = el.offsetHeight;
      const elTop = getOffset(el).top;
      const elBottom = elTop + elH;

      return elTop + elH * factor <= viewed && elBottom >= scrolled;
    };

    const updateVisibility = () => {
      if (!element) return;

      const inViewport = isElementInViewport(element, opts.viewportFactor!);
      
      if (inViewport && (!hasRevealed || opts.reset)) {
        setIsVisible(true);
        setHasRevealed(true);
      } else if (!inViewport && opts.reset) {
        setIsVisible(false);
      }
    };

    // Initial check
    updateVisibility();

    // Listen to scroll events
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [opts.viewportFactor, opts.reset, hasRevealed]);

  // Apply styles based on visibility
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (isVisible) {
      const transformMap: Record<string, string> = {
        x: opts.axis === 'x' ? `translateX(0)` : 'translateY(0)',
        y: opts.axis === 'y' ? `translateY(0)` : 'translateX(0)',
      };

      const distance = opts.distance || '25px';
      const initialTransform = opts.axis === 'x' 
        ? `translateX(${distance})` 
        : `translateY(${distance})`;

      element.style.opacity = '1';
      element.style.transform = transformMap[opts.axis!] || 'translateY(0)';
      element.style.transition = `opacity ${opts.duration} ease ${opts.delay}, transform ${opts.duration} ease ${opts.delay}`;
    } else {
      const distance = opts.distance || '25px';
      const initialTransform = opts.axis === 'x' 
        ? `translateX(${distance})` 
        : `translateY(${distance})`;

      element.style.opacity = '0';
      element.style.transform = initialTransform;
      element.style.transition = `opacity ${opts.duration} ease ${opts.delay}, transform ${opts.duration} ease ${opts.delay}`;
    }
  }, [isVisible, opts]);

  return elementRef;
}

