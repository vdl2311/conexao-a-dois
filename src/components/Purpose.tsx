import { Reveal } from './Shared';

export function Purpose() {
  return (
    <section className="bg-brand-cream border-t border-brand-gold/20 pt-[80px] pb-5 px-5">
      <div className="max-w-[820px] mx-auto text-center">
        <Reveal>
          <div className="bg-white border-l-4 border-r-4 border-brand-gold py-10 px-8 sm:px-12 shadow-[0_10px_30px_rgba(26,39,68,0.05)] rounded-xl relative overflow-hidden">
            <h3 className="text-brand-navy font-serif text-[28px] mb-5">Conexão e Propósito</h3>
            <p className="text-brand-gray text-[19px] leading-[1.8] italic">
              "Mais que uma organização conjugal, esta ferramenta é um convite construtivo para princípios práticos de cuidado. Para muitos lares onde a correria afeta o ambiente de paz, este guia foi estruturado para auxiliar o casal na busca por um convívio mais próximo e harmonioso."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
