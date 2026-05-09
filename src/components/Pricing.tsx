import { motion } from 'motion/react';

export const Pricing = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 text-center" id="comprar">
      <div className="max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-gold text-[11px] font-bold uppercase tracking-[5px] mb-4 block"
        >
          Sua decisão
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-brand-text max-w-3xl mx-auto"
        >
          Você já esperou tempo suficiente pelo momento certo.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-muted text-lg max-w-[550px] mx-auto mb-16"
        >
          O momento certo não vem. Ele é criado — em 5 minutos, hoje à noite, com a pessoa que você escolheu.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-[500px] mx-auto bg-brand-cream rounded-[32px] p-10 md:p-14 border border-brand-gold/20 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-rose-soft to-brand-sage-soft" />
          
          <div className="absolute top-6 right-[-12px] bg-brand-rose text-white text-[10px] font-bold uppercase tracking-[2px] py-2 px-6 rounded-l-md shadow-lg after:content-[''] after:absolute after:right-0 after:bottom-[-6px] after:border-l-[12px] after:border-l-[#6B2929] after:border-bottom-[6px] after:border-bottom-transparent">
            Lançamento
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[4px] text-brand-muted mb-4 opacity-70">
            Conexão a Dois — Protocolo das 3 Conversas
          </p>
          
          <div className="font-serif text-[80px] font-bold text-brand-dark leading-none flex items-start justify-center mb-1">
            <span className="text-3xl font-semibold mt-4 mr-1">R$</span>
            37
            <span className="text-3xl font-semibold mt-4 ml-1">,90</span>
          </div>
          
          <p className="text-[13px] text-brand-muted mb-10">
            Pagamento único · Acesso vitalício para os dois
          </p>
          
          <div className="text-left space-y-4 mb-10">
            {[
              "O Protocolo das 3 Conversas — 21 dias completos",
              "Semana 1: A Conversa da Comunicação (Dias 1–7)",
              "Semana 2: A Conversa do Dinheiro (Dias 8–14)",
              "Semana 3: A Conversa da Intimidade (Dias 15–21)",
              "Diagnóstico conjugal — sessão de abertura",
              "PDF para celular, tablet e computador — sem app"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[14.5px] text-brand-text">
                <div className="w-6 h-6 rounded-full bg-brand-sage/15 flex items-center justify-center text-[10px] text-brand-sage font-bold flex-shrink-0">
                  ✓
                </div>
                {item}
              </div>
            ))}
          </div>
          
          <a 
            href="https://pay.hotmart.com/N105586857E" 
            target="_blank"
            className="block w-full bg-gradient-to-br from-brand-gold to-[#8C6520] text-white font-bold text-lg uppercase tracking-wider py-5 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-pulse-slow mb-5 active:scale-95"
          >
            Quero Ter Essa Conversa Hoje &rarr;
          </a>
          
          <p className="text-[12px] text-brand-muted mb-10">
            🔒 Ambiente 100% seguro · Pix, cartão ou boleto
          </p>
          
          <div className="bg-white border border-brand-sage/25 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 text-left">
            <div className="text-4xl">🛡️</div>
            <div>
              <div className="font-bold text-[14px] text-brand-sage mb-1 uppercase tracking-wider">Garantia total de 7 dias</div>
              <p className="text-[12.5px] text-brand-muted leading-relaxed">
                Se em 7 dias você sentir que o protocolo não fez nenhuma diferença, devolvemos 100% do valor. O risco é zero — e o casamento vale a tentativa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
