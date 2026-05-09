import { motion } from 'motion/react';

export const Pain = () => {
  const pains = [
    { icon: '😶', text: '"Vivemos na mesma casa, dormimos na mesma cama — mas parece que somos estranhos."' },
    { icon: '💸', text: '"Toda vez que o assunto é dinheiro, a conversa vira briga. A gente simplesmente para de falar."' },
    { icon: '❄️', text: '"A intimidade sumiu. Nenhum dos dois sabe como voltar atrás sem parecer estranho."' },
    { icon: '📖', text: '"Já tentamos devocional — mas pede tempo demais. A rotina engoliu e desistimos."' },
    { icon: '😔', text: '"Nos amamos, mas não nos sentimos mais conectados. E o silêncio foi virando hábito."' },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[5px] text-brand-rose mb-4"
        >
          Você se reconhece aqui?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl mx-auto text-brand-text"
        >
          A dor que ninguém fala na célula
        </motion.h2>
        
        <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid gap-4 max-w-[620px] mx-auto mt-10 text-left"
        >
          {pains.map((pain, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-4 bg-brand-cream border-l-[3px] border-brand-rose-light p-5 rounded-r-lg text-brand-text shadow-sm"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{pain.icon}</span>
              <span className="text-base font-light leading-relaxed">{pain.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-[600px] mx-auto text-brand-text-muted text-lg font-light leading-relaxed"
        >
          Se alguma dessas frases tocou você — este guia foi escrito para o seu casamento.
        </motion.p>
      </div>
    </section>
  );
};
