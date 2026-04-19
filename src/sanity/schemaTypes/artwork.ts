import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'artwork',
  title: 'Artworks',
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
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    // New: Medium for Filtering
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: [
          { title: 'Oil Painting', value: 'oil' },
          { title: 'Acrylic Painting', value: 'acrylic' },
          { title: 'Sketch', value: 'sketch' },
          { title: 'Watercolor', value: 'watercolor' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // Visibility Toggles
    defineField({
      name: 'showInGallery',
      title: 'Show in Gallery',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isAvailable',
      title: 'Available for Purchase',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Main Artwork Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (PHP)',
      type: 'number',
      hidden: ({ document }) => !document?.isAvailable,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
  ],
});