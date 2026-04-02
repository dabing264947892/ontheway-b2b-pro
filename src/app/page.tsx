import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import WhoWeServe from "@/components/WhoWeServe";
import CoreSolutions from "@/components/CoreSolutions";
import GlobalFares from "@/components/GlobalFares";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalCapability from "@/components/GlobalCapability";
import Credentials from "@/components/Credentials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import MobilityGrid from "@/components/MobilityGrid";
import GlobalGdsMap from "@/components/GlobalGdsMap";
import CooperationModels from "@/components/CooperationModels";
import FinalCta from "@/components/FinalCta";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col font-jakarta">
            <Header />
            <div className="flex-grow">
                <HeroSection />
                <BrandIntro />
                <WhoWeServe />
                <CoreSolutions />
                <MobilityGrid />
                <GlobalFares />
                <GlobalGdsMap />
                <WhyChooseUs />
                <GlobalCapability />
                <Credentials />
                <CooperationModels />
                <FinalCta />
                <LeadForm />
            </div>
            <Footer />
        </main>
    );
}
