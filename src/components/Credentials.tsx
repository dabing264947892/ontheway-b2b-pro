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
                    icon: MapPin,
                    badge: "IATA · TIA · HATA"
                },
                {
                    name: "On The Road Inc.",
                    desc: "U.S. entity supporting North America-related sourcing and fulfillment. ARC Accredited Agency & California Licensed Seller of Travel (Registration No: 2126800-40).",
                    icon: MapPin,
                    badge: "ARC · CA Licensed"
                },
                {
                    name: "System & Operational Credentials",
                    desc: "Including ISO9001, ISO27001, information security certification and proprietary digital system support for secure global distribution.",
                    icon: ShieldCheck,
                    badge: "ISO 9001 · ISO 27001"
                }
            ],
            bannerTitle: "Built on Trust. Operating at Global Scale.",
            bannerDesc: "Dual-licensed in Hong Kong and the United States, enabling compliant cross-border travel fulfillment for partners worldwide.",
            bannerCta: "View Our Credentials"
        },
        ZH: {
            title: "资质实体与行业背书",
            intro: "美港双引擎：全球合规与资金流转安全底座。扎根洛杉矶与香港。依托高标准的美国 ARC 与香港 IATA/TIA 核心旅游资质，构筑坚不可摧的全球资金流转通道、深度本地化运营团队及 B2B 交易信用基石。",
            cards: [
                {
                    name: "On The Way (Hong Kong) Travel Limited",
                    desc: "香港业务主体，支持亚太及国际合作场景下的资源与履约协同。IATA 国际航协认证 (代码: 13335431)、TIA 持牌旅行社 (牌照号: 354309) 及 HATA 香港旅行社协会会员 (自2018年)。",
                    icon: MapPin,
                    badge: "IATA · TIA · HATA"
                },
                {
                    name: "On The Road Inc.",
                    desc: "美国业务主体，支持北美合作场景下的资源配置与履约支撑。具备美国 ARC 结算机构顶级直连资质与加州旅行经销正规牌照 (注册号: 2126800-40)。",
                    icon: MapPin,
                    badge: "ARC · CA Licensed"
                },
                {
                    name: "系统与管理能力背书",
                    desc: "包括 ISO9001、ISO27001、信息系统安全等级保护认证，以及自研系统与数字化管理能力，保障全球分销数据通畅与安全。",
                    icon: ShieldCheck,
                    badge: "ISO 9001 · ISO 27001"
                }
            ],
            bannerTitle: "信赖筑底，全球运营。",
            bannerDesc: "香港与美国双重持牌实体，为全球合作伙伴提供合规、安全、可追溯的跨境出行履约服务。",
            bannerCta: "了解更多资质"
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
                className="object-cover opacity-15 pointer-events-none"
                unoptimized
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06152B]/80 via-transparent to-[#06152B]/80 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-3 mb-8 justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">{lang === 'ZH' ? '资质合规' : 'Trust & Compliance'}</span>
                        <div className="w-12 h-1 bg-gradient-to-l from-emerald-400 to-transparent"></div>
                    </div>
                    <h2 className="text-[2.2rem] sm:text-5xl md:text-7xl font-extrabold text-white mb-8 md:mb-10 tracking-tight leading-[1.1]">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto opacity-90 px-4 md:px-0">
                        {t.intro}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div key={idx} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 hover:bg-white/10 hover:border-emerald-400/30 group transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/5 blur-3xl pointer-events-none group-hover:bg-emerald-400/10 transition-all duration-700" />
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-xl group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#06152B] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-5 group-hover:text-emerald-400 transition-colors leading-tight tracking-tight">{card.name}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-200 transition-colors text-sm flex-1">{card.desc}</p>
                                {/* Badge */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <span className="text-xs font-bold tracking-widest text-emerald-400/80 uppercase">{card.badge}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* HD Trust Banner */}
                <div className="w-full rounded-[2rem] overflow-hidden relative shadow-2xl group cursor-default" style={{ height: '260px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=2400&auto=format&fit=crop"
                        alt="Global Business Trust"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06152B]/95 via-[#06152B]/70 to-[#06152B]/30 md:to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
                        <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-3 tracking-tight drop-shadow-xl leading-tight">{t.bannerTitle}</h3>
                        <p className="text-slate-300 text-base md:text-lg max-w-xl mb-6 font-medium line-clamp-2 md:line-clamp-none">{t.bannerDesc}</p>
                        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 md:px-7 md:py-3 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-400/50 text-emerald-300 font-bold rounded-xl transition-all w-fit text-xs md:text-sm backdrop-blur-md">
                            {t.bannerCta}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
