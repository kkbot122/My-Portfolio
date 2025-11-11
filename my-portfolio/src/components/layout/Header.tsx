import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const { theme, toggleTheme } = useTheme();

  const handleResumeClick = () => {
    window.open("/Resume.KisnaKanti.pdf", "_blank", "noopener,noreferrer");
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "projects", label: "Work" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <motion.header
        className="hidden md:flex fixed left-0 top-0 h-screen w-32 items-center justify-center z-50 bg-white dark:bg-black transition-colors duration-300"
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -30,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <nav className="flex flex-col gap-6 items-center">
          {/* Logo */}
          <motion.div
            className="mb-8 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/kisna-logo.png"
              alt="Kisna Logo"
              className="w-12 h-12 rounded-lg object-contain hover:opacity-80 transition-opacity dark:invert dark:brightness-10"
            />
          </motion.div>

          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="default"
              onClick={() => scrollToSection(item.id)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
            >
              {item.label}
            </Button>
          ))}

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
            {theme === "light" ? (
              <Moon size={18} className="text-[#DC0E0E] dark:text-gray-300" />
            ) : (
              <Sun size={18} className="text-[#DC0E0E]" />
            )}
          </Button>
        </nav>
      </motion.header>

      {/* Mobile Header - Only visible on mobile */}
      <motion.header
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/kisna-logo.png"
              alt="Kisna Logo"
              className="w-10 h-10 rounded-lg object-contain dark:invert dark:brightness-10"
            />
          </motion.div>

          {/* Right side - Theme toggle and hamburger */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-[#DC0E0E]" />
              ) : (
                <Sun size={20} className="text-[#DC0E0E]" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-900 dark:text-white" />
              ) : (
                <Menu size={24} className="text-gray-900 dark:text-white" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-white dark:bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ top: '73px' }} // Adjust based on your header height
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleResumeClick}
                  className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Resume
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;