import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"
import BackgroundCircles from "./BackgroundCircles"
type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi I'm Noufel!",
      "<I am a Web developer/>",
      "<A UX/UI designer/>",
      "<And a game developement enthusiast/>",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div
      className="h-screen flex flex-col items-center space-y-8 justify-center text-center
    overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        className="relative rounded-full object-cover h-32 w-32 mx-auto"
        src="/noufel.png"
        alt="Picture of Noufel"
        width={128}
        height={128}
      />
      <div className="hero-gradient z-0"></div>
      <div className="z-20">
        <h2 className="text-sm text-gray-500 pb-6 tracking-[10px]">
          SOFTWARE ENGINEERING STUDENT
        </h2>
        <h1 className="text-xl lg:text-3xl font-semibold px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <nav className="pt-5">
          <Link href="#about">
            <button className="nav_btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="nav_btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="nav_btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="nav_btn">Projects</button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Hero
