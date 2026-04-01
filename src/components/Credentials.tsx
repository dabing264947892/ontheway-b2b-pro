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
                    desc: "Hong Kong entity supporting APAC and international travel cooperation. IATA Accredited Agent (Code: 13335431), TIA Licensed Travel Agent (Licence No: 354309) & HATA Member since 2018.",
                    icon: MapPin 
                },
                { 
                    name: "On The Road Inc.", 
                    desc: "U.S. entity supporting North America-related sourcing and fulfillment. ARC Accredited Agency & California Licensed Seller of Travel (Registration No: 2126800-40).", 
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
                    desc: "香港业务主体，支持亚太及国际合作场景下的资源与履约协同。IATA 国际航协认证 (代码: 13335431)、TIA 持牌旅行社 (牌照号: 354309) 及 HATA 香港旅行社协会会员 (自2018年)。", 
                    icon: MapPin 
                },
                { 
                    name: "On The Road Inc.", 
                    desc: "美国业务主体，支持北美合作场景下的资源配置与履约支撑。具备美国 ARC 结算机构顶级直连资质与加州旅行经销正规牌照 (注册号: 2126800-40)。", 
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
        <section id="credentials" className="section-padding relative overflow-hidden bg-[#06152B]">
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
                <div className="text-center max-w-5xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-3 mb-8 justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">{lang === 'ZH' ? '资质合规' : 'Trust & Compliance'}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.1]">
                        {t.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto italic opacity-90">
                        {t.intro}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div key={idx} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 hover:bg-white/10 hover:border-emerald-400/30 group transition-all duration-700 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 blur-3xl -z-10 group-hover:bg-emerald-400/10 transition-all duration-700" />
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:bg-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon className="w-10 h-10 text-white group-hover:text-[#06152B] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight tracking-tight">{card.name}</h3>
                                <p className="text-slate-400 leading-relaxed font-semibold group-hover:text-slate-200 transition-colors text-base">{card.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
