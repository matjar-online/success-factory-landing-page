"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingCart, CreditCard, ShieldCheck, Truck, Cpu } from "lucide-react";

const solutions = [
    {
        title: "Venture building",
        description: "Creating, funding and operating structured commerce ventures — not just selling software, but launching businesses that run and scale.",
        icon: Building2,
    },
    {
        title: "Commerce platform",
        description: "A configurable, API-first marketplace engine for listings, booking, vertical workflows and customer-facing web/mobile experiences.",
        icon: ShoppingCart,
    },
    {
        title: "SuccessPay",
        description: "An embedded, PSP-agnostic payment layer providing routing, 3DS2, split/commission logic and reconciliation.",
        icon: CreditCard,
    },
    {
        title: "Operations & Risk",
        description: "Merchant onboarding and KYC, operational monitoring, transaction-level evidence, chargeback defense, segmentation and dashboards.",
        icon: ShieldCheck,
    }
];

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
                    <h2 className="text-title mb-4" style={{ fontWeight: 600, fontSize: '40px', lineHeight: '48px', letterSpacing: '0px' }}>Core Solutions</h2>
                    <p className="text-section-subtitle text-subtitle">Venture building, commerce platform, SuccessPay and operations & risk.</p>
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
                                    <solution.icon className="w-8 h-8 text-[#045AD8] fill-white stroke-[1.5] mb-4" />
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
