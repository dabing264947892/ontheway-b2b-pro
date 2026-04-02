"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layers, Activity, SmartphoneNfc, ShieldAlert, Map, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Strategic Advantage",
            intro: "As the global strategic hub of Tengxuan Travel Group, we go beyond simple resource access to provide a comprehensive B2B infrastructure built on stability, compliance, and trust.",
            cards: [
                { title: "Group-Level Resource Synergy", copy: "Backed by Tengxuan Group's extensive global procurement network", icon: Layers, color: "blue" },
                { title: "Operational Excellence", copy: "24/7 dedicated service with high-standard SLA commitments", icon: Activity, color: "emerald" },
                { title: "Global Compliance Hub", copy: "Navigating local regulations and financial standards across markets", icon: ShieldAlert, color: "amber" },
                { title: "Multi-Market Entities", copy: "Strategic presence in HK, USA, and beyond for seamless settlement", icon: Map, color: "purple" },
                { title: "Strategic TMC Focus", copy: "Tailored for the complex needs of modern TMCs and OTAs", icon: HeartHandshake, color: "red" },
                { title: "Scalable Infrastructure", copy: "Enterprise-grade stability with 99.9% recorded uptime", icon: SmartphoneNfc, color: "cyan" }
            ]
        },
        ZH: {
            title: "为什么选择在路上 Overseas",
            intro: "作为腾轩旅游集团布局全球的战略枢纽，我们不仅提供资源接入，更通过集团化的底座支撑，为您提供稳定、合规且具规模效应的全球化服务。",
            cards: [
                { title: "集团化资源协同", copy: "依托腾轩旅游集团深厚的全球大交通与酒店采购网络", icon: Layers, color: "blue" },
                { title: "卓越运营体系", copy: "具备高标准的 SLA 交付与 24/7 全天候专业服务保障", icon: Activity, color: "emerald" },
                { title: "全球合规与风控", copy: "深度理解国际业务合规需求，规避贸易与税务风险", icon: ShieldAlert, color: "amber" },
                { title: "跨区域实体支撑", copy: "在香港、美国等地拥有成熟业务实体，支持本地化结算", icon: Map, color: "purple" },
                { title: "深耕 B2B 场景", copy: "专为 TMC、OTA 及大型企业设计的全球差旅分销基建", icon: HeartHandshake, color: "red" },
                { title: "高并发系统稳定性", copy: "企业级高可用架构，确保业务在峰值时段依然稳定运行", icon: SmartphoneNfc, color: "cyan" }
            ]
        }
    };

    const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
        blue:    { bg: "bg-blue-500/10",    text: "text-blue-400",    border: "group-hover:border-blue-500/30",   glow: "group-hover:bg-blue-500/10" },
        emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "group-hover:border-emerald-500/30", glow: "group-hover:bg-emerald-500/10" },
        amber:   { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "group-hover:border-amber-500/30",  glow: "group-hover:bg-amber-500/10" },
        purple:  { bg: "bg-purple-500/10",  text: "text-purple-400",  border: "group-hover:border-purple-500/30", glow: "group-hover:bg-purple-500/10" },
        red:     { bg: "bg-red-500/10",     text: "text-red-400",     border: "group-hover:border-red-500/30",    glow: "group-hover:bg-red-500/10" },
        cyan:    { bg: "bg-cyan-500/10",    text: "text-cyan-400",    border: "group-hover:border-cyan-500/30",   glow: "group-hover:bg-cyan-500/10" },
    };

    const t = text[lang];

    return (
        <section className="py-20 md:py-28 bg-[#0b2853] relative overflow-hidden">
            {/* HUD Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            {/* Corner glow accents */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C8A050]/5 rounded-full blur-[100px] pointer-events-none" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20 max-w-6xl mx-auto">
                    <div className="md:w-1/3">
                        <div className="inline-flex items-center gap-2 mb-5">
                            <div className="w-8 h-0.5 bg-[#C8A050]"></div>
                            <span className="text-sm font-bold tracking-widest text-[#C8A050] uppercase">{lang === 'EN' ? 'Our Advantages' : '核心优势'}</span>
                        </div>
                        <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            {t.title}
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-6 md:pl-12">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                            {t.intro}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        const colors = colorMap[card.color];
                        return (
                             <div
                                key={idx}
                                className={`bg-white/[0.04] border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-400 group relative overflow-hidden ${colors.border}`}
                            >
                                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-all duration-700 ${colors.glow}`} />
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} strokeWidth={1.5} />
                                </div>
                                <h3 className={`text-xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors`}>{card.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed text-sm">{card.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
