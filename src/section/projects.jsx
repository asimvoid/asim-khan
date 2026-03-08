import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Ecommerce Website",
            description: "A full-stack shopping platform with secure checkout and real-time inventory management.",
            stack: ["React", "Node.js", "MongoDB"],
            link: "#",
        },
        {
            title: "Database Design Tool",
            description: "Platform for designing databases and visualizing relationships including primary keys and triggers.",
            stack: ["React", "Node.js", "MySQL"],
            link: "#",
        },
        {
            title: "AI Chat Interface",
            description: "An interactive UI for LLM models with streaming responses and markdown support.",
            stack: ["Next.js", "Tailwind", "OpenAI"],
            link: "#",
        },
        {
            title: "Portfolio Engine",
            description: "A customizable portfolio builder for developers with dynamic SEO optimization.",
            stack: ["Next.js", "TypeScript", "Prisma"],
            link: "#",
        },
        {
            title: "Task Management SaaS",
            description: "Collaborative workspace with Kanban boards, sprint planning, and team analytics.",
            stack: ["React", "Firebase", "Tailwind"],
            link: "#",
        },
        {
            title: "Real-time Dashboard",
            description: "Data visualization tool for IoT sensors with live charting and alert systems.",
            stack: ["React", "D3.js", "Socket.io"],
            link: "#",
        },
        {
            title: "Social Media API",
            description: "Robust backend system handling authentication, feed generation, and media storage.",
            stack: ["Node.js", "Express", "PostgreSQL"],
            link: "#",
        },
        {
            title: "Cloud File Manager",
            description: "Secure cloud storage interface with drag-and-drop uploads and file sharing.",
            stack: ["React", "AWS S3", "Node.js"],
            link: "#",
        }
    ];

    return (
        <div className="p-3 md:p-4">
            
            <div className='flex justify-start items-center gap-3 md:gap-7 mb-8 md:mb-8'>
                <h2 className="flex items-center justify-center text-xl md:text-3xl font-bold font-fjalla-one text-primary text-center">
                    Projects<span className='select-none text-secondary font-thin md:font-bold text-5xl md:text-3xl'>|</span>
                </h2>
                <p className='text-justify m-auto text-[8px] md:text-xs font-lato text-secondary'>
                    Developed multiple web projects implementing real world functionality including responsive interfaces API integrations database management and dynamic user interactions using modern web technologies. Focused on clean architecture efficient performance and user friendly design.
                </p>
            </div>
            
            {/* Grid Container: 1 column on mobile, 2 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="cursor-default w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border border-lightchipborder rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Text Content */}
                        <div className="flex-1 sm:pr-4 mb-4 sm:mb-0">
                            <h3 className="text-md font-bold uppercase text-primary mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                                {project.title}
                            </h3>
                            <p className="text-slate-500 text-xs line-clamp-2 mb-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded border border-slate-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 w-full sm:w-auto">
                            <a
                                className="block text-center sm:inline-flex items-center px-4 py-2 border-[1.5px] border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                                href={project.link}
                            >
                                View
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Projects;