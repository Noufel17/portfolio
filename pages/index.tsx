import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import {
  fetchAbout,
  fetchContact,
  fetchExperience,
  fetchProjects,
  fetchSkills,
} from "@/utils/functions"
import {
  Experience as experience,
  About as about,
  Project as project,
  Skill as skill,
  ContactInfo as contactInfo,
} from "@/typings"
import { GetStaticProps } from "next"
type Props = {
  experiences: experience[]
  about: about
  skills: skill[]
  contactInfo: contactInfo
  projects: project[]
}

export default function Home({
  experiences,
  about,
  skills,
  contactInfo,
  projects,
}: Props) {
  return (
    <div
      className=" bg-primary-black text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar
    scrollbar-thumb-[#F7AB0A]/50 scroll-smooth"
    >
      <Head>
        <title>Noufel website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/noufel.png" />
      </Head>
      <Header />
      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About about={about} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact contactInfo={contactInfo} />
      </section>
      <footer className="sticky bottom-5 cursor-pointer w-full">
        <div className="flex justify-center items-center">
          <Link href="#hero">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="/noufel.png"
              alt=""
              width={500}
              height={500}
            />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: experience[] = await fetchExperience()
  const about: about = await fetchAbout()
  const skills: skill[] = await fetchSkills()
  const contactInfo: contactInfo = await fetchContact()
  const projects: project[] = await fetchProjects()

  return {
    props: {
      experiences,
      about,
      skills,
      contactInfo,
      projects,
    },
    revalidate: 5,
  }
}
