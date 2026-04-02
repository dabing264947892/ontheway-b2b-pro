"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, PlaneTakeoff, CheckCircle2 } from "lucide-react";

export default function LeadForm() {
    const { lang } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    const text = {
        EN: {
            title: "Discuss Your Business Needs",
            desc: "Connect with our B2B partnership team to explore tailored resource solutions and cooperation models.",
            form: {
                companyType: "Company Type",
                companyOptions: ["TMC", "OTA", "Wholesaler", "Corporate"],
                solutions: "Interested Solutions",
                solutionsOptions: ["Flight API", "NDC Direct", "Hotel Bedbank", "Group Tickets"],
                volume: "Estimated Monthly Volume",
                volumeOptions: ["< $100k", "$100k - $500k", "$500k - $1M", "$1M+"],
                email: "Business Email",
                submit: "Start a Cooperation Discussion",
                submitting: "Submitting...",
                success: "Request Submitted Successfully",
                successDesc: "Our partnership team will contact you within 24 hours to discuss the next steps."
            }
        },
        ZH: {
            title: "探讨您的业务需求",
            desc: "与我们的 B2B 合作团队取得联系，探索定制化的资源方案与合作模式。",
            form: {
                companyType: "公司类型 (Company Type)",
                companyOptions: ["TMC", "OTA", "批发商 (Wholesaler)", "企业客户 (Corporate)"],
                solutions: "意向模块 (Interested Solutions)",
                solutionsOptions: ["机票 API 直连", "NDC 专线", "酒店分销 (Bedbank)", "团队机票"],
                volume: "预估月交易量 (Estimated Monthly Volume)",
                volumeOptions: ["< 10万美金", "10万 - 50万美金", "50万 - 100万美金", "100万美金以上"],
                email: "工作邮箱 (Business Email)",
                submit: "发起合作洽谈",
                submitting: "提交中...",
                success: "咨询提交成功",
                successDesc: "我们的合作伙伴团队将在 24 小时内与您联系，探讨后续合作事宜。"
            }
        }
    };

    const t = text[lang];

    return (
        <section id="contact" className="py-24 bg-[#0b2853] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Typography */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-4 border border-white/5">
                            <PlaneTakeoff className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            {t.title}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                            {t.desc}
                        </p>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center text-center py-12 h-full min-h-[400px]">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.form.success}</h3>
                                    <p className="text-slate-600 font-medium">{t.form.successDesc}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-5">
                                        {/* Company Type */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">{t.form.companyType}</label>
                                            <select required defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-[#0b2853] focus:border-transparent block p-4 outline-none transition-all">
                                                <option value="" disabled>Select Company Type</option>
                                                {t.form.companyOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                                            </select>
                                        </div>
                                        
                                        {/* Solutions */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">{t.form.solutions}</label>
                                            <select required defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-[#0b2853] focus:border-transparent block p-4 outline-none transition-all">
                                                <option value="" disabled>Select Primary Interest</option>
                                                {t.form.solutionsOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                                            </select>
                                        </div>

                                        {/* Volume */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">{t.form.volume}</label>
                                            <select required defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-[#0b2853] focus:border-transparent block p-4 outline-none transition-all">
                                                <option value="" disabled>Select Estimated Volume</option>
                                                {t.form.volumeOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                                            </select>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">{t.form.email}</label>
                                            <input type="email" required placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-[#0b2853] focus:border-transparent block p-4 outline-none transition-all" />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-[#0b2853] text-white font-bold rounded-xl shadow-lg shadow-[#0b2853]/20 hover:bg-[#153a73] transition-all text-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? t.form.submitting : t.form.submit}
                                        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
