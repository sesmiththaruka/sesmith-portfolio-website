import { FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa"
import { PROJECTS } from "../constant"
import { motion } from "framer-motion"
import { useState } from "react";
const MyProjects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsToShow = showAllProjects ? PROJECTS : PROJECTS.slice(0, 4); // Show 3 projects initially

    return (

        <section id="projects">
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl"> Projects</motion.h1>
                <div>
                    {projectsToShow.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/3 relative group">

                                {/* Image with hover blur effect */}
                                <img
                                    src={project.image}
                                    width={400}
                                    height={200}
                                    alt={project.title}
                                    className="mb-6 rounded group-hover:blur-sm transition duration-300 ease-in-out"
                                />

                                {/* Description and Link overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded">
                                    {/* Description text */}
                                    <p className="text-white text-center px-4 mb-2">
                                        {project.description}
                                    </p>

                                    {/* Live Link */}
                                    <p className="text-white text-center px-4 flex">
                                        <span>Source Code -</span>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="Source Code" className="ml-2 text-2xl">
                                            <FaGithub />
                                        </a>

                                        {project.livelink && (
                                            <div className="flex">
                                                <span className="ms-4">Live - </span>
                                                <a href={project.livelink} target="_blank" rel="noopener noreferrer" title="Live Link" className="ms-2 text-2xl">
                                                    <FaGlobe />
                                                </a>
                                            </div>

                                        )}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                                <h1 className="ms-6 mb-2 font-semibold flex items-center gap-2 ">
                                    {project.title}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="Source Code" className="ml-2 text-2xl">
                                        <FaGithub />
                                    </a>
                                    {project.livelink && (
                                        <a href={project.livelink} target="_blank" rel="noopener noreferrer" title="Live Link" className="ml-2 text-2xl">
                                            <FaGlobe />
                                        </a>
                                    )}
                                </h1>

                                {/* <p className="ms-6 mb-4 text-neutral-400">{project.description}</p> */}
                                {project.frontendTechnologies && (
                                    <div className="ms-6 mb-4 text-neutral-400">
                                        <span>Frontend -</span>
                                        {project.frontendTechnologies.map((tech, index) => (
                                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm
                                font-medium text-black-100">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                {project.backtendTechnologies && (
                                    <div className="ms-6 mb-4 text-neutral-400">
                                        <span>Backend -</span>
                                        {project.backtendTechnologies.map((tech, index) => (
                                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm
                                font-medium text-black-100">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                {project.cloudTechnologies && (
                                    <div className="ms-6 mb-4 text-neutral-400">
                                        <span>Cloud -</span>
                                        {project.cloudTechnologies.map((tech, index) => (
                                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm
                                font-medium text-black-100">{tech}</span>
                                        ))}
                                    </div>
                                )}

                            </motion.div>
                        </div>


                    ))}
                </div>
                {PROJECTS.length > 4 && (
                    <div className="text-center mt-6 mb-5">
                        <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="text-blue-500 hover:underline text-center"
                        >
                            {showAllProjects ? "Show Less" : "Show More Projects"}
                           
                        </button>
                    </div>
                )}
                
            </div>
        </section>
    )
}

export default MyProjects
