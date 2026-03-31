import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import WhoWeServe from "@/components/WhoWeServe";
import CoreSolutions from "@/components/CoreSolutions";
import GlobalFares from "@/components/GlobalFares";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalCapability from "@/components/GlobalCapability";
import EntityCredentials from "@/components/EntityCredentials";
import TypicalUseCases from "@/components/TypicalUseCases";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Header />
            <div className="flex-grow">
                <HeroSection />
                <BrandIntro />
                <WhoWeServe />
                <CoreSolutions />
                <GlobalFares />
                <WhyChooseUs />
                <GlobalCapability />
                <EntityCredentials />
                <TypicalUseCases />
                <LeadForm />
            </div>
            <Footer />
        </main>
    );
}
