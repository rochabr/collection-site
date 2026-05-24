import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    year: z.string().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    signature: z.string().optional(),
    provenance: z.string().optional(),
    acquired: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { works };
