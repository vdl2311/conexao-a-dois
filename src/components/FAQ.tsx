export const FAQ = () => {
  const faqs = [
    {
      q: 'Precisa ser um casal muito em crise pra usar?',
      a: 'Pelo contrário. Este guia é de terapia preventiva — ideal para casais que ainda se amam, mas sentem que estão perdendo a conexão no dia a dia. Quanto antes usar, menor o desgaste acumulado.'
    },
    {
      q: 'E se meu cônjuge não se interessar?',
      a: 'Comece você. Muitos casais relatam que bastou a primeira pergunta em voz alta para o parceiro se envolver. O guia foi projetado para despertar curiosidade — não para impor disciplina.'
    },
    {
      q: 'Tem religião demais para o meu perfil?',
      a: 'O guia tem uma base cristã honesta, mas os prompts de diálogo funcionam para qualquer casal. O foco é na conversa real — não em regras religiosas.'
    },
    {
      q: 'Como recebo o material?',
      a: 'Imediatamente após a confirmação do pagamento, você recebe o link de download por e-mail. Funciona em qualquer celular, tablet ou computador — sem precisar instalar nada.'
    },
    {
      q: 'E se eu me arrepender?',
      a: 'Você tem 7 dias de garantia total. Se por qualquer motivo o guia não atender, basta enviar um e-mail e devolvemos 100% do valor. Sem questionamentos.'
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[5px] text-brand-rose mb-4 text-center">
          Dúvidas frequentes
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-12 text-brand-text text-center">
          Perguntas &amp; Respostas
        </h2>
        
        <div className="divide-y divide-black/5">
          {faqs.map((faq, index) => (
            <div key={index} className="py-8 first:pt-0 last:pb-0">
              <h3 className="font-serif text-xl font-bold mb-3 text-brand-text">
                {faq.q}
              </h3>
              <p className="text-[15px] text-brand-text-muted leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
