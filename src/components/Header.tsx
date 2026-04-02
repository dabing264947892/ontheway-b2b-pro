"use client";

import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

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
        EN: { 
            serve: "Who We Serve", 
            solutions: "Solutions", 
            aviation: "Air Capability", 
            supply: "Global Network",
            credentials: "Credentials", 
            contact: "Contact Us",
            login: "Agent Login"
        },
        ZH: { 
            serve: "我们服务谁", 
            solutions: "核心方案", 
            aviation: "航空能力", 
            supply: "全球网络",
            credentials: "资质与实体", 
            contact: "联系合作",
            login: "代理系统登录" 
        }
    };
    const t = text[lang];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_2px_20px_-10px_rgba(11,40,83,0.1)] transition-all duration-300">
            <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center relative z-10 transition-transform hover:scale-105 shrink-0">
                    <Logo className="h-[4.5rem] md:h-24" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-8 text-[15px] font-medium text-slate-600">
                    <Link href="#who-we-serve" className="hover:text-[#0b2853] transition-all hover:-translate-y-0.5">{t.serve}</Link>
                    <Link href="#core-solutions" className="hover:text-[#0b2853] transition-all hover:-translate-y-0.5">{t.solutions}</Link>
                    <Link href="#mobility" className="hover:text-[#0b2853] transition-all hover:-translate-y-0.5">{t.aviation}</Link>
                    <Link href="#supply" className="hover:text-[#0b2853] transition-all hover:-translate-y-0.5">{t.supply}</Link>
                    <Link href="#credentials" className="hover:text-[#0b2853] transition-all hover:-translate-y-0.5">{t.credentials}</Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-5">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0b2853] transition-colors bg-slate-100/50 px-4 py-2 rounded-full hover:bg-slate-200/50 border border-slate-200/50"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{lang === "EN" ? "EN" : "中文"}</span>
                    </button>
                    <Link href="#login" className="text-emerald-600 hover:text-emerald-700 font-bold text-[14px] transition-colors border-r border-slate-200 pr-6">
                        {t.login}
                    </Link>
                    <Link href="#contact" className="bg-[#0b2853] hover:bg-[#153a73] text-white px-8 py-3.5 rounded-xl text-xs font-bold transition-all shadow-xl shadow-[#0b2853]/20 hover:-translate-y-1 tracking-wider uppercase">
                        {t.contact}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        onClick={toggleLang}
                        className="flex items-center justify-center w-8 h-8 text-xs font-bold text-[#0b2853] bg-[#0b2853]/10 rounded-full"
                    >
                        {lang === "EN" ? "EN" : "中"}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 -mr-2 text-slate-800 hover:text-[#0b2853] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-96px)] bg-white flex flex-col pt-6 px-6 overflow-y-auto font-medium z-50">
                    <nav className="flex flex-col gap-4 text-lg text-slate-800 mb-10">
                        <Link href="#who-we-serve" onClick={() => setIsMenuOpen(false)} className="pb-3 border-b border-slate-100">{t.serve}</Link>
                        <Link href="#core-solutions" onClick={() => setIsMenuOpen(false)} className="pb-3 border-b border-slate-100">{t.solutions}</Link>
                        <Link href="#mobility" onClick={() => setIsMenuOpen(false)} className="pb-3 border-b border-slate-100">{t.aviation}</Link>
                        <Link href="#supply" onClick={() => setIsMenuOpen(false)} className="pb-3 border-b border-slate-100">{t.supply}</Link>
                        <Link href="#credentials" onClick={() => setIsMenuOpen(false)} className="pb-3 border-b border-slate-100">{t.credentials}</Link>
                    </nav>

                    <div className="flex flex-col gap-3 mt-auto pb-10">
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center gap-2 text-base text-slate-600 bg-slate-50 py-3.5 rounded-xl border border-slate-200 active:bg-slate-100 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            {lang === "EN" ? "Switch to 中文" : "切换为 English"}
                        </button>
                        <Link href="#login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center bg-emerald-50 text-emerald-700 py-3.5 rounded-xl text-base font-bold border border-emerald-200 transition-colors">
                            {t.login}
                        </Link>
                        <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center bg-[#0b2853] active:bg-[#153a73] text-white py-3.5 rounded-xl text-base font-bold shadow-lg shadow-[#0b2853]/20 transition-colors">
                            {t.contact}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
