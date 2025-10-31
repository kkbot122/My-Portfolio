import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          Made with blood, sweat & tears by Kisna.
        </p>
        
        <div className="flex gap-6">
          {/* <a 
            href="mailto:your.email@example.com" 
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Email
          </a> */}
          <a 
            href="https://github.com/kkbot122" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kisna-kanti/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/enchant.edk/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;