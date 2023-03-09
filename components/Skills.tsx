import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as skill } from "../typings"
type Props = {
  skills: skill[]
}
function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex flex-col overflow-hidden min-h-screen text-center items-center
       max-w-full mx-auto justify-center xl:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        hover over a skill to view current profficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill: skill, index) => {
          return (
            <Skill
              key={index}
              skill={skill}
              directionLeft={index > skills.length / 2 ? true : false}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills
