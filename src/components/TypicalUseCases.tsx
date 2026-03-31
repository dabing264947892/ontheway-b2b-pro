"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MoveRight } from "lucide-react";

export default function TypicalUseCases() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Typical Use Cases",
            cases: [
                { title: "TMC Fulfillment Support", desc: "Resource, system and service coordination for managed travel" },
                { title: "OTA Supply Expansion", desc: "Expanded air, hotel and mobility capability" },
                { title: "Group Travel & MICE", desc: "Support for meetings, delegations and corporate groups" },
                { title: "Enterprise Travel Coordination", desc: "Integrated support across supply, management and service delivery" }
            ]
        },
        ZH: {
            title: "典型合作场景",
            cases: [
                { title: "TMC 履约协同", desc: "为差旅管理公司提供资源、系统与服务协同支持" },
                { title: "OTA 资源拓展", desc: "支持 OTA 拓展全球机票、酒店与地面交通能力" },
                { title: "团队与会奖出行", desc: "支持企业团队、会议、代表团及活动场景" },
                { title: "企业综合出行支持", desc: "支持企业客户在资源、管理与服务侧的综合协同需求" }
            ]
        }
    };

    const t = text[lang];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-widest text-[#0b2853] uppercase mb-4 block">Use Cases</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {t.cases.map((useCase, idx) => (
                        <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0b2853]/10 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#0b2853] transition-colors duration-300" />
                            <div className="mt-4 mb-16">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">{useCase.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{useCase.desc}</p>
                            </div>
                            <div className="absolute bottom-8 right-8">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0b2853] transition-colors duration-300">
                                    <MoveRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
