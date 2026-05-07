import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PrimaryButton } from './Shared';

interface FunnelQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

type ScoreRange = 'low' | 'mid' | 'high' | null;
type Topic = 'Finanças' | 'Intimidade' | 'Comunicação' | null;

export function FunnelQuiz({ isOpen, onClose }: FunnelQuizProps) {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState<ScoreRange>(null);
  const [q2Answer, setQ2Answer] = useState<string | null>(null);
  const [topic, setTopic] = useState<Topic>(null);
  const [heardAnswer, setHeardAnswer] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');

  if (!isOpen) return null;

  const handleNext = (nextStep: number) => {
    setStep(nextStep);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-center"
          >
            <h3 className="text-white text-2xl md:text-3xl font-serif mb-8 text-center leading-relaxed">
              De 1 a 10, quanto você sente que existe conexão entre vocês hoje?
            </h3>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setScore('low'); handleNext(2); }}
                className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all"
              >
                1 a 3 (Conexão baixa)
              </button>
              <button 
                onClick={() => { setScore('mid'); handleNext(2); }}
                className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all"
              >
                4 a 6 (Mediana)
              </button>
              <button 
                onClick={() => { setScore('high'); handleNext(2); }}
                className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all"
              >
                7 a 10 (Conexão alta)
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-center"
          >
            {score === 'low' && (
              <>
                <p className="text-brand-gold text-lg mb-6 text-center italic">
                  Obrigado por ser honesto(a)... quando alguém responde isso, normalmente já existe um distanciamento acontecendo.
                </p>
                <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
                  Me diz uma coisa: você sente que estão mais convivendo do que realmente se conectando?
                </h3>
                <div className="flex flex-col gap-4">
                  <button onClick={() => { setQ2Answer('Sim'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Sim</button>
                  <button onClick={() => { setQ2Answer('Não'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Não</button>
                </div>
              </>
            )}
            {score === 'mid' && (
              <>
                <p className="text-brand-gold text-lg mb-6 text-center italic">
                  Entendi... isso mostra que ainda existe conexão, mas algo já não está tão alinhado.
                </p>
                <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
                  Me diz: você sente que algumas conversas importantes acabam sendo evitadas?
                </h3>
                <div className="flex flex-col gap-4">
                  <button onClick={() => { setQ2Answer('Sim'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Sim</button>
                  <button onClick={() => { setQ2Answer('Não'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Não</button>
                </div>
              </>
            )}
            {score === 'high' && (
              <>
                <p className="text-brand-gold text-lg mb-6 text-center italic">
                  Interessante... isso mostra que ainda existe conexão.
                </p>
                <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
                  Mas deixa eu te fazer uma pergunta sincera... vocês têm conversas profundas com frequência... ou a maior parte fica no automático do dia a dia?
                </h3>
                <div className="flex flex-col gap-4">
                  <button onClick={() => { setQ2Answer('Profundas'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Profundas</button>
                  <button onClick={() => { setQ2Answer('Automáticas'); handleNext(3); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Mais automáticas</button>
                </div>
              </>
            )}
          </motion.div>
        );

      case 3:
        let prefixText = "Entendo perfeitamente. É um momento de reavaliar.";
        if (score === 'low' && q2Answer === 'Sim') prefixText = "Isso acontece com muitos casais... e quase sempre começa com pequenas conversas que foram sendo evitadas.";
        if (score === 'mid' && q2Answer === 'Sim') prefixText = "Isso costuma ser o começo do distanciamento... não acontece de uma vez, vai acumulando.";
        if (score === 'high' && q2Answer === 'Automáticas') prefixText = "Isso é mais comum do que parece... muitos casais não têm grandes problemas, mas acabam perdendo profundidade com o tempo.";

        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="text-brand-gold text-lg mb-6 text-center italic">
              {prefixText}
            </p>
            <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
              E qual assunto vocês mais evitam falar hoje?
            </h3>
            <div className="flex flex-col gap-4">
              <button onClick={() => { setTopic('Finanças'); handleNext(4); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Finanças</button>
              <button onClick={() => { setTopic('Intimidade'); handleNext(4); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Intimidade</button>
              <button onClick={() => { setTopic('Comunicação'); handleNext(4); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Comunicação</button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="text-brand-gold text-lg mb-6 text-center italic">
              Faz sentido... Muitos casais não param de se amar, eles <span className="font-bold">só vão se desconectando aos poucos</span> com o tempo.<br/><br/>
              Quando a conexão esfria... pequenas coisas viram distância.
            </p>
            <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
              Me diz uma coisa com sinceridade: você sente que às vezes fala... mas não se sente realmente ouvido(a)?
            </h3>
            <div className="flex flex-col gap-4">
              <button onClick={() => { setHeardAnswer('Sim'); handleNext(5); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Sim</button>
              <button onClick={() => { setHeardAnswer('Não'); handleNext(5); }} className="bg-brand-navy border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 text-white rounded-lg p-4 text-lg transition-all">Não</button>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="text-brand-gold text-lg mb-6 text-center italic">
              {heardAnswer === 'Sim' ? 
                "Isso é mais comum do que parece... e é exatamente onde muitos relacionamentos começam a se desgastar." : 
                "Entendi... então talvez o desafio não seja ser ouvido(a), mas se sentir realmente conectado(a) nos momentos juntos."}
            </p>
            <h3 className="text-white text-2xl font-serif mb-8 text-center leading-relaxed">
              Para personalizar seu diagnóstico e focar no que realmente importa, como posso te chamar?
            </h3>
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Seu primeiro nome"
                onKeyDown={(e) => { if(e.key === 'Enter' && userName.trim()) handleNext(6); }}
                className="bg-brand-navy/50 border border-brand-gold/30 hover:border-brand-gold focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/50 text-white rounded-lg p-4 text-lg transition-all text-center"
              />
              <button 
                onClick={() => { if(userName.trim()) handleNext(6) }} 
                className={`bg-brand-gold text-brand-navy font-bold rounded-lg p-4 text-lg transition-all ${userName.trim() ? 'hover:bg-brand-gold/90' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!userName.trim()}
              >
                Ver Meu Diagnóstico
              </button>
            </div>
          </motion.div>
        );

      case 6:
        let diagnosticTitle = "";
        let diagnosticDesc = "";
        
        if (score === 'low') {
          diagnosticTitle = "Relação na fase crítica de desconexão silenciosa";
          diagnosticDesc = "O que você respondeu indica um distanciamento claro. Vocês ainda estão juntos, mas emocionalmente cada vez mais distantes.";
        } else if (score === 'mid') {
          diagnosticTitle = "Relação em modo automático com sinais de desgaste";
          diagnosticDesc = "Existe amor e existe vontade, mas a rotina pesada e a falta de alinhamento estão transformando vocês mais em 'colegas de quarto' do que em um casal apaixonado.";
        } else {
          diagnosticTitle = "Relação perdendo profundidade devido à rotina";
          diagnosticDesc = "Vocês têm uma base muito boa, mas o perigo aqui é o 'piloto automático'. A conexão profunda está sendo substituída por conversas rasas do dia a dia.";
        }

        let microMirror = "";
        if (heardAnswer === 'Sim' && topic === 'Comunicação') {
          microMirror = "Se você sente que evita certas conversas para não gerar conflito, ou já tentou se expressar e não foi compreendido(a)... isso explica exatamente o momento atual da sua relação.";
        } else if (topic === 'Finanças') {
          microMirror = "Se as conversas sobre dinheiro começaram a gerar tensão, ou vocês evitam tocar no assunto para não criar atritos… isso é um sinal claro de desgaste emocional acumulado.";
        } else if (topic === 'Intimidade') {
          microMirror = "Se a falta de intimidade virou o 'normal', e vocês percebem que estão se distanciando cada vez mais devido à rotina… isso é um sinal claro de distanciamento progressivo.";
        } else {
          microMirror = "Se vocês têm guardado coisas para si e preferem o silêncio para não gerar atritos… isso é um sinal forte da desconexão emocional atual.";
        }

        let topicFocus = "";
        if (topic === 'Comunicação' || heardAnswer === 'Sim') {
          topicFocus = "A frustração de não se sentir ouvido(a), somada ao medo de gerar atritos, cria uma desconexão emocional — e com o tempo, vocês deixam de ser um time.";
        } else if (topic === 'Finanças') {
          topicFocus = "A pressão financeira não dita e o receio de tocar no assunto dinheiro sem gerar brigas geram um afastamento gradual — e com o tempo, a parceria vira só divisão de contas.";
        } else if (topic === 'Intimidade') {
          topicFocus = "O distanciamento físico e a falta daquelas trocas genuínas do início geram um desgaste acumulado — e com o tempo, vocês viram só bons amigos morando juntos.";
        }

        return (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-start overflow-y-auto pr-2 pb-10"
          >
            {/* 1. Diagnóstico Claro */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 text-center">
              <h2 className="text-brand-gold font-bold text-xs mb-4 uppercase tracking-[0.2em]">
                Seu Resultado Oficial{userName.trim() ? `, ${userName.trim()}` : ''}
              </h2>
              <p className="text-white text-2xl md:text-3xl font-serif font-medium leading-tight mb-5">
                {diagnosticTitle}
              </p>
              
              <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mb-5"></div>
              
              <p className="text-brand-gold leading-relaxed text-base md:text-[17px] font-medium mb-5">
                {microMirror}
              </p>

              <p className="text-white/70 leading-relaxed text-sm mb-4">
                {diagnosticDesc}
              </p>
              
              <p className="text-white/70 leading-relaxed text-sm">
                {topicFocus}
              </p>
            </div>
            
            {/* 2. Amplificação da Dor (Personalizada) + Urgência */}
            <div className="mb-10 text-center px-2">
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Pequenas discussões, menos conexão, rotina pesada… <br/>
                <strong className="text-white font-medium">Isso não é falta de amor — é falta de direcionamento emocional.</strong>
              </p>
              <div className="inline-block bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <p className="text-white/70 text-[13px] md:text-sm font-medium">
                  E quanto mais tempo isso continua, mais difícil se torna recuperar a conexão natural.
                </p>
              </div>
            </div>

            {/* 3. A Ponte e a Solução Tangível */}
            <div className="mb-10 text-center px-4">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
                Para interromper o afastamento gradual
              </p>
              <h3 className="text-brand-gold font-serif text-2xl md:text-3xl leading-tight mb-4">
                Conexão a Dois<br/>
                <span className="text-white text-lg md:text-xl font-sans font-medium mt-2 block">Guia de Terapia Preventiva</span>
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed max-w-[320px] mx-auto">
                O método de 21 dias utiliza pequenas ações emocionais guiadas para interromper padrões de desgaste e reconstruir a conexão do casal aos poucos.
              </p>
            </div>

            {/* 4. Benefícios Claros */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full bg-brand-gold/10 text-brand-gold text-xs mt-0.5">✓</div>
                  <span className="text-white/90 text-[15px] leading-relaxed"><strong>Desperte sua relação</strong> (mesmo que hoje pareça desgastada).</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full bg-brand-gold/10 text-brand-gold text-xs mt-0.5">✓</div>
                  <span className="text-white/90 text-[15px] leading-relaxed"><strong>Reconstrua a intimidade</strong> sem forçar conversas difíceis.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full bg-brand-gold/10 text-brand-gold text-xs mt-0.5">✓</div>
                  <span className="text-white/90 text-[15px] leading-relaxed"><strong>Evite que a rotina destrua</strong> o que vocês construíram.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full bg-brand-gold/10 text-brand-gold text-xs mt-0.5">✓</div>
                  <span className="text-white/90 text-[15px] leading-relaxed"><strong>Volte a sentir conexão de verdade</strong>.</span>
                </li>
              </ul>
            </div>

            {/* 5. Visualização do Futuro Desejado */}
            <div className="mb-12 text-center px-6">
              <p className="text-brand-gold text-xl md:text-2xl font-serif italic leading-relaxed">
                "Imagine voltar a sentir leveza nas conversas, parceria nas decisões e conexão real no dia a dia."
              </p>
            </div>

            {/* Oferta e CTA Integrados */}
            <div className="bg-[#0f0f0f] p-8 rounded-3xl border border-brand-gold/20 mb-4 text-center text-white relative shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] shadow-lg">
                Oferta Especial
              </div>
              
              <div className="flex flex-col items-center justify-center mb-6 mt-2 relative z-10">
                <span className="text-white/40 line-through text-xs mb-1">De R$ 97,00</span>
                <span className="text-white font-bold text-5xl tracking-tight my-1">
                  R$ <span className="text-brand-gold">37</span><span className="text-2xl text-brand-gold">,90</span>
                </span>
                <span className="text-white/60 text-xs font-medium mt-1">Acesso imediato aos 21 dias</span>
              </div>

              <a 
                href="https://pay.hotmart.com/N105586857E" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-gold text-brand-navy w-full flex flex-col items-center justify-center gap-1 py-5 rounded-xl font-bold text-[17px] uppercase tracking-wide hover:bg-[#c2a167] transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(202,168,114,0.3)] mb-8"
              >
                <span>Quero Voltar a Me Conectar</span>
              </a>

              {/* Prova Social Simples */}
              <div className="flex flex-col items-center justify-center gap-2 pt-6 border-t border-white/10">
                <div className="flex gap-1 text-brand-gold text-[10px] mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-white/50 text-xs font-medium text-center leading-relaxed px-4">
                  Casais relatam melhora na comunicação e redução das discussões já nos primeiros dias de aplicação.
                </span>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-[#0a0a0a] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0f0f0f]">
          <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase">Diagnóstico</h2>
          <button onClick={onClose} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="w-full bg-white/5 h-1">
          <div 
            className="bg-brand-gold h-full transition-all duration-500 ease-out" 
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>

        <div className="p-6 md:p-10 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
