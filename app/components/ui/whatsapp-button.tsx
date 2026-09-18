'use client';

import { ReactNode } from 'react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_NUMBER } from '../../../lib/content';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'outline' | 'large';
  message?: string;
  href?: string;
  className?: string;
  children: ReactNode;
}

export default function WhatsAppButton({
  variant = 'primary',
  message,
  href,
  className = '',
  children,
}: WhatsAppButtonProps) {
  const url = href || `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || '')}`;

  const base =
    'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.1em] rounded-sm transition-colors duration-300 text-sm';

  const styles = {
    primary: 'bg-beige text-bg-primary hover:bg-beige-dark px-5 py-2.5 sm:px-8 sm:py-4',
    outline: 'border border-text-primary text-text-primary hover:bg-white/5 px-5 py-2.5 sm:px-8 sm:py-4',
    large: 'bg-beige text-bg-primary hover:bg-beige-dark px-6 py-3 sm:px-10 sm:py-5 sm:text-base',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      {children}
    </a>
  );
}
