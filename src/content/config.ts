import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content', // Brukar .md eller .mdx filer
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    customer: z.string(),
    description: z.string(),
    // Astro optimaliserer bildet automatisk via denne referansen
    thumbnail: image(), 
    tags: z.array(z.string()),
    publishDate: z.date(),
    featured: z.boolean().default(false),
  }),
});
// src/content/config.ts
const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    iconName: z.string(), // Navnet på ikonet vi skal tegne
    order: z.number()
  }),
});

export const collections = {
  'services': services,
  'projects': projects,
  'features': features,
};