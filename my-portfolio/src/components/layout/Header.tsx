import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme, toggleTheme } = useTheme();

  const handleResumeClick = () => {
    window.open('/Resume.Kisna.pdf', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.header 
      className="fixed left-0 top-0 h-screen w-32 flex items-center justify-center z-50 bg-white dark:bg-black transition-colors duration-300"
      initial={{ opacity: 0, x: -30 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : -30 
      }}
      transition={{ 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut" 
      }}
    >
      <nav className="flex flex-col gap-6 items-center">
        {/* Logo */}
        <motion.div 
          className="mb-8 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/kisna-logo.png" 
            alt="Kisna Logo" 
            className="w-12 h-12 rounded-lg object-contain hover:opacity-80 transition-opacity dark:invert dark:brightness-10"
          />
        </motion.div>

        {/* Home Button */}
        {/* <Button 
          variant="ghost" 
          size="default"
          onClick={() => scrollToSection('hero')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          Home
        </Button> */}

        {/* Work Button */}
        <Button 
          variant="ghost" 
          size="default"
          onClick={() => scrollToSection('projects')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          Work
        </Button>

        {/* About me Button */}
        <Button 
          variant="ghost" 
          size="default"
          onClick={() => scrollToSection('about')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          About me
        </Button>

        {/* Skills Button */}
        <Button 
          variant="ghost" 
          size="default"
          onClick={() => scrollToSection('skills')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          Skills
        </Button>

        {/* Contact me Button */}
        <Button 
          variant="ghost" 
          size="default"
          onClick={() => scrollToSection('contact')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          Contact me
        </Button>

        {/* Resume Button */}
        <Button 
          variant="ghost" 
          size="default"
          onClick={handleResumeClick}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
        >
          Resume
        </Button>
        
        {/* Dark Mode Toggle Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
          className="mt-8 hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <Moon size={18} className="text-[#DC0E0E] dark:text-gray-300" />
          ) : (
            <Sun size={18} className="text-[#DC0E0E]" />
          )}
        </Button>
      </nav>
    </motion.header>
  );
};

export default Header;