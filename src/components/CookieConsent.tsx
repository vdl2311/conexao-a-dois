import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-navy/10 p-5 z-[1000] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[13px] text-brand-gray leading-[1.6] max-w-[800px]">
        Usamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e analisar nosso tráfego. 
        Ao continuar navegando, você concorda com a nossa <Link to="/privacidade" className="text-brand-gold underline">Política de Privacidade</Link>.
      </p>
      <div className="flex gap-3 shrink-0">
        <button onClick={handleDecline} className="px-5 py-2 text-[13px] text-brand-gray bg-transparent border border-brand-gray/30 rounded-[50px] hover:bg-brand-gray/10 transition-colors cursor-pointer">
          Recusar
        </button>
        <button onClick={handleAccept} className="px-5 py-2 text-[13px] font-bold text-brand-navy bg-brand-gold rounded-[50px] hover:bg-brand-gold2 transition-colors cursor-pointer">
          Aceitar Todos
        </button>
      </div>
    </div>
  );
}
