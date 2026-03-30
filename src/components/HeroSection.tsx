"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            badge: "Empowering Global TMCs & OTAs",
            title1: "The Ultimate Global Travel",
            title2: "Resource Core Platform",
            desc: "Direct access to Sabre, Amadeus, Travelport, and TravelSky. Comprehensive API integrations for NDC, LCC, and over 3M+ global accommodations.",
            btn1: "Explore API Hub",
            btn2: "View Credentials",
            stats: { 1: "Global GDS Systems", 2: "Ticketing Regions", 3: "NDC & LCC APIs", 4: "Accommodations" }
        },
        ZH: {
            badge: "赋能全球大型 TMC 与 OTA 产业",
            title1: "极简纯粹的全球化航旅",
            title2: "全球旅行资源配置平台",
            desc: "完美闭环覆盖 Sabre、Amadeus、Travelport 以及 TravelSky 港版航信。专为跨国 B2B 量身定做的海量 NDC 直连、大中华及美洲本土 LCC API 矩阵与 300万+ 豪华及商旅住宿资源生态。",
            btn1: "探索卓越的 API 集群",
            btn2: "查验官网核心牌照资质",
            stats: { 1: "跨国 GDS 集成底座", 2: "全球化一手出票大区", 3: "海量 NDC 与 LCC API", 4: "全球多品类住宿库存" }
        }
    };
    const t = text[lang];

    return (
        <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
            {/* Background Image */}
            <Image
                src="/images/hero_bg.png"
                alt="B2B Travel Network"
                fill
                className="object-cover opacity-30 -z-10 mix-blend-overlay"
                priority
                quality={100}
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 text-primary-light font-medium text-xs md:text-sm border border-primary/30 backdrop-blur-md">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span className="text-white">{t.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-snug text-white drop-shadow-xl">
                        {t.title1} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            {t.title2}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow">
                        {t.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 relative z-10 text-lg">
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/40 flex items-center justify-center gap-2">
                            {t.btn1}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-nowrap">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                            {t.btn2}
                        </button>
                    </div>

                    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-700/60 mt-8">
                        <div className="text-center p-4 transform transition-transform hover:-translate-y-1">
                            <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">4</div>
                            <div className="text-sm md:text-base font-medium text-slate-400 mt-2">{t.stats[1]}</div>
                        </div>
                        <div className="text-center p-4 transform transition-transform hover:-translate-y-1">
                            <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">13+</div>
                            <div className="text-sm md:text-base font-medium text-slate-400 mt-2">{t.stats[2]}</div>
                        </div>
                        <div className="text-center p-4 transform transition-transform hover:-translate-y-1">
                            <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">78+</div>
                            <div className="text-sm md:text-base font-medium text-slate-400 mt-2">{t.stats[3]}</div>
                        </div>
                        <div className="text-center p-4 transform transition-transform hover:-translate-y-1">
                            <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">3M+</div>
                            <div className="text-sm md:text-base font-medium text-slate-400 mt-2">{t.stats[4]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
