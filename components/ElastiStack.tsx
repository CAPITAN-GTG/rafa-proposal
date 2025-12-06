'use client';

import { useEffect, useRef, useState } from 'react';

interface ElastiStackProps {
  images: string[];
  altText?: string;
}

export default function ElastiStack({ images, altText = 'Drag Me' }: ElastiStackProps) {
  const stackRef = useRef<HTMLUListElement>(null);
  const elastiStackInstance = useRef<any>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        await loadScript('/js/modernizr.custom.js');
        await loadScript('/js/draggabilly.pkgd.min.js');
        await loadScript('/js/elastiStack.js');
        setScriptsLoaded(true);
      } catch (error) {
        console.error('Error loading ElastiStack scripts:', error);
      }
    };

    loadAllScripts();
  }, []);

  useEffect(() => {
    if (!scriptsLoaded || !stackRef.current) return;

    const initElastiStack = () => {
      if (stackRef.current && typeof window !== 'undefined' && (window as any).ElastiStack) {
        // Clean up previous instance if it exists
        if (elastiStackInstance.current) {
          try {
            if (elastiStackInstance.current.draggie) {
              elastiStackInstance.current.draggie.disable();
            }
          } catch (e) {
            // Ignore errors during cleanup
          }
        }

        // Initialize new instance
        elastiStackInstance.current = new (window as any).ElastiStack(stackRef.current);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initElastiStack, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      if (elastiStackInstance.current && elastiStackInstance.current.draggie) {
        try {
          elastiStackInstance.current.draggie.disable();
        } catch (e) {
          // Ignore errors
        }
      }
    };
  }, [scriptsLoaded, images]);

  return (
    <ul id="elasticstack" className="elasticstack" ref={stackRef}>
      {images.map((src, index) => (
        <li key={index}>
          <img src={src} alt={`${altText} ${index + 1}`} />
          <h4>{altText}</h4>
        </li>
      ))}
    </ul>
  );
}

