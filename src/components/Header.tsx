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
            solutions: "Core Solutions", 
            capability: "Capabilities", 
            credentials: "Credentials", 
            contact: "Contact Us",
            login: "Agent Login"
        },
        ZH: { 
            serve: "我们服务谁", 
            solutions: "核心解决方案", 
            capability: "能力概览", 
            credentials: "资质实体", 
            contact: "联系合作",
            login: "代理系统登录" 
        }
    };
    const t = text[lang];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 lg:px-8 h-20 md:h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center relative z-10 transition-transform hover:scale-105 shrink-0 block">
                    <div style={{ minWidth: '190px' }}>
                        <Logo className="h-10 md:h-12 w-auto" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
                    <Link href="#who-we-serve" className="hover:text-[#0b2853] transition-colors">{t.serve}</Link>
                    <Link href="#core-solutions" className="hover:text-[#0b2853] transition-colors">{t.solutions}</Link>
                    <Link href="#global-capability" className="hover:text-[#0b2853] transition-colors">{t.capability}</Link>
                    <Link href="#credentials" className="hover:text-[#0b2853] transition-colors">{t.credentials}</Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-5">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0b2853] transition-colors bg-slate-100/80 px-4 py-2 rounded-full hover:bg-slate-200"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="font-semibold text-[#0b2853]">{lang === "EN" ? "English" : "中文"}</span>
                    </button>
                    <Link href="#login" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors border-r border-slate-300 pr-5">
                        {t.login}
                    </Link>
                    <Link href="#contact" className="bg-[#0b2853] hover:bg-[#153a73] text-white px-7 py-2.5 rounded-md text-sm font-medium transition-colors shadow-md text-nowrap tracking-wide">
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
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-white flex flex-col pt-8 px-6 overflow-y-auto font-medium z-50">
                    <nav className="flex flex-col gap-6 text-xl text-slate-800 mb-12">
                        <Link href="#who-we-serve" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-slate-100">{t.serve}</Link>
                        <Link href="#core-solutions" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-slate-100">{t.solutions}</Link>
                        <Link href="#global-capability" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-slate-100">{t.capability}</Link>
                        <Link href="#credentials" onClick={() => setIsMenuOpen(false)} className="pb-4 border-b border-slate-100">{t.credentials}</Link>
                    </nav>

                    <div className="flex flex-col gap-4 mt-auto pb-12">
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center gap-2 text-lg text-slate-600 bg-slate-50 py-4 rounded-xl border border-slate-200 active:bg-slate-100 transition-colors"
                        >
                            <Globe className="w-5 h-5" />
                            {lang === "EN" ? "Switch to 中文" : "切换为 English"}
                        </button>
                        <Link href="#login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center bg-emerald-50 text-emerald-700 py-4 rounded-xl text-lg font-bold border border-emerald-200 transition-colors">
                            {t.login}
                        </Link>
                        <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center bg-[#0b2853] active:bg-[#153a73] text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-[#0b2853]/20 transition-colors">
                            {t.contact}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
