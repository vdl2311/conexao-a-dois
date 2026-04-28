import { Reveal, SectionLabel, SectionTitle } from './Shared';

export function ForWhom() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-[820px] mx-auto">
        <SectionLabel>Para quem é indicado?</SectionLabel>
        <Reveal>
          <SectionTitle>Este guia foi feito para quem…</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-[#EDFAF1] border border-[#A8DDB8] rounded-[14px] p-7">
              <h4 className="text-[#1A6B38] mb-4 text-[18px] font-serif">✓ Este guia pode ser útil para casais que:</h4>
              <ul className="pl-0">
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Percebem que a rotina tem dificultado momentos de qualidade
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Buscam ferramentas para dialogar sobre finanças de forma pacífica
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Desejam maior proximidade e procuram um ponto de partida
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Estão abertos a construir novos hábitos de comunicação
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Têm o objetivo de fortalecer o relacionamento preventivamente
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✓_'] before:text-[#1A6B38] before:font-bold">
                  Buscam uma abordagem prática que integre princípios de fé
                </li>
              </ul>
            </div>

            <div className="bg-[#FDF0EF] border border-[#F5B8B3] rounded-[14px] p-7">
              <h4 className="text-[#9B2335] mb-4 text-[18px] font-serif">✗ Este guia pode não ser adequado para quem:</h4>
              <ul className="pl-0">
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Busca promessas absolutas de transformação imediata
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Precisa de acompanhamento terapêutico profissional
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Não está aberto a dialogar sobre temas construtivos
                </li>
                <li className="text-[16px] leading-[1.7] mb-2 list-none before:content-['✗_'] before:text-[#9B2335] before:font-bold">
                  Procura soluções que não exijam dedicação de ambas as partes
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
