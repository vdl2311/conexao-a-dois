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
          É uma terça-feira qualquer. 22h47.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-brand-muted text-lg leading-[1.9] font-light"
        >
          <p>
            Ele está no celular. Ela está no celular. A televisão fala sozinha. Os filhos já dormiram. <strong className="text-brand-text font-medium">São os primeiros 20 minutos a sós do dia</strong> — e nenhum dos dois sabe o que dizer.
          </p>
          <p>
            Não é que não haja assunto. É que os assuntos reais parecem grandes demais para uma hora dessas. Dinheiro sempre vira briga. Intimidade virou silêncio. E o "como foi seu dia?" perdeu o significado faz tempo.
          </p>

          <div className="border-l-4 border-brand-gold bg-brand-cream p-8 my-10 rounded-r-lg">
            <p className="font-serif italic text-2xl text-brand-text leading-relaxed">
              "A gente não briga mais. A gente simplesmente... parou de conversar."
            </p>
          </div>

          <p>
            Isso não é crise. É algo mais silencioso e mais perigoso: é a <strong className="text-brand-text font-medium">erosão lenta da conexão</strong>. O casal continua junto, continua se respeitando, continua indo à igreja — mas perdeu a intimidade emocional que mantinha tudo de pé.
          </p>
          <p>
            E os devocionais tradicionais? Pedem mais leitura, mais tempo, mais disciplina — exatamente o que o casal exausto não tem. Nenhum deles fala abertamente sobre falta de sexo, brigas por dinheiro ou a sensação de morar com um estranho.
          </p>
          <p>
            <strong className="text-brand-text font-medium">Conexão a Dois</strong> nasceu para preencher esse vazio. Com honestidade. Com coragem. E em 5 minutos por dia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
