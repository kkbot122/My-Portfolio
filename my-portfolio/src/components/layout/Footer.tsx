const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-white dark:bg-[#000000] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with blood, sweat & tears by Kisna.
        </p>
        
        <div className="flex gap-6">
          {/* <a 
            href="mailto:your.email@example.com" 
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Email
          </a> */}
          <a 
            href="https://github.com/kkbot122" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kisna-kanti/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/enchant.edk/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;