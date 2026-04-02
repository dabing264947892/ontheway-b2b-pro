"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, ArrowRightLeft, CreditCard, ShieldCheck } from "lucide-react";

export default function GlobalFares() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Global POS Advantage",
            h2: "Unlocking Global Fares with 13+ Local POS Capabilities",
            desc: "Overcome geographic pricing barriers. Leverage our extensive local ticketing configurations across APAC, Americas, and EMEA to capture localized underlying fares and optimize cross-border BSP/ARC settlement efficiency.",
            features: [
                {
                    icon: Globe,
                    title: "APAC, Americas & EMEA",
                    desc: "Strategic ticketing hubs across three major continents."
                },
                {
                    icon: ArrowRightLeft,
                    title: "Cross-Border Settlement",
                    desc: "High-efficiency ARC and BSP fund routing."
                },
                {
                    icon: CreditCard,
                    title: "Localized Fares",
                    desc: "Direct access to market-specific underlying inventory."
                },
                {
                    icon: ShieldCheck,
                    title: "Risk Mitigation",
                    desc: "Secure compliance framework for international transactions."
                }
            ],
            statLabel: "Local POS Configurations",
            stat: "13+",
            statDesc: "Spanning APAC, Americas & EMEA"
        },
        ZH: {
            title: "全球结算优势",
            h2: "依托 13+ 本地出票配置，突破全球运价壁垒",
            desc: "跨越地域定价限制。调用横跨亚太、美洲与欧洲的本地化配置矩阵，精准获取属地化底价，并极致优化跨国票务的资金流转与结算效率。",
            features: [
                {
                    icon: Globe,
                    title: "横跨亚太、美洲与欧洲",
                    desc: "战略部署三大洲核心票务清算枢纽。"
                },
                {
                    icon: ArrowRightLeft,
                    title: "跨国资金流转",
                    desc: "依托高效 ARC 与 BSP 体系优化跨境结算。"
                },
                {
                    icon: CreditCard,
                    title: "属地化底层运价",
                    desc: "系统直连，获取特定市场专属深库存与底价。"
                },
                {
                    icon: ShieldCheck,
                    title: "风控与合规保障",
                    desc: "为海量跨区交易提供坚实的全球风控与合规框架。"
                }
            ],
            statLabel: "本地出票点配置",
            stat: "13+",
            statDesc: "覆盖亚太、美洲与欧洲"
        }
    };

    const t = text[lang];

    return (
        <section id="global-fares" className="section-padding bg-[#051630] border-t border-white/10 relative overflow-hidden">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Typography */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-8 h-0.5 bg-emerald-400"></div>
                            <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">{t.title}</span>
                        </div>
                        <h2 className="text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            {t.h2}
                        </h2>
                        <div className="w-16 h-1 bg-emerald-500 rounded" />
                        <p className="text-base md:text-xl text-slate-300 leading-relaxed font-medium">
                            {t.desc}
                        </p>
                        {/* Stat highlight */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                            <div className="text-center sm:text-left">
                                <div className="text-5xl sm:text-6xl font-black text-emerald-400 leading-none">{t.stat}</div>
                                <div className="text-[10px] sm:text-xs text-slate-400 font-bold tracking-widest uppercase mt-2">{t.statLabel}</div>
                                <div className="text-slate-500 text-xs sm:text-sm mt-1">{t.statDesc}</div>
                            </div>
                            <div className="hidden sm:block w-px h-20 bg-white/10" />
                            <div className="text-slate-400 text-sm leading-relaxed italic max-w-xs font-medium text-center sm:text-left">
                                {lang === 'ZH' ? '具备多点出票与境外结算能力的全球化平台可为合作伙伴显著提升清算效率。' : 'Leveraging extensive local ticketing configurations provides scale in multi-market fulfillment and settlement.'}
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                        {t.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-emerald-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/30 transition-colors">
                                        <Icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
