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
        <footer className="py-16 bg-neo-white border-t-4 border-neo-black">
            <div className="container-neo">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Description */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold">Sandra Matthews</h2>
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
                <div className="mt-12 pt-8 border-t-2 border-neo-black flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm">
                        ©2024 Sandra Matthews. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 neo-border bg-neo-white flex items-center justify-center hover:bg-neo-black hover:text-neo-white transition-all neo-transition"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
