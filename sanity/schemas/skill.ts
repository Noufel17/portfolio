import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'proficiency',
      title: 'proficiency',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
})
