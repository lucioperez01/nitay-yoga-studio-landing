import { transformationProgram, WHATSAPP_NUMBER } from '../../../lib/content';
import Reveal from '../ui/reveal';
import LeadForm from '../ui/lead-form';
import { WhatsAppIcon } from '../ui/icons';

export default function TransformationProgram() {
  return (
    <section id="programa" className="bg-bg-primary py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <Reveal>
          <div className="text-center space-y-4">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              {transformationProgram.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary tracking-tight">
              {transformationProgram.headline}
            </h2>
            <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              {transformationProgram.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-bg-card border border-border rounded-sm p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl text-text-primary mb-6">
              Qué incluye
            </h3>
            <ul className="space-y-3">
              {transformationProgram.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <LeadForm />
        </Reveal>

        <Reveal>
          <div className="text-center space-y-4 pt-4">
            <p className="text-text-muted text-sm">
              {transformationProgram.whatsappAlternative}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="text-sm">+{WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
