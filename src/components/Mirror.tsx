import { motion } from 'motion/react';

export const Mirror = () => {
  const items = [
    { text: "Eu começo o assunto e ele responde com uma palavra. Então eu desisto. Todo dia é assim.", tag: "💬 Comunicação" },
    { text: "Descobri uma dívida que ele escondia. Não por maldade — por vergonha. Mas dói igual.", tag: "💸 Finanças" },
    { text: "Eu sinto falta de intimidade. Mas falar sobre isso parece errado, como se eu fosse exigente demais.", tag: "❤️ Intimidade" },
    { text: "Às vezes penso: se eu sumisse por um dia, quanto tempo até ele perceber que algo mudou?", tag: "💬 Conexão" },
    { text: "Tentei um devocional. Durou três dias. Depois a rotina engoliu e nenhum dos dois tentou mais.", tag: "🙏 Espiritualidade" },
    { text: "A gente repete a mesma briga há anos. Nunca chega a lugar nenhum. É como gritar num poço.", tag: "💬 Comunicação" },
  ];

  return (
    <section className="bg-brand-dark py-24 px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl text-brand-cream font-semibold max-w-2xl mx-auto mb-4 leading-tight"
      >
        Se algum desses pensamentos passou pela sua cabeça esta semana —
      </motion.h2>
      <p className="text-brand-cream/40 text-[14px] md:text-base mb-16 tracking-[1px] uppercase font-bold">
        este guia foi feito para você.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px max-w-5xl mx-auto">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-brand-gold/10 p-8 text-left hover:bg-white/10 transition-colors"
          >
            <span className="font-serif text-6xl text-brand-gold opacity-30 leading-none block mb-[-12px]">"</span>
            <p className="font-serif italic text-lg text-brand-cream/75 leading-relaxed mb-4">
              {item.text}
            </p>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-brand-gold-soft opacity-60">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
