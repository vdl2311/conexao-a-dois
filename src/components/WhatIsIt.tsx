import { motion } from 'motion/react';

export const WhatIsIt = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        <div className="text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
          >
            O que é o Conexão a Dois
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-brand-text"
          >
            Um guia de terapia preventiva que não tem medo dos assuntos reais.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-[17px] leading-[1.8] mb-6"
          >
            Não é um devocional bonito que fica na estante. É uma ferramenta projetada para o casal que ama um ao outro mas está perdendo a conexão — e quer fazer algo concreto a respeito.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-brand-muted text-[17px] leading-[1.8] mb-6"
          >
            Cada dia tem um prompt de diálogo, um versículo de contexto e uma micro-ação. Sem pressão. Sem perfeição. Apenas 5 minutos de presença intencional — antes de dormir ou ao acordar.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-brand-muted text-[17px] leading-[1.8] mb-10"
          >
            Aborda sem rodeios os três temas que os devocionais sempre ignoraram: <strong className="text-brand-text font-medium">dinheiro, intimidade e comunicação real.</strong>
          </motion.p>

          <div className="flex gap-10 pt-10 border-t border-brand-gold/20">
            <div>
              <div className="font-serif text-5xl font-bold text-brand-gold leading-none">21</div>
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-brand-muted mt-2">Dias</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-brand-gold leading-none">3</div>
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-brand-muted mt-2">Temas</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-brand-gold leading-none">5</div>
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-brand-muted mt-2">Min/dia</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-brand-gold/20 rounded-xl p-8 bg-brand-cream relative overflow-hidden group hover:translate-x-2 transition-transform"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-xl">💬</span>
              <h3 className="font-serif text-xl font-bold">Comunicação — Semana 1</h3>
            </div>
            <p className="text-brand-muted text-[15px] leading-relaxed mb-4">Aprenda a ouvir de novo. Os 7 primeiros dias revelam padrões de conflito, constroem escuta ativa e abrem conversas que estavam engavetadas.</p>
            <div className="bg-black/5 p-4 rounded-lg text-[14px] italic text-brand-text">"Qual é o assunto que eu mais evito te falar — e por quê?"</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-brand-gold/20 rounded-xl p-8 bg-brand-cream relative overflow-hidden group hover:translate-x-2 transition-transform"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-rose-soft" />
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-lg bg-brand-rose-soft/10 flex items-center justify-center text-xl">💰</span>
              <h3 className="font-serif text-xl font-bold">Finanças — Semana 2</h3>
            </div>
            <p className="text-brand-muted text-[15px] leading-relaxed mb-4">O assunto nº 1 em divórcios. Sete dias que revelam personalidades financeiras, alinham sonhos e criam um plano real — sem julgamento e sem briga.</p>
            <div className="bg-black/5 p-4 rounded-lg text-[14px] italic text-brand-text">"Se soubéssemos exatamente o que gastamos todo mês, o que mudaria em nós?"</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-brand-gold/20 rounded-xl p-8 bg-brand-cream relative overflow-hidden group hover:translate-x-2 transition-transform"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-sage-soft" />
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-lg bg-brand-sage-soft/10 flex items-center justify-center text-xl">❤️</span>
              <h3 className="font-serif text-xl font-bold">Intimidade — Semana 3</h3>
            </div>
            <p className="text-brand-muted text-[15px] leading-relaxed mb-4">Reconecta corpo e alma com vulnerabilidade — sem a culpa religiosa que silencia o casal cristão. A intimidade começa muito antes do quarto.</p>
            <div className="bg-black/5 p-4 rounded-lg text-[14px] italic text-brand-text">"O que eu precisaria ouvir de você para me abrir mais completamente?"</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
