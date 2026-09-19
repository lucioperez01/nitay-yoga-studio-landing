'use client';

import WhatsAppButton from './whatsapp-button';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-border p-4">
      <a
        href="#programa"
        className="block w-full bg-beige text-bg-primary uppercase tracking-[0.1em] text-sm font-medium px-8 py-4 rounded-sm hover:bg-beige-dark transition-colors text-center"
      >
        Quiero mi evaluación
      </a>
    </div>
  );
}
