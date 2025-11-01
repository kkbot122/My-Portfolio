import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 h-screen w-32 flex items-center justify-center z-50 dark:bg-[#000000] border-r dark:border-white transition-colors duration-300">
      <nav className="flex flex-col gap-6 items-center">
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('hero')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Home
        </Button>
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('projects')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Work
        </Button>
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('about')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          About me
        </Button>
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('skills')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Skills  
        </Button>
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('contact')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Contact me  
        </Button>
        
        {/* Dark Mode Toggle Button */}
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="mt-8 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <Moon size={18} className="text-gray-700 dark:text-gray-300" />
          ) : (
            <Sun size={18} className="text-yellow-400" />
          )}
        </Button>
      </nav>
    </header>
  );
};

export default Header;