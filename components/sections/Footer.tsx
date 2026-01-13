import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    const quickMenu = [
        { label: 'About', href: '#about' },
        { label: 'Work', href: '#work' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ];

    const resources = [
        { label: 'Blog', href: '#blog' },
        { label: 'Newsletter', href: '#newsletter' },
        { label: 'Resume', href: '#resume' },
        { label: 'Hire Me', href: '#hire' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#facebook', label: 'Facebook' },
        { icon: Instagram, href: '#instagram', label: 'Instagram' },
        { icon: Twitter, href: '#twitter', label: 'Twitter' },
    ];

    return (
        <footer className="bg-neo-white pt-20 pb-24">
            <div className="container-neo">
                {/* Top Border Line - Aligned with content */}
                <div className="w-full border-t-4 border-neo-black mb-12" style={{ marginBottom: '45px' }}></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Description */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold">Hoyos Christian</h2>
                        <p className="text-base leading-relaxed max-w-md">
                            Crafting captivating designs that speak volumes. Elevating your brands design presence with creativity and precision.
                        </p>
                    </div>

                    {/* Quick Menu */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Menu</h3>
                        <ul className="space-y-2">
                            {quickMenu.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-base hover:underline transition-all"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {resources.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-base hover:underline transition-all"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Social & Copyright */}
                <div
                    className="border-t-2 border-neo-black flex flex-col md:flex-row items-center justify-between gap-6"
                    style={{ marginTop: '45px', paddingTop: '30px', paddingBottom: '30px' }}
                >
                    <p className="text-sm">
                        ©2024 Hoyos Christian. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <div key={social.label} className="relative w-10 h-10">
                                    {/* Static Shadow */}
                                    <div className="absolute top-1 left-1 w-full h-full bg-neo-black"></div>

                                    {/* Moving Icon Button */}
                                    <a
                                        href={social.href}
                                        aria-label={social.label}
                                        className="relative w-full h-full bg-neo-white border-2 border-neo-black flex items-center justify-center transition-transform hover:translate-x-1 hover:translate-y-1 text-neo-black"
                                    >
                                        <Icon size={20} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
