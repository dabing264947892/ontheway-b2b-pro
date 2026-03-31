"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layers, Activity, SmartphoneNfc, ShieldAlert, Map, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Why On The Way",
            intro: "More than a supply source, we combine travel resources, service operations, digital connectivity and fulfillment support into one B2B collaboration model.",
            cards: [
                { title: "Integrated Platform Approach", copy: "More than isolated supply access", icon: Layers },
                { title: "Resource + Service Synergy", copy: "Combining supply depth with service delivery", icon: Activity },
                { title: "System-Driven Support", copy: "API, SSO, reporting and management capability", icon: SmartphoneNfc },
                { title: "Operational & Emergency Response", copy: "Daily service, VIP support and urgent handling", icon: ShieldAlert },
                { title: "Cross-Market Support", copy: "Business entities and support across key markets", icon: Map },
                { title: "Built for Long-Term Cooperation", copy: "Suitable for TMC, OTA and enterprise partnerships", icon: HeartHandshake }
            ]
        },
        ZH: {
            title: "为什么选择在路上海外",
            intro: "我们不仅提供资源，更强调资源、系统、服务与履约的协同，帮助合作伙伴在更复杂的国际业务场景中保持稳定与效率。",
            cards: [
                { title: "平台化整合", copy: "不止单一供给，而是多资源协同配置", icon: Layers },
                { title: "资源 + 服务并重", copy: "强调供给能力，也强调交付体验", icon: Activity },
                { title: "系统能力支撑", copy: "支持 API、SSO、报表与管理功能", icon: SmartphoneNfc },
                { title: "服务与应急协同", copy: "支持日常服务、VIP 服务与应急保障", icon: ShieldAlert },
                { title: "跨区域支撑", copy: "具备香港、美国等业务实体与资源支持", icon: Map },
                { title: "更适合长期合作", copy: "面向 TMC、OTA 与企业客户的持续合作场景", icon: HeartHandshake }
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
