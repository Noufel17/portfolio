import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactinfo',
  title: 'contactinfo',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'email',
      type: 'string',
    }),
    defineField({
      name: 'addresse',
      title: 'addresse',
      type: 'string',
    }),
  ],
})
