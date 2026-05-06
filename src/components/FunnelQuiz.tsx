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
              Posso te mostrar uma forma simples de começar a melhorar isso em poucos minutos por dia?
            </h3>
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNext(6)} className="bg-brand-gold text-brand-navy font-bold rounded-lg p-4 text-lg hover:bg-brand-gold/90 transition-all">Sim, quero ver</button>
            </div>
          </motion.div>
        );

      case 6:
        let questionExample = "";
        if (topic === 'Comunicação') {
          questionExample = "O que eu poderia fazer pra você se sentir mais compreendido quando a gente conversa?";
        } else if (topic === 'Finanças') {
          questionExample = "O que eu poderia fazer pra você se sentir mais tranquilo(a) quando a gente fala de dinheiro?";
        } else if (topic === 'Intimidade') {
          questionExample = "O que faz você se sentir mais próximo(a) de mim no dia a dia?";
        } else {
          questionExample = "O que eu poderia fazer pra você se sentir mais compreendido quando a gente conversa?";
        }

        return (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full justify-start overflow-y-auto pr-2 pb-10"
          >
            <h3 className="text-brand-gold text-xl font-bold mb-4">Tenta perguntar isso hoje:</h3>
            <div className="bg-brand-navy border border-brand-gold/50 rounded-lg p-6 mb-6">
              <p className="text-white text-xl italic font-serif leading-relaxed">"{questionExample}"</p>
            </div>
            
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Perguntas simples assim... abrem conversas que normalmente nunca aconteceriam.
              <br/><br/>
              Com o tempo, isso cria algo que muitos casais perdem: <strong className="text-white">a sensação de estar no mesmo time de novo.</strong>
            </p>

            <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-white/10">
              <p className="text-white text-lg mb-4 leading-relaxed">
                Eu organizei isso em um guia de 21 dias, com perguntas prontas pra cada situação. Leva menos de 5 minutos por dia.
              </p>
              <p className="text-brand-gold font-bold text-xl mb-4">
                O Guia Conexão a Dois tá saindo por apenas R$ 37,90.
              </p>
              <p className="text-white/80 text-md leading-relaxed">
                É menos que um lanche pra ter um roteiro de 21 dias que realmente tira o relacionamento do automático.
                Se quiser aproveitar esse valor e começar a mudar o clima entre vocês ainda hoje, clique no botão abaixo.
              </p>
            </div>

            <a 
              href="https://pay.hotmart.com/N105586857E" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-gold text-brand-navy w-full text-center py-5 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-brand-gold/90 transition-colors shadow-[0_0_20px_rgba(202,168,114,0.3)]"
            >
              Começar os 21 Dias Agora
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
