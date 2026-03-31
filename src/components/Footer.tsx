"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Plane } from "lucide-react";

export default function Footer() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "On The Way Overseas",
            subtitle: "Global Travel Resource Allocation Platform",
            desc: "Connecting global air, hotel, group travel and ground mobility resources for TMCs, OTAs and enterprise partners.",
            contactTitle: "Business Inquiries",
            email: "sales@ontheway.net",
            entityTitle: "Entities",
            entities: [
                "On The Way (Hong Kong) Travel Limited",
                "On The Road Inc."
            ],
            copy: `© 2026 On The Way Overseas. All rights reserved.`
        },
        ZH: {
            title: "在路上海外",
            subtitle: "全球旅行资源配置平台",
            desc: "连接全球机票、酒店、团队出行与地面交通资源，服务 TMC、OTA 与企业差旅合作伙伴。",
            contactTitle: "商务合作",
            email: "sales@ontheway.net",
            entityTitle: "实体",
            entities: [
                "On The Way (Hong Kong) Travel Limited",
                "On The Road Inc."
            ],
            copy: `© 2026 On The Way Overseas. All rights reserved.`
        }
    };
    
    const t = text[lang];

    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-slate-400 border-t border-slate-800">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0b2853] rounded-xl flex items-center justify-center transform -rotate-6 shadow-lg shadow-[#0b2853]/20">
                                <Plane className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-1">{t.title}</h3>
                                <p className="text-sm font-medium text-blue-400">{t.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-slate-300 font-medium">
                            {t.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t.contactTitle}</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <a href={`mailto:${t.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                    {t.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t.entityTitle}</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {t.entities.map((entity, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                    <span className="leading-snug">{entity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium space-y-4 md:space-y-0">
                    <p>{t.copy}</p>
                    <div className="flex gap-6">
                        <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
