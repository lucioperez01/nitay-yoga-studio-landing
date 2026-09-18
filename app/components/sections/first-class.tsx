import Reveal from '../ui/reveal';
import { DocumentIcon, SearchIcon, MessageIcon } from '../ui/icons';

const steps = [
  {
    icon: DocumentIcon,
    title: 'Completás el formulario',
    description: 'Contanos sobre vos, tus objetivos y disponibilidad.',
  },
  {
    icon: SearchIcon,
    title: 'Analizamos tu caso',
    description: 'Nitay revisa tu información y diseña un plan personalizado.',
  },
  {
    icon: MessageIcon,
    title: 'Te contactamos',
    description: 'Recibís una propuesta adaptada a tu caso por WhatsApp.',
  },
];

export default function FirstClass() {
  return (
    <section id="como-funciona" className="bg-bg-primary py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <Reveal>
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              CÓMO FUNCIONA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight">
              ¿Cómo funciona?
            </h2>
            <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
          </div>
        </Reveal>

        <Reveal variant="stagger-children">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 space-y-3 sm:space-y-4 hover-lift hover:border-accent"
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                  <h3 className="font-serif text-lg sm:text-xl text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
