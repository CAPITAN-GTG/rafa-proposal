'use client';

import { ReactNode, useRef, useEffect, useState, ElementType } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  axis?: 'x' | 'y';
  distance?: string;
  duration?: string;
  delay?: string;
  viewportFactor?: number;
  origin?: string;
  reset?: boolean;
  className?: string;
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  axis = 'y',
  distance = '25px',
  duration = '0.66s',
  delay = '0s',
  viewportFactor = 0.33,
  origin = 'bottom',
  reset = false,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

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
      let currentEl: HTMLElement | null = el;

      while (currentEl) {
        if (!isNaN(currentEl.offsetTop)) {
          offsetTop += currentEl.offsetTop;
        }
        currentEl = currentEl.offsetParent as HTMLElement | null;
      }

      return { top: offsetTop };
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

      const inViewport = isElementInViewport(element, viewportFactor);
      
      if (inViewport && (!hasRevealed || reset)) {
        setIsVisible(true);
        setHasRevealed(true);
      } else if (!inViewport && reset) {
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
  }, [viewportFactor, reset, hasRevealed]);

  // Apply styles based on visibility
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (isVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transition = `opacity ${duration} ease ${delay}, transform ${duration} ease ${delay}`;
    } else {
      const initialTransform = axis === 'x' 
        ? `translateX(${distance})` 
        : `translateY(${distance})`;

      element.style.opacity = '0';
      element.style.transform = initialTransform;
      element.style.transition = `opacity ${duration} ease ${delay}, transform ${duration} ease ${delay}`;
    }
  }, [isVisible, axis, distance, duration, delay]);

  // Type assertion for ref forwarding
  const ComponentWithRef = Component as any;
  
  return (
    <ComponentWithRef ref={elementRef} className={className}>
      {children}
    </ComponentWithRef>
  );
}

