import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="ml-32">
          <div id="hero"><Hero /></div>
          <div id="projects"><Projects /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;