"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Building2, Globe, Boxes, Building, Presentation } from "lucide-react";

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
        <section id="who-we-serve" className="py-24 bg-slate-50 border-t border-slate-200/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
                    <p className="text-lg text-slate-600">{t.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div 
                                key={idx} 
                                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0b2853]/20 transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-[#0b2853]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0b2853] transition-colors">
                                    <Icon className="w-7 h-7 text-[#0b2853] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{card.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
