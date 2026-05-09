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
          O verdadeiro problema
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-brand-text"
        >
          Não é falta de amor.<br />É o <em className="italic text-brand-rose-soft non-italic">silêncio confortável</em> que mata casamentos.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-brand-muted text-lg leading-relaxed mb-10"
        >
          <p>
            Casamentos não quebram de um dia para o outro. Eles se desgastam em conversas não tidas, assuntos evitados e momentos que passam sem nenhuma conexão real.
          </p>
          <p>
            O silêncio confortável é traiçoeiro porque não dói — ainda. Duas pessoas que se respeitam, que pagam as contas, que vão à igreja juntas. Mas não se veem mais.
          </p>
          <p>
            A pesquisa de John Gottman, referência mundial em psicologia do casamento, mostra que casais que não têm <strong className="text-brand-text font-medium">micro-conversas emocionais diárias</strong> perdem 40% da intimidade emocional em dois anos — sem nenhuma briga dramática. Apenas silêncio.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-brand-gold/20 p-10 rounded-xl relative overflow-hidden text-left"
        >
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
