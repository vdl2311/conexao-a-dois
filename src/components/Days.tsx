import { Reveal, SectionLabel, SectionSub, SectionTitle } from './Shared';

export function Days() {
  return (
    <section className="bg-brand-navy py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>O método</SectionLabel>
        <Reveal>
          <SectionTitle className="text-white">O Ciclo de 21 Dias</SectionTitle>
        </Reveal>
        <Reveal>
          <SectionSub className="text-white/65">
            Cada semana aprofunda um pilar essencial do casamento saudável, com exercícios diários de 5 minutos.
          </SectionSub>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            <div className="bg-white/5 border border-brand-gold/25 rounded-[16px] py-8 px-7 text-center transition-colors duration-200 hover:bg-brand-gold/10">
              <p className="text-[13px] tracking-[2px] text-brand-gold font-bold uppercase mb-3">
                Semana 1 · Dias 1–7
              </p>
              <h3 className="text-[24px] text-white mb-3">Comunicação</h3>
              <p className="text-[16px] text-white/70 leading-[1.6]">
                Aprenda a ouvir de novo, resolver conflitos sem destruir a conexão e reconhecer padrões que desgastam o relacionamento.
              </p>
              <div className="flex gap-2 justify-center mt-5 flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <span key={day} className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-[12px] font-bold text-brand-gold flex items-center justify-center">
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-brand-gold/25 rounded-[16px] py-8 px-7 text-center transition-colors duration-200 hover:bg-brand-gold/10">
              <p className="text-[13px] tracking-[2px] text-brand-gold font-bold uppercase mb-3">
                Semana 2 · Dias 8–14
              </p>
              <h3 className="text-[24px] text-white mb-3">Finanças</h3>
              <p className="text-[16px] text-white/70 leading-[1.6]">
                Alinhe sonhos e dinheiro com transparência. Descubra sua personalidade financeira e a do seu cônjuge — sem julgamento.
              </p>
              <div className="flex gap-2 justify-center mt-5 flex-wrap">
                {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                  <span key={day} className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-[12px] font-bold text-brand-gold flex items-center justify-center">
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-brand-gold/25 rounded-[16px] py-8 px-7 text-center transition-colors duration-200 hover:bg-brand-gold/10">
              <p className="text-[13px] tracking-[2px] text-brand-gold font-bold uppercase mb-3">
                Semana 3 · Dias 15–21
              </p>
              <h3 className="text-[24px] text-white mb-3">Intimidade</h3>
              <p className="text-[16px] text-white/70 leading-[1.6]">
                Reconecte corpo e alma. Abra conversas sobre expectativas, afeto e cumplicidade — em um espaço seguro criado pelos dois.
              </p>
              <div className="flex gap-2 justify-center mt-5 flex-wrap">
                {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                  <span key={day} className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-[12px] font-bold text-brand-gold flex items-center justify-center">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
