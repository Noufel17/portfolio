import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { About } from "@/typings"
type Props = {
  about: About
}
function About({ about }: Props) {
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
      className="flex relative flex-col h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-center gap-8 mx-auto
       items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Image
          className="md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
          md:rounded-lg md:w-72 md:h-96"
          src="/noufel.png"
          alt="Picture of Noufel"
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-3xl md:text-4xl font-semibold mx-auto">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-xl max-w-2xl !mt-6">
          {about.paragraph}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default About
