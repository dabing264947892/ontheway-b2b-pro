"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

export default function FinalCta() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Let's Build Better Travel Cooperation Together",
            desc: "If you are looking for more reliable global travel resources, more flexible cooperation models and stronger digital connectivity, we'd be glad to connect.",
            btn1: "Contact Us",
            btn2: "Request a Solution"
        },
        ZH: {
            title: "欢迎与在路上海外建立合作",
            desc: "如果你正在寻找更稳定的全球旅行资源、更灵活的合作模式与更高效的系统连接能力，我们期待与你进一步沟通。",
            btn1: "联系合作",
            btn2: "获取方案"
        }
    };

    const t = text[lang];

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-[#0b2853] to-[#041126] border-y border-white/10 relative overflow-hidden">
            {/* Decals */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] transform -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] transform -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 mb-8 backdrop-blur-md">
                        <PlaneTakeoff className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                        {t.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0b2853] font-bold rounded-lg shadow-xl shadow-white/10 hover:bg-slate-100 hover:-translate-y-0.5 transition-all text-lg flex items-center justify-center gap-2">
                            {t.btn1}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all text-lg flex items-center justify-center gap-2">
                            {t.btn2}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
