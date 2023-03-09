import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
type Props = {}
function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex mx-auto z-20 items-start justify-between
     xl:items-center max-w-7xl"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://web.facebook.com/Noufel17/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/noufel_17/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/noufel-naili-b4204921b/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Noufel_17"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase text-gray-4000 hidden md:inline-flex">
          get in touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header
