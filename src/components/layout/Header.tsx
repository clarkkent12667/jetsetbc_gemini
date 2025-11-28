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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.left = '0';
            document.body.style.right = '0';
            
            return () => {
                // Restore scroll position when menu closes
                const scrollY = document.body.style.top;
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.left = '';
                document.body.style.right = '';
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            };
        }
    }, [mobileMenuOpen]);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full py-4 sm:py-6"
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-full w-full">
                {/* Logo */}
                {!mobileMenuOpen && (
                    <Link href="/" className="flex items-center gap-2 shrink-0 relative z-50">
                        <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-xl shadow-sm transition-all hover:bg-white">
                            <Image
                                src="/logo.png"
                                alt="Jetset Business Center"
                                width={140}
                                height={40}
                                className="object-contain w-auto h-8 sm:h-10"
                                priority
                            />
                        </div>
                    </Link>
                )}

                {/* Desktop Navigation - Glass Morphism Pill */}
                <nav className={cn(
                    "hidden lg:flex items-center gap-1 px-6 py-3 backdrop-blur-xl rounded-full transition-all duration-300",
                    isScrolled
                        ? "bg-white border-2 border-gray-200 shadow-2xl ring-1 ring-gray-100"
                        : "bg-white border border-gray-200 shadow-lg"
                )}>
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
                                    "text-sm font-medium transition-colors flex items-center gap-1 px-4 py-2 rounded-full",
                                    "text-gray-700 hover:text-primary-600 hover:bg-gray-100/50",
                                    pathname === item.href && "text-primary-600 bg-primary-50"
                                )}
                            >
                                {item.name}
                                {item.children && (
                                    <ChevronDown className="w-4 h-4 text-gray-700 transition-transform group-hover:rotate-180" />
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
                                            className="absolute top-full left-0 mt-2 w-56 bg-white backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 overflow-hidden py-2"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
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
                    className={cn("lg:hidden p-2 shrink-0 ml-2 relative z-50", mobileMenuOpen ? "" : "")}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-900" />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            {/* Menu */}
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-0 bg-white z-40 pt-16 px-5 lg:hidden overflow-y-auto overflow-x-hidden overscroll-contain"
                                style={{ touchAction: 'pan-y' }}
                            >
                                <nav className="flex flex-col gap-2.5 pb-6">
                                    {navigation.map((item) => (
                                        <div key={item.name} className="flex flex-col gap-1">
                                            <Link
                                                href={item.href}
                                                className="text-base font-semibold text-gray-900 py-1.5"
                                                onClick={() => !item.children && setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.children && (
                                                <div className="flex flex-col gap-1 pl-3 border-l-2 border-gray-100 mt-0.5">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="text-sm text-gray-600 py-1"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-2">
                                        <Link
                                            href="/book-tour"
                                            className="block w-full text-center py-2.5 bg-primary-600 text-white rounded-xl font-semibold text-sm"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Book a Tour
                                        </Link>
                                    </div>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
