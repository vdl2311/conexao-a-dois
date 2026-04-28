import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export function LegalLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <header className="bg-brand-navy py-4 px-5 text-center relative border-b border-brand-gold">
        <Link to="/" className="text-brand-gold font-bold text-[16px] absolute left-5 top-1/2 -translate-y-1/2 hover:text-brand-gold2 transition-colors">
          &larr; Voltar
        </Link>
        <span className="text-white font-serif text-[20px]">Conexão a Dois</span>
      </header>
      <main className="flex-grow py-12 px-5">
        <div className="max-w-[800px] mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-[0_10px_30px_rgba(26,39,68,0.05)] border border-brand-navy/5">
          <h1 className="font-serif text-[36px] text-brand-navy mb-8 border-b border-brand-gold/20 pb-4">{title}</h1>
          <div className="text-[17px] leading-[1.8] text-brand-gray [&>p]:mb-4 [&>h2]:font-serif [&>h2]:text-[26px] [&>h2]:text-brand-navy [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:font-bold [&>h3]:text-[20px] [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>a]:text-brand-gold [&>a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
