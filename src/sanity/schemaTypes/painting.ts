import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'painting',
  title: 'Paintings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Artwork',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gallery (Showcase Only)', value: 'gallery' },
          { title: 'Available for Purchase', value: 'available' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Artwork Image',
      type: 'image',
      options: {
        hotspot: true, // Allows the artist to crop the thumbnail visually
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'A brief story or technical detail (e.g., Oil on Canvas, 2026).',
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      hidden: ({ document }) => document?.category !== 'available',
      description: 'Only shown for items in the "Available" category.',
    }),
    defineField({
      name: 'details',
      title: 'Full Details',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional long-form content about the piece.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});