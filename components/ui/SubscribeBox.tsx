'use client';

import React from 'react';
import { Mail } from 'lucide-react';

interface SubscribeBoxProps {
    variant?: 'coral' | 'orange' | 'blue';
    onSubmit?: (email: string) => void;
}

export default function SubscribeBox({
    variant = 'coral',
    onSubmit,
}: SubscribeBoxProps) {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit && email) {
            onSubmit(email);
            setEmail('');
        }
    };

    const variantStyles = {
        coral: 'bg-neo-coral',
        orange: 'bg-neo-orange',
        blue: 'bg-neo-blue',
    };

    return (
        <div className={`neo-border-thick neo-shadow-lg p-8 md:p-12 ${variantStyles[variant]}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Heading */}
                <div className="space-y-2">
                    <label htmlFor={`email-${variant}`} className="text-sm font-medium uppercase tracking-wide">
                        mail
                    </label>
                    <div className="flex items-center gap-3">
                        <Mail className="w-10 h-10" strokeWidth={2.5} />
                        <h2 className="text-4xl md:text-5xl font-bold">Subscribe</h2>
                    </div>
                    <p className="text-base md:text-lg font-medium">
                        Get occasional design resources by email
                    </p>
                </div>

                {/* Email Input and Button */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        id={`email-${variant}`}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="flex-1 px-4 py-3 neo-border bg-neo-white text-neo-black placeholder:text-neo-black/50 focus:outline-none focus:ring-4 focus:ring-neo-black/20"
                    />
                    <button
                        type="submit"
                        className="btn-neo bg-neo-white text-neo-black px-8 py-3 font-bold hover:bg-neo-cream"
                    >
                        Subscribe
                    </button>
                </div>

                {/* Legal Text */}
                <p className="text-xs leading-relaxed">
                    By subscribing you agree to the{' '}
                    <span className="underline cursor-pointer">Terms of Use</span>, our{' '}
                    <span className="underline cursor-pointer">Privacy Policy</span> and our{' '}
                    <span className="underline cursor-pointer">information collection notice</span>
                </p>
            </form>
        </div>
    );
}
