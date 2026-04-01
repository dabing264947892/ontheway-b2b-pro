"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Link2, Network, Briefcase, Globe2 } from "lucide-react";
import Image from "next/image";
import techBg from "../../public/images/global_capability_bg.png";

export default function GlobalCapability() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Global Capability Overview",
            copy: "Built on the group's travel resource allocation capability and OTW's years of service experience, we continue to strengthen supply integration, digital connectivity and fulfillment coordination for complex international travel cooperation.",
            points: [
                { title: "Integrated Travel Supply", desc: "Air, hotel, rail, mobility, MICE and related services", icon: Link2 },
                { title: "Digital Connectivity", desc: "Multi-end access, API, SSO and management support", icon: Network },
                { title: "Enterprise Service Experience", desc: "Supporting a large and diverse enterprise customer base", icon: Briefcase },
                { title: "Cross-Market Support", desc: "Enabled by Hong Kong, U.S. and broader regional capability", icon: Globe2 }
            ]
        },
        ZH: {
            title: "全球资源与能力概览",
            copy: "依托集团全球旅行资源配置能力与在路上商旅多年服务经验，我们持续强化资源整合、数字连接与履约协同能力，服务于更复杂的国际合作场景。",
            points: [
                { title: "全球资源整合能力", desc: "覆盖机票、酒店、火车票、用车、会奖与相关延伸服务", icon: Link2 },
                { title: "数字化连接能力", desc: "支持多端、API、SSO 与系统管理", icon: Network },
                { title: "企业服务经验", desc: "已服务上千家企业客户", icon: Briefcase },
                { title: "国际合作支撑", desc: "依托香港、美国等跨区域业务能力", icon: Globe2 }
            ]
        }
    };

    const t = text[lang];

    return (
        <section id="global-capability" className="py-24 bg-slate-50 border-t border-slate-200/60 overflow-hidden relative">
            <Image 
                src={techBg} 
                alt="Tech Abstract Background" 
                fill 
                className="object-cover opacity-15 mix-blend-multiply pointer-events-none -z-10" 
                unoptimized 
            />
            <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-[#0b2853]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <span className="text-sm font-bold tracking-widest text-[#0b2853] uppercase">{lang === 'EN' ? 'Global Network' : '全球网络'}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            {t.title}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm">
                            {t.copy}
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {t.points.map((pt, idx) => {
                            const Icon = pt.icon;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#0b2853]/20 transition-all duration-300">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#0b2853]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pt.title}</h3>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{pt.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
