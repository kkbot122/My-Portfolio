"use client";

import React, { createContext, useContext } from 'react';
import { useScroll } from 'framer-motion';

interface ScrollContextType {
  scrollYProgress: any;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};