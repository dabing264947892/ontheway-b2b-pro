"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Plane, Bed, UsersRound, Car, CodeSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const hotelVisual = "/ontheway-b2b/images/tech_hotel_v2.png";

export default function CoreSolutions() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Core Solutions",
            solutions: [
                {
                    id: "air",
                    title: "Unified Aviation API: Seamless GDS, NDC & LCC Integration",
                    desc: "Delivering structured, actionable fare data. Bypass technical fragmentation with our standardized API, designed for rapid deployment, automated order management, and multi-source pricing optimization.",
                    icon: Plane,
                    points: ["Multi-source air content", "Direct airline connectivity and NDC capability", "Corporate fare and agreement support", "International distribution access", "Suitable for group and complex itineraries", "Backed by broader group-level resource coordination"]
                },
                {
                    id: "hotel",
                    title: "Intelligent B2B Accommodation & Mobility Matrix",
                    desc: "Access 3,000,000+ global properties with advanced static data mapping and deduplication. Real-time dynamic distribution ensuring inventory accuracy and reliable post-booking fulfillment.",
                    icon: Bed,
                    points: ["Multi-source hotel content", "Price comparison capability", "Supplier management and routing logic", "Group and corporate agreement support", "Suitable for managed travel and project-based stays"]
                },
                {
                    id: "group",
                    title: "Group Travel & MICE",
                    desc: "Flexible support for corporate groups, delegations, business visits, meetings and incentive travel.",
                    icon: UsersRound,
                    points: ["Corporate and delegation travel", "Meetings and business events", "Incentive travel support", "Coordinated hotel, visa and ground arrangements"]
                },
                {
                    id: "ground",
                    title: "Ground Mobility",
                    desc: "Ground transportation support across transfer, chauffeur and mobility coordination scenarios.",
                    icon: Car,
                    points: ["Airport transfer and point-to-point mobility", "Multi-supplier coordination", "Price comparison support", "Travel standard configuration", "Suitable for business and group travel needs"]
                },
                {
                    id: "digital",
                    title: "Digital Connectivity",
                    desc: "Supported by proprietary travel systems and integration capability, this module enables app, web, API and SSO-based cooperation for more efficient business connectivity.",
                    icon: CodeSquare,
                    points: ["App / H5 / PC support", "API integration", "Single sign-on capability", "Travel and organization management", "Reporting and settlement support", "Chinese / English switching"]
                }
            ]
        },
        ZH: {
            title: "核心解决方案",
            solutions: [
                {
                    id: "air",
                    title: "统一航空 API：无缝整合 GDS、NDC 与 LCC 运力",
                    desc: "交付结构化、可落地的运价与规则数据。通过标准化接口打破底层技术壁垒，支持极速部署、自动化订单流转与多源比价优化。",
                    icon: Plane,
                    points: ["多渠道机票资源整合", "航司官网直连与 NDC 能力", "协议价格及客户协议托管", "国际分销系统接入支持", "适配团队与复杂行程需求", "依托集团资源网络提升供给灵活度"]
                },
                {
                    id: "hotel",
                    title: "智能化 B2B 酒店与地面出行矩阵",
                    desc: "接入逾 300 万家全球酒店库。具备领先的静态数据映射（Mapping）与去重能力，实时动态分销确保房态精准，为您的下游客户提供坚实的履约保障。",
                    icon: Bed,
                    points: ["多来源酒店内容整合", "同屏比价能力", "供应商管理与切换逻辑", "支持酒店集团协议与客户协议托管", "适配企业差旅与项目型住宿需求"]
                },
                {
                    id: "group",
                    title: "团队与会奖",
                    desc: "支持企业团队、代表团、商务考察、会议与奖励旅游等场景，提供从资源配置到执行协同的一体化支持。",
                    icon: UsersRound,
                    points: ["企业团队与代表团出行", "商务考察与会议服务", "奖励旅游与活动场景支持", "可协同酒店、签证、租车等相关资源"]
                },
                {
                    id: "ground",
                    title: "地面交通",
                    desc: "覆盖接送机、专车、租车及多供应商协同场景，帮助合作伙伴提升出行衔接效率与服务体验。",
                    icon: Car,
                    points: ["接送机与点对点交通", "多供应商能力整合", "支持同屏比价", "支持不同差标配置", "适配商务与团队用车需求"]
                },
                {
                    id: "digital",
                    title: "系统与连接能力",
                    desc: "依托自研差旅系统与连接能力，支持 APP、H5、PC、API、单点登录及差旅管理功能，为合作伙伴提供更高效的数字化协同能力。",
                    icon: CodeSquare,
                    points: ["APP / H5 / PC 多端支持", "API 对接支持", "单点登录能力", "差旅管理与组织管理", "报表分析与结算管理", "中英文切换支持"]
                }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="core-solutions" className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-start max-w-5xl mx-auto mb-16 space-y-4">
                    <span className="text-sm font-bold tracking-widest text-[#0b2853] uppercase">{t.title}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 border-l-4 border-[#0b2853] pl-6 h-full flex items-center">
                        {t.title}
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {t.solutions.map((sol, index) => {
                        const Icon = sol.icon;
                        return (
                            <div 
                                key={sol.id} 
                                className={`group p-8 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#0b2853]/5 transition-all duration-300 relative overflow-hidden ${index === 4 ? 'lg:col-span-2' : ''}`}
                            >
                                {index === 1 && (
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                                        <Image 
                                            src={hotelVisual} 
                                            alt="Smart Hotel Visual" 
                                            fill 
                                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                            unoptimized
                                        />
                                    </div>
                                )}
                                <div className="flex items-start gap-6 mb-8 relative z-10">
                                    <div className="shrink-0 w-16 h-16 bg-[#0b2853]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0b2853] transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-[#0b2853] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{sol.title}</h3>
                                        <p className="text-slate-600 leading-relaxed max-w-xl">{sol.desc}</p>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 ${index === 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 pt-6 border-t border-slate-200/60`}>
                                    {sol.points.map((point, i) => (
                                        <div key={i} className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 opacity-80" />
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
