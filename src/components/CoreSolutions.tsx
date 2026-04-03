"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Plane, Bed, UsersRound, Car, CodeSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const cardVisuals = [
    "/images/tech_aviation_v2.png",
    "/images/tech_hotel_v2.png",
    "/images/group_mice_bg.png",
    "/images/ground_transport_bg.png",
    "/images/digital_system_bg.png",
];

export default function CoreSolutions() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Core Solutions",
            solutions: [
                {
                    id: "air",
                    title: "Global Air Distribution",
                    desc: "Scalable ticketing across global hubs, bringing together GDS, NDC, and LCC content with robust fulfillment for TMCs and OTAs.",
                    icon: Plane,
                    accentColor: "from-blue-500/20 to-transparent",
                    points: ["Local ticketing across global hubs", "Integrated GDS, NDC & LCC content", "Expertise in complex international routing", "Automated fulfillment coordination", "Support for corporate & group fares", "24/7 cross-border operational coordination"]
                },
                {
                    id: "hotel",
                    title: "Hotel & Accommodation Supply",
                    desc: "Direct access to over 3,000,000 properties worldwide with reliable fulfillment coordination and B2B pricing models.",
                    icon: Bed,
                    accentColor: "from-amber-500/20 to-transparent",
                    points: ["Global property inventory access", "Reliable B2B net rates", "Strategic sourcing & fulfillment coordination", "Consistent service quality guidelines", "Support for corporate & project-based stays"]
                },
                {
                    id: "group",
                    title: "Group Travel & MICE Support",
                    desc: "End-to-end coordination for meetings, incentive travel, and complex corporate delegations with localized expertise.",
                    icon: UsersRound,
                    accentColor: "from-purple-500/20 to-transparent",
                    points: ["Corporate group & delegation travel", "MICE & business event coordination", "Incentive travel execution", "Integrated hotel & transport arrangements"]
                },
                {
                    id: "ground",
                    title: "Ground Mobility & Airport Transfers",
                    desc: "Coordinated transportation across major global business hubs, ensuring reliable travel connections and local support.",
                    icon: Car,
                    accentColor: "from-emerald-500/20 to-transparent",
                    points: ["24/7 airport transfer support", "Chauffeur & point-to-point mobility", "Multi-supplier quality coordination", "Standardized service delivery", "Global hub coverage"]
                },
                {
                    id: "digital",
                    title: "Digital Connectivity & Travel Systems",
                    desc: "Enterprise-grade API and system integration models designed to support modern B2B travel operations.",
                    icon: CodeSquare,
                    accentColor: "from-cyan-500/20 to-transparent",
                    points: ["Scalable API & SDK connectivity", "PC / Web / App / H5 integration", "SSO & corporate system connectivity", "Organization & travel policy management", "Reporting & settlement tools", "Bilingual interface (CN/EN)"]
                }
            ]
        },
        ZH: {
            title: "核心解决方案",
            solutions: [
                {
                    id: "air",
                    title: "全球机票分销",
                    desc: "整合全球 GDS、NDC 与 LCC 运力，在各大国际枢纽提供规模化出票与稳健的履约支持，赋能全球业务伙伴。",
                    icon: Plane,
                    accentColor: "from-blue-500/20 to-transparent",
                    points: ["全球核心枢纽本地化出票", "整合 GDS、NDC 与 LCC 内容", "复杂国际航线专业处理", "自动化履约与订单流转", "支持企业协议价与团队价配置", "24/7 跨境业务协同支持"]
                },
                {
                    id: "hotel",
                    title: "酒店与住宿供应",
                    desc: "直连全球逾 300 万家酒店，提供可靠的履约保障与灵活的 B2B 价格模型。",
                    icon: Bed,
                    accentColor: "from-amber-500/20 to-transparent",
                    points: ["核心全球酒店库存入库", "可靠的 B2B 净价体系", "策略性采集与履约协同", "一致的服务质量交付标准", "适配企业级与项目型住宿需求"]
                },
                {
                    id: "group",
                    title: "团队出行与 MICE 支持",
                    desc: "为会议、奖励旅游及各类商务代表团提供端到端的专业业务协作与本地执行。",
                    icon: UsersRound,
                    accentColor: "from-purple-500/20 to-transparent",
                    points: ["企业团队与代表团出行", "会奖旅游与商务活动协同", "奖励旅游项目专业执行", "酒店、地面交通与签证集成方案"]
                },
                {
                    id: "ground",
                    title: "地面交通与接送机",
                    desc: "覆盖全球核心商务城市的出行解决方案，在各大枢纽节点提供可靠的连接与本地支持。",
                    icon: Car,
                    accentColor: "from-emerald-500/20 to-transparent",
                    points: ["24/7 机场接送服务支持", "专车与点对点出行保障", "多供应商质量协同管理", "标准化服务交付体验", "全球主要交通枢纽全覆盖"]
                },
                {
                    id: "digital",
                    title: "数字化连接与差旅系统",
                    desc: "提供企业级 API 与系统集成方案，助力合作伙伴实现高效的数字化运营协同。",
                    icon: CodeSquare,
                    accentColor: "from-cyan-500/20 to-transparent",
                    points: ["可扩展 API 与 SDK 连接性", "PC / Web / App / H5 全端集成", "SSO 与企业系统无缝对接", "组织架构与差旅政策管理", "自动化报表与结算协同工具", "中英双语界面支持"]
                }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="core-solutions" className="section-padding bg-white relative overflow-hidden">
            {/* Subtle tech dashboard background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                    backgroundImage: `url('/images/solutions_tech_dashboard.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Animated grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(11,40,83,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,40,83,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b2853] via-[#C8A050] to-[#E8311F]" />
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-start max-w-5xl mx-auto mb-24 space-y-6">
                    <div className="inline-flex items-center gap-3">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#E8311F] to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-[#E8311F] uppercase">{lang === 'ZH' ? '服务模块' : 'Core Services'}</span>
                    </div>
                    <h2 className="text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium">
                        {lang === 'ZH' ? '五大核心能力模块，构建完整的全球 B2B 旅行基础设施。' : 'Five integrated capability modules powering a complete global B2B travel infrastructure.'}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {t.solutions.map((sol, index) => {
                        const Icon = sol.icon;
                        return (
                            <div
                                key={sol.id}
                                className={`group p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(11,40,83,0.12)] transition-all duration-500 relative overflow-hidden cursor-default ${index === 4 ? 'lg:col-span-2' : ''}`}
                            >
                                {/* Background image for each card — appears on hover */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <Image
                                        src={cardVisuals[index]}
                                        alt={sol.title}
                                        fill
                                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        unoptimized
                                    />
                                    {/* Dual layer overlay — white base + accent gradient */}
                                    <div className="absolute inset-0 bg-white/75" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sol.accentColor}`} />
                                </div>

                                {/* Subtle accent glow on hover */}
                                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-slate-200/0 group-hover:bg-blue-100/40 rounded-full blur-3xl transition-all duration-700 -z-10" />

                                <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-8 mb-10 md:mb-12 relative z-10">
                                    <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#0b2853]/5 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#0b2853] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#0b2853] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4 group-hover:text-[#0b2853] transition-colors tracking-tight leading-tight">{sol.title}</h3>
                                        <p className="text-slate-600 leading-relaxed max-w-xl text-base md:text-lg font-medium opacity-80">{sol.desc}</p>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 ${index === 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 pt-6 border-t border-slate-200/60 relative z-10`}>
                                    {sol.points.map((point, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 opacity-80 mt-0.5" />
                                            <span className="text-slate-700 text-sm font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
