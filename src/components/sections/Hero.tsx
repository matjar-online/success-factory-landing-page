"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import heroBackgroundImage from "@/assets/images/hero-background.png";
import heroImage1 from "@/assets/images/hero-image-1.png";
import heroImage2 from "@/assets/images/hero-image-2.png";
import heroImage3 from "@/assets/images/hero-image-3.png";
import heroImage4 from "@/assets/images/hero-image-4.png";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-28 md:pt-[221px] lg:pt-[221px] overflow-hidden flex flex-col items-center text-center px-4">
            {/* Hero Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src={heroBackgroundImage}
                    alt="Hero Background"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-top"
                />
                {/* Background Blend Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto flex flex-col items-center"
            >
                <Badge variant="outline" className="mb-4 rounded-full border-white/10 bg-white/5 py-1.5 px-4 text-sm font-medium backdrop-blur-sm text-gray-300">
                    {t.hero.badge}
                </Badge>

                <h1 className="text-5xl leading-[56px] font-semibold tracking-tight text-title mb-6">
                    {t.hero.titleLine1} <br className="hidden md:block" />
                    {t.hero.titleLine2}
                </h1>

                <p className="text-lg font-normal text-white max-w-2xl">
                    {t.hero.subtitle}
                </p>
            </motion.div>

            {/* Image Collage */}
            <div className="relative w-full max-w-[1400px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] flex justify-center items-center">

                {/* Left Card 1 (Jewelry) */}
                <motion.div
                    initial={{ opacity: 0, y: "20%", x: "-145%", rotate: -20 }}
                    animate={{ opacity: 1, y: "0", x: "-145%", rotate: -12 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="absolute w-[22vw] sm:w-[24vw] md:w-[250px] lg:w-[270px] h-[28vw] sm:h-[30vw] md:h-[300px] lg:h-[310px] rounded-[12px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] border-white shadow-2xl z-10"
                >
                    <Image src={heroImage1} alt="Jewelry" fill className="object-cover" />
                </motion.div>

                {/* Mid-Left Card 2 (Laptops) */}
                <motion.div
                    initial={{ opacity: 0, y: "0%", x: "-45%", rotate: -10 }}
                    animate={{ opacity: 1, y: "-10%", x: "-50%", rotate: 3 }}
                    transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                    className="absolute w-[22vw] sm:w-[24vw] md:w-[250px] lg:w-[270px] h-[28vw] sm:h-[30vw] md:h-[300px] lg:h-[310px] rounded-[12px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] border-white shadow-2xl z-20"
                >
                    <Image src={heroImage2} alt="Laptops Dashboard" fill className="object-cover" />
                </motion.div>

                {/* Mid-Right Card 3 (Market) */}
                <motion.div
                    initial={{ opacity: 0, y: "10%", x: "45%", rotate: -15 }}
                    animate={{ opacity: 1, y: "0", x: "45%", rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                    className="absolute w-[22vw] sm:w-[24vw] md:w-[250px] lg:w-[270px] h-[28vw] sm:h-[30vw] md:h-[300px] lg:h-[300px] rounded-[12px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] border-white shadow-2xl z-30"
                >
                    <Image src={heroImage3} alt="Market" fill className="object-cover" />
                </motion.div>

                {/* Right Card 4 (Pottery) */}
                <motion.div
                    initial={{ opacity: 0, y: "30%", x: "145%", rotate: 20 }}
                    animate={{ opacity: 1, y: "-10%", x: "140%", rotate: -5 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                    className="absolute w-[22vw] sm:w-[24vw] md:w-[250px] lg:w-[270px] h-[28vw] sm:h-[30vw] md:h-[300px] lg:h-[300px] rounded-[12px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] border-white shadow-2xl z-20"
                >
                    <Image src={heroImage4} alt="Pottery" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
