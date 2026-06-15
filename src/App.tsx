import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { FutureGoals } from './components/FutureGoals';
import { StatsAchievements } from './components/StatsAchievements';
import { Contact } from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      <div 
        className={`min-h-screen flex flex-col relative transition-opacity duration-700 bg-[#030014] text-[#f3f0ff] overflow-hidden ${
          isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        {/* Pointer Glow Blob */}
        {!isLoading && (
          <div 
            className="w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none fixed z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 hidden md:block"
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          />
        )}

        <Navbar />
        
        {/* Decorative background blur blobs */}
        <div className="decor-blob decor-blob-1 opacity-20"></div>
        <div className="decor-blob decor-blob-2 opacity-20"></div>
        
        <main className="flex-grow z-10 relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <EducationCertifications />
          <FutureGoals />
          <StatsAchievements />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
