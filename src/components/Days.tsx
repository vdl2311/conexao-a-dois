export const Days = () => {
  const items = [
    { week: 'Semana 1 · Comunicação', color: 'text-brand-gold', title: 'Dia 1 — Escuta Ativa', text: '"O que você gostaria que eu ouvisse melhor em você?"' },
    { week: 'Semana 1 · Comunicação', color: 'text-brand-gold', title: 'Dia 4 — Resolução Saudável', text: '"Qual é o nosso padrão de conflito que mais te cansa?"' },
    { week: 'Semana 1 · Comunicação', color: 'text-brand-gold', title: 'Dia 6 — Sonhos Partilhados', text: '"Qual sonho seu eu ainda não conheço bem?"' },
    { week: 'Semana 2 · Finanças', color: 'text-brand-rose', title: 'Dia 8 — Transparência', text: '"Há algum gasto que eu escondo ou evito mencionar?"' },
    { week: 'Semana 2 · Finanças', color: 'text-brand-rose', title: 'Dia 10 — Sonhos', text: '"Qual é o nosso maior sonho financeiro a 5 anos?"' },
    { week: 'Semana 3 · Intimidade', color: 'text-brand-sage', title: 'Dia 16 — Toque e Afeto', text: '"Qual forma de afeto físico te faz sentir mais amado(a)?"' },
    { week: 'Semana 3 · Intimidade', color: 'text-brand-sage', title: 'Dia 20 — Escolha Diária', text: '"Como posso mostrar que te escolho todos os dias?"' },
    { week: 'Semana 3 · Intimidade', color: 'text-brand-sage', title: 'Dia 21 — Celebração', text: '"Qual foi a maior transformação que notou em nós?"' },
  ];

  return (
    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[5px] text-brand-rose mb-4">
          O Ciclo de 21 Dias
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-2xl mx-auto text-brand-text">
          Cada dia tem um propósito. Cada conversa, um resultado.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-cream rounded-2xl p-7 border border-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] text-left group"
            >
              <p className={`text-[10px] font-bold uppercase tracking-[3px] mb-4 ${item.color}`}>
                {item.week}
              </p>
              <h4 className="font-serif text-lg font-bold mb-2 text-brand-text">{item.title}</h4>
              <p className="text-[14px] text-brand-text-muted leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
