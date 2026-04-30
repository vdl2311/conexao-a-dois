import { Reveal, SectionLabel, SectionTitle, PrimaryButton } from './Shared';

export function FreeSample() {
  return (
    <section className="bg-brand-cream border-t border-brand-gold/20 py-20 px-5" id="degustacao">
      <div className="max-w-[820px] mx-auto">
        <Reveal>
          <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(26,39,68,0.08)] overflow-hidden border border-brand-navy/5">
            {/* Cabecalho de simulacao de documento */}
            <div className="bg-[#f8f9fa] border-b border-brand-navy/10 px-6 py-4 flex items-center justify-between">
              <span className="text-[12px] font-bold text-brand-navy/50 tracking-[1px] uppercase">Páginas de Amostra • Sumário e Introdução</span>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
            </div>
            
            {/* Conteudo do Sample */}
            <div className="p-8 sm:p-12 relative">
              <div className="mb-12 text-center max-w-[600px] mx-auto">
                <p className="text-brand-navy font-bold text-[15px] uppercase tracking-[2px] mb-4">Amostra Digital</p>
                <p className="text-brand-gray text-[17px] leading-[1.6]">
                  Libere o tempo que vocês gastariam tentando decidir sobre o que conversar. O <strong>Conexão a Dois</strong> é um plano pronto: abra, leia e conecte-se.
                </p>
              </div>

              {/* Seção Sumário */}
              <div className="mb-20 pb-20 border-b border-dashed border-brand-navy/10">
                <h3 className="font-serif text-[28px] text-brand-navy mb-4 text-center uppercase tracking-widest">Sumário</h3>
                <p className="text-center text-brand-gray text-[15px] mb-10 max-w-[500px] mx-auto">
                  Cada capítulo foi desenhado para atacar uma dor específica e construir uma ponte onde hoje existe silêncio.
                </p>
                <div className="space-y-4 max-w-[600px] mx-auto">
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Introdução: A Lacuna que o Mercado Ignora</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">04</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 01: Por que 5 Minutos Mudam Tudo</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">08</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 02: Os 3 Temas que Destroem Casamentos</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 03: Ciclo de 21 Dias — Sobrevivência Conjugal</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">18</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 04: Finanças: O Maior Tabu do Casal Cristão</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">34</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 05: Intimidade: O Silêncio que Afasta</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">40</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Cap. 06: Comunicação: A Ponte Segura</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">46</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-brand-navy font-bold text-[14px] sm:text-[16px] uppercase tracking-wider">Conclusão: Próximos Passos e Renovação</span>
                    <div className="flex-grow border-b border-dotted border-brand-navy/30 mb-1"></div>
                    <span className="text-brand-gold font-bold">52</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-8 hidden md:block opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>

              <SectionLabel className="!text-brand-gold text-left !mb-2 !justify-start">PÁGINA 04 • INTRODUÇÃO</SectionLabel>
              <h3 className="font-serif text-[32px] sm:text-[38px] text-brand-navy mb-8 leading-[1.2]">
                A Lacuna que o Mercado Ignora
              </h3>
              
              <div className="prose prose-lg max-w-none text-brand-gray text-[16px] leading-[1.8] space-y-6">
                <p>
                  No TikTok e nos Shorts do YouTube, um fenômeno silencioso acontece todos os dias: esposas desabafam que <em>"meu marido só lê a Bíblia na igreja — em casa vivemos como estranhos"</em>. Casais contam que <em>"tentamos fazer devocional juntos, mas a rotina nos engoliu e acabamos brigando"</em>.
                </p>
                
                <div className="bg-brand-gold/10 p-6 rounded-lg border-l-4 border-brand-gold my-8">
                  <p className="min-w-0 m-0 font-bold text-brand-navy text-[17px] leading-[1.6]">
                    A dor latente não é apenas espiritual. É um grito por um mediador seguro para conversas difíceis — antes que seja tarde demais.
                  </p>
                </div>

                <p>
                  O mercado evangélico oferece devocionais lindos, mas todos pedem mais leitura, mais tempo e mais disciplina — exatamente o que o casal exausto não tem. Nenhum produto fala abertamente sobre falta de sexo, brigas por dinheiro ou a sensação de morar com um estranho.
                </p>
                <p>
                  Este guia nasceu da escuta dessas dores reais. Não é um devocional comum. É uma ferramenta de terapia preventiva conjugal em cápsulas — projetada para o casal que ama um ao outro mas está perdendo a conexão na correria do dia a dia.
                </p>

                <p className="text-center italic font-serif text-[20px] text-brand-navy py-6 border-b border-t border-brand-navy/10 my-8">
                  "São as raposinhas que estragam as vinhas."<br />
                  <span className="text-[14px] text-brand-gray font-sans not-italic">Cântico dos Cânticos 2:15</span>
                </p>

                <h4 className="font-serif text-[26px] text-brand-navy mt-10 mb-6">Como usar este guia</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="font-serif text-[28px] text-brand-gold leading-none mt-1">01</span>
                    <div>
                      <strong className="text-brand-navy block text-[15px] tracking-wider uppercase mb-1">Leia</strong>
                      <span className="text-[16px]">Um versículo e o contexto de abertura (1 minuto)</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-serif text-[28px] text-brand-gold leading-none mt-1">02</span>
                    <div>
                      <strong className="text-brand-navy block text-[15px] tracking-wider uppercase mb-1">Responda</strong>
                      <span className="text-[16px]">Um prompt de diálogo cada um (2 minutos)</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-serif text-[28px] text-brand-gold leading-none mt-1">03</span>
                    <div>
                      <strong className="text-brand-navy block text-[15px] tracking-wider uppercase mb-1">Orem</strong>
                      <span className="text-[16px]">Uma oração simples juntos (1 minuto)</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-serif text-[28px] text-brand-gold leading-none mt-1">04</span>
                    <div>
                      <strong className="text-brand-navy block text-[15px] tracking-wider uppercase mb-1">Compromisso</strong>
                      <span className="text-[16px]">Uma micro-ação para o dia (1 minuto)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ponto de Virada / Upsell Checkout */}
            <div className="bg-[#101828] text-center p-8 sm:p-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold2" />
               <p className="text-[18px] sm:text-[20px] text-white font-serif italic mb-6 leading-[1.6] max-w-[600px] mx-auto">
                 "Você acabou de dar o primeiro passo. Não deixe a rotina engolir sua conexão novamente."
               </p>
               <div className="flex flex-col items-center mb-8">
                 <div className="flex items-center gap-3 mb-2">
                   <span className="text-white/40 line-through text-[18px]">R$ 67,00</span>
                   <span className="bg-brand-gold text-brand-navy text-[12px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">Oferta Especial</span>
                 </div>
                 <div className="text-white text-[48px] font-serif leading-none mb-4">
                   <span className="text-[20px] align-top mr-1">R$</span>
                   37,90
                 </div>
                 <p className="text-white/60 text-[14px] max-w-[400px] mx-auto italic">
                   "Para ajudar o maior número de famílias a restaurarem sua conexão, reduzimos o investimento por tempo limitado."
                 </p>
               </div>
               <PrimaryButton href="https://pay.hotmart.com/N105586857E" className="w-full max-w-[400px]">
                 QUERO ACESSAR O GUIA COMPLETO
               </PrimaryButton>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
