"use client";

import { Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalGdsMap() {
    const { lang } = useLanguage();

    const regions = ["Hong Kong (Hub)", "United States (Hub)", "United Kingdom", "UAE", "Singapore", "Australia", "Japan", "South Korea", "Taiwan", "Malaysia", "Thailand", "Vietnam", "Indonesia"];
    const gds = ["Sabre", "Amadeus", "Travelport", "TravelSky HK"];

    const text = {
        EN: {
            title: "Global Supply Chain & GDS Matrix",
            desc: "Directly contracted via top global distribution systems with local ticketing capabilities across 13 major regions.",
            systems: "Integrated Systems",
            regions: "13+ Localized Ticketing Regions"
        },
        ZH: {
            title: "全球供应链与 GDS 矩阵",
            desc: "通过全球顶级分销系统直接签约，在全球 13 个主要大区提供本地化出票能力集。",
            systems: "集成系统核心引擎",
            regions: "13+ 主要本地化出票区域"
        }
    };
    const t = text[lang];

    return (
        <section id="supply" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Subtle tech grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#0b2853_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col items-start max-w-5xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-3">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">{lang === 'ZH' ? '全球供应' : 'Global Supply'}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed opacity-80">
                        {t.desc}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* GDS Platforms */}
                    <div className="glass-card p-12 border-slate-200/60 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 blur-3xl -z-10 group-hover:bg-blue-600/10 transition-all duration-700" />
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-10 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600/5 rounded-xl flex items-center justify-center">
                                <Globe2 className="w-6 h-6 text-blue-600" />
                            </div>
                            {t.systems}
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                            {gds.map((system) => (
                                <div key={system} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center h-28 text-xl font-black text-slate-800 text-center hover:border-blue-600/30 hover:shadow-lg transition-all duration-300">
                                    {system}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regions List */}
                    <div className="space-y-10">
                        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.regions}</h3>
                        <div className="flex flex-wrap gap-4">
                            {regions.map((region, i) => (
                                <span
                                    key={region}
                                    className={`px-6 py-3.5 rounded-2xl text-[15px] font-bold border transition-all duration-300 transform hover:scale-105 select-none ${i < 4 ? 'bg-[#0b2853] border-[#0b2853] text-white shadow-xl shadow-[#0b2853]/20' : 'bg-white text-slate-600 border-slate-100 shadow-sm hover:border-blue-600/30 hover:text-blue-600'}`}
                                >
                                    {region}
                                </span>
                            ))}
                        </div>
                        <div className="pt-8 border-t border-slate-200">
                            <p className="text-slate-500 font-bold text-sm tracking-wide uppercase">
                                {lang === 'ZH' ? '支持全天候 24/7 本地化服务' : '24/7 Localized Ticketing Support'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
