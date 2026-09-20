import { contact, footer } from '../../lib/content';
import { OmSymbol, InstagramIcon, WhatsAppIcon, GitHubIcon, TikTokIcon } from './ui/icons';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border py-10 sm:py-12 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <OmSymbol className="w-8 h-8 text-accent" />
              <span className="font-serif text-lg text-text-primary">
                Nitay Yoga Estudio
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
              Síguenos
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="text-sm">{contact.instagram}</span>
              </a>
              <a
                href="https://github.com/lucioperez01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://tiktok.com/@lutec.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
                <span className="text-sm">@lutec.dev</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
              Contacto
            </h3>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="text-sm">+{contact.whatsapp}</span>
              </a>
              <p className="flex items-center gap-2 text-text-secondary text-sm">
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              {footer.copyright}
            </p>
            <p className="text-text-muted text-sm">
              Web diseñada y desarrollada por{' '}
              <a
                href="https://lutec.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                Lutec.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
