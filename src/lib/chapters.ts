// Curatorial chapters for the home page.
//
// The collection is organized into five chapters. A work's chapter is derived
// from its artist (via the same slug the rest of the site uses — see slugify.ts).
// This is the single source of truth: edit ARTIST_GROUP to recategorize an
// artist, or add a new artist-slug -> ChapterKey entry when a new artist joins.

import type { Locale } from './i18n';

export type ChapterKey =
  | 'construtivos'
  | 'modernos'
  | 'graficos'
  | 'populares'
  | 'contemporaneos';

export interface Chapter {
  key: ChapterKey;
  roman: string;
  labels: Record<Locale, string>;
  blurbs: Record<Locale, string>;
}

// Ordered — this is the order chapters appear on the home page.
export const CHAPTERS: Chapter[] = [
  {
    key: 'construtivos',
    roman: 'I',
    labels: {
      pt: 'Concretos, Cinéticos & Construtivos',
      en: 'Concrete, Kinetic & Constructive',
    },
    blurbs: {
      pt: 'Geometria, movimento e construção — a lição concreta e cinética das décadas de 1950–70.',
      en: 'Geometry, movement and construction — the concrete and kinetic lesson of the 1950s–70s.',
    },
  },
  {
    key: 'modernos',
    roman: 'II',
    labels: {
      pt: 'Modernos & a Figura Brasileira',
      en: 'Moderns & the Brazilian Figure',
    },
    blurbs: {
      pt: 'A figura, a paisagem e o cotidiano pelos olhos dos modernistas brasileiros.',
      en: "The figure, the landscape and daily life through the eyes of Brazil's modernists.",
    },
  },
  {
    key: 'graficos',
    roman: 'III',
    labels: {
      pt: 'Gravadores & Desenhistas',
      en: 'Printmakers & Draughtsmen',
    },
    blurbs: {
      pt: 'A tradição gráfica brasileira: gravura, desenho e a força da linha.',
      en: "Brazil's graphic tradition: printmaking, drawing and the power of line.",
    },
  },
  {
    key: 'populares',
    roman: 'IV',
    labels: {
      pt: 'Mestres Populares: Barro, Madeira & Cordel',
      en: 'Popular Masters: Clay, Wood & Cordel',
    },
    blurbs: {
      pt: 'Barro do Alto do Moura, madeira policromada e xilogravura de cordel — a tradição viva do Nordeste.',
      en: 'Clay from Alto do Moura, painted wood and cordel woodcut — the living tradition of the Northeast.',
    },
  },
  {
    key: 'contemporaneos',
    roman: 'V',
    labels: {
      pt: 'Naïfs & Vozes Contemporâneas',
      en: 'Naïfs & Contemporary Voices',
    },
    blurbs: {
      pt: 'Autodidatas, pintura naïf e vozes contemporâneas e indígenas que ampliam o acervo.',
      en: 'Self-taught painters, naïf art and the contemporary and Indigenous voices expanding the collection.',
    },
  },
];

// Artist slug (from slugify(artist name)) -> chapter.
export const ARTIST_GROUP: Record<string, ChapterKey> = {
  // I — Concretos, Cinéticos & Construtivos
  'abraham-palatnik': 'construtivos',
  'athos-bulcao': 'construtivos',
  'ivan-serpa': 'construtivos',
  'judith-lauand': 'construtivos',
  'lothar-charoux': 'construtivos',
  'niobe-xando': 'construtivos',
  'emanoel-araujo': 'construtivos',
  // II — Modernos & a Figura Brasileira
  'fulvio-pennacchi': 'modernos',
  'clovis-graciano': 'modernos',
  'sylvio-pinto': 'modernos',
  'djanira-da-motta-e-silva': 'modernos',
  'benedito-jose-tobias': 'modernos',
  'ivan-marquetti': 'modernos',
  // III — Gravadores & Desenhistas
  'marcelo-grassmann': 'graficos',
  'darel-valenca-lins': 'graficos',
  'roberto-magalhaes': 'graficos',
  'hansen-bahia': 'graficos',
  'carybe': 'graficos',
  // IV — Mestres Populares: Barro, Madeira & Cordel
  'mestre-vitalino': 'populares',
  'vitalino-filho': 'populares',
  'manuel-eudocio': 'populares',
  'clemilton-silva-vieira': 'populares',
  'bento-de-sume': 'populares',
  'mestre-dila': 'populares',
  'chico-da-silva': 'populares',
  // V — Naïfs & Vozes Contemporâneas
  'jose-antonio-da-silva': 'contemporaneos',
  'manezinho-araujo': 'contemporaneos',
  'barbara-xumaia': 'contemporaneos',
  'waldomiro-de-deus': 'contemporaneos',
  'denilson-baniwa': 'contemporaneos',
};

// Falls back to 'modernos' for any artist not explicitly mapped.
export function groupForArtist(artistSlug: string): ChapterKey {
  return ARTIST_GROUP[artistSlug] ?? 'modernos';
}
