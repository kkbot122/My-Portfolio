import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 h-screen w-32 flex items-center justify-center z-50 dark:bg-[#000000] border-r dark:border-white">
      <nav className="flex flex-col gap-6 items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Work
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          About me
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Skills  
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
        >
          Contact me  
        </button>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="mt-8 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <Moon size={18} className="text-gray-700" />
          ) : (
            <Sun size={18} className="text-yellow-400" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;