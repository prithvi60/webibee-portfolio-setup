import AboutFlouoro from "@/components/layout/AboutFlouoro";
import CategoryCard from "@/components/layout/CategoryCard";
import GetQuote from "@/components/layout/GetQuote";
import HomeHero from "@/components/layout/HomeHero";
import InnovationSection from "@/components/layout/InnovationSection";
import QualitySection from "@/components/layout/QualitySection";
import ReliabilitySection from "@/components/layout/ReliabilitySection";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <CategoryCard />
      <QualitySection />
      <AboutFlouoro />
      <ReliabilitySection />
      <InnovationSection />
      <GetQuote />
    </main>
  );
}
