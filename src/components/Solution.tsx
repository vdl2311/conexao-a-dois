import { Reveal, SectionLabel, SectionSub, SectionTitle } from './Shared';

export function Solution() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>A solução</SectionLabel>
        <Reveal>
          <SectionTitle>Conexão a Dois — O Guia que Nenhum Devocional Ousou Escrever</SectionTitle>
        </Reveal>
        <Reveal>
          <SectionSub>
            Não é mais um devocional com versículos bonitos. É uma ferramenta prática de terapia preventiva conjugal — projetada para o casal que se ama, mas está perdendo a conexão na correria.
          </SectionSub>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-12">
            <div className="bg-brand-light rounded-[16px] p-7 border border-brand-gold/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,39,68,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold2 rounded-xl flex items-center justify-center text-[22px] mb-4">
                💬
              </div>
              <h3 className="text-[18px] mb-2 text-brand-navy">Prompts de diálogo estruturado</h3>
              <p className="text-[14px] leading-[1.7] text-brand-gray">
                Perguntas cuidadosamente elaboradas para abrir conversas que você sabe que precisa ter — mas não sabe por onde começar.
              </p>
            </div>

            <div className="bg-brand-light rounded-[16px] p-7 border border-brand-gold/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,39,68,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold2 rounded-xl flex items-center justify-center text-[22px] mb-4">
                ⏱
              </div>
              <h3 className="text-[18px] mb-2 text-brand-navy">5 minutos por dia</h3>
              <p className="text-[14px] leading-[1.7] text-brand-gray">
                Projetado para casais ocupados. Sem pressão, sem perfeição. Apenas consistência em pequenos momentos intencionais.
              </p>
            </div>

            <div className="bg-brand-light rounded-[16px] p-7 border border-brand-gold/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,39,68,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold2 rounded-xl flex items-center justify-center text-[22px] mb-4">
                💰
              </div>
              <h3 className="text-[18px] mb-2 text-brand-navy">Finanças sem tabu</h3>
              <p className="text-[14px] leading-[1.7] text-brand-gray">
                O assunto número 1 em brigas conjugais, abordado com honestidade e ferramentas práticas para o casal alinhar sonhos e dinheiro.
              </p>
            </div>

            <div className="bg-brand-light rounded-[16px] p-7 border border-brand-gold/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,39,68,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold2 rounded-xl flex items-center justify-center text-[22px] mb-4">
                ❤️
              </div>
              <h3 className="text-[18px] mb-2 text-brand-navy">Intimidade e conexão</h3>
              <p className="text-[14px] leading-[1.7] text-brand-gray">
                Roteiros de conversa que criam segurança emocional para o casal se aproximar em todos os aspectos do relacionamento.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
