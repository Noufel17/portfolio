import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'position',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'companyImage',
      type: 'image',
    }),
    defineField({
      name: 'company',
      title: 'company',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'startDate',
      title: 'startDate',
      type: 'string',
    }),
    defineField({
      name: 'endDate',
      title: 'endDate',
      type: 'string',
    }),
    defineField({
      name: 'summeryPoints',
      title: 'summeryPoints',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
  ],
})
