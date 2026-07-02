// Curatorial chapters for the home page.
//
// The collection is organized into four chapters. A work's chapter is derived
// from its artist (via the same slug the rest of the site uses — see slugify.ts).
// This is the single source of truth: edit ARTIST_GROUP to recategorize an
// artist, or add a new artist-slug -> ChapterKey entry when a new artist joins.

import type { Locale } from './i18n';

export type ChapterKey = 'abstracao' | 'modernos' | 'popular' | 'contemporaneo';

export interface Chapter {
  key: ChapterKey;
  roman: string;
  labels: Record<Locale, string>;
  blurbs: Record<Locale, string>;
}

// Ordered — this is the order chapters appear on the home page.
export const CHAPTERS: Chapter[] = [
  {
    key: 'abstracao',
    roman: 'I',
    labels: { pt: 'Abstração & Concretismo', en: 'Abstraction & Concretism' },
    blurbs: {
      pt: 'Geometria, movimento e a lição construtiva das décadas de 1950–70.',
      en: 'Geometry, movement and the constructive lesson of the 1950s–70s.',
    },
  },
  {
    key: 'modernos',
    roman: 'II',
    labels: { pt: 'Modernos & Figuração', en: 'Moderns & Figuration' },
    blurbs: {
      pt: 'A figura, a paisagem e o cotidiano brasileiro pelos olhos dos modernos.',
      en: 'The figure, the landscape and Brazilian daily life through modern eyes.',
    },
  },
  {
    key: 'popular',
    roman: 'III',
    labels: { pt: 'Arte Popular & Mestres', en: 'Popular Art & Masters' },
    blurbs: {
      pt: 'Barro, madeira e xilogravura: a tradição viva dos mestres populares.',
      en: 'Clay, wood and woodcut: the living tradition of the popular masters.',
    },
  },
  {
    key: 'contemporaneo',
    roman: 'IV',
    labels: { pt: 'Contemporâneo & Indígena', en: 'Contemporary & Indigenous' },
    blurbs: {
      pt: 'Vozes contemporâneas e indígenas que ampliam o acervo.',
      en: 'Contemporary and Indigenous voices expanding the collection.',
    },
  },
];

// Artist slug (from slugify(artist name)) -> chapter.
export const ARTIST_GROUP: Record<string, ChapterKey> = {
  // I — Abstração & Concretismo
  'abraham-palatnik': 'abstracao',
  'athos-bulcao': 'abstracao',
  'ivan-serpa': 'abstracao',
  'judith-lauand': 'abstracao',
  'lothar-charoux': 'abstracao',
  'niobe-xando': 'abstracao',
  // II — Modernos & Figuração
  'benedito-jose-tobias': 'modernos',
  'carybe': 'modernos',
  'chico-da-silva': 'modernos',
  'clovis-graciano': 'modernos',
  'darel-valenca-lins': 'modernos',
  'djanira-da-motta-e-silva': 'modernos',
  'fulvio-pennacchi': 'modernos',
  'hansen-bahia': 'modernos',
  'ivan-marquetti': 'modernos',
  'marcelo-grassmann': 'modernos',
  'roberto-magalhaes': 'modernos',
  // III — Arte Popular & Mestres
  'bento-de-sume': 'popular',
  'clemilton-silva-vieira': 'popular',
  'jose-antonio-da-silva': 'popular',
  'manezinho-araujo': 'popular',
  'manuel-eudocio': 'popular',
  'mestre-dila': 'popular',
  'mestre-vitalino': 'popular',
  'sylvio-pinto': 'popular',
  'vitalino-filho': 'popular',
  'waldomiro-de-deus': 'popular',
  // IV — Contemporâneo & Indígena
  'barbara-xumaia': 'contemporaneo',
  'denilson-baniwa': 'contemporaneo',
  'emanoel-araujo': 'contemporaneo',
};

// Falls back to 'modernos' for any artist not explicitly mapped.
export function groupForArtist(artistSlug: string): ChapterKey {
  return ARTIST_GROUP[artistSlug] ?? 'modernos';
}
