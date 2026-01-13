import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link?: string;
}

export default function ProjectCard({
    image,
    title,
    description,
    link,
}: ProjectCardProps) {
    return (
        <div className="group cursor-pointer">
            {/* Project Image */}
            <div className="relative w-full aspect-[4/3]" style={{ marginBottom: '8px' }}>
                {/* Static Shadow */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: '#1A1A1A',
                        transform: 'translate(10px, 10px)'
                    }}
                />
                {/* Moving Image Container */}
                <div
                    className="relative w-full h-full overflow-hidden transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"
                    style={{
                        border: '4px solid #1A1A1A',
                        backgroundColor: '#fff'
                    }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Project Info */}
            <div style={{ paddingTop: '24px' }}>
                {/* Title with Arrow */}
                <h3
                    className="font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                    style={{ fontSize: '24px', marginBottom: '12px' }}
                >
                    {title}
                    <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ width: '24px', height: '24px' }}
                    />
                </h3>

                {/* Divider Line */}
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#1A1A1A',
                        marginBottom: '16px'
                    }}
                />

                {/* Description */}
                <p
                    style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#1A1A1A',
                        textAlign: 'justify'
                    }}
                >
                    {description}
                </p>

                {/* Bottom Divider Line */}
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#1A1A1A',
                        marginTop: '16px'
                    }}
                />
            </div>
        </div>
    );
}
