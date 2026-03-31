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
            roleTitle: "Core Business Role",
            introTitle: "Dual-Hub Global Compliance & Transaction Security",
            introDesc: "Anchored in Los Angeles and Hong Kong. Backed by highly regulated ARC (US) and IATA/TIA (HK) accreditations, establishing an unshakeable foundation for global fund routing, local market expertise, and B2B operational integrity.",
            sysTitle: "System & Operational Credentials",
            sysDesc: "Including ISO9001, ISO27001, information security certification and proprietary digital system support."
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
            roleTitle: "底层业务定位",
            introTitle: "美港双引擎：全球合规与资金流转安全底座",
            introDesc: "扎根洛杉矶与香港。依托高标准的美国 ARC 与香港 IATA/TIA 核心旅游资质，构筑坚不可摧的全球资金流转通道、深度本地化运营团队及 B2B 交易信用基石。",
            sysTitle: "系统与管理能力背书",
            sysDesc: "包括 ISO9001、ISO27001、信息系统安全等级保护认证，以及自研系统与数字化管理能力。"
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

                    {/* Dual-Hub Intro Block */}
                    <div className="mt-12 p-8 md:p-12 bg-[#0b2853] rounded-[2rem] text-white shadow-2xl max-w-5xl mx-auto relative overflow-hidden text-left md:text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10 leading-tight">
                            {t.introTitle}
                        </h3>
                        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-4xl mx-auto font-medium relative z-10">
                            {t.introDesc}
                        </p>
                    </div>
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

                    {/* Entity 3: System (Centrally positioned below if needed, or in grid) */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
                        <div className="absolute top-0 left-0 w-2 h-full bg-slate-400" />
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{t.sysTitle}</h3>
                        <p className="text-slate-500 text-sm mb-8 font-medium">ISO & Digital Excellence</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-semibold text-slate-700">ISO 9001 / ISO 27001</span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 mt-auto">
                            <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                                {t.sysDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
