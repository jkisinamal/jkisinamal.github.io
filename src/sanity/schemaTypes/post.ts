import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
    defineField({
      name: 'mainImage',
      title: 'Thumbnail (Required)',
      type: 'image',
      options: { hotspot: true },
      description: 'Used for the blog list and as a fallback if video fails.',
    }),
    defineField({
      name: 'videoSource',
      title: 'Video Source',
      type: 'string',
      options: {
        list: [
          { title: 'External Link (YouTube, Drive, etc.)', value: 'link' },
          { title: 'Direct Upload to Sanity', value: 'upload' },
        ],
        layout: 'radio',
      },
      initialValue: 'link',
    }),
    defineField({
      name: 'videoUrl',
      title: 'External Video URL',
      type: 'url',
      description: 'Paste YouTube, Vimeo, or Google Drive (Direct Link) here.',
      hidden: ({ parent }) => parent?.videoSource !== 'link',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video Upload',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.videoSource !== 'upload',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
});