import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className="bg-[#0E0904] text-brand-cream/30 py-16 px-6 text-center text-[12px] leading-relaxed border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-60 mb-4">
          <Link to="/politicas-de-privacidade" className="hover:text-brand-cream transition-colors">Políticas de Privacidade</Link>
          <Link to="/termos-de-uso" className="hover:text-brand-cream transition-colors">Termos de Uso</Link>
          <button 
            onClick={() => setShowEmail(!showEmail)} 
            className="hover:text-brand-cream transition-colors cursor-pointer"
          >
            Contato
          </button>
        </div>

        <div className="space-y-4">
          <p>© 2025 Conexão a Dois · Todos os direitos reservados · Garantia de 7 dias sem perguntas</p>
          {showEmail && (
            <p className="opacity-60 max-w-2xl mx-auto italic animate-in fade-in transition-all">
              vdlmarketdigital@gmail.com
            </p>
          )}
        </div>

        <div className="pt-8 border-t border-white/5 max-w-3xl mx-auto">
          <p className="text-[10px] leading-relaxed opacity-40 uppercase tracking-wider">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. 
            FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
