import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0F1829] py-8 px-5 text-center text-[14px] text-white/40 leading-[1.8]">
      <p><strong className="text-white/70 font-bold">Conexão a Dois</strong> — Guia de Terapia Preventiva Conjugal</p>
      <p className="mt-2 text-white/50 hover:text-white/80 transition-colors">
        <Link to="/privacidade" className="text-inherit no-underline">Política de Privacidade</Link> · 
        <Link to="/termos" className="text-inherit no-underline ml-1">Termos de Uso</Link> · 
        <Link to="/contato" className="text-inherit no-underline ml-1">Contato</Link>
      </p>
      <p className="mt-3 max-w-[800px] mx-auto text-[13px] sm:text-[14px]">Este produto é um e-book digital. Os resultados podem variar de acordo com o engajamento e as circunstâncias individuais de cada casal. Este guia não substitui acompanhamento psicológico ou terapia conjugal profissional.</p>
      <p className="mt-6 max-w-[800px] mx-auto text-[13px] text-white/50 border-t border-white/10 pt-5 leading-[1.6]">
        <strong>AVISO LEGAL:</strong> Este site não é afiliado, endossado ou parte do site do Facebook e de nenhuma entidade da Facebook Inc. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
      </p>
    </footer>
  );
}
