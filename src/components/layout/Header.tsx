"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Locations",
        href: "#",
        children: [
            { name: "Prime Tower", href: "/prime-tower" },
            { name: "Regal Tower", href: "/regal-tower" },
        ],
    },
    {
        name: "Services",
        href: "/services",
        children: [
            { name: "Coworking Space", href: "/services/coworking-space" },
            { name: "Serviced Offices", href: "/services/serviced-offices" },
            { name: "Meeting Rooms", href: "/services/meeting-rooms" },
            { name: "Virtual Office & Ejari", href: "/services/virtual-ejari" },
            { name: "Business Setup", href: "/services/business-setup" },
        ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm transition-all hover:bg-white">
                        <Image
                            src="/logo.png"
                            alt="Jetset Business Center"
                            width={140}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors flex items-center gap-1",
                                    isScrolled
                                        ? "text-gray-700 hover:text-primary-600"
                                        : "text-white/90 hover:text-white",
                                    pathname === item.href && "text-secondary-500"
                                )}
                            >
                                {item.name}
                                {item.children && (
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                )}
                            </Link>

                            {/* Dropdown */}
                            {item.children && (
                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        href="/book-tour"
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                            isScrolled
                                ? "bg-primary-600 text-white hover:bg-primary-700"
                                : "bg-white text-primary-700 hover:bg-gray-100"
                        )}
                    >
                        Book a Tour
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto"
                        >
                            <nav className="flex flex-col gap-6">
                                {navigation.map((item) => (
                                    <div key={item.name} className="flex flex-col gap-4">
                                        <Link
                                            href={item.href}
                                            className="text-2xl font-semibold text-gray-900"
                                            onClick={() => !item.children && setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.children && (
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="text-lg text-gray-600"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-6">
                                    <Link
                                        href="/book-tour"
                                        className="block w-full text-center py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Book a Tour
                                    </Link>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
