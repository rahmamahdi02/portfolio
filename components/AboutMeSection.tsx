import React from 'react'

const skills = [
    { skill: "JavaScript" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "React" },
    { skill: "TypeScript" },
    { skill: "React Native" },
    { skill: "Tailwind CSS" },
    { skill: "Material UI" },
    { skill: "Figma" },
    { skill: "Node.js" },
    { skill: "Express" },
    { skill: "PostgreSQL" },
    { skill: "C++" },
    { skill: "Postman" },
    { skill: "Git" },
    { skill: "GitHub" },
]

export const AboutMeSection = () => {
    return (
        <section id="about">
            <div className="text-xl my-12 pb-12 md:pb-10">
                <hr className="w-6 h-1 mx-auto my-10 bg-yellow-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h2 className="text-center text-3xl font-bold mb-6 md:text-left">
                        Professional Summary
                        </h2>
                        <p>
                            My work spans from deploying machine learning applications to millions of PlayStation consoles—reducing data downloads by 30%—to leading feature integrations and introducing native UI frameworks to Sony's next generation of devices.
                            I thrive in cross-functional, fast-paced environments, collaborating with engineers, designers, and QA teams across time zones to deliver stable, scalable, and production-ready solutions. Whether I’m optimizing build pipelines, debugging complex native-layer systems, or designing intuitive interfaces, I bring a balance of technical depth, strategic problem-solving, and clear communication.
                        </p>
                        <p>
                            My recent work includes feature development at Sony Interactive Entertainment, UI redesigns for Google’s Tech Equity Collective, and curriculum engineering for open-source education initiatives reaching 600+ developers.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold mb-6">Technical Skillset</h2>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-zinc-700 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection