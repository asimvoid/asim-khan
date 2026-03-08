import React from 'react';

const About = () => {
    const skills = ["MongoDB", "Express Js", "React Js", "Node.js", "Tailwind CSS", "PostgreSQL"];
    const education = [
          {
    degree: "BS Information Technology",
    university: "Bahria University Pakistan",
    logo: "/bahria.jpg",
    duration: "Spring 2022 - Fall 2025",
    description:
      "Focused on core IT concepts including programming, database, networking and software engineering with hands on academic projects and practical lab work.",
  },
  {
    degree: "Mobile and Web Development",
    university: "Saylani Mass IT",
    logo: "/smit.png",
    duration: "Nov 2024 - Feb 2026",
    description:
      "Modern web and mobile development technologies with practical training in building responsive applications and real world development projects.",
  }
];
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 md:p-4 justify-center">
            <div className="w-full max-w-6xl flex flex-col items-center gap-5" data-purpose="executive-summary-content">
                <div className="relative w-full border border-lightchipborder rounded-2xl p-3 md:p-5 shadow-sm" data-purpose="main-info-card">
                    {/* Grid: 1 column on mobile, 2 columns on Large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">

                        {/* Left Column: About */}
                        <div className="space-y-5" data-purpose="left-summary-column">
                            <div>
                                <header>
                                   <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-primary mb-3">About<span className='select-none text-secondary'>|</span></h2>
                                </header>
                                <div className='flex justify-start gap-3' >
                                    <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p className="leading-relaxed text-justify text-sm">
                                        I'm a MERN stack developer who lives at the intersection of clean code and high performance design. I specialize in building full stack applications where a fluid React frontend meets a rugged Node and Express architecture, all powered by the scalability of MongoDB. Whether I'm mapping out the real time data flow for the Quantum Analytics Engine or fine tuning a responsive UI, I'm obsessed with the HOW as much as the WHAT ensuring every click feels snappy and every backend query is optimized for speed. I don't just build functional tools, I build digital experiences that are as intuitive for the user as they are robust under the hood.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <header>
                                <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-primary mb-3">Skills<span className='select-none text-secondary'>|</span></h2>
                                </header>
                                <div className='flex flex-wrap justify-start gap-3' >
                                    {skills.map((skill) => (
                                        <p key={skill} className="border cursor-default border-lightchipborder hover:bg-lightbg text-muted text-[13px] rounded-full px-5 py-1.5">
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Middle Divider: Only visible on Large Screens */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-lightchipborder -translate-x-1/2"></div>

                        {/* Right Column: Education */}
                        <div>
                            <header>
                            <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-primary mb-3">Education<span className='select-none text-secondary'>|</span></h2>
                            </header>

                            {/* Education Cards */}
                            <div className="space-y-4">
                                
                                {
                                    education.map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-full border border-lightchipborder p-5 rounded-xl bg-white hover:shadow-sm"
                                        >
                                            <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center justify-between w-full text-muted">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-lightbg border border-lightchipborder rounded-lg p-2 shrink-0">
                                                        <img
                                                            src={item.logo}
                                                            alt={item.university}
                                                            className="w-8 h-8 object-contain"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-sm md:text-base font-medium text-secondary">
                                                            {item.degree}
                                                        </h3>
                                                        <div className="text-xs md:text-sm">{item.university}</div>
                                                    </div>
                                                </div>

                                                <div className="text-xs font-medium bg-lightline px-2 py-1 rounded">
                                                    {item.duration}
                                                </div>
                                            </div>

                                            <p className="mt-4 text-xs md:text-sm text-muted">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="speech-bubble-tail hidden lg:block"></div>
                </div>

                {/* Footer Signature */}
                <div className="w-full flex flex-col justify-start items-end text-right px-4" data-purpose="footer-signature">
                    <div className="relative inline-block">
                        <h2 className="text-xl font-bold text-secondary">
                            Asim Khan
                        </h2>
                    </div>
                    <p className="text-sm text-muted">
                        Full Stack Developer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;