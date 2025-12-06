'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    const envUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
    
    if (envUrl) {
      setVideoUrl(envUrl);
      return;
    }
    
    fetch('/api/video-url')
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          setVideoUrl(data.url);
        }
      })
      .catch(() => {
        // Silent fail
      });
  }, []);

  if (!videoUrl) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: 0
      }} />
    );
  }

  return (
    <video
      className="hero-video"
      autoPlay
      loop
      muted
      playsInline
      src={videoUrl}
    />
  );
}
