import { MainLayout } from "@/components/layout/main-layout";
import HeroSection from "@/components/sections/hero-section";
import TechStack from "@/components/sections/tech-stack";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
    </MainLayout>
  );
}
