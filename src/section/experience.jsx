import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Upwork / Fivver",
            duration: "Jan 2026 - Present",
            description: "Upgraded and maintained existing web applications, implemented new features and optimized performance. Collaborated with clients to understand requirements.",
            skills: ["MongoDB", "Express Js", "React Js", "Node Js"],
        },
        {
            title: "Full Stack Intern",
            company: "Entra Nexus",
            duration: "Nov 2025 - Jan 2026",
            description: "Developed and deployed responsive web applications using the MERN stack while contributing to frontend development and improving UI components.",
            skills: ["MongoDB", "Express Js", "React Js", "Node Js"],
        },
        {
            title: "Front End Developer",
            company: "Self Employed",
            duration: "Dec 2023 - Dec 2025",
            description: "Developed responsive and interactive user interfaces using HTML, CSS, JavaScript and React. Styled applications with Tailwind CSS and GSAP.",
            skills: ["React Js", "Tailwind CSS", "GSAP"],
        },
        {
            title: "Web Developer Intern",
            company: "Syntecx Hub",
            duration: "Feb 2026 - March 2026",
            description: "Assisted in developing and maintaining web applications using the MERN stack. Gained experience in database design and API development.",
            skills: ["MongoDB", "Express Js", "React Js", "Node Js"],
        }
    ];

    return (
        <div className="h-screen w-full flex flex-col overflow-hidden p-3 md:p-4">
            {/* Header: Responsive height */}
            <div className='flex justify-start items-center gap-3 md:gap-7'>
            <h2 className="flex items-center justify-center text-xl md:text-3xl font-bold font-fjalla-one text-primary text-center">Experience<span className='select-none text-secondary font-thin md:font-bold text-5xl md:text-3xl'>|</span></h2>
            <p className='text-justify m-auto text-[8px] md:text-xs font-lato text-secondary'>Built and maintained responsive web applications using modern frameworks and technologies focusing on performance scalability and clean user centered design Collaborated with teams to develop features integrate APIs manage databases and deliver seamless digital experiences</p>
            </div>
            {/* Grid System:
                - Mobile: 1 Column, 4 Rows (grid-rows-4)
                - Desktop: 2 Columns, 2 Rows (md:grid-cols-2 md:grid-rows-2)
            */}
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-4 h-[93%] md:h-[91%] w-full max-w-7xl mx-auto">
                {experiences.slice(0, 4).map(({ title, company, duration, description, skills }) => (
                    <article
                        key={title}
                        className="exp-card relative flex flex-col items-center justify-center p-3 md:p-6 group cursor-default border border-lightchipborder rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                        {/* Front State: Centered Title & Date */}
                        <div className="card-code absolute inset-0 flex flex-col items-center justify-center select-none text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:opacity-0">
                            <span className="text-lg md:text-2xl font-bold text-secondary leading-tight">
                                {title}
                            </span>
                            <span className="text-sm md:text-lg font-bebas-neue text-primary mt-1">
                                {duration}
                            </span>
                        </div>

                        {/* Back State: Details revealed on hover */}
                        <div className="card-content-hidden opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 w-full h-full flex flex-col justify-center overflow-hidden">
                            <header className="mb-1 md:mb-2">
                                <span className="text-primary font-bold tracking-tighter uppercase text-[9px] md:text-[10px]">
                                    {duration}
                                </span>
                                <h2 className="text-base md:text-2xl font-bold font-fjalla-one text-primary leading-none">
                                    {company}
                                </h2>
                                <h3 className="text-xs md:text-lg text-secondary font-medium">
                                    {title}
                                </h3>
                            </header>

                            <p className="text-[10px] md:text-xs leading-tight md:leading-relaxed text-muted mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">
                                {description}
                            </p>

                            <footer className="flex flex-wrap gap-1">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-1.5 md:px-2 py-0.5 text-white font-bold bg-primary text-[8px] md:text-[10px] rounded-md whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </footer>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Experience;