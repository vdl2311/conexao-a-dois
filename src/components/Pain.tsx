import { Reveal, SectionLabel, SectionSub, SectionTitle } from './Shared';

export function Pain() {
  return (
    <section className="bg-brand-cream py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>Cenários Comuns</SectionLabel>
        <Reveal>
          <SectionTitle>Essa é a realidade de muitos casais hoje</SectionTitle>
        </Reveal>
        <Reveal>
          <SectionSub>
            Não é falta de amor. É falta de conexão. E existe uma diferença enorme entre as duas.
          </SectionSub>
        </Reveal>

        <Reveal className="flex flex-col gap-4 mt-10">
          <div className="bg-white border-l-4 border-brand-gold py-6 px-7 rounded-r-xl mb-5 font-serif italic text-[20px] text-brand-navy leading-[1.6] shadow-[0_4px_20px_rgba(26,39,68,0.06)]">
            "Muitos casais relatam que, mesmo morando juntos, a sensação de distanciamento pode crescer com o tempo."
            <span className="block font-sans not-italic text-[15px] text-brand-gray mt-2.5">
              — Realidade compartilhada por diversos lares
            </span>
          </div>
          <div className="bg-white border-l-4 border-brand-gold py-6 px-7 rounded-r-xl mb-5 font-serif italic text-[20px] text-brand-navy leading-[1.6] shadow-[0_4px_20px_rgba(26,39,68,0.06)]">
            "A rotina frequentemente dificulta os momentos de conexão em casal, gerando desgaste e afastamento."
            <span className="block font-sans not-italic text-[15px] text-brand-gray mt-2.5">
              — Desafio comum na correria do dia a dia
            </span>
          </div>
          <div className="bg-white border-l-4 border-brand-gold py-6 px-7 rounded-r-xl mb-5 font-serif italic text-[20px] text-brand-navy leading-[1.6] shadow-[0_4px_20px_rgba(26,39,68,0.06)]">
            "O tema financeiro é reconhecido como um dos maiores desafios de comunicação sensível entre parceiros."
            <span className="block font-sans not-italic text-[15px] text-brand-gray mt-2.5">
              — Fator frequente de estresse conjugal
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-brand-navy text-white rounded-[16px] py-8 px-7 mt-5 text-center">
            <p className="font-serif italic text-[22px] leading-[1.6] mb-3">
              "São as raposinhas que estragam as vinhas."
            </p>
            <p className="text-[15px] text-white/60">Cântico dos Cânticos 2:15</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
