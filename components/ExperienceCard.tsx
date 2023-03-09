import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Experience, Image as image } from "@/typings"
import { urlFor } from "@/sanity"
type Props = {
  experience: Experience
}
function ExperienceCard({ experience }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="rounded-lg items-center flex flex-col justify-start flex-shrink-0 space-y-3 p-5
        w-[320px] md:w-[400px] lg:w-[500px] snap-center bg-[#292929] cursor-pointer
        hover:bg-[#464646] transition-colors duration-[400ms]"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="flex-shrink-0 w-24 h-24 rounded-full object-cover object-center
          lg:w-28 lg:h-28"
          src={urlFor(experience.companyImage).url()}
          alt=""
          width={500}
          height={500}
        />
      </motion.div>
      <div className="mx-auto">
        <h4 className="text-2xl font-light text-left">{experience.position}</h4>
        <p className="text-xl font-bold">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech: image, index) => (
            <Image
              key={index}
              className="h-8 w-8"
              src={urlFor(tech).url()}
              alt=""
              width={500}
              height={500}
            />
          ))}
        </div>
        <p className="text-md text-gray-300 py-5 uppercase">
          Started {experience.startDate} to {experience.endDate}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {experience.summeryPoints.map((point: string, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default ExperienceCard
