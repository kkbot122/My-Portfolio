import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProvider } from './contexts/ScrollContext';
import GlobalScrollLine from './components/ui/GlobalScrollLine';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
          {/* Global Scroll Line Animation - Always visible, animates as you scroll */}
          <GlobalScrollLine />
          
          <Header />
          <main className="ml-32 relative z-10">
            <div id="hero"><Hero /></div>
            <div id="projects"><Projects /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
          </main>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;