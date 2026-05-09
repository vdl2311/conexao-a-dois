import { motion } from 'motion/react';

export const FAQ = () => {
  const faqs = [
    {
      q: 'Precisa estar em crise para usar o guia?',
      a: 'Pelo contrário — ele foi feito para terapia preventiva. Funciona melhor exatamente para casais que ainda se amam, mas estão sentindo a conexão enfraquecer. Quanto antes, menor o desgaste a reverter.'
    },
    {
      q: 'E se meu cônjuge não quiser participar?',
      a: 'Comece você. Leia em voz alta a pergunta do dia — casualmente, sem pressão. Muitos casais relatam que bastou o parceiro ouvir a primeira pergunta para querer responder. O guia foi projetado para despertar, não para exigir.'
    },
    {
      q: 'É muito religioso? Funciona para casais não-evangélicos?',
      a: 'O guia tem base cristã honesta, mas os prompts de diálogo funcionam para qualquer casal. O foco é na conversa real entre dois — não em regras religiosas ou doutrina.'
    },
    {
      q: 'Como recebo o material?',
      a: 'Imediatamente após a confirmação do pagamento, você recebe o link de download por e-mail. Funciona em qualquer celular, tablet ou computador — sem instalar nada.'
    },
    {
      q: 'E se não funcionar para nós?',
      a: 'Você tem 7 dias de garantia total e incondicional. Se por qualquer motivo o guia não agregar, basta enviar um e-mail que devolvemos 100% do valor. Sem questionamentos, sem burocracia.'
    },
    {
      q: 'Temos pouco tempo. Realmente cabe em 5 minutos?',
      a: 'Foi projetado especificamente para isso. Cada dia tem uma leitura curta, um prompt de diálogo, uma oração simples e uma micro-ação — tudo calibrado para 5 minutos. Sem pressão, sem perfeição. Apenas consistência.'
    }
  ];

  return (
    <section className="bg-brand-cream py-24 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-center mb-16 text-brand-text leading-tight"
        >
          Perguntas frequentes
        </motion.h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-black/10 py-8 first:pt-0"
            >
              <h3 className="font-serif text-xl font-bold mb-3 text-brand-text">
                {faq.q}
              </h3>
              <p className="text-[16px] text-brand-muted leading-relaxed font-light">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
