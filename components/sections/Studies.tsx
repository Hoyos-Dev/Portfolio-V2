'use client';

import React from 'react';
import StudyCard from '../ui/StudyCard';

import Image from 'next/image';

// Platzi Icon Component
const PlatziIcon = () => (
    <div style={{ position: 'relative', width: '80px', height: '60px' }}>
        <Image
            src="/images/LogoPlatzi.png"
            alt="Platzi Logo"
            fill
            className="object-cover"
            sizes="60px"
        />
    </div>
);

// Graduation Icon Component
const GraduationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8L4 18L24 28L44 18L24 8Z" fill="#1A1A1A" />
        <path d="M10 22V34L24 42L38 34V22" stroke="#1A1A1A" strokeWidth="3" fill="none" />
    </svg>
);

// Certificate Icon Component
const CertificateIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="24" rx="2" stroke="#1A1A1A" strokeWidth="3" fill="none" />
        <circle cx="24" cy="38" r="6" fill="#1A1A1A" />
        <path d="M20 44L24 38L28 44" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
);

export default function Studies() {
    return (
        <section className="bg-neo-white" style={{ paddingTop: '70px', paddingBottom: '80px' }}>
            <div className="container-neo">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <StudyCard
                        title="Platzi"
                        subtitle="Get occasional design resources by email"
                        variant="coral"
                        icon={<PlatziIcon />}
                    />
                    <StudyCard
                        title="Diplomados"
                        subtitle="Certified professional development courses"
                        variant="orange"
                        icon={<CertificateIcon />}
                    />
                    <StudyCard
                        title="Título Profesional"
                        subtitle="Ingeniería de Sistemas - Universidad"
                        variant="blue"
                        icon={<GraduationIcon />}
                    />
                </div>
            </div>
        </section>
    );
}
