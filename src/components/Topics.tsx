import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function Topics() {
  return (
    <section className="bg-brand-cream py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>O que você vai encontrar</SectionLabel>
        <Reveal>
          <SectionTitle>Conteúdo que ninguém tem coragem de abordar</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-start gap-[18px] bg-white p-6 rounded-[14px] shadow-[0_2px_12px_rgba(26,39,68,0.06)] border-l-4 border-brand-gold">
              <div className="text-[28px] shrink-0">🗣</div>
              <div>
                <h3 className="text-[17px] font-serif mb-1 text-brand-navy">Os 4 Cavaleiros do Apocalipse Conjugal</h3>
                <p className="text-[14px] text-brand-gray leading-[1.6]">
                  Baseado na pesquisa de John Gottman — os comportamentos que predit o divórcio e como neutralizá-los com a Regra dos 5:1.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[18px] bg-white p-6 rounded-[14px] shadow-[0_2px_12px_rgba(26,39,68,0.06)] border-l-4 border-brand-gold">
              <div className="text-[28px] shrink-0">💰</div>
              <div>
                <h3 className="text-[17px] font-serif mb-1 text-brand-navy">As 4 Personalidades Financeiras do Casal</h3>
                <p className="text-[14px] text-brand-gray leading-[1.6]">
                  Guardião, Gastador, Evitador ou Planejador? Entenda como cada perfil afeta as finanças do casal e como criar alinhamento real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[18px] bg-white p-6 rounded-[14px] shadow-[0_2px_12px_rgba(26,39,68,0.06)] border-l-4 border-brand-gold">
              <div className="text-[28px] shrink-0">❤️</div>
              <div>
                <h3 className="text-[17px] font-serif mb-1 text-brand-navy">As 5 Linguagens de Intimidade</h3>
                <p className="text-[14px] text-brand-gray leading-[1.6]">
                  Além do conceito das linguagens do amor — aplicado especificamente para a intimidade e a reconexão do casal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[18px] bg-white p-6 rounded-[14px] shadow-[0_2px_12px_rgba(26,39,68,0.06)] border-l-4 border-brand-gold">
              <div className="text-[28px] shrink-0">🙏</div>
              <div>
                <h3 className="text-[17px] font-serif mb-1 text-brand-navy">Perspectiva de fé integrada</h3>
                <p className="text-[14px] text-brand-gray leading-[1.6]">
                  Versículos e reflexões como ponto de partida para cada conversa — sem julgamento, sem pressão, com graça e honestidade.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
