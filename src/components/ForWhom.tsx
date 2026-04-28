import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function ForWhom() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>É para você?</SectionLabel>
        <Reveal>
          <SectionTitle>Este guia foi feito para quem…</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-[#EDFAF1] border border-[#A8DDB8] rounded-[14px] p-6">
              <h4 className="text-[#1A6B38] mb-3.5 text-[15px] font-serif">✓ Este guia é para você se:</h4>
              <ul className="pl-0">
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Sente que a rotina está afastando vocês
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Evita falar sobre dinheiro para não brigar
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Quer se aproximar, mas não sabe como começar
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Já tentou devocionais e não conseguiu manter
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Quer fortalecer o casamento de forma preventiva
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Busca uma abordagem prática e honesta de fé
                </li>
              </ul>
            </div>

            <div className="bg-[#FDF0EF] border border-[#F5B8B3] rounded-[14px] p-6">
              <h4 className="text-[#9B2335] mb-3.5 text-[15px] font-serif">✗ Este guia não é para você se:</h4>
              <ul className="pl-0">
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Busca promessas de resultados garantidos
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Espera substituir acompanhamento profissional
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Não está disposto(a) a ter conversas difíceis
                </li>
                <li className="text-[14px] leading-[1.7] mb-1.5 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Prefere soluções rápidas sem compromisso
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
