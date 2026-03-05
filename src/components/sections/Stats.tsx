"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assets/images/stats-background.png";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                // Easing function for smooth deceleration
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = from + (to - from) * easeOutQuart;
                setCount(Math.round(currentCount));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, isInView]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-bold text-white mb-3">
            {count}{suffix}
        </span>
    );
}

export function Stats() {
    return (
        <section className="py-24 px-4 w-full">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background Image & Glass effect */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bgImage}
                            alt="Stats Background"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </div>
                    <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-10" />

                    <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 w-full h-full flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/10">

                        {/* Stat 1 */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 md:py-0 px-4 group">
                            <Counter from={0} to={10} suffix="x" />
                            <span className="text-section-subtitle text-subtitle">Faster merchant onboarding</span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 md:py-0 px-4 group">
                            <Counter from={0} to={99} suffix="%" />
                            <span className="text-section-subtitle text-subtitle">Lower manual reconciliation</span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 md:py-0 px-4 group">
                            <Counter from={100} to={0} suffix="%" duration={1.5} />
                            <span className="text-section-subtitle text-subtitle">Revenue leakage from cash</span>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
