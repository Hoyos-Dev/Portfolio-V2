import React from 'react';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'UI Elements',
            description: 'A component portal that works as a digital library, centralizing reusable web design and development elements. It helps maintain consistency, speeds up workflows, and supports scalable and efficient project development.',
            image: '/images/UIElements.png',
            link: '#',
        },
        {
            id: 2,
            title: 'Giveaways',
            description: 'A customizable sweepstakes platform that allows you to create dynamic sweepstakes from lists of people, with simultaneous or individual sweepstakes options, custom backgrounds, and interactivity adaptable to any need.',
            image: '/images/giveaways.png',
            link: '#',
        },
        {
            id: 3,
            title: 'Portal PUA',
            description: 'Visual and functional refactoring of the PAU portal, aimed at modernizing the user interface (UI) and optimizing the user experience (UX); for reasons of privacy and confidentiality, it is not possible to share additional information about this project.',
            image: '/images/PAU.jpg',
            link: '#',
        },
    ];

    return (
        <section className="py-20 bg-neo-white">
            <div className="container-neo">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
