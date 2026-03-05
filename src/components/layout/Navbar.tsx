"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

export function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Only handle internal hash links
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

    return (
        <header className="absolute top-0 w-full z-50 py-4">
            <div className="max-w-[1100px] mx-auto flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Success Factory" height={35} />
                </Link>
                <nav className="hidden md:flex gap-6 items-center flex-1 justify-center">
                    <Link href="#about" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="#solutions" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        Solutions
                    </Link>
                    <Link href="#markets" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        Markets
                    </Link>
                    <Link href="#contact" onClick={handleScroll} className="text-sm font-medium text-foreground hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button asChild className="rounded-full px-5 bg-[#045AD8] hover:bg-[#045AD8]/90 text-white font-medium text-sm">
                        <Link href="#contact" onClick={handleScroll}>Contact Us</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
