import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-700 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="bg-white px-3 py-2 rounded-xl inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Jetset Business Center"
                                    width={160}
                                    height={45}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-primary-100 mb-6 leading-relaxed">
                            Premium coworking and office spaces in the heart of Dubai's Business Bay.
                            Elevate your business with our luxury facilities and expert support services.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/book-tour" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Book a Tour
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/coworking-space" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Coworking Spaces
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/serviced-offices" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Serviced Offices
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/meeting-rooms" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Meeting Rooms
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/virtual-ejari" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Virtual Office & Ejari
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/business-setup" className="text-primary-100 hover:text-secondary-500 transition-colors">
                                    Business Setup
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                <span className="text-primary-100">
                                    Prime Tower & Regal Tower,<br />
                                    Business Bay, Dubai, UAE
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary-500 shrink-0" />
                                <a href="tel:+97100000000" className="text-primary-100 hover:text-white transition-colors">
                                    +971 00 000 0000
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary-500 shrink-0" />
                                <a href="mailto:info@jetsetbc.com" className="text-primary-100 hover:text-white transition-colors">
                                    info@jetsetbc.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-200 text-sm">
                        © {new Date().getFullYear()} Jetset Business Center. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-primary-200 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-primary-200 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
