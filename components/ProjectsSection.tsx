import React from 'react'
import Image from "next/image"
import Link from "next/link"
import SlideUp from './SlideUp'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Question Craft",
        description: "Question-Craft is a group-made web application that generates questions using the Chat GPT OpenAI API based on user input. It utilizes React and Bootstrap for the frontend and Node.js with Express for the backend.",
        image: "/Question Craft.png",
        alt: "Image of Question Craft landing page",
        github: "https://github.com/Roshanell/question-craft",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <hr className="w-6 h-1 mx-auto my-10 bg-yellow-500 border-0 rounded"></hr>
            <h2 className="text-center text-3xl font-bold mb-10">Projects</h2>
            <div className="flex flex-col space-y-28 md:pb-10">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </div>
                                    <div className="mt-3 md:w-1/2">
                                        <h2 className="text-2xl font-bold mb-6">{project.name}</h2>
                                        <p className="text-xl leading-7 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="flex inline-flex flex-row items-center mr-10">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer mr-2"
                                                /> GitHub
                                            </Link>
                                            {project.link &&
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="flex inline-flex flex-row items-center">
                                                    <BsArrowUpRightSquare
                                                        size={30}
                                                        className="hover:-translate-y-1 transition-transform cursor-pointer mr-2"
                                                    />Website
                                                </Link>}
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection