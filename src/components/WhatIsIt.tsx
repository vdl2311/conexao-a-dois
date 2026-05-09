export const WhatIsIt = () => {
  return (
    <section className="py-24 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="text-left">
          <p className="text-[10px] font-bold uppercase tracking-[5px] text-brand-rose mb-4">
            O que é o guia
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6 text-brand-text">
            Terapia preventiva conjugal em cápsulas de 5 minutos
          </h2>
          <p className="text-brand-text-muted text-base leading-relaxed mb-5">
            Não é mais um devocional bonito que pede mais tempo e disciplina do casal já esgotado. É uma ferramenta prática, honesta e com base em pesquisa — que abre as conversas que seu casamento <em>precisa ter</em> antes que o silêncio se torne distância definitiva.
          </p>
          <p className="text-brand-text-muted text-base leading-relaxed mb-5">
            Desenvolvido a partir da escuta real de casais cristãos, aborda sem rodeios os três temas que os devocionais evitam: dinheiro, intimidade e comunicação.
          </p>
          
          <div className="flex gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-black text-brand-gold leading-none">21</div>
              <div className="text-[10px] md:text-[12px] tracking-[2px] uppercase text-brand-text-muted font-bold mt-1">Dias de Desafio</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-black text-brand-gold leading-none">3</div>
              <div className="text-[10px] md:text-[12px] tracking-[2px] uppercase text-brand-text-muted font-bold mt-1">Temas Reais</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-black text-brand-gold leading-none">5</div>
              <div className="text-[10px] md:text-[12px] tracking-[2px] uppercase text-brand-text-muted font-bold mt-1">Min. Por Dia</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="bg-white border border-brand-gold/25 rounded-xl p-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-brand-gold shadow-sm">
            <h3 className="font-serif text-lg font-bold mb-1.5 text-brand-text">💬 Comunicação</h3>
            <p className="text-sm text-brand-text-muted leading-relaxed">Aprenda a ouvir de novo. Semana 1 descobre padrões de conflito e constrói pontes com prompts gentis mas honestos.</p>
          </div>
          <div className="bg-white border border-brand-gold/25 rounded-xl p-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-brand-rose shadow-sm">
            <h3 className="font-serif text-lg font-bold mb-1.5 text-brand-text">💰 Finanças</h3>
            <p className="text-sm text-brand-text-muted leading-relaxed">O assunto nº 1 em brigas conjugais. Semana 2 alinha sonhos, revela personalidades financeiras e cria um plano juntos.</p>
          </div>
          <div className="bg-white border border-brand-gold/25 rounded-xl p-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-brand-sage shadow-sm">
            <h3 className="font-serif text-lg font-bold mb-1.5 text-brand-text">❤️ Intimidade</h3>
            <p className="text-sm text-brand-text-muted leading-relaxed">A intimidade começa muito antes do quarto. Semana 3 reconecta corpo e alma com vulnerabilidade e sem culpa religiosa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
