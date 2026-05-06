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
          microMirror = "Se você sente que a pressão financeira tem gerado um peso não dito, e evita falar sobre dinheiro para não criar atritos... isso explica exatamente a tensão silenciosa na relação.";
        } else if (topic === 'Intimidade') {
          microMirror = "Se você sente falta daquela cumplicidade natural e percebe que estão deixando a intimidade de lado pela rotina corrida... isso explica exatamente a distância que vem sentindo.";
        } else {
          microMirror = "Se você sente que vocês têm guardado coisas para si e preferem silenciar a discutir, para não gerar atrito... isso explica exatamente o distanciamento atual da relação.";
        }

        let topicFocus = "";
        if (topic === 'Comunicação' || heardAnswer === 'Sim') {
          topicFocus = "A frustração de não se sentir ouvido(a), somada ao medo de gerar atritos, cria barreiras invisíveis — e com o tempo, vocês deixam de ser um time.";
        } else if (topic === 'Finanças') {
          topicFocus = "A pressão silenciosa e o receio de tocar no assunto dinheiro sem gerar brigas criam barreiras invisíveis — e com o tempo, a parceria vira só divisão de contas.";
        } else if (topic === 'Intimidade') {
          topicFocus = "O distanciamento físico e a falta daquelas trocas genuínas do início criam barreiras invisíveis — e com o tempo, vocês viram bons amigos morando juntos.";
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
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5 mb-6">
              <h2 className="text-red-400 font-bold text-lg mb-2 uppercase tracking-wide">
                Seu Resultado Oficial{userName.trim() ? `, ${userName.trim()}` : ''}:
              </h2>
              <p className="text-white text-xl font-serif font-semibold leading-tight mb-3">
                {diagnosticTitle}
              </p>
              
              <p className="text-white/90 leading-relaxed text-md font-medium italic mb-4">
                {microMirror}
              </p>

              <p className="text-white/80 leading-relaxed text-sm mb-3">
                {diagnosticDesc}
              </p>
              
              <p className="text-white/80 leading-relaxed text-sm">
                {topicFocus}
              </p>
            </div>
            
            {/* 2. Amplificação da Dor (Personalizada) + Urgência */}
            <div className="mb-6">
              <p className="text-white/90 text-lg mb-4 leading-relaxed">
                Pequenas discussões, menos conexão, rotina pesada… <br/>
                <strong className="text-white">Isso não é falta de amor — é falta de direcionamento emocional.</strong>
              </p>
              <p className="text-red-300/90 text-md font-medium bg-red-900/20 p-3 rounded border border-red-900/30">
                E quanto mais tempo isso continua, mais difícil se torna recuperar a conexão natural.
              </p>
            </div>

            {/* 3. A Ponte e a Solução Tangível */}
            <div className="border-l-4 border-brand-gold pl-4 py-2 mb-8 bg-brand-gold/5 rounded-r">
              <p className="text-white text-lg font-medium mb-2">
                Foi exatamente para interromper esse desgaste silencioso que criamos:
              </p>
              <h3 className="text-brand-gold font-bold text-xl mb-2">
                Conexão a Dois — Guia de Terapia Preventiva Conjugal
              </h3>
              <p className="text-white/80 text-md">
                Um plano guiado de 21 dias com ações simples e práticas, pensado para reconstruir a conexão mesmo em rotinas cansativas.
              </p>
            </div>

            {/* 4. Benefícios Claros */}
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3 text-lg">✨</span>
                  <span className="text-white/90"><strong>Desperte sua relação</strong> (mesmo que hoje já pareça muito desgastada).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3 text-lg">❤️</span>
                  <span className="text-white/90"><strong>Reconstrua a intimidade</strong> sem forçar conversas difíceis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3 text-lg">🛡️</span>
                  <span className="text-white/90"><strong>Evite que a rotina destrua</strong> o que vocês construíram.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3 text-lg">🔥</span>
                  <span className="text-white/90"><strong>Volte a sentir conexão de verdade</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Prova Social Simples */}
            <div className="flex items-center justify-center gap-2 mb-8 bg-[#151515] py-3 rounded-lg border border-white/5 shadow-inner">
              <span className="text-white/70 text-sm font-medium">
                Criado com base em padrões de dinâmicas reais.
              </span>
            </div>

            {/* Oferta Irrecusável */}
            <div className="bg-gradient-to-br from-brand-gold/10 to-[#0a0a0a] p-6 rounded-xl border border-brand-gold/30 mb-8 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex flex-col items-center justify-center gap-1 mb-2 relative z-10">
                <span className="text-white/50 line-through text-sm">De R$ 97,00</span>
                <span className="text-brand-gold font-bold text-5xl tracking-tight my-1 shadow-black drop-shadow-md">R$ 37,90</span>
              </div>
              <p className="text-white/80 text-sm font-medium relative z-10 mt-2">Acesso imediato.</p>
            </div>

            <a 
              href="https://pay.hotmart.com/N105586857E" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-gold text-brand-navy w-full flex flex-col items-center justify-center gap-1 py-5 rounded-lg font-bold text-[18px] uppercase tracking-wide hover:bg-brand-gold/90 transition-all shadow-[0_0_25px_rgba(202,168,114,0.35)] hover:shadow-[0_0_35px_rgba(202,168,114,0.5)] transform hover:-translate-y-1"
            >
              <span>Quero Voltar a Me Conectar de Verdade</span>
              <span className="text-xs font-medium text-brand-navy/70 normal-case tracking-normal">Acesso imediato aos 21 dias</span>
            </a>
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
