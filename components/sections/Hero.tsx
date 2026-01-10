'use client';

import React from 'react';
import { Briefcase, ExternalLink, Download } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="min-h-screen bg-neo-white">
            {/* Navigation */}
            <nav className="container-neo py-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        Sandra Matthews
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
                            Sandra
                            <br />
                            Matthews
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl leading-relaxed">
                            I <span className="bg-neo-orange px-2 font-bold">scribble</span> on paper and help brands to create designs.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 flex-wrap pt-4">
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
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            {/* Placeholder for character illustration */}
                            <div className="w-full h-full neo-border neo-shadow-lg bg-neo-white flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-8xl mb-4">👋</div>
                                    <p className="text-sm font-medium">Character Illustration</p>
                                    <p className="text-xs text-neo-black/60 mt-2">
                                        (Placeholder - will be replaced with actual illustration)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
