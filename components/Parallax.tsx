'use client';

import { ReactNode, useRef, useEffect, ElementType } from 'react';

interface ParallaxProps {
  children?: ReactNode;
  speed?: number;
  xpos?: string;
  outerHeight?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
}

export default function Parallax({
  children,
  speed = 0.5,
  xpos = '50%',
  outerHeight = true,
  className = '',
  style = {},
  as: Component = 'div',
}: ParallaxProps) {
  const elementRef = useRef<HTMLElement>(null);

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
      if (outerHeight) {
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

      const yPos = Math.round((firstTop - pos) * speed);
      element.style.backgroundPosition = `${xpos} ${yPos}px`;
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
  }, [speed, xpos, outerHeight]);

  // Type assertion for ref forwarding
  const ComponentWithRef = Component as any;
  
  return (
    <ComponentWithRef 
      ref={elementRef} 
      className={className}
      style={style}
    >
      {children}
    </ComponentWithRef>
  );
}

