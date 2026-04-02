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
            box2Desc: "API direct connects to global low-cost carriers, maximizing margin potential for partners.",
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
            box3Desc: "覆盖全球五大洲，提供极具壁垒的一手团队机位优势资源库。",
            box3Suffix: "大洲团队覆盖"
        }
    };
    const t = text[lang];

    return (
        <section id="mobility" className="py-24 bg-[#071428] border-y border-white/5 relative overflow-hidden">
            {/* Tech grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="mb-14 text-center">
                    <div className="inline-flex items-center gap-3 mb-5 justify-center">
                        <div className="w-8 h-0.5 bg-[#C8A050]" />
                        <span className="text-xs font-bold tracking-[0.2em] text-[#C8A050] uppercase">{lang === 'ZH' ? '航空直连能力' : 'Aviation Connectivity'}</span>
                        <div className="w-8 h-0.5 bg-[#C8A050]" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{t.title}</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        {t.desc}
                    </p>
                </div>

                {/* Aviation Image Banner */}
                <div className="w-full rounded-[2rem] overflow-hidden mb-14 relative shadow-2xl shadow-black/40 group cursor-default bg-slate-900" style={{ height: '340px' }}>
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=100&w=2500&auto=format&fit=crop" alt="Aviation Network" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071428]/90 via-[#071428]/30 to-transparent flex flex-col justify-end p-8 md:p-14">
                        <div className="flex items-end gap-6">
                            <div>
                                <h3 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-xl mb-4 tracking-tight">{t.bannerTitle}</h3>
                                <p className="text-slate-300 text-lg md:text-xl max-w-xl font-medium">{t.bannerDesc}</p>
                            </div>
                            <div className="hidden md:flex items-center gap-3 ml-auto mb-1 shrink-0">
                                <div className="text-center px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                                    <div className="text-2xl font-black text-white">30+</div>
                                    <div className="text-xs text-slate-400 tracking-widest uppercase mt-0.5">Airlines</div>
                                </div>
                                <div className="text-center px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                                    <div className="text-2xl font-black text-white">5</div>
                                    <div className="text-xs text-slate-400 tracking-widest uppercase mt-0.5">Continents</div>
                                </div>
                                <div className="text-center px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                                    <div className="text-2xl font-black text-white">48</div>
                                    <div className="text-xs text-slate-400 tracking-widest uppercase mt-0.5">LCC APIs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 group backdrop-blur-sm">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-500">
                            <PlaneTakeoff className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-blue-300 transition-colors">{t.box1Title}</h3>
                        <p className="text-slate-400 mb-10 leading-relaxed font-medium text-sm">{t.box1Desc}</p>
                        <div className="flex items-baseline gap-3">
                            <span className="text-5xl font-black text-white">30+</span>
                            <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">{t.box1Suffix}</span>
                        </div>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TicketPercent className="w-28 h-28 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-[#C8A050]/10 rounded-2xl flex items-center justify-center mb-8 text-[#C8A050] group-hover:bg-[#C8A050]/20 transition-all duration-500 relative z-10">
                            <TicketPercent className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-4 relative z-10 group-hover:text-[#C8A050] transition-colors">{t.box2Title}</h3>
                        <p className="text-slate-400 mb-10 leading-relaxed font-medium relative z-10 text-sm">{t.box2Desc}</p>
                        <div className="flex items-baseline gap-3 relative z-10">
                            <span className="text-5xl font-black text-white">48</span>
                            <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">{t.box2Suffix}</span>
                        </div>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 group backdrop-blur-sm">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-500">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors">{t.box3Title}</h3>
                        <p className="text-slate-400 mb-10 leading-relaxed font-medium text-sm">{t.box3Desc}</p>
                        <div className="flex items-baseline gap-3">
                            <span className="text-5xl font-black text-white">5</span>
                            <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">{t.box3Suffix}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
