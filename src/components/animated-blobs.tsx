'use client';

import { useEffect, useState } from 'react';

export const AnimatedBlobs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute transition-all duration-500 ease-in-out"
        style={{
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          width: '400px',
          height: '400px',
          opacity: 0.15,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-[100px] animate-blob" />
      </div>
      <div 
        className="absolute transition-all duration-5000 ease-in-out"
        style={{
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y + 50}px`,
          width: '300px',
          height: '300px',
          opacity: 0.15,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-purple-500 blur-[100px] animate-blob animation-delay-2000" />
      </div>
      <div 
        className="absolute transition-all duration-5000 ease-in-out"
        style={{
          left: `${mousePosition.x + 100}px`,
          top: `${mousePosition.y - 150}px`,
          width: '350px',
          height: '350px',
          opacity: 0.15,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-pink-500 blur-[100px] animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};
