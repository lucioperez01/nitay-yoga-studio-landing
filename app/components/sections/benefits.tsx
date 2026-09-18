import { benefits } from '../../../lib/content';
import Reveal from '../ui/reveal';
import WhatsAppButton from '../ui/whatsapp-button';
import { BrainIcon, ZapIcon, HeartIcon, ShieldIcon } from '../ui/icons';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: BrainIcon,
  zap: ZapIcon,
  heart: HeartIcon,
  shield: ShieldIcon,
};

export default function Benefits() {
  return (
    <section className="bg-bg-primary py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <Reveal>
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
              NUESTROS PILARES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight">
              Lo que ganas con cada práctica
            </h2>
            <div className="w-10 sm:w-12 h-px bg-accent mx-auto" />
          </div>
        </Reveal>

        <Reveal variant="stagger-children">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || BrainIcon;
              return (
                <div
                  key={i}
                  className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 space-y-3 sm:space-y-4 hover-lift hover:border-accent"
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                  <h3 className="font-serif text-lg sm:text-xl text-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center space-y-4 pt-6 sm:pt-8">
            <p className="font-serif text-xl sm:text-2xl text-text-primary">
              ¿Lista para empezar?
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
