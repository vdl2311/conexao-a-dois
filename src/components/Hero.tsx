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
        className="text-white text-[clamp(40px,7.5vw,76px)] leading-[1.1] text-center max-w-[900px] mb-6"
      >
        5 Minutos que abrem as conversas que seu casamento precisa ter... <br />
        <em className="text-brand-gold not-italic font-serif italic">antes que seja tarde demais.</em>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-white/75 text-[clamp(17px,3vw,20px)] text-center max-w-[650px] leading-[1.7]"
      >
        Um Guia de Terapia Preventiva para Casais Ocupados que se amam, mas estão se perdendo na correria.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="w-[60px] h-[2px] bg-brand-gold my-10 mx-auto" 
      />

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="flex gap-10 flex-wrap justify-center"
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
        className="mt-16 sm:mt-20 flex flex-col items-center gap-3 w-full"
      >
        <a 
          href="#degustacao"
          className="text-white/50 hover:text-brand-gold transition-colors flex flex-col items-center gap-3 no-underline group"
        >
          <span className="text-[14px] uppercase tracking-[2px] font-bold">Ler Gratuitamente a Introdução</span>
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
