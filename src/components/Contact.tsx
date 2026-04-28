import { LegalLayout } from './LegalLayout';

export function Contact() {
  return (
    <LegalLayout title="Contato">
      <p>Trabalhamos para oferecer o melhor suporte aos nossos usuários e clientes. Se você tiver alguma dúvida, sugestão ou precisar de assistência relacionada ao guia <strong>Conexão a Dois</strong>, entre em contato conosco através dos canais abaixo.</p>
      
      <div className="bg-brand-cream border border-brand-gold/30 rounded-xl p-6 my-8 text-center">
        <h3 className="!mt-0">E-mail de Suporte</h3>
        <p className="text-[18px] text-brand-navy font-bold my-2">vdlmarketdigital@gmail.com</p>
        <p className="text-[13px] text-brand-gray !mb-0">Responderemos o mais breve possível, geralmente dentro de 24 a 48 horas úteis.</p>
      </div>

      <h2>Dúvidas Frequentes</h2>
      <p>Antes de enviar um e-mail, recomendamos que você verifique a seção de <strong>Dúvidas Frequentes (FAQ)</strong> na página principal do nosso site. É provável que a sua dúvida já tenha sido respondida por lá.</p>
      
      <h2>Garantia e Reembolsos</h2>
      <p>Caso você deseje acionar a garantia incondicional de 7 dias, basta nos enviar um e-mail com o assunto "Solicitação de Reembolso" junto com os dados da sua compra. Processaremos a sua devolução sem questionamentos.</p>
    </LegalLayout>
  );
}
