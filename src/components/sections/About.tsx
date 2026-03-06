"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";

export function About() {
    const { t } = useLanguage();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(titleRef, { once: false, margin: "-100px" });

    return (
        <section id="about" className="mt-[50px] pb-10 md:pb-20 px-4">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Left: Section Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/4"
                >
                    <h2 className="text-section-subtitle text-subtitle sticky top-32">
                        {t.about.sectionTitle}
                    </h2>
                </motion.div>

                {/* Right: Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-3/4 flex flex-col gap-8"
                >
                    <h3
                        ref={titleRef}
                        className={`text-2xl md:text-about-title text-title transition-all duration-500 ${isInView ? "font-semibold" : "font-normal"
                            }`}
                    >
                        {t.about.heading}
                    </h3>

                    <div className="flex flex-col gap-6 text-section-subtitle text-subtitle">
                        <p>
                            <strong className="text-title font-semibold">{t.about.p1Bold}</strong>
                            {t.about.p1Text}
                        </p>
                        <p>{t.about.p2}</p>
                        <p>{t.about.p3}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
