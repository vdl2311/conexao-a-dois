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
            
            <div className="bg-brand-gold text-brand-navy text-[11px] font-bold tracking-[2px] uppercase py-1.5 px-4.5 rounded-[20px] inline-block mb-6">
              Oferta de lançamento
            </div>
            
            <h2 className="text-[26px] mb-2 font-serif text-brand-navy">Conexão a Dois</h2>
            <p className="text-[15px] text-brand-gray mb-7">Guia Completo de Terapia Preventiva Conjugal</p>
            
            <p className="text-[16px] text-brand-gray line-through mb-1">De R$ 67,00</p>
            
            <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
              <span className="text-[22px] text-brand-navy font-bold pt-2">R$</span>
              <span className="font-serif text-[68px] font-black text-brand-navy leading-none max-sm:text-[54px]">37</span>
              <span className="text-[26px] font-bold text-brand-navy pt-2">,90</span>
            </div>
            
            <p className="text-[13px] text-brand-gray mb-7">Pagamento único · Acesso imediato e vitalício</p>

            <ul className="text-left my-6">
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Guia completo em PDF (mais de 50 páginas)
              </li>
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Ciclo de 21 dias com prompts diários
              </li>
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Módulo completo sobre Finanças do Casal
              </li>
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Módulo de Intimidade e Reconexão
              </li>
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Módulo de Comunicação Saudável
              </li>
              <li className="text-[14px] py-2 border-b border-[#F0EBE0] flex items-center gap-2.5 text-brand-navy before:content-['✓'] before:text-brand-gold before:font-bold before:text-[16px] before:shrink-0">
                Acesso vitalício com atualizações gratuitas
              </li>
            </ul>

            <div className="bg-brand-cream border border-dashed border-brand-gold rounded-xl py-4 px-5 my-6 flex items-center gap-3.5 text-left">
              <div className="text-[32px] shrink-0">🛡️</div>
              <div>
                <h4 className="text-[15px] mb-[3px] text-brand-navy font-serif">Garantia de 7 dias — sem perguntas</h4>
                <p className="text-[13px] text-brand-gray leading-[1.5]">
                  Se por qualquer motivo o guia não for o que você esperava, devolveremos 100% do seu investimento em até 7 dias após a compra.
                </p>
              </div>
            </div>

            <PrimaryButton className="block w-full mt-2 max-sm:px-2 max-sm:text-[14px]" href="https://pay.hotmart.com/N105586857E">
              QUERO TOMAR POSSE DESSA MUDANÇA NO MEU LAR
            </PrimaryButton>

            <div className="text-[13px] leading-[1.5] text-brand-gray mt-4 text-center">
              Ao adquirir, você não está apenas comprando um material, você está selando um propósito de restauração para a sua família.
            </div>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <span className="text-[11px] text-brand-gray flex items-center gap-1">🔒 Compra segura</span>
              <span className="text-[11px] text-brand-gray flex items-center gap-1">📱 Acesso no celular</span>
              <span className="text-[11px] text-brand-gray flex items-center gap-1">⚡ Entrega imediata</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
