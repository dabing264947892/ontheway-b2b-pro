"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Building2, Globe, Boxes, Building, Presentation } from "lucide-react";
import Image from "next/image";

export default function WhoWeServe() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Who We Serve",
            desc: "We provide tailored resource allocation and fulfillment support for a wide range of B2B travel partners, ensuring scalable growth across global markets.",
            cards: [
                { title: "TMCs", copy: "Enhance your managed travel offerings with broader air/hotel supply and 24/7 cross-border fulfillment coordination.", icon: Building2 },
                { title: "OTAs & Platforms", copy: "Scale your global content via high-performance APIs and robust multi-source aggregation architecture.", icon: Globe },
                { title: "Wholesalers & Consolidators", copy: "Optimize your distribution via multi-market ticketing flexibility and hybrid fulfillment support models.", icon: Boxes },
                { title: "Enterprise & Project Travel", copy: "Ensure stability for large-scale projects and corporate travel with high-standard SLA and dedicated resource management.", icon: Building },
                { title: "Group & MICE Partners", copy: "Execute complex conferences, incentive travel, and delegations with specialized ground mobility and group booking support.", icon: Presentation }
            ],
            bannerTitle: "A Trusted Partner for Global Travel Growth",
            bannerDesc: "Join hundreds of TMCs and OTAs who rely on our global resource allocation and multi-market fulfillment capabilities.",
            bannerCta: "Connect With Our Team"
        },
        ZH: {
            title: "我们服务谁",
            desc: "为多元化的 B2B 合作伙伴提供定制化的资源配置与履约支持，助力全球业务在不同市场环境下稳健增长。",
            cards: [
                { title: "差旅管理公司 TMC", copy: "通过更广泛的机酒供应与 24/7 跨境履约协同，提升企业差旅服务竞争力。", icon: Building2 },
                { title: "OTA 与在线旅游平台", copy: "依托高性能 API 与多源聚合架构，快速拓展全球内容覆盖，降低系统构建成本。", icon: Globe },
                { title: "批发商与资源整合商", copy: "凭借多地出票灵活性与混合履约支持模式，优化分销效率与库存流通性。", icon: Boxes },
                { title: "大型企业与项目差旅", copy: "为大型项目与企业差旅提供高标准 SLA 交付与稳定的全球资源管理保障。", icon: Building },
                { title: "团队出行与 MICE 服务商", copy: "为会议、奖励旅游与大型代表团提供定制化的地面交通与机酒团队预订方案。", icon: Presentation }
            ],
            bannerTitle: "全球业务增长的信赖伙伴",
            bannerDesc: "数百家 TMC 与 OTA 正在依托我们的全球资源配置与多地履约能力，实现业务的稳健扩张。",
            bannerCta: "立即联系团队"
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
