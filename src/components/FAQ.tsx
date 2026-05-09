import { motion } from 'motion/react';

export const FAQ = () => {
  const faqs = [
    {
      q: 'E se ele não quiser fazer junto?',
      a: 'Comece você. Leia a pergunta do dia em voz alta — casualmente, sem pressão, sem cobrar. Muitos casais relatam que bastou o marido ouvir a primeira pergunta para querer responder. O protocolo foi projetado para despertar — não para exigir. E às vezes, quem abre a conversa primeiro muda o clima do ambiente todo.'
    },
    {
      q: 'Precisa estar em crise para funcionar?',
      a: 'Pelo contrário — foi feito para terapia preventiva. Funciona melhor para casais que ainda se amam mas estão sentindo a conexão enfraquecer. Quanto antes você usar, menor o desgaste a reverter.'
    },
    {
      q: 'É muito religioso? Funciona para casais não-evangélicos?',
      a: 'O guia tem base cristã honesta, mas os prompts foram escritos para qualquer casal. O foco é na conversa real entre dois — não em doutrinas ou regras religiosas.'
    },
    {
      q: 'Realmente cabe em 5 minutos?',
      a: 'Foi calibrado especificamente para isso. Uma leitura curta, um prompt de diálogo, uma oração simples e uma micro-ação — tudo em 5 minutos. A consistência importa mais do que a duração.'
    },
    {
      q: 'Como recebo o material?',
      a: 'Imediatamente após a confirmação do pagamento, você recebe o link de download por e-mail. Funciona em qualquer dispositivo — sem instalar nada.'
    },
    {
      q: 'E se não funcionar para nós?',
      a: '7 dias de garantia total e incondicional. Se por qualquer motivo o protocolo não agregar, devolvemos 100% do valor. Sem questionamentos, sem burocracia.'
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
