'use client';

import React from 'react';

interface StudyCardProps {
    title: string;
    subtitle: string;
    variant?: 'coral' | 'orange' | 'blue';
    icon?: React.ReactNode;
}

export default function StudyCard({
    title,
    subtitle,
    variant = 'coral',
    icon,
}: StudyCardProps) {
    const variantStyles = {
        coral: { backgroundColor: '#FF6B5B' },
        orange: { backgroundColor: '#FFB84D' },
        blue: { backgroundColor: '#6B9EFF' },
    };

    return (
        <div
            style={{
                ...variantStyles[variant],
                border: '5px solid #1A1A1A',
                boxShadow: '8px 8px 0px #1A1A1A',
                padding: '40px 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px',
            }}
        >
            {/* Left Side - Logo and Text */}
            <div>
                {/* Title with Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                    {icon && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {icon}
                        </div>
                    )}
                    <h3
                        style={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            letterSpacing: '-1px'
                        }}
                    >
                        {title}
                    </h3>
                </div>
                {/* Subtitle */}
                <p style={{ fontSize: '18px', fontWeight: '500' }}>
                    {subtitle}
                </p>
            </div>

            {/* Right Side - Button and Legal Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                {/* Legal Text */}
                <p style={{ fontSize: '12px', maxWidth: '250px', textAlign: 'right' }}>
                    By subscribing you agree to the Terms of Use, our Privacy Policy and our Information collection notice
                </p>

                {/* Button with proper neo animation */}
                <div style={{ position: 'relative' }}>
                    {/* Static Shadow */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '4px',
                            left: '4px',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#1A1A1A',
                        }}
                    />
                    {/* Moving Button */}
                    <button
                        className="transition-transform duration-200 hover:translate-x-1 hover:translate-y-1"
                        style={{
                            position: 'relative',
                            backgroundColor: '#fff',
                            border: '4px solid #1A1A1A',
                            padding: '12px 32px',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        VER
                    </button>
                </div>
            </div>
        </div>
    );
}
