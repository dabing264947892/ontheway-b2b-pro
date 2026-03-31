"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import brandGraphic from "../../public/images/brand_intro_graphic.png";

export default function BrandIntro() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Brand Intro",
            copy: "On The Way Overseas serves as the group's global-facing business and partnership platform. Built on the \"Global Travel Resource Allocation Platform\" positioning, it brings together air, hotel, group travel, ground mobility and digital connectivity capabilities for international B2B cooperation. The group is technology- and operations-driven, with business support across markets including the U.S. and Hong Kong."
        },
        ZH: {
            title: "品牌简介",
            copy: "在路上海外是集团全球化业务展示与合作窗口，依托“全球旅行资源配置平台”能力，聚合机票、酒店、团队票、地面交通及系统连接能力，面向国际 B2B 合作场景提供资源、系统与履约协同支持。集团具备技术和运营驱动背景，并在美国、香港等地设有业务支撑。"
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
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2853]/5 to-transparent pointer-events-none" />
                        </div>
                        {/* Floating tech accents */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2 space-y-8 lg:pl-8">
                        <div className="inline-flex">
                            <span className="text-sm font-bold tracking-widest text-[#0b2853] bg-[#0b2853]/5 px-4 py-1.5 rounded-full uppercase">
                                {t.title}
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-slate-800 drop-shadow-sm">
                            {t.copy}
                        </h2>
                        <div className="w-16 h-1.5 bg-gradient-to-r from-[#0b2853] to-emerald-400 rounded-full mt-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
