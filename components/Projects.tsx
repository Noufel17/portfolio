import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Project } from "@/typings"
import { urlFor } from "@/sanity"
type Props = {
  projects: Project[]
}
function Projects({ projects }: Props) {
  return (
    <div
      className="relative flex flex-col md:felx-row overflow-hidden h-screen text-left items-center
       max-w-full mx-auto justify-evenly z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
      <div
        className="relative overflow-x-scroll overflow-y-hidden w-full flex snap-x snap-mandatory
      z-20 scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {projects.map((project: Project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center
                justify-center p-20 md:p-44 h-screen "
            >
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  className="h-48 w-48 rounded-[8px] md:h-60 md:w-60"
                  src={urlFor(project.image).url()}
                  alt=""
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {project.title}
                </h4>
              </div>
              <p className="tet-center md:text-left text-lg">
                {project.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
