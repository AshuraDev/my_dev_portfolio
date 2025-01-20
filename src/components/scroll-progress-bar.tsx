"use client";

import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="fixed top-16 z-30 left-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] transition-all"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;