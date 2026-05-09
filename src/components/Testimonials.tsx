import { motion } from 'motion/react';

export const Testimonials = () => {
  const testimonials = [
    {
      avatar: 'RC',
      color: 'bg-brand-gold',
      text: '"No Dia 8, a pergunta era sobre transparência financeira. Meu marido ficou em silêncio por uns 10 segundos. Depois confessou uma dívida que ele carregava há dois anos com vergonha. Chorei — não de raiva, mas de alívio. Finalmente estávamos falando de verdade. Esse dia valeu mais do que qualquer sessão de terapia que tentamos antes."',
      name: 'Roberta & Carlos M.',
      detail: 'Casados há 9 anos · Belo Horizonte, MG'
    },
    {
      avatar: 'TA',
      color: 'bg-brand-sage',
      text: '"A semana de intimidade foi a mais difícil — e a mais libertadora. No Dia 19, ele me perguntou qual expectativa minha ele nunca tinha ouvido. Eu falei coisas que guardei por 6 anos. Não foi perfeito. Mas foi real. E foi o começo de uma conversa que ainda está acontecendo."',
      name: 'Tatiane & Alexandre P.',
      detail: 'Casados há 11 anos · Goiânia, GO'
    },
    {
      avatar: 'DF',
      color: 'bg-brand-rose',
      text: '"Minha esposa sugeriu. Eu achei que ia ser mais um devocional que a gente faria por 3 dias e esquecia. No Dia 4 eu me vi pedindo desculpa por um padrão de conflito que eu nunca tinha reconhecido. Isso nunca tinha acontecido em 7 anos. O guia faz as perguntas que a gente não teria coragem de fazer sozinho."',
      name: 'Diego & Fernanda L.',
      detail: 'Casados há 7 anos · Curitiba, PR'
    }
  ];

  return (
    <section className="bg-brand-dark py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold-soft text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
          >
            O que os casais dizem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-brand-cream font-bold max-w-[560px] mx-auto leading-tight"
          >
            Conversas que aconteceram depois de anos de silêncio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-cream/45 text-[14px] mt-4"
          >
            Histórias reais de casais que decidiram parar de coexistir e começar a conviver.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-brand-gold/15 rounded-2xl p-8 transition-colors hover:bg-white/10 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-11 h-11 rounded-full ${testi.color} flex items-center justify-center font-serif text-lg font-bold text-white`}>
                  {testi.avatar}
                </div>
                <div className="text-brand-gold-soft text-[10px] tracking-[2px]">★★★★★</div>
              </div>
              <blockquote className="font-serif italic text-[17px] text-brand-cream/85 leading-relaxed mb-6 flex-1">
                {testi.text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-brand-gold-soft font-semibold not-italic">{part}</strong> : part)}
              </blockquote>
              <div className="border-t border-white/5 pt-5 space-y-1">
                <p className="text-[13px] font-bold tracking-[0.5px] text-brand-cream/70">
                  {testi.name}
                </p>
                <p className="text-[12px] text-brand-cream/30">
                  {testi.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
