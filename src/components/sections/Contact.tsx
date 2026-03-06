"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-4" style={{ backgroundColor: "#0e1122" }}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                {/* Left: CTA Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-title mb-4" style={{ fontSize: "40px", fontWeight: 600, lineHeight: "48px", letterSpacing: 0 }}>
                        {t.contact.titleLine1} <br /> {t.contact.titleLine2}
                    </h2>
                    <p className="text-[15px] text-subtitle max-w-md leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2 w-full"
                >
                    <div className="rounded-2xl p-8 md:p-8 border border-[#1e293b]" style={{ backgroundColor: "#141b2d" }}>
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="text-[14px] text-white font-bold">{t.contact.fullName}</label>
                                    <Input
                                        id="fullName"
                                        placeholder={t.contact.fullNamePlaceholder}
                                        className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[14px] text-white font-bold">{t.contact.email}</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t.contact.emailPlaceholder}
                                        className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="text-[14px] text-white font-bold">{t.contact.company}</label>
                                <Input
                                    id="company"
                                    placeholder={t.contact.companyPlaceholder}
                                    className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[14px] text-white font-bold">{t.contact.message}</label>
                                <Textarea
                                    id="message"
                                    placeholder={t.contact.messagePlaceholder}
                                    className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md min-h-[130px] resize-none p-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                />
                            </div>

                            <Button type="submit" className="w-full rounded-md h-12 text-[15px] font-semibold">
                                {t.contact.send}
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
