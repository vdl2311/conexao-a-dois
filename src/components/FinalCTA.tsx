import { PrimaryButton } from './Shared';

export function FinalCTA() {
  return (
    <section className="bg-brand-navy text-center py-[100px] px-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      
      <h2 className="text-white text-[clamp(28px,5vw,48px)] mb-4 font-serif leading-tight">
        1 conversa muda tudo.<br/>
        <em className="text-brand-gold not-italic italic">21 dias reconstroem a conexão.</em>
      </h2>
      
      <p className="text-white/65 text-[19px] max-w-[600px] mx-auto mb-9 leading-[1.7]">
        Você não precisa de mais tempo. Precisa de 5 minutos intencionais por dia e das perguntas certas para começar.
      </p>
      
      <PrimaryButton href="https://pay.hotmart.com/N105586857E" className="max-sm:px-6 max-sm:text-[15px]">
        QUERO TOMAR POSSE DESSA MUDANÇA NO MEU LAR
      </PrimaryButton>
      
      <p className="max-w-[500px] mx-auto text-[16px] leading-[1.6] text-white/70 text-center mt-5">
        Ao adquirir, você não está apenas comprando um material, você está selando um propósito de restauração para a sua família.
      </p>
    </section>
  );
}
