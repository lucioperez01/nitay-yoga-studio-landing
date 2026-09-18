import Image from 'next/image';
import { hero } from '../../../lib/content';
import WhatsAppButton from '../ui/whatsapp-button';
import Reveal from '../ui/reveal';
import { LotusIcon, UserIcon, StarIcon, CheckIcon } from '../ui/icons';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: UserIcon,
  levels: LotusIcon,
  clipboard: StarIcon,
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/header.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
        <div className="text-left space-y-5 sm:space-y-8">
          <Reveal variant="fade-up" delay={0}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-9xl lg:text-[8rem] font-normal leading-[0.95] tracking-tight text-text-primary">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={0.15}>
            <div className="w-10 sm:w-12 h-px bg-accent" />
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <WhatsAppButton
                message={hero.primaryCTA.whatsappMessage}
                variant="primary"
              >
                {hero.primaryCTA.label}
              </WhatsAppButton>
              <WhatsAppButton
                href={hero.secondaryCTA.href}
                variant="outline"
              >
                {hero.secondaryCTA.label}
              </WhatsAppButton>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.5}>
            <div className="flex items-center gap-2 pt-3 sm:pt-4">
              <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-text-muted text-sm">
                Más de 120 estudiantes ya transformaron su práctica
              </span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-10 pt-3 sm:pt-4">
              {hero.stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || UserIcon;
                return (
                  <div key={i} className="flex flex-col gap-1 sm:gap-1.5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    {stat.value && (
                      <span className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary">{stat.value}</span>
                    )}
                    <span className="text-text-muted text-xs sm:text-sm">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
