"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Link2, Network, Briefcase, Globe2 } from "lucide-react";
import Image from "next/image";

export default function GlobalCapability() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Global Distribution & Fulfillment Capability",
            copy: "We provide a scalable B2B travel resource coordination platform, focusing on high-performance air distribution, multi-market fulfillment, and seamless digital coordination across global hubs.",
            points: [
                { title: "Multi-Market Ticketing", desc: "Access broader fare options and routing via multi-market ticketing flexibility and localized POS support.", icon: Globe2 },
                { title: "Fulfillment Coordination", desc: "Strong cross-border settlement and 24/7 bilingual operational support through our HK and U.S. entities.", icon: Briefcase },
                { title: "Complex Itinerary Support", desc: "Expert handling of international, multi-city, and non-standard travel needs including group bookings.", icon: Link2 },
                { title: "Direct Resource Access", desc: "Aggregated content from GDS, NDC, and LCCs integrated with group-level sourcing synergy.", icon: Network }
            ]
        },
        ZH: {
            title: "全球分销与履约服务能力",
            copy: "我们提供高度可扩展的 B2B 旅行资源协同平台，聚焦高效的机票分销、多地履约协同以及跨全球枢纽的数字化业务流转。",
            points: [
                { title: "多地化出票能力", desc: "依托多点 POS 支撑与出票灵活性，提供更广泛的运价选择与航线组合。", icon: Globe2 },
                { title: "履约协同保障", desc: "通过中国香港与美国实体，提供稳健的跨境结算支持与 24/7 中英双语业务协同。", icon: Briefcase },
                { title: "复杂行程支持", desc: "专业处理国际多航段、非标出行及大型团队预订等业务需求。", icon: Link2 },
                { title: "资源直连优势", desc: "聚合 GDS、NDC 及 LCC 全球运力，并结合集团化采集的规模效应。", icon: Network }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="global-capability" className="py-24 bg-[#06152b] overflow-hidden relative" style={{ position: 'relative' }}>
            {/* New high-res global network image as full background */}
            <Image
                src="/images/global_network_coverage.png"
                alt="Global Network Visualization"
                fill
                className="object-cover opacity-40 pointer-events-none"
                unoptimized
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06152b]/95 via-[#06152b]/80 to-[#06152b]/60 pointer-events-none" />
            
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-8 h-0.5 bg-[#C8A050]"></div>
                            <span className="text-sm font-bold tracking-widest text-[#C8A050] uppercase">{lang === 'EN' ? 'Global Network' : '全球网络'}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {t.title}
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {t.copy}
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {t.points.map((pt, idx) => {
                            const Icon = pt.icon;
                            return (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#C8A050]/10 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#C8A050]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{pt.title}</h3>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{pt.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
