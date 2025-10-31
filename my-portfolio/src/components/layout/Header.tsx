const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed left-0 top-0 h-screen w-32 flex items-center justify-center z-50">
      <nav className="flex flex-col gap-6">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          Work
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          About me
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          Skills  
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          Contact me  
        </button>
      </nav>
    </header>
  );
};

export default Header;