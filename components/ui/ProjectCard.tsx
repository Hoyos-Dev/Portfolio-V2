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
        <div className="neo-border neo-shadow neo-transition bg-neo-white group cursor-pointer">
            {/* Project Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden border-b-4 border-neo-black">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                    {title}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm leading-relaxed text-neo-black/80">
                    {description}
                </p>
            </div>
        </div>
    );
}
