"use client";

import { Shield, CheckCircle2, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EntityCredentials() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            badge: "Global Compliance & Trust",
            title: "Licensed Global Entities",
            desc: "Fully accredited travel agencies ensuring secure and compliant global B2B transactions.",
            hkTitle: "ON THE WAY (HK) TRAVEL LIMITED",
            hkSub: "在路上(香港)旅遊有限公司",
            hkBadge1: "IATA Accredited Agent",
            hkBadge1Sub: "IATA Numeric Code:",
            hkBadge2: "TIA Licensed Travel Agent",
            hkBadge2Sub: "Travel Industry Authority (License No.",
            hkBadge3: "HATA Member",
            hkBadge3Sub: "Hong Kong Association of Travel Agents",
            hkRoles: "Official TravelSky HK contracted ticketing entity. Core support for APAC and localized GDS configurations.",
            usTitle: "ON THE ROAD INC.",
            usSub: "在路上美国（洛杉矶）",
            usBadge1: "ARC Accredited Agency",
            usBadge1Sub: "Airlines Reporting Corporation Member",
            usBadge2: "Florida Seller of Travel",
            usBadge2Sub: "Licensed Seller (Registration No.",
            usRoles: "Direct source for North American airlines & group tickets. Core integration hub for the Americas LCC APIs and supply matrix.",
            roleTitle: "Core Business Role"
        },
        ZH: {
            badge: "全球合规与信任根基",
            title: "持牌全球双核业务实体",
            desc: "作为持牌的大型跨国旅行服务商，我们保障 B2B 交易环节的每笔业务与资金安全。",
            hkTitle: "在路上(香港)旅遊有限公司",
            hkSub: "ON THE WAY (HK) TRAVEL LIMITED",
            hkBadge1: "IATA 国际航协认证代理人",
            hkBadge1Sub: "航协数字代码:",
            hkBadge2: "TIA 香港旅监局持牌旅行社",
            hkBadge2Sub: "获发旅行社牌照配置 (牌照号:",
            hkBadge3: "HATA 会员单位",
            hkBadge3Sub: "香港旅遊業議會正规注册会员",
            hkRoles: "官方驻港版航信签约出票主体。为整个亚太地区和境外本地化 GDS 配置提供强有力的底层结算支撑。",
            usTitle: "ON THE ROAD INC.",
            usSub: "在路上美国（洛杉矶）",
            usBadge1: "ARC 北美航空清算体系认证",
            usBadge1Sub: "美国 ARC 结算机构顶级直连代理",
            usBadge2: "佛州旅行经销正规牌照",
            usBadge2Sub: "受该州直接监管保护的旅行销售特许资质 (注册号:",
            usRoles: "北美地区各大航空公司资源的直连枢纽以及前沿一手全球团队票的核心优势源头。",
            roleTitle: "底层业务定位"
        }
    };
    const t = text[lang];

    return (
        <section id="compliance" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="mb-16 md:text-center">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-4">
                        <Shield className="w-4 h-4" />
                        {t.badge}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto md:text-lg">
                        {t.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Entity 1: HK */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{t.hkTitle}</h3>
                        <p className="text-slate-500 text-sm mb-8 font-medium">{t.hkSub}</p>

                        <div className="space-y-5 mb-8">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t.hkBadge1}</div>
                                    <div className="text-sm text-slate-600 mt-1">{t.hkBadge1Sub} <span className="font-medium text-slate-800">13335431</span></div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t.hkBadge2}</div>
                                    <div className="text-sm text-slate-600 mt-1">{t.hkBadge2Sub} <span className="font-medium text-slate-800">304359</span>)</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t.hkBadge3}</div>
                                    <div className="text-sm text-slate-600 mt-1">{t.hkBadge3Sub}</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-primary font-bold mb-3">
                                <Award className="w-5 h-5" />
                                {t.roleTitle}
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {t.hkRoles}
                            </p>
                        </div>
                    </div>

                    {/* Entity 2: US */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{t.usTitle}</h3>
                        <p className="text-slate-500 text-sm mb-8 font-medium">{t.usSub}</p>

                        <div className="space-y-5 mb-8">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t.usBadge1}</div>
                                    <div className="text-sm text-slate-600 mt-1">{t.usBadge1Sub}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t.usBadge2}</div>
                                    <div className="text-sm text-slate-600 mt-1">{t.usBadge2Sub} <span className="font-medium text-slate-800">ST44415</span>)</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 mt-auto">
                            <div className="flex items-center gap-2 text-secondary font-bold mb-3">
                                <Award className="w-5 h-5" />
                                {t.roleTitle}
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {t.usRoles}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
