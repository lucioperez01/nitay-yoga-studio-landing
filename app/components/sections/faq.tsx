import Reveal from '../ui/reveal';
import { faqs } from '../../../lib/content';

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg-secondary py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
        <Reveal>
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary tracking-tight">
              ¿Tienes dudas?
            </h2>
            <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
          </div>
        </Reveal>

        <Reveal variant="stagger-children">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-sm p-5 sm:p-6 space-y-2 sm:space-y-3 hover-lift"
              >
                <h3 className="font-serif text-base sm:text-lg text-text-primary">
                  {faq.question}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
