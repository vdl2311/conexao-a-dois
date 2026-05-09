import { motion } from 'motion/react';

export const WhatIsIt = () => {
  return (
    <>
      {/* Mechanism Section */}
      <section className="bg-brand-dark py-24 md:py-32 px-6">
        <div className="max-w-[1040px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold-soft text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
          >
            A solução — nomeada
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-cream font-bold leading-tight mb-8 max-w-4xl mx-auto"
          >
            O Protocolo das <em className="italic text-brand-gold-soft non-italic">3 Conversas</em>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-cream/50 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Não é mais um devocional. É um sistema de 21 dias que força três diálogos que o seu casamento parou de ter — com perguntas calibradas para abrir, não para acusar. 5 minutos. Todo dia. Três semanas.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-6xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-brand-gold/15 p-10 text-left relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-8 text-white/5 font-serif text-8xl font-bold leading-none -translate-y-4">1</div>
              <span className="text-brand-gold-soft text-[10px] uppercase tracking-[4px] font-bold mb-4 block">Semana 1 · Dias 1–7</span>
              <h3 className="font-serif text-2xl text-brand-cream font-bold mb-4">A Conversa da Comunicação</h3>
              <p className="text-brand-cream/55 text-sm leading-relaxed mb-6">Revela os padrões de conflito que vocês repetem sem perceber. Constrói escuta ativa real. Abre os assuntos que ficaram engavetados por meses — sem acusação.</p>
              <div className="bg-white/5 border-l-2 border-brand-gold p-4 rounded-r-lg">
                <p className="font-serif italic text-sm text-brand-cream/70">"Qual é o assunto que eu mais evito te falar — e o que eu tenho medo que aconteça se eu falar?"</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-brand-gold/15 p-10 text-left relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-8 text-white/5 font-serif text-8xl font-bold leading-none -translate-y-4">2</div>
              <span className="text-brand-rose-soft text-[10px] uppercase tracking-[4px] font-bold mb-4 block">Semana 2 · Dias 8–14</span>
              <h3 className="font-serif text-2xl text-brand-cream font-bold mb-4">A Conversa do Dinheiro</h3>
              <p className="text-brand-cream/55 text-sm leading-relaxed mb-6">O assunto número um em divórcios. Revela personalidades financeiras, alinha sonhos e dissolve a vergonha de falar sobre gastos e dívidas.</p>
              <div className="bg-white/5 border-l-2 border-brand-rose-soft p-4 rounded-r-lg">
                <p className="font-serif italic text-sm text-brand-cream/70">"Se soubéssemos exatamente o que gastamos todo mês, o que mudaria em cada um de nós?"</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-brand-gold/15 p-10 text-left relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-8 text-white/5 font-serif text-8xl font-bold leading-none -translate-y-4">3</div>
              <span className="text-brand-sage-soft text-[10px] uppercase tracking-[4px] font-bold mb-4 block">Semana 3 · Dias 15–21</span>
              <h3 className="font-serif text-2xl text-brand-cream font-bold mb-4">A Conversa da Intimidade</h3>
              <p className="text-brand-cream/55 text-sm leading-relaxed mb-6">A conversa que a culpa religiosa silenciou. Reconecta corpo e alma com vulnerabilidade — sem julgamento. Porque intimidade começa muito antes do quarto.</p>
              <div className="bg-white/5 border-l-2 border-brand-sage-soft p-4 rounded-r-lg">
                <p className="font-serif italic text-sm text-brand-cream/70">"O que eu precisaria ouvir de você para me abrir completamente — sem medo de ser rejeitada?"</p>
              </div>
            </motion.div>
          </div>

          <p className="text-brand-cream/30 text-[11px] uppercase tracking-[2px] font-bold">21 dias · 3 conversas · 5 minutos por dia · resultado acumulado</p>
        </div>
      </section>

      {/* Proof Section */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
            >
              Por que funciona
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-brand-text"
            >
              Foi desenhado para o casal exausto — não para o casal ideal.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-[17px] leading-[1.8] mb-6 font-light"
            >
              Todo devocional pressupõe que vocês têm 30 minutos vagos, disposição emocional e disciplina religiosa. O Protocolo das 3 Conversas pressupõe que vocês estão cansados e que 5 minutos é o máximo real.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-muted text-[17px] leading-[1.8] mb-12 font-light"
            >
              Cada prompt foi calibrado para abrir — não para resolver. A cura não vem da resposta certa. Vem do fato de vocês <strong className="text-brand-text font-medium">terem a conversa.</strong> Isso já é transformação.
            </motion.p>

            <div className="flex gap-12 pt-10 border-t border-brand-gold/20">
              <div>
                <div className="font-serif text-5xl font-bold text-brand-gold leading-none">21</div>
                <div className="text-[11px] font-bold uppercase tracking-[2px] text-brand-muted mt-2">Dias</div>
              </div>
              <div>
                <div className="font-serif text-5xl font-bold text-brand-gold leading-none">3</div>
                <div className="text-[11px] font-bold uppercase tracking-[2px] text-brand-muted mt-2">Conversas</div>
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
              className="bg-brand-cream border border-brand-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-xl">🔬</div>
                <h3 className="font-serif text-xl font-bold">Base científica</h3>
              </div>
              <p className="text-brand-muted text-[15px] leading-relaxed">John Gottman estudou mais de 3.000 casais por 40 anos. Descobriu que o que separa casais estáveis não é a ausência de conflito — é a presença de conexão emocional diária.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-cream border border-brand-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-rose/10 flex items-center justify-center text-xl">✝️</div>
                <h3 className="font-serif text-xl font-bold">Ancoragem bíblica</h3>
              </div>
              <p className="text-brand-muted text-[15px] leading-relaxed">Cada fase tem um versículo de ancoragem. Mas os prompts foram escritos para abrir conversa, não para dar resposta pronta. A fé é o contexto, a honestidade é o método.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-cream border border-brand-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-sage/10 flex items-center justify-center text-xl">📱</div>
                <h3 className="font-serif text-xl font-bold">Liberdade Digital</h3>
              </div>
              <p className="text-brand-muted text-[15px] leading-relaxed">PDF para qualquer dispositivo. Acesso vitalício. Não precisa de internet constante, não envia notificações invasivas e funciona onde vocês estiverem.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
