"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import verticalImage1 from "@/assets/images/vertical-1.png";
import verticalImage2 from "@/assets/images/vertical-2.png";
import verticalImage3 from "@/assets/images/vertical-3.png";
import verticalImage4 from "@/assets/images/vertical-4.png";

export function Verticals() {
    const { t } = useLanguage();

    const verticals = [
        {
            title: t.verticals.successPay,
            subtitle: t.verticals.successPayDesc,
            image: verticalImage1,
        },
        {
            title: t.verticals.successOps,
            subtitle: t.verticals.successOpsDesc,
            image: verticalImage2,
        },
        {
            title: t.verticals.successShip,
            subtitle: t.verticals.successShipDesc,
            image: verticalImage3,
        },
        {
            title: t.verticals.successDev,
            subtitle: t.verticals.successDevDesc,
            image: verticalImage4,
        },
    ];

    return (
        <section id="markets" className="py-24 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[40px] leading-[48px] tracking-normal font-semibold text-title mb-2">{t.verticals.title}</h2>
                    <p className="text-section-subtitle text-subtitle">{t.verticals.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {verticals.map((vertical, i) => (
                        <motion.div
                            key={vertical.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={vertical.image}
                                alt={vertical.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#090c1d] via-[#090c1d]/60 to-transparent z-10" />

                            <div className="absolute bottom-0 inset-x-0 px-6 pt-6 pb-3 md:p-8 md:pt-8 md:pb-6 z-20">
                                <h3 className="text-xl md:text-[20px] font-bold text-white mb-2">{vertical.title}</h3>
                                <p className="text-sm text-gray-400 letter-spacing-[0.02em] leading-relaxed">
                                    {vertical.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
