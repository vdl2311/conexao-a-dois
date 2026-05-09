export const Testimonials = () => {
  const testimonials = [
    {
      text: '"Na primeira semana já tivemos a conversa sobre dinheiro que adiamos por 3 anos. Sem briga. Com calma. Não acredito que 5 minutos puderam fazer isso."',
      name: 'Rodrigo & Camila · 8 anos de casados'
    },
    {
      text: '"Tentamos vários devocionais. Esse é diferente porque não tem rodeio. Pergunta o que dói de verdade e te dá segurança pra responder."',
      name: 'André & Priscila · 5 anos de casados'
    },
    {
      text: '"A semana de intimidade foi reveladora. Conversamos sobre coisas que nunca tínhamos dito um ao outro. Sentimos que nos encontramos de novo."',
      name: 'Thiago & Juliana · 12 anos de casados'
    }
  ];

  return (
    <section className="bg-brand-warm-dark text-brand-cream py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-16 text-brand-cream">
          O que casais estão dizendo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-brand-gold/20 rounded-2xl p-10 text-left transition-colors hover:bg-white/10"
            >
              <div className="text-brand-gold text-lg tracking-[3px] mb-5">★★★★★</div>
              <p className="text-[16px] text-brand-cream/85 italic leading-relaxed mb-6">
                {testi.text}
              </p>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-brand-gold-light">
                {testi.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
