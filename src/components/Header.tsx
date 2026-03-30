"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { lang, toggleLang } = useLanguage();

    const text = {
        EN: { supply: "Global Supply", mobility: "Mobility API", hotels: "Accommodations", compliance: "Credentials", contact: "Contact Sales" },
        ZH: { supply: "全球供应链", mobility: "直连运力 API", hotels: "住宿与地面", compliance: "持牌认证资质", contact: "联系销售" }
    };
    const t = text[lang];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center py-2 relative z-10 transition-transform hover:scale-105">
                    <img src="/logo.png" alt="On The Way B2B" className="h-[40px] md:h-[60px] lg:h-[70px] w-auto object-contain mix-blend-multiply" />
                </Link>

                {/* Navigation - hidden on mobile */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="#supply" className="hover:text-primary transition-colors">{t.supply}</Link>
                    <Link href="#mobility" className="hover:text-primary transition-colors">{t.mobility}</Link>
                    <Link href="#hotels" className="hover:text-primary transition-colors">{t.hotels}</Link>
                    <Link href="#compliance" className="hover:text-primary transition-colors">{t.compliance}</Link>
                </nav>

                {/* Actions */}
                <div className="flex flex-1 lg:flex-none justify-end lg:justify-start items-center gap-4">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="font-bold text-primary">{lang === "EN" ? "EN" : "中文"}</span>
                        <span className="hidden sm:inline text-slate-400 text-xs text-nowrap">| Switch</span>
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 md:px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md text-nowrap">
                        {t.contact}
                    </button>
                </div>
            </div>
        </header>
    );
}
