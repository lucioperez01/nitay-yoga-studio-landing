import { problemSolution } from '../../../lib/content';
import Reveal from '../ui/reveal';

export default function ProblemSolution() {
  return (
    <section
      id="sobre-nitay"
      className="bg-bg-secondary py-20 sm:py-28 md:py-40 px-5 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
        <Reveal>
          <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans">
            {problemSolution.label}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary tracking-tight leading-tight">
            {problemSolution.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {problemSolution.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="w-10 sm:w-12 h-px bg-accent mx-auto mt-6 sm:mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
