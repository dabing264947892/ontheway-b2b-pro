"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Plane, Bed, UsersRound, Car, CodeSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const cardVisuals = [
    "/ontheway-b2b-pro/images/tech_aviation_v2.png",
    "/ontheway-b2b-pro/images/tech_hotel_v2.png",
    "/ontheway-b2b-pro/images/group_mice_bg.png",
    "/ontheway-b2b-pro/images/ground_transport_bg.png",
    "/ontheway-b2b-pro/images/digital_system_bg.png",
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
                    desc: "Multi-market ticketing, GDS/NDC/LCC content aggregation, and complex itinerary support for TMCs and OTAs.",
                    icon: Plane,
                    accentColor: "from-blue-500/20 to-transparent",
                    points: ["Multi-market ticketing flexibility", "Direct GDS, NDC & LCC aggregation", "Complex international routing support", "Automated fulfillment & order management", "Corporate & group fare coordination", "24/7 cross-border operational support"]
                },
                {
                    id: "hotel",
                    title: "Hotel & Accommodation Supply",
                    desc: "Direct access to 3,000,000+ global properties with competitive B2B rates and reliable fulfillment coordination.",
                    icon: Bed,
                    accentColor: "from-amber-500/20 to-transparent",
                    points: ["Extensive global inventory access", "Competitive B2B net rates", "Strategic sourcing & fulfillment", "Consistency in localized service", "Optimized for corporate & project-based stays"]
                },
                {
                    id: "group",
                    title: "Group Travel & MICE Support",
                    desc: "End-to-end coordination for meetings, incentive travel, conferences, and complex corporate delegations.",
                    icon: UsersRound,
                    accentColor: "from-purple-500/20 to-transparent",
                    points: ["Corporate group & delegation travel", "MICE & business event services", "Incentive travel execution", "Integrated hotel & ground arrangements"]
                },
                {
                    id: "ground",
                    title: "Ground Mobility & Airport Transfers",
                    desc: "Coordinated transportation solutions across major global business hubs, ensuring seamless travel connections.",
                    icon: Car,
                    accentColor: "from-emerald-500/20 to-transparent",
                    points: ["24/7 airport transfer services", "Chauffeur & point-to-point mobility", "Multi-supplier coordination", "Standardized service quality", "Global hub coverage"]
                },
                {
                    id: "digital",
                    title: "Digital Connectivity & Travel Systems",
                    desc: "Enterprise-grade API, system integration models, and digital transformation tools for modern travel operations.",
                    icon: CodeSquare,
                    accentColor: "from-cyan-500/20 to-transparent",
                    points: ["Scalable API & SDK support", "PC / Web / App / H5 connectivity", "Seamless SSO & system integration", "Travel & organization management", "Reporting & settlement automation", "Bilingual interface (CN/EN)"]
                }
            ]
        },
        ZH: {
            title: "核心解决方案",
            solutions: [
                {
                    id: "air",
                    title: "全球机票分销",
                    desc: "支持多市场出票、GDS/NDC/LCC 运力聚合及复杂航线解决方案，赋能 TMC 与 OTA。",
                    icon: Plane,
                    accentColor: "from-blue-500/20 to-transparent",
                    points: ["多地化本地出票灵活性", "直连 GDS、NDC 与 LCC 内容枢纽", "支持复杂国际航线定制", "自动化履约与订单流转", "企业与团队协议价托管", "24/7 跨境业务协同支撑"]
                },
                {
                    id: "hotel",
                    title: "酒店与住宿供应",
                    desc: "直连全球逾 300 万个住宿点，提供极具竞争力的 B2B 净价支持及可靠的履约保障。",
                    icon: Bed,
                    accentColor: "from-amber-500/20 to-transparent",
                    points: ["极具规模的全球库存覆盖", "优势显著的 B2B 净价体系", "策略性采集与履约协同", "高度一致的本地化服务标准", "适配企业级与项目型住宿需求"]
                },
                {
                    id: "group",
                    title: "团队出行与 MICE 支持",
                    desc: "为各种会议、奖励旅游、行业展览及大型代表团提供端到端的专业业务协同与本地化执行。",
                    icon: UsersRound,
                    accentColor: "from-purple-500/20 to-transparent",
                    points: ["企业团队与代表团出行", "会奖旅游与商务活动服务", "奖励旅游项目端到端执行", "酒店、签证与地面交通集成"]
                },
                {
                    id: "ground",
                    title: "地面交通与接送机",
                    desc: "覆盖全球核心商务城市的出行解决方案，确保在各大枢纽节点的无缝衔接与交付体验。",
                    icon: Car,
                    accentColor: "from-emerald-500/20 to-transparent",
                    points: ["全天候机场接送服务", "专车与点对点出行保障", "多供应商统一调度管理", "服务质量标准化交付", "覆盖全球主要交通枢纽"]
                },
                {
                    id: "digital",
                    title: "数字化连接与差旅系统",
                    desc: "提供企业级 API、系统接入方案及数字化管理工具，协助合作伙伴实现数字化运营转型。",
                    icon: CodeSquare,
                    accentColor: "from-cyan-500/20 to-transparent",
                    points: ["高可扩展 API 与 SDK 支持", "PC / Web / App / H5 全端覆盖", "无缝 SSO 与系统集成能力", "差旅资源与组织架构管理", "自动化报表与结算协同", "中英双语界面支持"]
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
                    backgroundImage: `url('/ontheway-b2b-pro/images/solutions_tech_dashboard.png')`,
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
