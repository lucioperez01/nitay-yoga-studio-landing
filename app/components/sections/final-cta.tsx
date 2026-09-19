import { finalCTA } from '../../../lib/content';
import Reveal from '../ui/reveal';
import WhatsAppButton from '../ui/whatsapp-button';

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-t from-black via-bg-secondary to-bg-primary py-20 sm:py-28 md:py-40 px-5 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary tracking-tight leading-tight">
            {finalCTA.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {finalCTA.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="pt-2 sm:pt-4">
            <a
              href="#programa"
              className="inline-block bg-beige text-bg-primary uppercase tracking-[0.1em] text-base sm:text-lg font-medium px-10 py-5 rounded-sm hover:bg-beige-dark transition-colors"
            >
              {finalCTA.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
