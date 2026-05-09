import { motion } from 'motion/react';

export const FinalCTA = () => {
  return (
    <section className="bg-brand-dark py-32 md:py-48 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 final-gradient pointer-events-none" />
      
      {/* Decorative Ornament */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[120px] text-brand-gold opacity-5 pointer-events-none select-none leading-none">
        ✦
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-7xl font-bold leading-[1.1] mb-8 text-brand-cream max-w-[780px] mx-auto"
        >
          Vocês merecem mais do que <em className="italic text-brand-gold-soft non-italic">coexistir.</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-cream/60 text-lg md:text-xl max-w-[520px] mx-auto mb-14 font-light"
        >
          Uma conversa honesta, em 5 minutos, pode abrir portas que estavam fechadas há anos. O guia já está pronto. Agora só falta a decisão.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          <a 
            href="https://pay.hotmart.com/N105586857E" 
            target="_blank"
            className="inline-block bg-gradient-to-br from-brand-gold to-[#8C6520] text-white font-bold text-lg uppercase tracking-wider py-6 px-14 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,150,58,0.4)] active:scale-95"
          >
            Começar Agora por R$ 37,90
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 font-serif italic text-base text-brand-cream/30 max-w-2xl mx-auto leading-relaxed"
        >
          "Dois são melhor do que um... porque se um cair, o outro levanta o seu companheiro." — Eclesiastes 4:9-10
        </motion.p>
      </div>
    </section>
  );
};
