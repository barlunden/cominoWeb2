import { defineCollection, z } from 'astro:content';

// 1. Definerer eit felles skjema for CTA-en for å halde koden DRY (Don't Repeat Yourself)
const ctaSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  secondaryText: z.string().optional(),
  secondaryLink: z.string().optional(),
}).optional();

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    cta: ctaSchema, // Gir kvar teneste moglegheit for unik CTA
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: image(),
    technologies: z.array(z.string()),
    order: z.number().default(0),
    customer: z.string().optional(),
    publishDate: z.date().optional(),
    featured: z.boolean().default(false),
    cta: ctaSchema, // For prosjektspesifikke avslutningar
  }),
});

const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    iconName: z.string(),
    order: z.number()
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    image: image().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    cta: ctaSchema, // Skreddarsydd bodskap per artikkel
  }),
});

export const collections = {
  'services': services,
  'projects': projects,
  'features': features,
  'articles': articles
};