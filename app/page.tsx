import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <Newsletter />
      <Footer />
    </main>
  );
}
