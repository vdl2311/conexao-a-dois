export const Pricing = () => {
  return (
    <section className="bg-brand-cream py-24 px-6 text-center" id="comprar">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[5px] text-brand-rose mb-4">
          Sua decisão
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-12 text-brand-text max-w-2xl mx-auto">
          Invista no casamento hoje. O preço do silêncio é infinitamente maior.
        </h2>
        
        <div className="bg-white rounded-[24px] p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-brand-gold before:via-brand-rose before:to-brand-sage text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="mockup.png" 
                alt="Guia Conexão a Dois" 
                className="w-full h-auto rounded-xl shadow-lg border border-black/5"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-brand-rose text-white text-[10px] font-bold uppercase tracking-[3px] py-1.5 px-4 rounded-full mb-6">
                Oferta de Lançamento
              </div>
              
              <div className="font-serif text-[64px] font-black text-brand-warm-dark leading-none flex items-start mb-2">
                <span className="text-2xl font-bold mt-2">R$</span>
                37
                <span className="text-2xl font-bold mt-2">,90</span>
              </div>
              
              <p className="text-[13px] text-brand-text-muted mb-9">
                Acesso vitalício · PDF imediato · Para os dois
              </p>
              
              <a 
                href="https://pay.hotmart.com/N105586857E" 
                target="_blank"
                className="block w-full bg-gradient-to-br from-brand-gold to-[#A07028] text-white font-bold text-lg uppercase tracking-wider py-5 px-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,150,58,0.4)] animate-pulse-slow mb-5 active:scale-95 text-center"
              >
                ✦ Quero Reconectar Agora
              </a>
              
              <p className="text-[13px] text-brand-text-muted mb-8 text-center md:text-left">
                Pagamento 100% seguro · Pix, cartão ou boleto
              </p>

              <div className="flex items-start gap-4 p-5 bg-[#F0FAF4] rounded-xl border border-brand-sage/20">
                <div className="text-3xl shrink-0">🛡️</div>
                <div className="text-brand-sage font-bold text-[11px] uppercase tracking-wider leading-tight">
                  Garantia de 7 dias
                  <span className="block font-light text-brand-text-muted normal-case tracking-normal text-[12px] mt-1.5 opacity-80">
                    Se em 7 dias você não sentir nenhuma diferença na conexão do seu casal, devolvemos cada centavo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
