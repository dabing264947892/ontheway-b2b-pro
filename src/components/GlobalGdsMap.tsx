"use client";

import { Globe2, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalGdsMap() {
    const { lang } = useLanguage();

    const network = {
        entities: lang === 'ZH' ? ["中国香港 (枢纽)", "美国 (枢纽)"] : ["Hong Kong, China (Hub)", "United States (Hub)"],
        pos: lang === 'ZH' 
            ? ["英国", "阿联酋", "新加坡", "澳大利亚", "日本", "韩国", "中国台湾", "马来西亚", "泰国", "越南", "印度尼西亚"]
            : ["United Kingdom", "UAE", "Singapore", "Australia", "Japan", "South Korea", "Taiwan, China", "Malaysia", "Thailand", "Vietnam", "Indonesia"],
        gds: ["Sabre", "Amadeus", "Travelport", "TravelSky HK"]
    };
    
    const text = {
        EN: {
            title: "Global Supply & Fulfillment Network",
            desc: "A coordinated multi-node infrastructure supporting global entities, localized POS ticketing, and cross-border settlement fulfillment.",
            categories: {
                entities: "Strategic Entities",
                pos: "Market Support & POS",
                fulfillment: "Fulfillment & Settlement",
                systems: "Integrated GDS Matrix"
            }
        },
        ZH: {
            title: "全球资源与履约网络",
            desc: "协同的多节点基础设施，支持全球业务主性、本地化 POS 出票及跨区域结算履约。",
            categories: {
                entities: "战略实体枢纽",
                pos: "市场支撑与 POS 指标",
                fulfillment: "履约与结算中心",
                systems: "集成 GDS 矩阵"
            }
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

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Entities & GDS */}
                    <div className="space-y-12">
                        <div className="glass-card p-10 border-slate-200/60 shadow-xl relative overflow-hidden group">
                            <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                {t.categories.entities}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {network.entities.map((ent) => (
                                    <div key={ent} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex items-center gap-4 group-hover:bg-white transition-colors duration-500">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-bold text-slate-800">{ent}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-10 border-slate-200/60 shadow-xl relative overflow-hidden group">
                            <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                                {t.categories.systems}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {network.gds.map((system) => (
                                    <div key={system} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center h-20 text-sm font-black text-slate-800 text-center hover:border-emerald-500/30 transition-all">
                                        {system}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Market Support & POS */}
                    <div className="glass-card p-10 border-slate-200/60 shadow-xl lg:h-full flex flex-col">
                        <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
                            {t.categories.pos}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-10">
                            {network.pos.map((region) => (
                                <span
                                    key={region}
                                    className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-600 border border-slate-100 shadow-sm hover:border-amber-500/30 hover:text-amber-600 transition-all"
                                >
                                    {region}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                                    <Globe2 className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-sm">{t.categories.fulfillment}</h4>
                                    <p className="text-slate-500 text-xs font-medium">{lang === 'ZH' ? '支持 24/7 本地化结算与跨区域交付' : '24/7 Localized Settlement & Cross-Market Delivery'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
