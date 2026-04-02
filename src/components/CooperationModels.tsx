"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Terminal, UserCheck, RefreshCw, Users, Settings2, ArrowRight } from "lucide-react";

export default function CooperationModels() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Cooperation Models",
            subtitle: "Flexible partnership structures designed for global travel scale and operational excellence.",
            models: [
                {
                    title: "API Connectivity",
                    desc: "Seamlessly integrate our global air and hotel content into your own platform via high-performance APIs.",
                    icon: Terminal,
                    features: ["RESTful API", "NDC/GDS/LCC aggregation", "Real-time booking"]
                },
                {
                    title: "Account-Based Sourcing",
                    desc: "Dedicated backend access for your team to source, book, and manage global travel resources efficiently.",
                    icon: UserCheck,
                    features: ["Corporate portal", "Unified management", "Negotiated rates"]
                },
                {
                    title: "Hybrid Fulfillment Support",
                    desc: "Combine your existing supply with our multi-market ticketing and fulfillment capabilities.",
                    icon: RefreshCw,
                    features: ["Multi-POS ticketing", "Global settlement", "Order coordination"]
                },
                {
                    title: "Group & Project-Based",
                    desc: "Specialized support for large-scale corporate groups, MICE, and complex project travel needs.",
                    icon: Users,
                    features: ["Customized itineraries", "On-ground support", "Group pricing"]
                },
                {
                    title: "Customized Partnership",
                    desc: "Bespoke cooperation models tailored to your unique business logic and market requirements.",
                    icon: Settings2,
                    features: ["Strategic alliance", "Joint operations", "Custom tech support"]
                }
            ],
            cta: "Discuss Your Model"
        },
        ZH: {
            title: "合作模式",
            subtitle: "灵活的合作伙伴结构，旨在支持全球旅行规模化增长与卓越运营。",
            models: [
                {
                    title: "API 接入模式",
                    desc: "通过高性能 API，将我们的全球机票与酒店内容无缝集成到您的自有平台中。",
                    icon: Terminal,
                    features: ["标准 RESTful 接口", "NDC/GDS/LCC 聚合", "实时预订与支付"]
                },
                {
                    title: "账号采集模式",
                    desc: "为您的团队提供专属后台，高效完成全球旅行资源的查询、预订与订单管理。",
                    icon: UserCheck,
                    features: ["企业专用门户", "统一后台管理", "协议价托管支持"]
                },
                {
                    title: "混合履约支撑",
                    desc: "将您的自有供应与我们的多地化出票及全球履约能力相结合，优化资源配置。",
                    icon: RefreshCw,
                    features: ["多点 POS 出票", "全球结算协同", "订单后端托管"]
                },
                {
                    title: "团队与项目制合作",
                    desc: "针对大型企业团队、MICE 及复杂项目差旅需求提供的专项资源与执行保障。",
                    icon: Users,
                    features: ["定制化行程方案", "落地执行支持", "团队批量运价"]
                },
                {
                    title: "深度定制化合作",
                    desc: "根据您的业务逻辑与市场需求，量身定制的深度合作伙伴关系与运营模式。",
                    icon: Settings2,
                    features: ["战略联盟协作", "联合运营模式", "定制化技术支持"]
                }
            ],
            cta: "探讨合作模式"
        }
    };

    const t = text[lang];

    return (
        <section id="cooperation-models" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-3 mb-6 justify-center">
                        <div className="w-10 h-0.5 bg-blue-600"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">{lang === 'ZH' ? '商务合作' : 'Partnership'}</span>
                        <div className="w-10 h-0.5 bg-blue-600"></div>
                    </div>
                    <h2 className="text-[2.5rem] md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {t.models.map((model, idx) => {
                        const Icon = model.icon;
                        return (
                            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="w-14 h-14 bg-blue-600/5 rounded-2xl flex items-center justify-center mb-8">
                                    <Icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8 flex-1">{model.desc}</p>
                                <div className="space-y-3 pt-6 border-t border-slate-50">
                                    {model.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            <span className="text-xs font-bold text-slate-600">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                    
                    {/* Final CTA Card */}
                    <div className="bg-[#0b2853] p-8 md:p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center group cursor-pointer relative overflow-hidden transition-all hover:scale-[1.02]" onClick={() => window.location.hash = '#contact'}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent)] pointer-events-none" />
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{lang === 'ZH' ? '开启您的 B2B 增长之旅' : 'Ready to Start?'}</h3>
                        <p className="text-blue-200/70 font-medium mb-8 text-sm relative z-10">{lang === 'ZH' ? '与我们的专家团队探讨最适合您的合作方案' : 'Connect with our team to find the best model for your business.'}</p>
                        <div className="px-8 py-3.5 bg-white text-[#0b2853] font-bold rounded-xl flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
                            {t.cta}
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
