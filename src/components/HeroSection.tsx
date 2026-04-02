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
            eyebrow: "B2B Travel Infrastructure",
            title1: "Powering Global Travel:",
            title2: "Next-Generation Distribution & Multi-Source Aggregation.",
            sub: "Direct access to GDS, NDC, and LCCs via high-performance APIs.",
            desc: "Streamlining fulfillment and maximizing margins for global TMCs and OTAs.",
            btn1: "Request API Access",
            btn2: "Explore Solutions",
            trust: {
                uptime: "99.9% API Uptime",
                response: "< 200ms Response",
                aggregation: "Multi-Source Aggregation"
            }
        },
        ZH: {
            eyebrow: "全球 B2B 旅行基础设施",
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
        <section id="home" className="relative pt-28 pb-16 md:pt-48 md:pb-36 overflow-hidden bg-[#0a1930]">
            {/* Background Image */}
            <Image
                src={heroBg}
                alt="Global Travel Network Background"
                fill
                className="object-cover opacity-35 mix-blend-overlay -z-10 scale-110"
                priority
                quality={100}
                unoptimized
            />
            {/* Layered gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1930] via-transparent to-[#0a1930] -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(56,189,248,0.08),transparent)] -z-10 pointer-events-none" />
            {/* Animated scan-line effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] -z-10 pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-bold tracking-[0.2em] text-blue-300 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        {t.eyebrow}
                    </div>

                    <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.0] md:leading-[0.95] text-white">
                        <span className="block mb-4">{t.title1}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-blue-500 drop-shadow-2xl">
                            {t.title2}
                        </span>
                    </h1>

                    <div className="space-y-4 pt-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white/80 max-w-4xl mx-auto leading-relaxed">
                            {t.sub}
                        </h2>
                        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                            {t.desc}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 relative z-10">
                        <Link href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-[#0a1930] rounded-2xl text-base font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 hover:-translate-y-1">
                            {t.btn1}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="#core-solutions" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/15 text-white rounded-2xl text-base font-bold transition-all items-center justify-center gap-2 hidden sm:flex hover:-translate-y-1">
                            {t.btn2}
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Trust Bar */}
                    <div className="mt-16 pt-10 border-t border-white/10 max-w-4xl mx-auto">
                        <div className="grid grid-cols-3 gap-2 md:gap-4 text-sm font-semibold text-slate-300">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 bg-white/[0.04] py-3 md:py-5 px-2 md:px-4 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.07] transition-colors group">
                                <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-500/15 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors shrink-0">
                                    <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                                </div>
                                <span className="text-white font-bold text-[10px] md:text-sm text-center leading-tight">{t.trust.uptime}</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 bg-white/[0.04] py-3 md:py-5 px-2 md:px-4 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.07] transition-colors group">
                                <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-500/15 rounded-lg flex items-center justify-center group-hover:bg-blue-500/25 transition-colors shrink-0">
                                    <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                                </div>
                                <span className="text-white font-bold text-[10px] md:text-sm text-center leading-tight">{t.trust.response}</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 bg-white/[0.04] py-3 md:py-5 px-2 md:px-4 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.07] transition-colors group">
                                <div className="w-7 h-7 md:w-8 md:h-8 bg-purple-500/15 rounded-lg flex items-center justify-center group-hover:bg-purple-500/25 transition-colors shrink-0">
                                    <Layers className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                                </div>
                                <span className="text-white font-bold text-[10px] md:text-sm text-center leading-tight">{t.trust.aggregation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
