import React from "react"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { ContactInfo } from "@/typings"
type Props = {
  contactInfo: ContactInfo
}
type input = {
  name: string
  email: string
  subject: string
  message: string
}

function Contact({ contactInfo }: Props) {
  const { register, handleSubmit } = useForm<input>()
  const onSubmit: SubmitHandler<input> = (formData) => {}
  return (
    <div
      className="h-screen flex flex-col relative md:flex-row justify-center gap-4
   items-center mx-auto max-w-7xl text-center md:text-left px-10"
    >
      <div className="footer-gradient" />
      <h3 className="uppercase text-2xl tracking-[10px] top-24 absolute text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl text-center font-semi-bold">Lets talk!</h4>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-center items-center space-x-3">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A]/50 animate-pulse" />
            <p className="text-xl">{contactInfo.phone}</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A]/50 animate-pulse" />
            <p className="text-xl">{contactInfo.email}</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A]/50 animate-pulse" />
            <p className="text-xl">{contactInfo.addresse}</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 mx-auto w-fit"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            {...register("name")}
            placeholder="name"
            className="contact-input"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="email"
            className="contact-input"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="subject"
          className="contact-input"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="message"
          className="contact-input"
        />
        <button className="text-black bg-[#F7AB0A] text-lg rounded-[8px] font-bold  h-16">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
