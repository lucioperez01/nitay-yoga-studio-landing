import Hero from './components/sections/hero';
import ProblemSolution from './components/sections/problem-solution';
import Benefits from './components/sections/benefits';
import Experience from './components/sections/experience';
import FirstClass from './components/sections/first-class';
import Testimonials from './components/sections/testimonials';
import TransformationProgram from './components/sections/transformation-program';
import FAQ from './components/sections/faq';
import FinalCTA from './components/sections/final-cta';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="md:pb-0 pb-20">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Experience />
      <FirstClass />
      <Testimonials />
      <TransformationProgram />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
