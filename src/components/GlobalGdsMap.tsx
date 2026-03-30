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
        <section id="supply" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:text-center">
                    <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto md:text-lg">
                        {t.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* GDS Platforms */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Globe2 className="w-6 h-6 text-primary" /> {t.systems}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {gds.map((system) => (
                                <div key={system} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center h-24 text-lg font-bold text-slate-800 text-center">
                                    {system}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regions List */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">{t.regions}</h3>
                        <div className="flex flex-wrap gap-3">
                            {regions.map((region, i) => (
                                <span
                                    key={region}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${i < 4 ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' : 'bg-white text-slate-600 border-slate-200 hover:border-primary/30'}`}
                                >
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
