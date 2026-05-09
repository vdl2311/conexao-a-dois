import { motion } from 'motion/react';

export const Days = () => {
  const steps = [
    { num: 1, title: "Leia", text: "Um versículo e o contexto do dia", time: "1 min" },
    { num: 2, title: "Responda", text: "Um prompt de diálogo cada um", time: "2 min" },
    { num: 3, title: "Orem", text: "Uma oração simples e direta juntos", time: "1 min" },
    { num: 4, title: "Compromisso", text: "Uma micro-ação para o dia", time: "1 min" },
  ];

  return (
    <section className="bg-brand-cream py-24 md:py-32 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-gold text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
        >
          Como funciona
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-16 max-w-[560px] mx-auto text-brand-text"
        >
          Cada dia em exatamente 5 minutos
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-[860px] mx-auto relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative py-8 px-6 group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold/40 text-xl font-serif">
                  →
                </div>
              )}
              <div className="w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center font-serif text-2xl font-bold text-brand-gold mx-auto mb-6">
                {step.num}
              </div>
              <h4 className="font-serif text-xl font-bold mb-2 text-brand-text leading-tight">{step.title}</h4>
              <p className="text-[14px] text-brand-muted leading-relaxed font-light mb-4">{step.text}</p>
              <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[11px] font-bold uppercase tracking-[2px] rounded-full">
                {step.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
