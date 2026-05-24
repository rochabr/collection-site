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
    edition: z.string().optional(),
    framed: z.string().optional(),
    provenance: z.string().optional(),
    catalog_reference: z.string().optional(),
    auction_house: z.string().optional(),
    auction_date: z.coerce.date().optional(),
    lot_number: z.string().optional(),
    hammer_brl: z.number().optional(),
    premium_brl: z.number().optional(),
    images: z.array(z.string()).optional(),
  }),
});

// Artist entries are keyed `<locale>/<slug>`, e.g. `pt/ivan-serpa`, `en/ivan-serpa`.
const artists = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/artists' }),
  schema: z.object({
    name: z.string(),
    born: z.string().optional(),
    died: z.string().optional(),
    birthplace: z.string().optional(),
    nationality: z.string().optional(),
    movement: z.string().optional(),
    portrait: z.string().optional(),
    portrait_credit: z.string().optional(),
    hero_image: z.string().optional(),
    hero_position: z.string().optional(),
    hero_size: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

export const collections = { works, artists };
