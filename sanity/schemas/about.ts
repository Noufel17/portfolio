import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'about',
  title: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'paragraph',
      title: 'paragraph',
      type: 'string',
    }),
  ],
})
