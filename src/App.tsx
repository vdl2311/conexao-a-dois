import { Hero } from './components/Hero';
import { Pain } from './components/Pain';
import { Promise } from './components/Promise';
import { WhatIsIt } from './components/WhatIsIt';
import { Days } from './components/Days';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Hero />
      <Pain />
      <Promise />
      <WhatIsIt />
      <Days />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
