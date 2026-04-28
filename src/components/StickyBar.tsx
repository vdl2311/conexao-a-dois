import { useEffect, useState } from 'react';
import { PrimaryButton } from './Shared';

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-brand-navy border-t-2 border-brand-gold py-3 px-5 flex items-center justify-center gap-5 z-[999] flex-wrap transition-transform duration-400 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'} max-sm:gap-3`}
    >
      <span className="text-white text-[14px]">
        Guia Completo — <strong className="text-brand-gold font-bold">R$ 37,90</strong>
      </span>
      <PrimaryButton href="https://pay.hotmart.com/N105586857E" className="!animate-none py-3 px-6 text-[13px] max-sm:px-4 max-sm:py-2">
        TOMAR POSSE
      </PrimaryButton>
    </div>
  );
}
