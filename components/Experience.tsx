import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "@/typings"
type Props = {
  experiences: Experience[]
}
function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0,
      }}
      className="relative flex flex-col overflow-hidden h-screen text-left items-center
       max-w-full mx-auto justify-center gap-4"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full space-x-5 absolute top-[128px] flex overflow-x-scroll p-5 snap-x
       snap-mandatory scrollbar-track-gray-500/20 
    scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {experiences.map((experience: Experience, index) => {
          return <ExperienceCard key={index} experience={experience} />
        })}
      </div>
    </motion.div>
  )
}

export default Experience
