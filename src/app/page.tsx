import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GlobalGdsMap from "@/components/GlobalGdsMap";
import MobilityGrid from "@/components/MobilityGrid";
import AccommodationCard from "@/components/AccommodationCard";
import EntityCredentials from "@/components/EntityCredentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <GlobalGdsMap />
        <MobilityGrid />
        <AccommodationCard />
        <EntityCredentials />
      </div>
      <Footer />
    </main>
  );
}
