import { motion } from 'motion/react';
import { PrimaryButton } from './Shared';

export function Hero() {
  return (
    <section className="bg-brand-navy min-h-screen flex flex-col items-center justify-center py-[60px] px-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      
      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-brand-gold/15 border border-brand-gold text-brand-gold text-[13px] font-bold tracking-[3px] uppercase py-[7px] px-5 rounded-[30px] mb-7"
      >
        Guia de Terapia Preventiva Conjugal
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="text-white text-[clamp(40px,7.5vw,76px)] leading-[1.1] text-center max-w-[900px]"
      >
        Quando foi a última vez que vocês tiveram uma <em className="text-brand-gold not-italic font-serif italic">conversa de verdade?</em>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="w-[60px] h-[2px] bg-brand-gold my-8 mx-auto" 
      />

      <motion.p 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-white/75 text-[clamp(17px,3vw,20px)] text-center max-w-[650px] mt-5 leading-[1.7]"
      >
        Prompts de 5 minutos que abrem as conversas que seu casamento precisa ter — sobre dinheiro, intimidade e comunicação.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="flex gap-10 flex-wrap justify-center mt-10"
      >
        <div className="text-center">
          <strong className="block font-serif text-[44px] text-brand-gold leading-none">21</strong>
          <span className="text-[14px] text-white/60 tracking-[1px] uppercase mt-1.5 block">dias de desafio</span>
        </div>
        <div className="text-center">
          <strong className="block font-serif text-[44px] text-brand-gold leading-none">3</strong>
          <span className="text-[14px] text-white/60 tracking-[1px] uppercase mt-1.5 block">temas essenciais</span>
        </div>
        <div className="text-center">
          <strong className="block font-serif text-[44px] text-brand-gold leading-none">5</strong>
          <span className="text-[14px] text-white/60 tracking-[1px] uppercase mt-1.5 block">minutos por dia</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-12 flex flex-col items-center gap-3 w-full"
      >
        <PrimaryButton href="https://pay.hotmart.com/N105586857E" className="max-sm:px-6 max-sm:text-[15px]">
          QUERO TOMAR POSSE DESSA MUDANÇA NO MEU LAR
        </PrimaryButton>
        <div className="text-[15px] sm:text-[16px] leading-[1.6] text-white/70 text-center max-w-[550px] mt-2">
          Ao adquirir, você não está apenas comprando um material, você está selando um propósito de restauração para a sua família.
        </div>
      </motion.div>
    </section>
  );
}
