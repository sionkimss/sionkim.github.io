import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Strength from '@/components/Strength';
import AIWorkflow from '@/components/AIWorkflow';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Strength />
      <AIWorkflow />
      <Projects />
      <Career />
      <Contact />
    </main>
  );
}
