"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Building2, Globe, Boxes, Building, Presentation } from "lucide-react";
import Image from "next/image";

export default function WhoWeServe() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Who We Serve",
            desc: "We support a broad range of B2B travel partners across distribution, managed travel and group travel scenarios.",
            cards: [
                { title: "TMCs", copy: "Broader supply access and fulfillment support", icon: Building2 },
                { title: "OTAs", copy: "Global content expansion and system connectivity", icon: Globe },
                { title: "Travel Wholesalers", copy: "Flexible cooperation across supply scenarios", icon: Boxes },
                { title: "Enterprise Travel Partners", copy: "Stable travel resources and management support", icon: Building },
                { title: "Group Travel & MICE Operators", copy: "Support for meetings, delegations and incentive travel", icon: Presentation }
            ],
            bannerTitle: "A Trusted Infrastructure for Global B2B Partners",
            bannerDesc: "Join hundreds of TMCs, OTAs and enterprise partners who rely on our global distribution capabilities.",
            bannerCta: "Become a Partner"
        },
        ZH: {
            title: "我们服务谁",
            desc: "聚焦国际旅行分销、企业差旅与团队出行合作场景，为不同类型客户提供资源接入、业务协同与履约支持。",
            cards: [
                { title: "差旅管理公司 TMC", copy: "提供更丰富的资源能力与履约协同支持", icon: Building2 },
                { title: "OTA 在线旅游平台", copy: "支持全球资源拓展与系统连接", icon: Globe },
                { title: "批发商与资源合作伙伴", copy: "支持多类型分销合作场景", icon: Boxes },
                { title: "企业差旅合作伙伴", copy: "支持更稳定的出行资源与管理能力", icon: Building },
                { title: "团队与 MICE 服务商", copy: "适配商务考察、会议、奖励旅游等需求", icon: Presentation }
            ],
            bannerTitle: "值得信赖的全球 B2B 伙伴合作基础设施",
            bannerDesc: "数百家 TMC、OTA 与企业合作伙伴，正依托我们的全球分销能力稳步增长。",
            bannerCta: "申请合作"
        }
    };

    const t = text[lang];

    return (
        <section id="who-we-serve" className="section-padding relative overflow-hidden bg-slate-900">
            {/* High-res skyscraper background */}
            <Image
                src="/ontheway-b2b-pro/images/who_we_serve_bg.png"
                alt="Corporate Skyscraper Background"
                fill
                className="object-cover opacity-25 mix-blend-soft-light -z-10 scale-110"
                unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900 -z-10 pointer-events-none" />
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-40" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-3 mb-8 justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#C8A050] to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-[#C8A050] uppercase">{lang === 'ZH' ? '客户范围' : 'Target Audience'}</span>
                        <div className="w-12 h-1 bg-gradient-to-l from-[#C8A050] to-transparent"></div>
                    </div>
                    <h2 className="text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold text-white mb-8 md:mb-10 tracking-tight leading-[1.1]">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto opacity-90 px-4 md:px-0">
                        {t.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr max-w-7xl mx-auto mb-20">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-10 border border-white/10 hover:bg-white/10 hover:border-[#C8A050]/30 transition-all duration-500 group flex flex-col hover:-translate-y-2 shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C8A050]/5 blur-3xl pointer-events-none group-hover:bg-[#C8A050]/10 transition-all duration-700" />
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#C8A050] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg border border-white/10">
                                    <Icon className="w-8 h-8 text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-[#C8A050] transition-colors tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium transition-colors group-hover:text-slate-200 text-base">{card.copy}</p>
                                {/* Bottom accent line */}
                                <div className="mt-auto pt-8">
                                    <div className="h-px bg-gradient-to-r from-[#C8A050]/0 via-[#C8A050]/30 to-[#C8A050]/0 group-hover:via-[#C8A050]/60 transition-all duration-500" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* HD Banner */}
                <div className="w-full rounded-[2rem] overflow-hidden relative shadow-2xl group cursor-default mt-8" style={{ height: '280px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=90&w=2400&auto=format&fit=crop"
                        alt="Global B2B Travel Partners"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b2853]/95 via-[#0b2853]/70 to-[#0b2853]/30 md:to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
                        <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 tracking-tight drop-shadow-xl leading-tight">{t.bannerTitle}</h3>
                        <p className="text-slate-300 text-base md:text-lg max-w-xl mb-6 md:mb-8 font-medium line-clamp-2 md:line-clamp-none">{t.bannerDesc}</p>
                        <a href="#contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-[#C8A050] hover:bg-[#d4b06a] text-[#0b2853] font-bold rounded-xl transition-all w-fit text-sm md:text-base shadow-lg hover:shadow-[#C8A050]/30 hover:shadow-xl hover:-translate-y-0.5">
                            {t.bannerCta}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
