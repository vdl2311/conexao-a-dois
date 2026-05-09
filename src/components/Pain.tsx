import { motion } from 'motion/react';

export const Pain = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[740px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-rose-soft text-[11px] font-bold uppercase tracking-[5px] mb-5 block"
        >
          Você vai se reconhecer aqui
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-10 text-brand-text"
        >
          São 22h47. Ele está no celular. Você está no celular. E a distância entre vocês mede exatamente 30 centímetros.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-brand-muted text-lg leading-[1.9] font-light"
        >
          <p>
            Você é quem pesquisou isso. Quem chegou até essa página. Porque você carrega o casamento — não por obrigação, mas porque <strong className="text-brand-text font-medium">você enxerga o que está acontecendo antes dele.</strong>
          </p>
          <p>
            Você quer reconectar. Mas toda vez que tenta iniciar uma conversa real, ou ele desvia, ou vira briga, ou o momento passa e você engole de volta.
          </p>

          <div className="border-l-4 border-brand-gold bg-brand-cream p-8 my-10 rounded-r-lg">
            <p className="font-serif italic text-2xl text-brand-text leading-relaxed">
              "Eu não quero um casamento perfeito. Eu só quero sentir que ele está presente."
            </p>
          </div>

          <p>
            Você já tentou devocional. Tentou a metodologia do fim de semana. Tentou terapia — ou pensou em tentar, mas R$ 200 a sessão duas vezes por mês não cabe no orçamento.
          </p>
          <p>
            E nada fala sobre o que realmente dói: <strong className="text-brand-text font-medium">a intimidade que sumiu sem aviso.</strong> A dívida que ele esconde com vergonha. A sensação de morar com um homem que você ama mas não conhece mais.
          </p>

          <div className="bg-brand-rose/5 border border-brand-rose-soft/20 rounded-xl p-8 my-10">
            <p className="text-[15px] md:text-[16px] text-brand-text leading-relaxed">
              <strong className="text-brand-rose font-bold">E ainda tem a culpa religiosa.</strong> Você sente que querer mais — mais presença, mais intimidade física, mais transparência financeira — é ingratidão. Que você deveria "ser grata pelo que tem." Então você engole. E o silêncio cresce.
            </p>
          </div>

          <p>
            <strong className="text-brand-text font-medium">Conexão a Dois</strong> existe para você. Não para o casal genérico. Para você, que está aqui às 22h, com o coração pesado, procurando uma saída que não seja terapia cara nem mais um devocional bonito que dura três dias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
