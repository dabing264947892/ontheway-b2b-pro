"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const brandGraphic = "/ontheway-b2b-pro/images/brand_intro_v2.png";

export default function BrandIntro() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Executive Summary",
            copy: "As the global strategic hub of Tengxuan Travel Group, On The Way is dedicated to building a highly competitive global travel resource allocation platform. We deeply verticalize the aggregation of air, hotel, ground mobility, and digital solutions, empowering every increment of value for our global B2B partners."
        },
        ZH: {
            title: "品牌简介",
            copy: "作为腾轩旅游集团布局全球的战略枢纽，在路上（On The Way ）致力于构建极具竞争力的全球旅行资源配置平台。深度垂直聚合机票、酒店、地面交通与数字化方案，为全球 B2B 合作伙伴赋能每一份增量价值。"
        }
    };
    const t = text[lang];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1 relative">
                        {/* Image wrapper with subtle styling */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0b2853]/10 border border-slate-100 bg-slate-50 group">
                            <Image 
                                src={brandGraphic} 
                                alt="Brand Overview Graphic" 
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2853]/5 to-transparent pointer-events-none" />
                        </div>
                        {/* Floating tech accents */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2 space-y-8 lg:pl-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-[#E8311F]"></div>
                                <span className="text-sm font-bold tracking-widest text-[#E8311F] uppercase">{lang === 'ZH' ? '品牌背景' : 'Brand Overview'}</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                                {t.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-[#E8311F] rounded-full"></div>
                        </div>
                        
                        <div className="space-y-6 pt-2">
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                {t.copy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
