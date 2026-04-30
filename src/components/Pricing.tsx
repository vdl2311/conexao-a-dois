import { Reveal, SectionLabel, SectionTitle, PrimaryButton } from './Shared';

export function Pricing() {
  return (
    <section className="bg-brand-navy py-20 px-5" id="preco">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel className="!text-white/50">Acesso imediato</SectionLabel>
        <Reveal>
          <SectionTitle className="text-white">
            Menos que uma sessão de terapia.<br/>
            <em className="text-brand-gold not-italic font-serif italic">Com impacto que dura o mês inteiro.</em>
          </SectionTitle>
        </Reveal>

        <Reveal>
          <div className="bg-white rounded-[24px] p-[52px_44px] max-w-[520px] mx-auto text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] relative overflow-hidden max-sm:p-[36px_24px]">
            <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-brand-gold to-brand-gold2" />
            
            <div className="bg-brand-gold text-brand-navy text-[13px] font-bold tracking-[2px] uppercase py-1.5 px-4.5 rounded-[20px] inline-block mb-6">
              Oferta de lançamento
            </div>
            
            <h2 className="text-[28px] mb-2 font-serif text-brand-navy">Conexão a Dois</h2>
            <p className="text-[17px] text-brand-gray mb-7">Guia Completo de Terapia Preventiva Conjugal</p>
            
            <p className="text-[18px] text-brand-gray line-through mb-1">De R$ 67,00</p>
            <p className="text-[14px] text-brand-gold font-bold mb-1">Para ajudar o maior número de famílias, o valor hoje é:</p>
            
            <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
              <span className="text-[22px] text-brand-navy font-bold pt-2">R$</span>
              <span className="font-serif text-[68px] font-black text-brand-navy leading-none max-sm:text-[54px]">37</span>
              <span className="text-[26px] font-bold text-brand-navy pt-2">,90</span>
            </div>
            
            <p className="text-[15px] text-brand-gray mb-7">Pagamento único · Acesso imediato e vitalício</p>

            <div className="bg-brand-cream/50 rounded-xl p-6 mb-8 border border-brand-gold/20">
              <h4 className="text-brand-navy font-serif text-[18px] mb-4">Por que este investimento?</h4>
              <ul className="text-left space-y-3">
                <li className="text-[14px] text-brand-gray flex items-start gap-2 italic">
                  <span className="text-brand-gold">•</span>
                  Custa menos que um jantar de delivery que vocês pedem quando estão cansados.
                </li>
                <li className="text-[14px] text-brand-gray flex items-start gap-2 italic">
                  <span className="text-brand-gold">•</span>
                  Representa menos de 10% do valor de uma única sessão de terapia de casal.
                </li>
                <li className="text-[14px] text-brand-gray flex items-start gap-2 italic">
                  <span className="text-brand-gold">•</span>
                  Você paga pela curadoria: não precisa pensar "sobre o que vamos falar hoje".
                </li>
              </ul>
            </div>

            <ul className="text-left my-6">
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Guia completo em PDF (mais de 50 páginas)
              </li>
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Ciclo de 21 dias com prompts diários
              </li>
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Módulo completo sobre Finanças do Casal
              </li>
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Módulo de Intimidade e Reconexão
              </li>
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Módulo de Comunicação Saudável
              </li>
              <li className="text-[16px] py-2.5 border-b border-[#F0EBE0] flex items-center gap-3 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[18px] before:shrink-0">
                Acesso vitalício com atualizações gratuitas
              </li>
            </ul>

            <div className="bg-brand-cream border border-dashed border-brand-gold rounded-xl py-4 px-5 my-6 flex items-center gap-3.5 text-left">
              <div className="text-[32px] shrink-0">🛡️</div>
              <div>
                <h4 className="text-[18px] mb-[3px] text-brand-navy font-serif">Garantia de 7 dias — sem perguntas</h4>
                <p className="text-[15px] text-brand-gray leading-[1.5]">
                  Se por qualquer motivo o guia não for o que você esperava, devolveremos 100% do seu investimento em até 7 dias após a compra.
                </p>
              </div>
            </div>

            <PrimaryButton className="block w-full mt-2 max-sm:px-2 max-sm:text-[15px]" href="https://pay.hotmart.com/N105586857E">
              QUERO ACESSAR O GUIA
            </PrimaryButton>

            <div className="text-[15px] leading-[1.5] text-brand-gray mt-4 text-center">
              Dê um passo prático para enriquecer os momentos de conexão da sua família.
            </div>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <span className="text-[13px] text-brand-gray flex items-center gap-1">🔒 Compra segura</span>
              <span className="text-[13px] text-brand-gray flex items-center gap-1">📱 Acesso no celular</span>
              <span className="text-[13px] text-brand-gray flex items-center gap-1">⚡ Entrega imediata</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
