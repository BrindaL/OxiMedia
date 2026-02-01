import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import OurProcess from './sections/OurProcess';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasSeenSplash', 'true');
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Hero />
        <OurStory />
        <OurProcess />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
