import { motion } from 'motion/react';

export const Bridge = () => {
  return (
    <section className="bg-brand-cream py-24 px-6 text-center">
      <div className="max-w-[680px] mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-gold text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
        >
          A boa notícia
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6 text-brand-text"
        >
          Isso não é o fim. É exatamente onde este guia começa.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-brand-muted text-lg leading-relaxed mb-10"
        >
          <p>
            Casamentos não quebram de um dia para o outro. Eles se desgastam em conversas não tidas, assuntos evitados e momentos que passam sem conexão real.
          </p>
          <p>
            A pesquisa de John Gottman, referência mundial em psicologia do casamento, mostra que <strong className="text-brand-text font-medium">micro-investimentos relacionais diários</strong> reconstroem o que anos de silêncio corroeram. Não é preciso fim de semana de retiro. Não é preciso terapia toda semana.
          </p>
          <p>
            São necessários <strong className="text-brand-text font-medium">5 minutos por dia com as perguntas certas.</strong>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-brand-gold/20 p-10 rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16" />
          <p className="font-serif italic text-xl text-brand-muted leading-relaxed">
            "São os pequenos raposos que estragam as vinhas." — Cântico dos Cânticos 2:15
            <span className="block mt-4 font-sans not-italic text-sm text-brand-muted/70 tracking-wide uppercase">
              Se são os pequenos problemas que destroem, são também os pequenos gestos diários que reconstroem.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
