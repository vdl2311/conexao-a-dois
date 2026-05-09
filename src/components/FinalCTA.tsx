export const FinalCTA = () => {
  return (
    <section className="bg-brand-warm-dark text-brand-cream py-28 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(201,150,58,0.15)_0%,transparent_65%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-6xl font-black leading-[1.15] mb-6 max-w-3xl mx-auto">
          Dois são melhor que um. <em className="italic text-brand-gold-light">Mas dois que se ouvem de verdade?</em> São invencíveis.
        </h2>
        <p className="text-brand-cream/70 text-lg md:text-xl max-w-lg mx-auto mb-12 font-light">
          Não espere a crise bater à porta. Uma conversa de 5 minutos hoje pode salvar anos de desgaste silencioso.
        </p>
        
        <a 
          href="https://pay.hotmart.com/N105586857E" 
          target="_blank"
          className="inline-block bg-gradient-to-br from-brand-gold to-[#A07028] text-white font-bold text-lg uppercase tracking-wider py-6 px-14 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,150,58,0.4)] active:scale-95"
        >
          Começar Agora por R$ 37,90
        </a>
        
        <p className="mt-16 font-serif italic text-[17px] text-brand-cream/45 max-w-2xl mx-auto">
          "Dois são melhor do que um... porque se um cair, o outro levanta o seu companheiro." — Eclesiastes 4:9
        </p>
      </div>
    </section>
  );
};
