"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Youtube, Linkedin, Phone, Mail } from "lucide-react";
import footerLogo from "@/assets/images/logo-footer.png";

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    {
        icon: () => (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.925H5.022z" />
            </svg>
        ),
        href: "#",
        label: "X",
    },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const navLinks = [
    { label: "About us", href: "#about" },
    { label: "Jobs", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & condition", href: "#" },
];

export function Footer() {
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    return (
        <footer className="w-full bg-background relative overflow-hidden pt-24 pb-10">
            {/* Background Image */}
            <Image
                src="/images/footer-background.png"
                alt="logo"
                fill
                className="object-cover pointer-events-none"
                priority={false}
            />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
                {/* Logo & Description */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <Link
                        href="/"
                        className="mb-6 flex items-center justify-center h-24 overflow-hidden relative min-w-[280px]"
                        onMouseEnter={() => setIsLogoHovered(true)}
                        onMouseLeave={() => setIsLogoHovered(false)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {!isLogoHovered ? (
                                <motion.div
                                    key="logo"
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Image src={footerLogo} alt="Success Factory" height={256} className="w-auto" />
                                </motion.div>
                            ) : (
                                <motion.span
                                    key="tryNow"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white whitespace-nowrap"
                                >
                                    Explore Now
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                    <p className="text-subtitle text-card-subtitle max-w-md">
                        UAE&apos;s leading commerce infrastructure for specialized markets and large-scale events.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-8">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="text-subtitle hover:text-white transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16 text-card-subtitle text-subtitle">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-[13px] text-subtitle">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+971 58 599 5038</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>help@successfactory.ae</span>
                        </div>
                    </div>
                    <p>©2026, Success Factory. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
