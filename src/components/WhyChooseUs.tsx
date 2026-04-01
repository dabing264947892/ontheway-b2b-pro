"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layers, Activity, SmartphoneNfc, ShieldAlert, Map, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Strategic Advantage",
            intro: "As the global strategic hub of Tengxuan Travel Group, we go beyond simple resource access to provide a comprehensive B2B infrastructure built on stability and trust.",
            cards: [
                { title: "Group-Level Resource Synergy", copy: "Backed by Tengxuan Group's extensive global procurement network", icon: Layers },
                { title: "Operational Excellence", copy: "24/7 dedicated service with high-standard SLA commitments", icon: Activity },
                { title: "Global Compliance Hub", copy: "Navigating local regulations and financial standards across markets", icon: ShieldAlert },
                { title: "Multi-Market Entities", copy: "Strategic presence in HK, USA, and beyond for seamless settlement", icon: Map },
                { title: "Strategic TMC Focus", copy: "Tailored for the complex needs of modern TMCs and OTAs", icon: HeartHandshake },
                { title: "Scalable Infrastructure", copy: "Enterprise-grade stability with 99.9% recorded uptime", icon: SmartphoneNfc }
            ]
        },
        ZH: {
            title: "为什么选择在路上 overseas",
            intro: "作为腾轩旅游集团布局全球的战略枢纽，我们不仅提供资源接入，更通过集团化的底座支撑，为您提供稳定、合规且具规模效应的全球化服务。",
            cards: [
                { title: "集团化资源协同", copy: "依托腾轩旅游集团深厚的全球大交通与酒店采购网络", icon: Layers },
                { title: "卓越运营体系", copy: "具备高标准的 SLA 交付与 24/7 全天候专业服务保障", icon: Activity },
                { title: "全球合规与风控", copy: "深度理解国际业务合规需求，规避贸易与税务风险", icon: ShieldAlert },
                { title: "跨区域实体支撑", copy: "在香港、美国等地拥有成熟业务实体，支持本地化结算", icon: Map },
                { title: "深耕 B2B 场景", copy: "专为 TMC、OTA 及大型企业设计的全球差旅分销基建", icon: HeartHandshake },
                { title: "高并发系统稳定性", copy: "企业级高可用架构，确保业务在峰值时段依然稳定运行", icon: SmartphoneNfc }
            ]
        }
    };

    const t = text[lang];

    return (
        <section className="py-24 bg-[#0b2853]">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20 max-w-6xl mx-auto">
                    <div className="md:w-1/3">
                        <span className="text-sm font-bold tracking-widest text-[#699af3] uppercase mb-4 block">{t.title}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {t.title}
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-6 md:pl-12">
                        <p className="text-xl text-slate-300 leading-relaxed font-medium">
                            {t.intro}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div 
                                key={idx} 
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Icon className="w-10 h-10 text-[#699af3] mb-6" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{card.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
