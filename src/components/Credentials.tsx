"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Award, ShieldCheck, MapPin } from "lucide-react";

export default function Credentials() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Licensed Entities & Capability Credentials",
            intro: "Dual-Hub Global Compliance & Transaction Security. Anchored in Los Angeles and Hong Kong. Backed by highly regulated ARC (US) and IATA/TIA (HK) accreditations, establishing an unshakeable foundation for global fund routing, local market expertise, and B2B operational integrity.",
            cards: [
                { name: "On The Way (Hong Kong) Travel Limited", desc: "Hong Kong entity supporting APAC and international travel cooperation, with IATA-related capability support.", icon: MapPin },
                { name: "On The Road Inc.", desc: "U.S. entity supporting North America-related sourcing and fulfillment, with ARC-related capability support.", icon: MapPin },
                { name: "System & Operational Credentials", desc: "Including ISO9001, ISO27001, information security certification and proprietary digital system support.", icon: ShieldCheck }
            ]
        },
        ZH: {
            title: "资质实体与行业背书",
            intro: "美港双引擎：全球合规与资金流转安全底座。扎根洛杉矶与香港。依托高标准的美国 ARC 与香港 IATA/TIA 核心旅游资质，构筑坚不可摧的全球资金流转通道、深度本地化运营团队及 B2B 交易信用基石。",
            cards: [
                { name: "On The Way (Hong Kong) Travel Limited", desc: "香港业务主体，支持亚太及国际合作场景下的资源与履约协同。具备相关 IATA 能力背书。", icon: MapPin },
                { name: "On The Road Inc.", desc: "美国业务主体，支持北美合作场景下的资源配置与履约支撑。具备 ARC 能力背书。", icon: MapPin },
                { name: "系统与管理能力背书", desc: "包括 ISO9001、ISO27001、信息系统安全等级保护认证，以及自研系统与数字化管理能力。", icon: ShieldCheck }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="credentials" className="py-24 bg-white border-b border-slate-200/60">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-widest text-[#0b2853] uppercase mb-4 block">Trust & Compliance</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t.title}</h2>
                    <p className="text-lg text-slate-600 font-medium">
                        {t.intro}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-[#0b2853] hover:border-[#0b2853] group transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/10 transition-colors">
                                    <Icon className="w-7 h-7 text-[#0b2853] group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{card.name}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{card.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
