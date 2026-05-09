import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-warm-dark text-brand-cream py-20 md:py-32 px-6 hero-pattern text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[80%] h-[60%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,150,58,0.18)_0%,transparent_60%)]" />
        <div className="absolute bottom-[30%] right-[15%] w-[60%] h-[80%] translate-x-1/2 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(168,85,85,0.18)_0%,transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[11px] font-bold uppercase tracking-[4px] text-brand-gold-light mb-7"
        >
          🕊 Para casais cristãos que amam — mas estão perdendo a conexão
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Quando foi a última vez que vocês <em className="italic text-brand-gold-light">realmente</em> conversaram?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-brand-cream/75 font-light max-w-2xl mx-auto mb-10"
        >
          Descubra o método de 5 minutos por dia que reconecta casamentos ocupados — abordando os assuntos que os devocionais nunca tiveram coragem de tocar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16 relative group"
        >
          <img 
            src="mockup.png" 
            alt="Guia Conexão a Dois Mockup" 
            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-[320px] flex items-center justify-center gap-4 text-brand-gold text-xl mb-10 after:h-px after:flex-1 after:bg-gradient-to-l after:from-transparent after:to-brand-gold before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:to-brand-gold">
            ✦
          </div>

          <a 
            href="https://pay.hotmart.com/N105586857E" 
            target="_blank"
            className="inline-block bg-gradient-to-br from-brand-gold to-[#A07028] text-white font-bold text-lg uppercase tracking-wider py-5 px-12 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40_rgba(201,150,58,0.4)] animate-pulse-slow active:scale-95"
          >
            Quero Reconectar Agora — R$ 37,90
          </a>

          <p className="mt-4 text-[13px] text-brand-cream/50">
            7 dias de garantia · Acesso imediato · 100% digital
          </p>
        </motion.div>
      </div>
    </section>
  );
};
