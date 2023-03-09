import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Skill as skill } from "../typings"
import { urlFor } from "@/sanity"
type Props = {
  skill: skill
  directionLeft: boolean
}
function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex justify-center items-center cursor-pointer">
      <motion.div
        className="relative"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full w-20 h-20 border border-gray-500 object-cover
        filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skill.image).url()}
          alt=""
          width={500}
          height={500}
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-20 w-20 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
