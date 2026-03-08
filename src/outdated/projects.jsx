import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const projectRefs = useRef([]);

    useEffect(() => {
        const start = projectRefs.current.querySelectorAll(".justify-start");
        const end = projectRefs.current.querySelectorAll(".justify-end");

        start.forEach((start) => {
            gsap.from(start, {
                x: -100,
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: start,
                    start: "top 50%",
                    toggleActions: "play none none none",
                },
            });
        });

                end.forEach((end) => {
            gsap.from(end, {
                x: 100,
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: end,
                    start: "top 50%",
                    toggleActions: "play none none none",
                },
            });
        });

    }, []);

    const projects = [{
        title: "Nexus Marketplace",
        description: "Full-stack e-commerce solution with real-time inventory management and secure checkout.",
        techStack: ["React", "Node.js", "MongoDB"],
        liveDemoUrl: "https://nexus-marketplace-demo.com",

    }, {
        title: "TaskMaster Pro",
        description: "A productivity app that combines task management with Pomodoro timers and habit tracking.",
        techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
        liveDemoUrl: "https://taskmaster-pro-demo.com",
    }, {
        title: "FitTrackr",
        description: "A fitness tracking app that integrates with wearable devices to monitor workouts and health metrics.",
        techStack: ["React Native", "GraphQL", "AWS Amplify"],
        liveDemoUrl: "https://fittrackr-demo.com",
    }, {
        title: "Travelogue",
        description: "A travel blogging platform that allows users to share their adventures with interactive maps and multimedia content.",
        techStack: ["Next.js", "Prisma", "PostgreSQL"],
        liveDemoUrl: "https://travelogue-demo.com",
    }, {
        title: "EduConnect",
        description: "An online learning platform that connects students with expert tutors for personalized education.",
        techStack: ["Angular", "Django", "MySQL"],
        liveDemoUrl: "https://educonnect-demo.com",
    }, {
        title: "EduConnect",
        description: "An online learning platform that connects students with expert tutors for personalized education.",
        techStack: ["Angular", "Django", "MySQL"],
        liveDemoUrl: "https://educonnect-demo.com",
    },
    {
        title: "FitTrackr",
        description: "A fitness tracking app that integrates with wearable devices to monitor workouts and health metrics.",
        techStack: ["React Native", "GraphQL", "AWS Amplify"],
        liveDemoUrl: "https://fittrackr-demo.com",
    }, {
        title: "Travelogue",
        description: "A travel blogging platform that allows users to share their adventures with interactive maps and multimedia content.",
        techStack: ["Next.js", "Prisma", "PostgreSQL"],
        liveDemoUrl: "https://travelogue-demo.com",
    }, {
        title: "EduConnect",
        description: "An online learning platform that connects students with expert tutors for personalized education.",
        techStack: ["Angular", "Django", "MySQL"],
        liveDemoUrl: "https://educonnect-demo.com",
    }, {
        title: "EduConnect",
        description: "An online learning platform that connects students with expert tutors for personalized education.",
        techStack: ["Angular", "Django", "MySQL"],
        liveDemoUrl: "https://educonnect-demo.com",
    }
    , {
        title: "EduConnect",
        description: "An online learning platform that connects students with expert tutors for personalized education.",
        techStack: ["Angular", "Django", "MySQL"],
        liveDemoUrl: "https://educonnect-demo.com",
    }

];

    return (
        <>
            <div className="h-100">
            </div>
                <div className='bg-white font-sans text-slate-900 flex flex-col'>
                    <div className="w-full max-w-7xl mx-auto px-6 py-16">

                        <div className="relative max-w-5xl mx-auto" data-purpose="project-grid-container">
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-400 -translate-x-1/2">
                            </div>
                            <div ref={projectRefs} className="flex flex-col gap-y-8 relative cursor-default">
                                {projects.map((project, index) => {
                                    return (
                                        <div key={index} className={`project-item flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                            <div className="w-full md:w-[45%] bg-white border border-slate-300 rounded-xl p-5 hover:shadow-md transition-all group">
                                                <div className="flex gap-2 mb-3">
                                                    {project.techStack.map((tech, i) => (<span key={i} className="px-2 py-0.5 bg-indigo-50 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">{tech}</span>))}
                                                </div>
                                                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                                                <div className="flex items-center gap-4">
                                                    <a className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                                        href={project.liveDemoUrl}>Live Demo <svg fill="none" height="12" stroke="currentColor"
                                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                            width="12">
                                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                            <polyline points="15 3 21 3 21 9"></polyline>
                                                            <line x1="10" x2="21" y1="14" y2="3"></line>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
<div className="h-100 bg-red-200"></div>
        </>
    )
}

export default Projects