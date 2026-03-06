"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import logo from "@/assets/images/logo.png";

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = e.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    return (
        <header className="absolute top-0 w-full z-50 py-4">
            <div className="max-w-[1100px] mx-auto flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Success Factory" height={35} />
                </Link>
                <nav className="hidden md:flex gap-6 items-center flex-1 justify-center">
                    <Link href="#about" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        {t.nav.about}
                    </Link>
                    <Link href="#solutions" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        {t.nav.solutions}
                    </Link>
                    <Link href="#markets" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        {t.nav.markets}
                    </Link>
                    <Link href="#contact" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        {t.nav.contact}
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-white transition-colors cursor-pointer"
                    >
                        <span className="text-lg leading-none">{language === "en" ? "\u{1F1E6}\u{1F1EA}" : "\u{1F1FA}\u{1F1F8}"}</span>
                        {language === "en" ? "Arabic" : "الإنجليزية"}
                    </button>
                    <Button asChild className="rounded-full px-5 bg-[#045AD8] hover:bg-[#045AD8]/90 text-white font-medium text-sm">
                        <Link href="#contact" onClick={handleScroll}>{t.nav.contactUs}</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
