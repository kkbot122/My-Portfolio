// components/SmoothScroll.tsx
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import type { LenisOptions } from 'lenis';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    };

    const lenis = new Lenis(options);
    
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;