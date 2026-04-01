"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Zap, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const heroBg = "/ontheway-b2b-pro/images/hero_futuristic_globe.png";

export default function HeroSection() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title1: "Powering Global Travel:",
            title2: "Next-Generation Distribution & Multi-Source Aggregation.",
            sub: "Direct access to GDS, NDC, and LCCs via high-performance APIs.",
            desc: "Streamlining fulfillment and maximizing margins for global TMCs and OTAs.",
            btn1: "Request API Access",
            btn2: "Explore Solutions",
            trust: {
                uptime: "99.9% API Uptime",
                response: "< 200ms Response Time",
                aggregation: "Multi-Source Aggregation"
            }
        },
        ZH: {
            title1: "驱动全球差旅：",
            title2: "新一代多源内容聚合与分销基础设施",
            sub: "通过高性能 API 无缝直连 GDS、NDC 与 LCC 复杂内容库。",
            desc: "为全球 TMC 与 OTA 提升履约效率，重塑供应链利润空间。",
            btn1: "申请 API 接入",
            btn2: "查看解决方案",
            trust: {
                uptime: "99.9% 接口稳定性",
                response: "毫秒级响应",
                aggregation: "多源内容聚合"
            }
        }
    };
    const t = text[lang];

    return (
        <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#0a1930]">
            {/* Background Image / Elements */}
            <Image
                src={heroBg}
                alt="Global Travel Network Background"
                fill
                className="object-cover opacity-40 mix-blend-overlay -z-10 scale-110"
                priority
                quality={100}
                unoptimized
            />
            {/* Artistic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1930] via-transparent to-[#0a1930] -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10" />
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] text-white">
                        <span className="block mb-4">{t.title1}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 drop-shadow-2xl">
                            {t.title2}
                        </span>
                    </h1>

                    <div className="space-y-6 pt-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 max-w-4xl mx-auto leading-tight italic">
                            {t.sub}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed font-medium">
                            {t.desc}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 relative z-10">
                        <Link href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-[#0a1930] rounded-2xl text-lg font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 hover:-translate-y-1">
                            {t.btn1}
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <Link href="#core-solutions" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-2xl text-lg font-bold transition-all items-center justify-center gap-2 hidden sm:flex hover:-translate-y-1">
                            {t.btn2}
                            <ChevronRight className="w-6 h-6" />
                        </Link>
                    </div>

                    {/* Trust Bar */}
                    <div className="mt-16 pt-10 border-t border-white/10 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-medium text-slate-300">
                            <div className="flex items-center justify-center gap-3 bg-white/5 py-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <Activity className="w-5 h-5 text-emerald-400" />
                                <span>{t.trust.uptime}</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 bg-white/5 py-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <Zap className="w-5 h-5 text-blue-400" />
                                <span>{t.trust.response}</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 bg-white/5 py-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <Layers className="w-5 h-5 text-purple-400" />
                                <span>{t.trust.aggregation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
