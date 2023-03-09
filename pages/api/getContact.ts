import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { ContactInfo } from "../../typings"
const query = groq`*[_type == "contactinfo"][0]`
type Data = {
  contactInfo: ContactInfo
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const contactInfo: ContactInfo = await sanityClient.fetch(query)
  res.status(200).json({ contactInfo })
}
