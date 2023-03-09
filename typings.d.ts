interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}
interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface Experience extends SanityBody {
  _type: "experience"
  position: string
  companyImage: Image
  company: string
  technologies: Image[]
  startDate: string
  endDate: string
  summeryPoints: string[]
}
export interface About extends SanityBody {
  paragraph: string
}
export interface Project extends SanityBody {
  image: Image
  title: string
  technologies: Image[]
  description: string
}
export interface Skill extends SanityBody {
  name: string
  image: Image
  proficiency: number
}
export interface ContactInfo extends SanityBody {
  phone: string
  email: string
  addresse: string
}
