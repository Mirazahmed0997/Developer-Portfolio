const Experience = () => {
    const experiences = [
        {
            company: "Goinnovior Limited",
            role: "Software Developer Intern",
            duration: "Oct 2023 – Dec 2023 ",
            points: [
                "Assisted in comprehensive project documentation to improve team clarity and project tracking.",
                "Actively contributed to frontend development, identifying and resolving UI issues to enhance user experience.",
                "Worked on backend development using Node.js and MongoDB for scalable application features.",
                "Collaborated closely with cross-functional team members to optimize backend performance.",
            ],
        },
        {
            company: "ALG Limited",
            role: "Client Management",
            duration: "Feb 2024 – Mar 2025",
            points: [
                "Acted as the primary point of contact for client communication and inquiries.",
                "Provided regular project updates and ensured smooth coordination between clients and internal teams.",
                "Handled contract terms, pricing discussions, and agreements to ensure mutual benefit.",
            ],
        },
        {
            company: "Betopia Group",
            role: "Frontend Developer (Night)",
            duration: "May 2025 – Nov 2025",
            points: [
                "Developed and customized Shopify themes using Liquid language.",
                "Integrated third-party apps and custom features to meet client requirements.",
                "Conducted Zoom meetings with clients to analyze requirements and provide technical solutions.",
            ],
        },
        {
            company: "Watheta",
            role: "Frontend Developer",
            duration: "Nov 2025 – Present",
            points: [
                "Working on modern frontend development using React and Tailwind CSS.",
                "Collaborating with designers and backend developers to deliver clean and responsive interfaces.",
            ],
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                        Career
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Professional <span className="text-primary">Experience</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-primary/30 pl-8 space-y-14">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">

                            {/* Gradient Timeline Dot */}
                            <span className="absolute -left-[11px] top-4 w-5 h-5 rounded-full 
                  bg-gradient-to-r from-primary to-purple-500 
                  border-4 border-white shadow-md"
                            />

                            {/* Card */}
                            <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 
                                hover:shadow-xl transition-all duration-300">

                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold">
                                            {exp.role}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium 
                        bg-gradient-to-r from-primary to-purple-500 
                        bg-clip-text text-transparent">
                                            {exp.company}
                                        </p>
                                    </div>

                                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium 
                                     rounded-full bg-gray-100 text-gray-500">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Points */}
                                <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-600 
                                 list-disc list-inside">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    );
};

export default Experience;
