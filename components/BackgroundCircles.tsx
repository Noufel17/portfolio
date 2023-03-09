import { motion } from "framer-motion"
import React from "react"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.3, 0.3],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="border border-[#333333] absolute rounded-full h-[200px] w-[200px] mt-72
       animate-ping"
      ></div>
      <div
        className="border border-[#333333] rounded-full absolute h-[300px] mt-72
      w-[300px]"
      ></div>
      <div
        className="border border-[#333333] rounded-full absolute h-[500px] mt-72
      w-[500px]"
      ></div>
      <div
        className="border border-[#F7AB0A] rounded-full absolute h-[660px] w-[660px]
       mt-72 animate-pulse"
      ></div>
      <div></div>
    </motion.div>
  )
}

export default BackgroundCircles
