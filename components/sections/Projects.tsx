import React from 'react';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Cookies Oatmeal',
            description: 'Developing cohesive visual identities that communicate brand values and resonate with target audiences across various mediums.',
            image: '/images/project-cookies.jpg',
            link: '#',
        },
        {
            id: 2,
            title: 'Learning by Helping',
            description: 'Developing cohesive visual identities that communicate brand values and resonate with target audiences across various mediums.',
            image: '/images/project-learning.jpg',
            link: '#',
        },
        {
            id: 3,
            title: 'Mayawell Soda',
            description: 'Developing cohesive visual identities that communicate brand values and resonate with target audiences across various mediums.',
            image: '/images/project-mayawell.jpg',
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
