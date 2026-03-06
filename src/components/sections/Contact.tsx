"use client";

import { useState, useRef, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
    const { t, language } = useLanguage();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: "",
    });
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const allFieldsFilled = formData.fullName.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== "";

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!captchaToken) return;

        setStatus("sending");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, captchaToken }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || t.contact.errorGeneric);
            }

            setStatus("success");
            setFormData({ fullName: "", email: "", company: "", message: "" });
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : t.contact.errorGeneric);
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
        }
    }

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
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="text-[14px] text-white font-bold">{t.contact.fullName}</label>
                                    <Input
                                        id="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        placeholder={t.contact.fullNamePlaceholder}
                                        className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[14px] text-white font-bold">{t.contact.email}</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder={t.contact.emailPlaceholder}
                                        className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="text-[14px] text-white font-bold">{t.contact.company}</label>
                                <Input
                                    id="company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    placeholder={t.contact.companyPlaceholder}
                                    className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md h-11 px-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[14px] text-white font-bold">{t.contact.message}</label>
                                <Textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder={t.contact.messagePlaceholder}
                                    className="bg-[#141b2d] border-[#2a3450] text-white placeholder:text-[#4b5563] rounded-md min-h-[130px] resize-none p-4 text-[14px] focus:border-blue-500/50 transition-colors"
                                />
                            </div>

                            {allFieldsFilled && (
                                <div className="flex justify-center">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                        theme="dark"
                                        hl={language}
                                        onChange={(token) => setCaptchaToken(token)}
                                        onExpired={() => setCaptchaToken(null)}
                                    />
                                </div>
                            )}

                            {status === "success" && (
                                <p className="text-green-400 text-[14px]">{t.contact.successMessage}</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-[14px]">{errorMessage}</p>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "sending" || !captchaToken}
                                className="w-full rounded-md h-12 text-[15px] font-semibold cursor-pointer"
                            >
                                {status === "sending" ? t.contact.sending : t.contact.send}
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
