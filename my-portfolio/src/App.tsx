import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="ml-32">
        <div id="hero"><Hero /></div>
        <div id="projects"><Projects /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;