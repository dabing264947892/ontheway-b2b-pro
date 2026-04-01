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
                <Credentials />
                <LeadForm />
            </div>
            <Footer />
        </main>
    );
}
