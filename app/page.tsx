import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { ProductsSection } from '@/components/sections/products';
import { TeamSection } from '@/components/sections/team';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}