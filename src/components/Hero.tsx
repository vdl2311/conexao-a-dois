import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-brand-dark overflow-hidden py-24 px-6 md:px-12">
      <div className="absolute inset-0 noise" />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Top Bar inside Hero for layout simplicity */}
      <div className="absolute top-0 left-0 right-0 bg-brand-dark text-brand-gold-pale py-2.5 text-[12px] md:text-[13px] tracking-[1.5px] font-medium z-20">
        🔒 Garantia de 7 dias · Acesso imediato · 100% digital
      </div>

      {/* Fade to cream bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-4 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold-soft text-[11.5px] md:text-[12.5px] uppercase tracking-[3px] font-bold py-2 px-5 rounded-full mb-8"
        >
          ✦ O Protocolo das 3 Conversas
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-brand-cream/50 text-sm md:text-base font-light mb-5"
        >
          Para a esposa que ama o marido — e está cansada de se sentir invisível
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-brand-cream text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 max-w-4xl mx-auto"
        >
          Você não perdeu o amor.<br className="hidden md:block" />
          Você perdeu a <em className="italic text-brand-gold-soft non-italic">coragem de conversar.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="inline-block bg-brand-rose/15 border border-brand-rose-soft/30 rounded-lg py-3 px-7 text-brand-cream/75 text-sm md:text-[15px] leading-relaxed max-w-2xl mb-8"
        >
          Dinheiro virou briga. Intimidade virou silêncio. E o "como foi seu dia?" já não significa nada.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="text-brand-cream/55 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          O Protocolo das 3 Conversas abre — em 5 minutos por dia — os três diálogos que seu casamento parou de ter. Sem constrangimento. Sem culpa. Com honestidade real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <a 
            href="#comprar" 
            className="inline-block bg-gradient-to-br from-brand-gold to-[#8C6520] text-white font-bold text-lg uppercase tracking-wider py-5 px-12 rounded-lg transition-all duration-300 hover:-translate-y-1 animate-pulse-slow active:scale-95"
          >
            Quero Ter Essa Conversa Hoje &rarr;
          </a>
          <p className="text-brand-cream/30 text-[12px] tracking-[0.5px]">
            R$ 37,90 · Garantia de 7 dias · Acesso imediato
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
