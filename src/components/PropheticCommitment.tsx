import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function PropheticCommitment() {
  return (
    <section className="bg-white pb-20 pt-10 px-5">
      <div className="max-w-[820px] mx-auto">
        <Reveal>
          <div className="bg-brand-navy text-white rounded-2xl py-12 px-8 sm:px-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(26,39,68,0.2)]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-brand-gold2" />
            <SectionLabel className="!text-brand-gold">O Primeiro Passo</SectionLabel>
            <SectionTitle className="text-white mt-1 mb-6">O Poder do Posicionamento</SectionTitle>
            <p className="text-white/80 leading-[1.8] max-w-[700px] mx-auto font-serif italic text-[19px] sm:text-[21px]">
              "Quando o casal decide agir de forma intencional, a mudança pode começar na prática. Este guia foi desenhado para incentivar uma postura ativa. Cada página traz uma direção para que propostas de aproximação sejam feitas de forma simples. Não é sobre atingir a perfeição, é sobre dar os primeiros passos construtivos na comunicação e melhorar o diálogo."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
