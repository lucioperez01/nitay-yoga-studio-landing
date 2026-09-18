import { testimonials } from '../../../lib/content';
import Reveal from '../ui/reveal';
import WhatsAppButton from '../ui/whatsapp-button';

export default function Testimonials() {
  return (
    <section className="bg-bg-secondary py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <Reveal>
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              LO QUE DICEN NUESTRAS ALUMNAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary tracking-tight">
              Historias reales de transformación
            </h2>
            <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
          </div>
        </Reveal>

        <Reveal variant="stagger-children">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 space-y-4 sm:space-y-5 hover-lift hover:border-accent"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-bg-elevated border border-border flex items-center justify-center">
                  <span className="text-accent font-serif text-base sm:text-lg">
                    {testimonial.initials}
                  </span>
                </div>

                <blockquote className="font-serif text-base sm:text-lg italic text-text-primary leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="space-y-1">
                  <p className="text-accent text-sm uppercase tracking-wider">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-xs">
                    {testimonial.context}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center space-y-4 pt-6 sm:pt-8">
            <p className="font-serif text-xl sm:text-2xl text-text-primary">
              Tú también puedes transformar tu práctica
            </p>
            <WhatsAppButton
              message="Hola! Quiero mi evaluación personalizada."
              variant="primary"
            >
              Quiero mi evaluación personalizada
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
