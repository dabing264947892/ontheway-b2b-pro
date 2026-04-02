"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layers, Activity, SmartphoneNfc, ShieldAlert, Map, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Why Partners Choose Us",
            intro: "As a global travel resource allocation platform, we provide more than just inventory. We deliver a comprehensive B2B infrastructure that combines dual-entity stability with global fulfillment expertise.",
            cards: [
                { title: "Dual-Entity Compliance", copy: "Strategic entities in Hong Kong, China and the U.S. for cross-border financial and operational stability", icon: ShieldAlert, color: "blue" },
                { title: "Global Air Distribution", copy: "Multi-market ticketing capability with direct GDS, NDC, and LCC content aggregation", icon: Layers, color: "emerald" },
                { title: "Hotel & Accommodation", copy: "Extensive global hotel supply network with competitive B2B rates and fulfillment", icon: Activity, color: "amber" },
                { title: "Group Travel & MICE", copy: "Professional support for complex meetings, incentives, conferences, and exhibitions", icon: HeartHandshake, color: "purple" },
                { title: "Ground Mobility", copy: "Coordinated airport transfers, chauffeured services, and local transportation solutions", icon: Map, color: "red" },
                { title: "Digital Connectivity", copy: "Scalable API integration, system cooperation models, and digital transformation support", icon: SmartphoneNfc, color: "cyan" },
                { title: "24/7 Bilingual Support", copy: "Round-the-clock operational coordination and fulfillment support in English and Chinese", icon: Activity, color: "blue" }
            ]
        },
        ZH: {
            title: "为什么合作伙伴选择我们",
            intro: "作为全球旅行资源配置平台，我们不仅提供资源，更通过“美港双引擎”的合规架构与全球履约能力，为您构建稳固的 B2B 合作基石。",
            cards: [
                { title: "双实体合规支撑", copy: "在中国香港与美国拥有持牌实体，保障跨境资金结算与业务合规", icon: ShieldAlert, color: "blue" },
                { title: "全球机票分销", copy: "具备多地本地化出票能力，直连 GDS、NDC 及 LCC 全球内容矩阵", icon: Layers, color: "emerald" },
                { title: "酒店与住宿供应", copy: "覆盖全球的酒店供应网络，提供极具竞争力的 B2B 净价与履约保障", icon: Activity, color: "amber" },
                { title: "团队出行与 MICE", copy: "为商务考察、会议、奖励旅游等复杂需求提供全流程专业支持", icon: HeartHandshake, color: "purple" },
                { title: "地面交通与接送机", copy: "提供全球主要城市的机场接送、地面出行及本地化客运解决方案", icon: Map, color: "red" },
                { title: "数字化连接与 API", copy: "成熟的 API 接入、系统协同模式及数字化差旅管理工具支持", icon: SmartphoneNfc, color: "cyan" },
                { title: "24/7 双语运营支持", copy: "全天候不间断的中英双语业务协同，确保全球履约无忧", icon: Activity, color: "blue" }
            ]
        }
    };

    const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
        blue:    { bg: "bg-blue-500/10",    text: "text-blue-400",    border: "group-hover:border-blue-500/30",   glow: "group-hover:bg-blue-500/10" },
        emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "group-hover:border-emerald-500/30", glow: "group-hover:bg-emerald-500/10" },
        amber:   { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "group-hover:border-amber-500/30",  glow: "group-hover:bg-amber-500/10" },
        purple:  { bg: "bg-purple-500/10",  text: "text-purple-400",  border: "group-hover:border-purple-500/30", glow: "group-hover:bg-purple-500/10" },
        red:     { bg: "bg-red-500/10",     text: "text-red-400",     border: "group-hover:border-red-500/30",    glow: "group-hover:bg-red-500/10" },
        cyan:    { bg: "bg-cyan-500/10",    text: "text-cyan-400",    border: "group-hover:border-cyan-500/30",   glow: "group-hover:bg-cyan-500/10" },
    };

    const t = text[lang];

    return (
        <section className="py-20 md:py-28 bg-[#0b2853] relative overflow-hidden">
            {/* HUD Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            {/* Corner glow accents */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C8A050]/5 rounded-full blur-[100px] pointer-events-none" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20 max-w-6xl mx-auto">
                    <div className="md:w-1/3">
                        <div className="inline-flex items-center gap-2 mb-5">
                            <div className="w-8 h-0.5 bg-[#C8A050]"></div>
                            <span className="text-sm font-bold tracking-widest text-[#C8A050] uppercase">{lang === 'EN' ? 'Our Advantages' : '核心优势'}</span>
                        </div>
                        <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            {t.title}
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-6 md:pl-12">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                            {t.intro}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {t.cards.map((card, idx) => {
                        const Icon = card.icon;
                        const colors = colorMap[card.color];
                        return (
                             <div
                                key={idx}
                                className={`bg-white/[0.04] border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-400 group relative overflow-hidden ${colors.border}`}
                            >
                                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-all duration-700 ${colors.glow}`} />
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} strokeWidth={1.5} />
                                </div>
                                <h3 className={`text-xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors`}>{card.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed text-sm">{card.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
