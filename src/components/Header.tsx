"use client";

import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import logoPic from "../../public/logo.png";

export default function Header() {
    const { lang, toggleLang } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const text = {
        EN: { supply: "Global Supply", mobility: "Mobility API", hotels: "Accommodations", compliance: "Credentials", contact: "Contact Sales" },
        ZH: { supply: "全球供应链", mobility: "直连运力 API", hotels: "住宿与地面", compliance: "持牌认证资质", contact: "联系销售" }
    };
    const t = text[lang];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center py-2 relative z-10 transition-transform hover:scale-105">
                    <Image
                        src={logoPic}
                        alt="On The Way B2B"
                        className="h-[36px] md:h-[60px] lg:h-[70px] w-auto object-contain mix-blend-multiply"
                        unoptimized
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="#supply" className="hover:text-primary transition-colors">{t.supply}</Link>
                    <Link href="#mobility" className="hover:text-primary transition-colors">{t.mobility}</Link>
                    <Link href="#hotels" className="hover:text-primary transition-colors">{t.hotels}</Link>
                    <Link href="#compliance" className="hover:text-primary transition-colors">{t.compliance}</Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="font-bold text-primary">{lang === "EN" ? "EN" : "中文"}</span>
                        <span className="text-slate-400 text-xs text-nowrap">| Switch</span>
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md text-nowrap">
                        {t.contact}
                    </button>
                </div>

                {/* Mobile Menu Toggle (H5) */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        onClick={toggleLang}
                        className="flex items-center justify-center w-8 h-8 text-xs font-bold text-primary bg-primary/10 rounded-full"
                    >
                        {lang === "EN" ? "EN" : "中"}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 -mr-2 text-slate-800 hover:text-primary transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* H5 Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-slate-900/98 backdrop-blur-3xl border-t border-slate-800 flex flex-col pt-8 px-6 overflow-y-auto font-medium z-50">
                    <nav className="flex flex-col gap-6 text-xl text-white mb-12">
                        <Link href="#supply" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-white/10">{t.supply}</Link>
                        <Link href="#mobility" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-white/10">{t.mobility}</Link>
                        <Link href="#hotels" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-white/10">{t.hotels}</Link>
                        <Link href="#compliance" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-white/10">{t.compliance}</Link>
                    </nav>

                    <div className="flex flex-col gap-4 mt-auto pb-12">
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center gap-2 text-lg text-slate-300 bg-white/5 py-4 rounded-xl border border-white/10 active:bg-white/10 transition-colors"
                        >
                            <Globe className="w-5 h-5" />
                            {lang === "EN" ? "Switch to 中文" : "切换为 English"}
                        </button>
                        <button className="bg-primary active:bg-primary-dark text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-colors">
                            {t.contact}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
