import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-white dark:bg-[#000000] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300 z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">
          Made with <span className="text-[#ED3500] font-medium">blood</span>, <span className="text-[#57B4BA] font-medium">sweat</span> & <span className="text-[#1B56FD] font-medium">tears</span> by Kisna.
        </p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/kkbot122" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kisna-kanti/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href="https://www.instagram.com/enchant.edk/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;