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
            ]
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
            ]
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
                className="object-cover opacity-20 mix-blend-soft-light -z-10 scale-110"
                unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900 -z-10 pointer-events-none" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-3 mb-8 justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#C8A050] to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-[#C8A050] uppercase">{lang === 'ZH' ? '客户范围' : 'Target Audience'}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.1]">
                        {t.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto italic opacity-90">
                        {t.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr max-w-7xl mx-auto">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div 
                                key={idx} 
                                className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group flex flex-col hover:-translate-y-2 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C8A050]/5 blur-3xl -z-10 group-hover:bg-[#C8A050]/10 transition-all duration-700" />
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#C8A050] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon className="w-8 h-8 text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-6 group-hover:text-[#C8A050] transition-colors tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-semibold transition-colors group-hover:text-slate-200 text-base">{card.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
