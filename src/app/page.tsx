'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ProductPreview from '@/components/ProductPreview';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-cream-50">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
