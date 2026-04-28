import { useState } from 'react';
import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Preciso ser cristão para usar este guia?",
      a: "Não. O guia tem perspectiva de fé, mas os temas e ferramentas são úteis para qualquer casal que queira se reconectar. Os versículos servem como ponto de partida para reflexão, não como pré-requisito."
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Simples: se por qualquer motivo o guia não corresponder às suas expectativas nos primeiros 7 dias após a compra, basta entrar em contato conosco por e-mail e devolveremos 100% do valor pago. Sem burocracia, sem perguntas."
    },
    {
      q: "O guia substitui terapia de casal?",
      a: "Não. Este guia é uma ferramenta de prevenção e fortalecimento do vínculo conjugal. Casais em situações de crise severa, violência ou questões de saúde mental devem buscar acompanhamento profissional especializado."
    },
    {
      q: "Preciso fazer os 21 dias seguidos?",
      a: "Não precisa. O guia é flexível. Você pode fazer no seu ritmo, retomar do ponto onde parou ou repetir o ciclo sempre que sentir que a conexão precisa de atenção."
    },
    {
      q: "Em qual formato recebo o guia?",
      a: "O guia é entregue em PDF de alta qualidade, que pode ser lido no celular, tablet ou computador. Você receberá o link de download imediatamente após a confirmação do pagamento."
    }
  ];

  return (
    <section className="bg-brand-cream py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>Dúvidas frequentes</SectionLabel>
        <Reveal>
          <SectionTitle>Perguntas que você pode ter</SectionTitle>
        </Reveal>

        <Reveal className="mt-10">
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-brand-navy/10 py-5 last:border-b-0">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full font-serif text-[17px] cursor-pointer flex justify-between items-center text-brand-navy text-left bg-transparent border-none p-0 focus:outline-none"
                  >
                    {faq.q}
                    <span 
                      className={`text-[22px] text-brand-gold shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </button>
                  <div 
                    className={`text-[14px] text-brand-gray leading-[1.8] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] pt-3 opacity-100' : 'max-h-0 pt-0 opacity-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
