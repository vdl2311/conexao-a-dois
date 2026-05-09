import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Pain } from './components/Pain';
import { Promise } from './components/Promise';
import { Mirror } from './components/Mirror';
import { Bridge } from './components/Bridge';
import { WhatIsIt } from './components/WhatIsIt';
import { Days } from './components/Days';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

const HomePage = () => (
  <>
    <Hero />
    <Pain />
    <Promise />
    <Mirror />
    <Bridge />
    <WhatIsIt />
    <Days />
    <Testimonials />
    <Pricing />
    <FAQ />
    <FinalCTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-brand-gold selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politicas-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
