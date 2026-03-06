"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingCart, ShieldCheck, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoreSolutions() {
    const { t } = useLanguage();

    const solutions = [
        {
            title: t.solutions.ventureBuilding,
            description: t.solutions.ventureBuildingDesc,
            icon: Building2,
        },
        {
            title: t.solutions.commercePlatform,
            description: t.solutions.commercePlatformDesc,
            icon: ShoppingCart,
        },
        {
            title: t.solutions.edgeTechAI,
            description: t.solutions.edgeTechAIDesc,
            icon: Cpu,
        },
        {
            title: t.solutions.operationsRisk,
            description: t.solutions.operationsRiskDesc,
            icon: ShieldCheck,
        }
    ];

    return (
        <section id="solutions" className="py-24 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-title mb-4" style={{ fontWeight: 600, fontSize: '40px', lineHeight: '48px', letterSpacing: '0px' }}>{t.solutions.title}</h2>
                    <p className="text-section-subtitle text-subtitle">{t.solutions.subtitle}</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full"
                >
                    {solutions.map((solution, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <Card className="h-full bg-[#FFFFFF]/[0.02] border-none rounded-2xl shadow-none transition-all duration-300 hover:shadow-md">
                                <CardHeader className="pb-2">
                                    <solution.icon className="w-10 h-10 text-[#045AD8] stroke-[1.5] mb-4" />
                                    <CardTitle className="text-white text-lg font-bold">{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-[#6B7280] text-[15px] leading-relaxed">
                                        {solution.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
