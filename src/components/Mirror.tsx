import { motion } from 'motion/react';

export const Mirror = () => {
  const items = [
    { text: "Tentamos fazer devocional juntos, mas a rotina engoliu. A gente desistiu depois de 3 dias e nunca mais tentou.", tag: "💬 Comunicação" },
    { text: "Toda vez que o assunto é dinheiro, a conversa acaba mal. Então a gente simplesmente parou de falar sobre isso.", tag: "💸 Finanças" },
    { text: "Sinto que ele está do meu lado mas não está presente. A gente dorme junto e eu me sinto sozinha.", tag: "❤️ Intimidade" },
    { text: "Eu amo ele. Mas quando foi a última vez que a gente teve uma conversa de verdade? Não lembro.", tag: "💬 Conexão" },
    { text: "A intimidade física sumiu. Nenhum dos dois sabe como falar sobre isso sem parecer crítica ou pressão.", tag: "❤️ Intimidade" },
    { text: "A gente repete as mesmas brigas. Meses depois, a mesma discussão. Como se nunca chegasse a lugar nenhum.", tag: "💬 Comunicação" },
  ];

  return (
    <section className="bg-brand-dark py-24 px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl text-brand-cream font-semibold max-w-2xl mx-auto mb-16 leading-tight"
      >
        Se alguma dessas frases passou pela sua cabeça — este guia é para você.
      </motion.h2>

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
