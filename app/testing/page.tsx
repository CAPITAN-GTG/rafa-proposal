'use client';

import { useEffect } from 'react';

export default function TestingPage() {
  useEffect(() => {
    // Fade in animation
    const content = document.querySelector('.hero-test-content');
    if (content) {
      (content as HTMLElement).style.opacity = '0';
      (content as HTMLElement).style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        (content as HTMLElement).style.transition = 'all 0.8s ease-out';
        (content as HTMLElement).style.opacity = '1';
        (content as HTMLElement).style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="hero-test">
      <div className="hero-test-background">
        <div className="hero-test-gradient"></div>
        <div className="hero-test-pattern"></div>
      </div>
      <div className="hero-test-content">
        <div className="hero-test-badge">Testing</div>
        <h1 className="hero-test-title">
          Beautiful Design
          <span className="hero-test-subtitle">One Shot Hero</span>
        </h1>
        <p className="hero-test-description">
          A clean, modern hero section for testing purposes
        </p>
      </div>
      <style jsx>{`
        .hero-test {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-test-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-test-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-test-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.4;
        }

        .hero-test-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          color: white;
        }

        .hero-test-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
        }

        .hero-test-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: -1px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-test-subtitle {
          display: block;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 400;
          margin-top: 0.5rem;
          opacity: 0.9;
          letter-spacing: 3px;
        }

        .hero-test-description {
          font-family: 'Lato', sans-serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-test {
            padding: 1.5rem;
          }

          .hero-test-badge {
            font-size: 0.75rem;
            padding: 0.4rem 1.2rem;
            margin-bottom: 1.5rem;
          }

          .hero-test-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}


