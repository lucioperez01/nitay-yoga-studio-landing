import Image from 'next/image';
import { experience } from '../../../lib/content';
import Reveal from '../ui/reveal';
import WhatsAppButton from '../ui/whatsapp-button';

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-bg-secondary py-20 sm:py-28 md:py-40 px-5 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center">
          <Reveal variant="fade-left" className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/experiencia-nitay.png"
                alt="Espacio Nitay Yoga Estudio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal variant="fade-right" className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              {experience.label}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight leading-tight">
              {experience.headline}
            </h2>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              {experience.description}
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="#programa"
                className="inline-block border border-text-primary text-text-primary uppercase tracking-[0.1em] text-sm font-medium px-8 py-4 rounded-sm hover:bg-white/5 transition-colors"
              >
                {experience.cta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
