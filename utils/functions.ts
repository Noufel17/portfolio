import { Skill, Experience, Project, About, ContactInfo } from "../typings"

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
  const data = await res.json()
  const skills: Skill[] = data.skills
  return skills
}
export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
  )
  const data = await res.json()
  const experiences: Experience[] = data.experiences
  return experiences
}
export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
  const data = await res.json()
  const projects: Project[] = data.projects
  return projects
}
export const fetchAbout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`)
  const data = await res.json()
  const about: About = data.about
  return about
}
export const fetchContact = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`)
  const data = await res.json()
  const contactInfo: ContactInfo = data.contactInfo
  return contactInfo
}
