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
    description: z.string(),
    thumbnail: image(),
    technologies: z.array(z.string()),
    order: z.number().default(0), // Denne linjen må være med!
    customer: z.string().optional(), // Valgfri hvis du vil beholde den
    publishDate: z.date().optional(),
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

// src/content/config.ts
const articles = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().default("Uten tittel"),
    description: z.string().default("Ingen beskrivelse tilgjengelig"),
    publishDate: z.coerce.date(), // 'coerce' prøver å fikse dato-formatering automatisk
    image: image().optional(),
    tags: z.array(z.string()).default(['Generelt']),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'services': services,
  'projects': projects,
  'features': features,
  'articles': articles
};