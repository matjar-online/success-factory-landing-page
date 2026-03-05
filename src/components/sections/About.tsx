"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
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
                        About us
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
                        We build world-class commerce platforms for UAE markets and events.
                    </h3>

                    <div className="flex flex-col gap-6 text-section-subtitle text-subtitle">
                        <p>
                            <strong className="text-title font-semibold">We&apos;re a tight-knit Emirati</strong> venture builder that creates, funds
                            and operates payment-ready commerce ventures.
                        </p>
                        <p>
                            We combine product, payments and operations so markets,
                            festivals and high-value occasions can run on secure, reconciled
                            rails — from merchant onboarding to payout.
                        </p>
                        <p>
                            We bring practical, operator DNA to national scale: we design
                            marketplace logic, embed SuccessPay for PSP-agnostic routing
                            and split payments, and run the operational systems that keep
                            commerce flowing. Our deployments are purpose-built for
                            heritage events, artisan markets, jewelry rental and other
                            verticals where trust, compliance and high-value flows matter
                            most.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
