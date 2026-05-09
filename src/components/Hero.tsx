import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-brand-dark overflow-hidden py-24 px-6 md:px-12">
      <div className="absolute inset-0 noise" />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Fade to cream bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-4 text-brand-gold-soft text-[11px] md:text-[12px] uppercase tracking-[4px] font-bold mb-10 before:w-8 before:h-px before:bg-brand-gold-soft/50 after:w-8 after:h-px after:bg-brand-gold-soft/50"
        >
          Para casais cristãos que se amam — mas estão se perdendo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-brand-cream text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 max-w-4xl mx-auto"
        >
          Vocês dormem juntos<br className="hidden md:block" />
          e vivem <em className="italic text-brand-gold-soft non-italic">como estranhos.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-brand-cream/65 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Não é falta de amor. É falta das conversas certas.<br />
          Descubra o método de 5 minutos que abre os diálogos que seu casamento está esperando — sobre dinheiro, intimidade e comunicação real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <a 
            href="https://pay.hotmart.com/N105586857E" 
            target="_blank"
            className="inline-block bg-gradient-to-br from-brand-gold to-[#8C6520] text-white font-bold text-lg uppercase tracking-wider py-5 px-12 rounded-lg transition-all duration-300 hover:-translate-y-1 animate-pulse-slow active:scale-95"
          >
            Quero Reconectar Agora &rarr;
          </a>
          <p className="text-brand-cream/35 text-[12px] tracking-[0.5px]">
            R$ 37,90 · 7 dias de garantia · Acesso imediato
          </p>
        </motion.div>

        {/* Mockup Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-20 max-w-4xl mx-auto relative group"
        >
          <img 
            src="mockup.png" 
            alt="Guia Conexão a Dois Mockup" 
            className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
