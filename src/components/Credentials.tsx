"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Award, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

export default function Credentials() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Licensed Entities & Capability Credentials",
            intro: "Dual-Hub Global Compliance & Transaction Security. Anchored in Los Angeles and Hong Kong. Backed by highly regulated ARC (US) and IATA/TIA (HK) accreditations, establishing an unshakeable foundation for global fund routing, local market expertise, and B2B operational integrity.",
            cards: [
                { 
                    name: "On The Way (Hong Kong) Travel Limited", 
                    desc: "Hong Kong entity supporting APAC and international travel cooperation. IATA Accredited Agent (Numeric Code: 13335431) & TIA Licensed Travel Agent (License No: 304359).",
                    icon: MapPin 
                },
                { 
                    name: "On The Road Inc.", 
                    desc: "U.S. entity supporting North America-related sourcing and fulfillment. ARC Accredited Agency & Licensed Seller (Registration No: ST44415).", 
                    icon: MapPin 
                },
                { 
                    name: "System & Operational Credentials", 
                    desc: "Including ISO9001, ISO27001, information security certification and proprietary digital system support for secure global distribution.", 
                    icon: ShieldCheck 
                }
            ]
        },
        ZH: {
            title: "资质实体与行业背书",
            intro: "美港双引擎：全球合规与资金流转安全底座。扎根洛杉矶与香港。依托高标准的美国 ARC 与香港 IATA/TIA 核心旅游资质，构筑坚不可摧的全球资金流转通道、深度本地化运营团队及 B2B 交易信用基石。",
            cards: [
                { 
                    name: "On The Way (Hong Kong) Travel Limited", 
                    desc: "香港业务主体，支持亚太及国际合作场景下的资源与履约协同。IATA 国际航协认证 (数字代码: 13335431) 与 TIA 持牌旅行社 (牌照号: 304359)。", 
                    icon: MapPin 
                },
                { 
                    name: "On The Road Inc.", 
                    desc: "美国业务主体，支持北美合作场景下的资源配置与履约支撑。具备美国 ARC 结算机构顶级直连资质与佛州旅行经销资质 (注册号: ST44415)。", 
                    icon: MapPin 
                },
                { 
                    name: "系统与管理能力背书", 
                    desc: "包括 ISO9001、ISO27001、信息系统安全等级保护认证，以及自研系统与数字化管理能力，保障全球分销数据通畅与安全。", 
                    icon: ShieldCheck 
                }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="credentials" className="py-24 relative overflow-hidden bg-[#06152B] border-b border-white/5">
            {/* Professional dark-themed background */}
            <Image
                src="/ontheway-b2b-pro/images/credentials_bg.png"
                alt="Credentials Background"
                fill
                className="object-cover opacity-20 pointer-events-none"
                unoptimized
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06152B]/80 via-transparent to-[#06152B]/80 pointer-events-none" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 justify-center">
                        <div className="w-8 h-0.5 bg-emerald-400"></div>
                        <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">{lang === 'ZH' ? '资质合规' : 'Trust & Compliance'}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                        {t.intro}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:bg-[#0b2853]/40 hover:border-emerald-400/50 group transition-all duration-500 shadow-xl">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-emerald-400 transition-colors duration-500">
                                    <Icon className="w-8 h-8 text-white group-hover:text-[#0b2853] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight">{card.name}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-200 transition-colors">{card.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
