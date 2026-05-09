import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-brand-cream min-h-screen py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-black/5">
        <Link to="/" className="text-brand-gold hover:underline mb-8 inline-block">← Voltar para a página inicial</Link>
        <h1 className="font-serif text-4xl font-bold mb-8 text-brand-text">Políticas de Privacidade</h1>
        
        <div className="space-y-6 text-brand-text-muted leading-relaxed">
          <p>Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou faz uma compra no nosso site.</p>
          
          <h2 className="text-xl font-bold text-brand-text">1. Coleta de Informações</h2>
          <p>Quando você visita o site, coletamos automaticamente certas informações sobre o seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies que estão instalados no seu dispositivo.</p>
          
          <h2 className="text-xl font-bold text-brand-text">2. Uso das Informações</h2>
          <p>Usamos as informações que coletamos para cumprir qualquer pedido feito através do site (incluindo o processamento de suas informações de pagamento e o fornecimento de faturas e/ou confirmações de pedidos).</p>
          
          <h2 className="text-xl font-bold text-brand-text">3. Compartilhamento de Informações</h2>
          <p>Compartilhamos suas informações pessoais com terceiros para nos ajudar a usar suas informações pessoais, conforme descrito acima (por exemplo, usamos o Hotmart para processar nossos pagamentos).</p>
          
          <h2 className="text-xl font-bold text-brand-text">4. Seus Direitos</h2>
          <p>Se você for um residente europeu, tem o direito de acessar as informações pessoais que mantemos sobre você e de solicitar que suas informações pessoais sejam corrigidas, atualizadas ou excluídas.</p>
          
          <h2 className="text-xl font-bold text-brand-text">5. Segurança</h2>
          <p>Tomamos precauções razoáveis para garantir que suas informações não sejam perdidas, mal utilizadas, acessadas, divulgadas, alteradas ou destruídas de forma imprópria.</p>
        </div>
      </div>
    </div>
  );
};
