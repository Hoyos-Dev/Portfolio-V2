'use client';

import { Briefcase, ExternalLink, Download } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="bg-neo-white" style={{ paddingTop: '15px' }}>
            {/* Navigation */}
            <nav className="container-neo" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        {/* Hoyos Christian */}
                    </div>

                    {/* Menu */}
                    <div className="flex items-center gap-8 flex-wrap">
                        <a href="#about" className="font-medium hover:underline">About</a>
                        <a href="#work" className="font-medium hover:underline">Work</a>
                        <a href="#services" className="font-medium hover:underline">Services</a>
                        <a href="#contact" className="font-medium hover:underline">Contact</a>

                        {/* Resume Button */}
                        <button className="btn-neo bg-neo-black text-neo-white px-6 py-2 flex items-center gap-2">
                            Resume
                            <Download size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="container-neo py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="space-y-6">
                        {/* Tag */}
                        <div className="inline-block">
                            <div className="bg-neo-coral neo-border px-4 py-2 inline-block transform -rotate-2">
                                <span className="font-bold text-lg">Hi, I am</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                            Hoyos
                            <br />
                            Christian
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl">
                            <span className="bg-neo-orange px-2 font-bold">Front-end Developer</span> focused on clean code and functional design; specialized in modern, scalable, and performance-driven interfaces.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 flex-wrap" style={{ marginTop: '40px' }}>
                            <Button
                                variant="primary"
                                icon={Briefcase}
                                iconPosition="right"
                            >
                                Hire Me
                            </Button>
                            <Button
                                variant="secondary"
                                icon={ExternalLink}
                                iconPosition="right"
                            >
                                My Story
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Character Illustration */}
                    <div className="flex justify-center md:justify-end">
                        <div
                            className="relative flex items-center justify-center"
                            style={{
                                width: '175%',
                                marginRight: '-60px',
                                transform: 'translateX(-20px)'
                            }}
                        >
                            <img
                                src="/images/hoyos-port1.png"
                                alt="Character Illustration"
                                className="h-auto object-contain"
                                style={{ width: '100%', maxWidth: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
