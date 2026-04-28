import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function Testimonials() {
  return (
    <section className="bg-brand-light py-20 px-5">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel>Autoridade em Acolhimento</SectionLabel>
        <Reveal>
          <SectionTitle>A sabedoria da prevenção no seu lar</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
            <div className="border-l-4 border-brand-gold pl-6 py-2">
              <p className="font-serif italic text-[24px] md:text-[26px] text-brand-navy leading-snug">
                "O segredo de um lar abençoado não está em grandes gestos, mas na constância dos pequenos detalhes."
              </p>
            </div>
            <div className="border-l-4 border-brand-gold pl-6 py-2">
              <p className="font-serif italic text-[24px] md:text-[26px] text-brand-navy leading-snug">
                "Não espere a crise chegar para buscar a direção. A prevenção é o caminho da sabedoria."
              </p>
            </div>
          </div>
        </Reveal>

        <div className="w-[60px] h-[2px] bg-brand-gold/30 mx-auto my-16" />

        <SectionLabel>O Impacto Prático</SectionLabel>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_18px_rgba(26,39,68,0.07)] relative before:content-['\22'] before:font-serif before:text-[64px] before:text-brand-gold before:opacity-30 before:absolute before:top-2 before:left-4 before:leading-none">
              <p className="text-[16px] leading-[1.8] text-brand-navy mt-5 italic">
                A pergunta do dia 3 nos fez chorar juntos pela primeira vez em meses. Parece simples, mas foi exatamente o que precisávamos para quebrar o gelo.
              </p>
              <p className="mt-4 text-[15px] font-bold text-brand-navy">
                Marcelo e Camila <span className="text-[14px] text-brand-gray font-normal">— casados há 8 anos</span>
              </p>
              <div className="text-brand-gold text-[16px] mt-2.5">★★★★★</div>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_18px_rgba(26,39,68,0.07)] relative before:content-['\22'] before:font-serif before:text-[64px] before:text-brand-gold before:opacity-30 before:absolute before:top-2 before:left-4 before:leading-none">
              <p className="text-[16px] leading-[1.8] text-brand-navy mt-5 italic">
                A semana de finanças foi transformadora. Nunca tínhamos conseguido falar sobre dinheiro sem brigar. Os prompts criaram um espaço seguro que nunca tínhamos tido antes.
              </p>
              <p className="mt-4 text-[15px] font-bold text-brand-navy">
                Renata e Felipe <span className="text-[14px] text-brand-gray font-normal">— casados há 5 anos</span>
              </p>
              <div className="text-brand-gold text-[16px] mt-2.5">★★★★★</div>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_18px_rgba(26,39,68,0.07)] relative before:content-['\22'] before:font-serif before:text-[64px] before:text-brand-gold before:opacity-30 before:absolute before:top-2 before:left-4 before:leading-none">
              <p className="text-[16px] leading-[1.8] text-brand-navy mt-5 italic">
                Simples, honesto e direto ao ponto. Sem enrolação, sem aquela linguagem de devocional que faz você se sentir culpado. Muito melhor do que esperávamos.
              </p>
              <p className="mt-4 text-[15px] font-bold text-brand-navy">
                Thiago e Priscila <span className="text-[14px] text-brand-gray font-normal">— casados há 12 anos</span>
              </p>
              <div className="text-brand-gold text-[16px] mt-2.5">★★★★★</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
