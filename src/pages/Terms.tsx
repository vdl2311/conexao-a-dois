import { Link } from 'react-router-dom';

export const Terms = () => {
  return (
    <div className="bg-brand-cream min-h-screen py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-black/5">
        <Link to="/" className="text-brand-gold hover:underline mb-8 inline-block">← Voltar para a página inicial</Link>
        <h1 className="font-serif text-4xl font-bold mb-8 text-brand-text">Termos de Uso</h1>
        
        <div className="space-y-6 text-brand-text-muted leading-relaxed">
          <p>Ao acessar o site Conexão a Dois, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          
          <h2 className="text-xl font-bold text-brand-text">1. Uso de Licença</h2>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site apenas para visualização transitória pessoal e não comercial.</p>
          
          <h2 className="text-xl font-bold text-brand-text">2. Isenção de Responsabilidade</h2>
          <p>Os materiais no site são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
          
          <h2 className="text-xl font-bold text-brand-text">3. Limitações</h2>
          <p>Em nenhum caso a Conexão a Dois será responsável por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais.</p>
          
          <h2 className="text-xl font-bold text-brand-text">4. Precisão dos Materiais</h2>
          <p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual.</p>
          
          <h2 className="text-xl font-bold text-brand-text">5. Links</h2>
          <p>Não revisamos todos os sites vinculados ao seu site e não somos responsáveis pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por nós do site.</p>
        </div>
      </div>
    </div>
  );
};
