import { RiFirebaseFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiDevpost, SiExpress, SiFirebase, SiKubernetes, SiMongodb, SiNextdotjs, SiPhp, SiSpring, SiTypescript } from "react-icons/si"
import { DiDocker, DiFirebase, DiJava, DiJavascript, DiMysql, DiPython, DiRedis } from "react-icons/di"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"
import { section } from "framer-motion/client"
import { FaAngular, FaAws, FaDocker, FaNodeJs, FaTools } from "react-icons/fa"
import { FcNext } from "react-icons/fc"
import { GiBootStomp } from "react-icons/gi"
import { BsBootstrap } from "react-icons/bs"

const iconVariants = (duration) => ({
    inital: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <section id="technologies">
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20  text-center text-4xl">Technologies</motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <DiJava className="text-7xl text-red-500" />
                        <span>Java</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <DiJavascript className="text-7xl text-yellow-500" />
                        <span>Java Script</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiPhp className="text-7xl text-purple-400" />
                        <span>PHP</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <DiPython className="text-7xl text-blue-400" />
                        <span>Python</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiSpring className="text-7xl text-green-300" />
                        <span>Spring Boot</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <FaNodeJs className="text-7xl text-green-900" />
                        <span>Node.js</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiExpress className="text-7xl text-green-100" />
                        <span>Express.js</span>
                    </motion.div>
                   
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <FaAngular className="text-7xl text-red-700" />
                        <span>Angular</span>
                    </motion.div>
                    
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                        <span>React</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiNextdotjs className="text-7xl" />
                        <span>Next.js</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiTypescript className="text-7xl text-blue-400"  />
                        <span>TypeScript</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <RiTailwindCssFill className="text-7xl text-green-700" />
                        <span>Tailwind CSS</span>
                    </motion.div>

                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <BsBootstrap className="text-7xl text-purple-700" />
                        <span>Bootstrap</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <DiMysql className="text-7xl text-orange-400" />
                        <span>MySQL</span>
                    </motion.div>

                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiMongodb className="text-7xl text-green-500" />
                        <span>Mongo DB</span>
                    </motion.div>

                   
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <BiLogoPostgresql className="text-7xl text-sky-500" />
                        <span>PostgreSQL</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <FaDocker className="text-7xl text-blue-600" />
                        <span>Docker</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <SiKubernetes className="text-7xl text-blue-400" />
                        <span>K8s</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <FaAws className="text-7xl text-orange-600" />
                        <span>AWS</span>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                        <RiFirebaseFill className="text-7xl text-yellow-600" />
                        <span>Firebase</span>
                    </motion.div>
                   

                </motion.div>
            </div>
        </section>
    )
}

export default Technologies
