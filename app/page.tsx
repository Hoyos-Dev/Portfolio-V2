import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Studies from '@/components/sections/Studies';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <Studies />
      <Footer />
    </main>
  );
}
