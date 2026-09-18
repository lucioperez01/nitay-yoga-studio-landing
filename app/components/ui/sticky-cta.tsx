'use client';

import WhatsAppButton from './whatsapp-button';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-border p-4">
      <WhatsAppButton
        message="Hola! Quiero mi evaluación personalizada."
        variant="primary"
        className="w-full"
      >
        Quiero mi evaluación
      </WhatsAppButton>
    </div>
  );
}
