"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Award, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

export default function Credentials() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Licensed Entities & Capability Credentials",
            intro: "Dual-Hub Global Compliance & Transaction Security. Anchored in Los Angeles and Hong Kong, China, backed by ARC (US) and IATA/TIA (Hong Kong, China) accreditations. We provide a reliable operational stability and compliance framework for global fund routing, local market expertise, and B2B operational integrity.",
            cards: [
                {
                    name: "On The Way (Hong Kong) Travel Limited",
                    desc: "Hong Kong, China entity supporting APAC and international travel cooperation. IATA Accredited Agent (Code: 13335431), TIA Licensed Travel Agent (Licence No: 354309) & HATA Member since 2018.",
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
            bannerDesc: "Dual-licensed in Hong Kong, China and the United States, enabling compliant cross-border travel fulfillment for partners worldwide.",
            bannerCta: "View Our Credentials"
        },
        ZH: {
            title: "资质实体与行业背书",
            intro: "美港双引擎：全球合规与交易安全。深耕洛杉矶与中国香港，并获得 ARC (美国) 与 IATA/TIA (中国香港) 核心大交通资质认证。我们为全球合作伙伴提供稳健的合规架构、本市场专业洞察及 B2B 交易信用基石。",
            cards: [
                {
                    name: "On The Way (Hong Kong) Travel Limited",
                    desc: "中国香港业务主体，支持亚太及国际合作场景下的资源与履约协同。IATA 国际航协认证 (代码: 13335431)、TIA 持牌旅行社 (牌照号: 354309) 及 HATA 香港旅行社协会会员 (自2018年)。",
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
            bannerDesc: "中国香港与美国双重持牌实体，为全球合作伙伴提供合规、安全、可追溯的跨境出行履约服务。",
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

                <div className="max-w-7xl mx-auto space-y-12 mb-16">
                    {/* Main Entities Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {t.cards.slice(0, 2).map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <div key={idx} className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-10 md:p-14 hover:bg-white/10 hover:border-emerald-400/40 group transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col min-h-[420px]">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 blur-[100px] pointer-events-none group-hover:bg-emerald-400/10 transition-all duration-700" />
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                                        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon className="w-10 h-10 text-white group-hover:text-[#06152B] transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-tight tracking-tight">{card.name}</h3>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{card.badge}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed font-medium group-hover:text-slate-100 transition-colors text-base md:text-lg flex-1">
                                        {card.desc}
                                    </p>
                                    <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{lang === 'ZH' ? '实体资质认证' : 'Official Entity Credential'}</span>
                                        <ShieldCheck className="w-6 h-6 text-emerald-500/50" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Operational Credentials Row */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-3">{t.cards[2].name}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{t.cards[2].desc}</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">ISO 9001</div>
                                <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">ISO 27001</div>
                            </div>
                        </div>
                    </div>
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
