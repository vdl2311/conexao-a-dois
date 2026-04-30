/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Days } from './components/Days';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ForWhom } from './components/ForWhom';
import { Hero } from './components/Hero';
import { Pain } from './components/Pain';
import { Pricing } from './components/Pricing';
import { PropheticCommitment } from './components/PropheticCommitment';
import { FreeSample } from './components/FreeSample';
import { Solution } from './components/Solution';
import { StickyBar } from './components/StickyBar';
import { Testimonials } from './components/Testimonials';
import { Topics } from './components/Topics';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Contact } from './components/Contact';
import { CookieConsent } from './components/CookieConsent';

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <FreeSample />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
