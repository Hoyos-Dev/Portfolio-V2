import React from 'react';
import {
    Code2,
    Atom,
    Triangle,
    Package,
    Smartphone,
    Server,
    Sun,
    FileCode
} from 'lucide-react';

export default function TechStack() {
    const technologies = [
        { icon: Atom, name: 'React' },
        { icon: Code2, name: 'Angular' },
        { icon: Triangle, name: 'Python' },
        { icon: Smartphone, name: 'Flutter' },
        { icon: Smartphone, name: 'React Native' },
        { icon: Server, name: 'Node.js' },
        { icon: Sun, name: 'JavaScript' },
        { icon: FileCode, name: 'HTML5' },
    ];

    return (
        <section className="py-12 bg-neo-white">
            <div className="container-neo">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-12">
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center gap-3 group"
                                title={tech.name}
                            >
                                <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <Icon size={48} strokeWidth={1.5} className="text-neo-black" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
