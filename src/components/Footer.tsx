"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Plane } from "lucide-react";

export default function Footer() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            desc: "The premium B2B Global Travel Resources Platform for TMCs, OTAs, Wholesalers, and Global Enterprises. Built on robust supply chain aggregations and global licensing.",
            solTitle: "Core Solutions",
            sols: ["Global Supply Chain", "NDC & LCC Content", "Group Tickets Inventory", "Global Accommodations", "Ground Mobility Ecosystem"],
            contactTitle: "Contact & Offices",
            inq: "Business Inquiries",
            hk: "Hong Kong (Hub)",
            hkSub: "+852 Operations Center",
            us: "United States",
            usSub: "Florida Registration operations",
            copy: `© ${new Date().getFullYear()} On The Way Overseas. All rights reserved.`,
            legal: ["Privacy Policy", "Terms of Service", "Cookie Settings"]
        },
        ZH: {
            desc: "定位于全球化企业商旅的高端 B2B 核心资源平台。专为跨国 TMC、大型 OTA、批发商及跨国集团设计，依托于极为稳健的供应链聚合能力与多国双牌背书。",
            solTitle: "资源组合",
            sols: ["全球 GDS 供应链", "NDC 直连与低成本运力", "一手团队机位资源池", "全球 300 万+ 大住宿库存", "全球地面交通运力网"],
            contactTitle: "官方联系",
            inq: "商务出票与合作咨询",
            hk: "香港直指枢纽",
            hkSub: "+852 业务调度核心",
            us: "北美中心实体",
            usSub: "持有佛罗里达州旅行经销正规牌照",
            copy: `© ${new Date().getFullYear()} 极简主义 B2B 航旅在路上. All rights reserved.`,
            legal: ["隐私条款", "服务指引", "Cookie 合规设定"]
        }
    };
    const t = text[lang];

    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
                    <div className="md:col-span-2 pr-0 md:pr-12">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center transform -rotate-12 shadow-lg shadow-primary/20">
                                <Plane className="w-6 h-6 md:w-7 md:h-7 text-white fill-white/20" />
                            </div>
                            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">ON THE <span className="text-secondary font-medium">WAY</span></span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            {t.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">{t.solTitle}</h4>
                        <ul className="space-y-3 text-sm">
                            {t.sols.map((sol) => (
                                <li key={sol} className="hover:text-white transition-colors cursor-pointer">{sol}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">{t.contactTitle}</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <div className="text-white mb-1">{t.inq}</div>
                                <div>sales@ontheway.net</div>
                            </li>
                            <li className="pt-2">
                                <div className="text-white mb-1">{t.hk}</div>
                                <div>{t.hkSub}</div>
                            </li>
                            <li className="pt-2">
                                <div className="text-white mb-1">{t.us}</div>
                                <div>{t.usSub}</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>{t.copy}</p>
                    <div className="flex gap-6 mt-6 md:mt-0">
                        {t.legal.map((item) => (
                            <span key={item} className="hover:text-white transition-colors cursor-pointer">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
