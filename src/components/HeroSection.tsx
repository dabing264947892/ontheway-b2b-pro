"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Zap, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const heroBg = "/ontheway-b2b/images/tech_aviation_v2.png";

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
        <section id="home" className="relative pt-24 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#0b2853] border-b border-white/10">
            {/* Background Image / Elements */}
            <Image
                src={heroBg}
                alt="Global Travel Network Background"
                fill
                className="object-cover opacity-30 -z-10 mix-blend-screen"
                priority
                quality={100}
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2853] via-[#0b2853]/70 to-[#0b2853]/90 -z-10" />
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-tight text-white drop-shadow-xl">
                        {t.title1} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 mt-2 block">
                            {t.title2}
                        </span>
                    </h1>

                    <div className="space-y-4 pt-4">
                        <h2 className="text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto leading-relaxed">
                            {t.sub}
                        </h2>
                        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            {t.desc}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 relative z-10 text-base font-bold">
                        <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-emerald-50 text-[#0b2853] rounded-lg transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                            {t.btn1}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="#core-solutions" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-lg transition-all items-center justify-center gap-2 hidden sm:flex hover:-translate-y-0.5">
                            {t.btn2}
                            <ChevronRight className="w-5 h-5" />
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
