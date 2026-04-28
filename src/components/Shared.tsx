import { motion, HTMLMotionProps } from 'motion/react';
import React from 'react';

export const Reveal = ({ children, className = '', delay = 0, ...props }: { children: React.ReactNode, className?: string, delay?: number } & HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const PrimaryButton = ({ href, children, className = '', onClick }: { href?: string; children: React.ReactNode; className?: string, onClick?: () => void }) => {
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-block bg-gradient-to-br from-brand-gold to-brand-gold2 text-brand-navy font-bold text-[16px] sm:text-[18px] tracking-[0.5px] py-4 px-6 sm:py-5 sm:px-10 rounded-[50px] transition-all duration-200 border-none cursor-pointer btn-pulse hover:-translate-y-[2px] hover:shadow-[0_14px_40px_rgba(201,168,76,0.45)] text-center ${className}`}
    >
      {children}
    </Comp>
  );
};

export const SectionLabel = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-[13px] font-bold tracking-[3px] uppercase text-brand-gold text-center mb-[14px] ${className}`}>
    {children}
  </p>
);

export const SectionTitle = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`font-serif text-[clamp(28px,4.5vw,44px)] text-center leading-[1.25] mb-4 ${className}`}>
    {children}
  </h2>
);

export const SectionSub = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-brand-gray text-center text-[18px] sm:text-[19px] leading-[1.7] max-w-[650px] mx-auto mb-12 ${className}`}>
    {children}
  </p>
);
