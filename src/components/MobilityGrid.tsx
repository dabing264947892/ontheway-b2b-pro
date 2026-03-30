"use client";

import { PlaneTakeoff, TicketPercent, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobilityGrid() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Mobility API Capabilities",
            desc: "Unrivaled direct connect capabilities providing the most competitive fares globally.",
            bannerTitle: "Connecting 5 Continents Extensively",
            bannerDesc: "Leverage our deep aviation integration to acquire global routing margins instantly.",
            box1Title: "NDC Direct Integration",
            box1Desc: "Direct connections to 30+ major airlines globally including AA, UA, LH, and QR.",
            box1Suffix: "Airlines",
            box2Title: "LCC Content Matrix",
            box2Desc: "API direct connects to global low-cost carriers, maximizing margin potential for parters.",
            box2Suffix: "LCC APIs",
            box3Title: "Group Ticketing",
            box3Desc: "First-hand group ticket resource pool covering all five continents.",
            box3Suffix: "Continents"
        },
        ZH: {
            title: "大交通 API 直连矩阵",
            desc: "独一无二的直接连接能力，在全球提供最具竞争力的票源与价格体系。",
            bannerTitle: "深度连接全球五大洲",
            bannerDesc: "依托我们在航空领域的深度技术整合，立即获得全球主要航线的利润空间。",
            box1Title: "NDC 核心直连",
            box1Desc: "全球直连 30 余家主流航空公司，包含 AA、UA、LH 和 QR 等。",
            box1Suffix: "直连航司",
            box2Title: "低成本航空矩阵",
            box2Desc: "直指全球优质低成本航空运力库，充分释放代理商的利润潜力。",
            box2Suffix: "家航司 API",
            box3Title: "一手团队资源",
            box3Desc: "覆射全球五大洲，提供极具壁垒的一手团队机位优势资源库。",
            box3Suffix: "大洲团队覆盖"
        }
    };
    const t = text[lang];

    return (
        <section id="mobility" className="py-24 bg-slate-50 border-y border-slate-200/50">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.title}</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto md:text-lg">
                        {t.desc}
                    </p>
                </div>

                {/* Generated Mobility Image Banner */}
                <div className="w-full h-64 md:h-96 rounded-[2rem] overflow-hidden mb-16 relative shadow-2xl shadow-primary/10 group cursor-pointer bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=100&w=2500&auto=format&fit=crop" alt="Aviation Network" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <h3 className="text-white text-3xl md:text-5xl font-bold drop-shadow-xl mb-4">{t.bannerTitle}</h3>
                        <p className="text-slate-200 text-lg md:text-xl max-w-xl">{t.bannerDesc}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <PlaneTakeoff className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{t.box1Title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">{t.box1Desc}</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-extrabold text-slate-900">30+</span>
                            <span className="text-sm text-slate-500 font-medium tracking-wide uppercase">{t.box1Suffix}</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <TicketPercent className="w-32 h-32" />
                        </div>
                        <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6 text-primary relative z-10">
                            <TicketPercent className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{t.box2Title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed relative z-10">{t.box2Desc}</p>
                        <div className="flex items-baseline gap-2 relative z-10">
                            <span className="text-4xl font-extrabold text-slate-900">48</span>
                            <span className="text-sm text-slate-500 font-medium tracking-wide uppercase">{t.box2Suffix}</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{t.box3Title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">{t.box3Desc}</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-extrabold text-slate-900">5</span>
                            <span className="text-sm text-slate-500 font-medium tracking-wide uppercase">{t.box3Suffix}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
