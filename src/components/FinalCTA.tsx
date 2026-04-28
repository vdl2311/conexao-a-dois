import { PrimaryButton } from './Shared';

export function FinalCTA() {
  return (
    <section className="bg-brand-navy text-center py-[100px] px-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      
      <h2 className="text-white text-[clamp(28px,5vw,48px)] mb-4 font-serif leading-tight">
        Uma nova conversa pode abrir caminhos.<br/>
        <em className="text-brand-gold not-italic italic">Pequenos passos diários ajudam na conexão.</em>
      </h2>
      
      <p className="text-white/65 text-[19px] max-w-[600px] mx-auto mb-9 leading-[1.7]">
        Não exige horas livres. Reserve poucos minutos com intenção e as perguntas certas.
      </p>
      
      <PrimaryButton href="https://pay.hotmart.com/N105586857E" className="max-sm:px-6 max-sm:text-[15px]">
        QUERO ACESSAR O GUIA
      </PrimaryButton>
      
      <p className="max-w-[500px] mx-auto text-[16px] leading-[1.6] text-white/70 text-center mt-5">
        Dê um passo prático para enriquecer os momentos de conexão da sua família.
      </p>
    </section>
  );
}
