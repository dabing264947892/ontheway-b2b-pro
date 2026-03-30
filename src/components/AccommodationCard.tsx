"use client";

import { Building2, Car, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AccommodationCard() {
    const { lang } = useLanguage();

    const text = {
        EN: {
            title: "Accommodation & Ground",
            desc: "Comprehensive global coverage for end-to-end trip management.",
            bannerTitle: "Premium Stay & Transfer Ecosystem",
            bannerDesc: "Redefining corporate and leisure standards with millions of curated locations worldwide.",
            box1Title: "Global Hotels",
            box1Value: "3,000,000+",
            box1Desc: "Aggregated inventory from leading bedbanks, OTAs, and direct corporate properties.",
            box2Title: "Car Rental",
            box2Value: "8M+ Vehicles",
            box2Desc: "Access to 200,000+ rental locations across 200+ countries and territories.",
            box3Title: "Transfers Ecosystem",
            box3Value: "20,000+ Cities",
            box3Desc: "Comprehensive ground transportation network spanning 182 countries worldwide."
        },
        ZH: {
            title: "大住宿与地面交通核心",
            desc: "从商务差旅到全球化自由行的端到端一站式全域资源管理。",
            bannerTitle: "高端住宿与地面生态系统",
            bannerDesc: "重新定义商务差旅与定制化旅行的行业标杆，全球精选上百万个目的地场景资源。",
            box1Title: "全球海量酒店库存",
            box1Value: "3,000,000+",
            box1Desc: "完整聚合了主流床位库、OTA 渠道及海外独家协议直采的企业豪华酒店池。",
            box2Title: "海外直采租车体系",
            box2Value: "800万+ 车辆",
            box2Desc: "直接接入 200 多个全球国家的 20 余万个标准化提车网点。",
            box3Title: "尊享专车接送生态",
            box3Value: "20,000+ 城市",
            box3Desc: "全面的地面交通覆盖核心网络，横跨全球 182 个主要出行国家和地区。"
        }
    };
    const t = text[lang];

    return (
        <section id="hotels" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.title}</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto md:text-lg">
                        {t.desc}
                    </p>
                </div>

                {/* Generated Accommodation Image Banner */}
                <div className="w-full h-64 md:h-96 rounded-[2rem] overflow-hidden mb-16 relative shadow-2xl shadow-secondary/10 group cursor-pointer bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=100&w=2500&auto=format&fit=crop" alt="Luxury Hotel and Transport" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <h3 className="text-white text-3xl md:text-5xl font-bold drop-shadow-xl mb-4">{t.bannerTitle}</h3>
                        <p className="text-slate-200 text-lg md:text-xl max-w-xl">{t.bannerDesc}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300">
                        <Building2 className="w-10 h-10 text-secondary mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t.box1Title}</h3>
                        <div className="text-3xl font-extrabold text-slate-800 mb-4">{t.box1Value}</div>
                        <p className="text-slate-600 leading-relaxed">{t.box1Desc}</p>
                    </div>

                    <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300">
                        <Car className="w-10 h-10 text-secondary mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t.box2Title}</h3>
                        <div className="text-3xl font-extrabold text-slate-800 mb-4">{t.box2Value}</div>
                        <p className="text-slate-600 leading-relaxed">{t.box2Desc}</p>
                    </div>

                    <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300">
                        <MapPin className="w-10 h-10 text-secondary mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t.box3Title}</h3>
                        <div className="text-3xl font-extrabold text-slate-800 mb-4">{t.box3Value}</div>
                        <p className="text-slate-600 leading-relaxed">{t.box3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
