import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import OurProcess from './sections/OurProcess';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <OurStory />
      <OurProcess />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
