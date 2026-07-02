export type Locale = 'pt' | 'en';
export const DEFAULT_LOCALE: Locale = 'pt';
export const LOCALES: Locale[] = ['pt', 'en'];

export const strings = {
  pt: {
    works: 'Obras',
    artists: 'Artistas',
    back_collection: '← Acervo',
    back_artists: '← Artistas',
    medium: 'Técnica',
    dimensions: 'Dimensões',
    edition: 'Edição',
    signature: 'Assinatura',
    framing: 'Moldura',
    provenance: 'Proveniência',
    catalog_reference: 'Referência catalográfica',
    acquisition: 'Aquisição',
    sources: 'Fontes',
    in_collection: 'No acervo',
    no_image: 'Sem imagem',
    image_viewer: 'Visualizador de imagens',
    previous_image: 'Imagem anterior',
    next_image: 'Próxima imagem',
    close: 'Fechar',
    work_singular: 'obra',
    work_plural: 'obras',
    born_prefix: 'n.',
    // Home + chrome
    tagline: 'Arte Brasileira',
    eyebrow: 'Acervo particular de arte brasileira',
    hero_head: 'Um panorama vivo da arte brasileira — do concretismo aos mestres populares.',
    hero_body: 'Reunida ao longo de décadas, a coleção percorre a abstração construtiva, a figuração moderna e a força da arte popular — um retrato plural da criação brasileira do século XX aos dias de hoje.',
    works_label: 'obras',
    artists_label: 'artistas',
    artists_intro: 'Trinta artistas entre modernos, concretos, mestres populares e vozes contemporâneas e indígenas.',
    zoom_hint: 'Clique para ampliar',
  },
  en: {
    works: 'Works',
    artists: 'Artists',
    back_collection: '← Collection',
    back_artists: '← Artists',
    medium: 'Medium',
    dimensions: 'Dimensions',
    edition: 'Edition',
    signature: 'Signature',
    framing: 'Framing',
    provenance: 'Provenance',
    catalog_reference: 'Catalog reference',
    acquisition: 'Acquisition',
    sources: 'Sources',
    in_collection: 'In the collection',
    no_image: 'No image',
    image_viewer: 'Image viewer',
    previous_image: 'Previous image',
    next_image: 'Next image',
    close: 'Close',
    work_singular: 'work',
    work_plural: 'works',
    born_prefix: 'b.',
    // Home + chrome
    tagline: 'Brazilian Art',
    eyebrow: 'A private collection of Brazilian art',
    hero_head: 'A living panorama of Brazilian art — from concretism to the popular masters.',
    hero_body: 'Assembled over decades, the collection spans constructive abstraction, modern figuration and the force of popular art — a plural portrait of Brazilian creation from the 20th century to today.',
    works_label: 'works',
    artists_label: 'artists',
    artists_intro: 'Thirty artists spanning moderns, concretists, popular masters and contemporary and Indigenous voices.',
    zoom_hint: 'Click to zoom',
  },
} as const;

export function t(locale: Locale) {
  return strings[locale];
}

export function formatMonthYear(date: Date, locale: Locale): string {
  const tag = locale === 'pt' ? 'pt-BR' : 'en-US';
  return date.toLocaleDateString(tag, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function workCount(n: number, locale: Locale): string {
  const s = strings[locale];
  return `${n} ${n === 1 ? s.work_singular : s.work_plural}`;
}

export function acquisitionLine(
  house: string | undefined,
  date: Date | undefined,
  locale: Locale,
): string | null {
  if (!house && !date) return null;
  const parts: string[] = [];
  if (house) parts.push(house);
  if (date) parts.push(formatMonthYear(date, locale));
  return parts.join(', ');
}

// Map a path under the current locale to its counterpart in the other locale.
// e.g. '/collection-site/artists/ivan-serpa/' (PT) <-> '/collection-site/en/artists/ivan-serpa/' (EN)
export function localizedPath(
  currentPath: string,
  targetLocale: Locale,
  base: string,
): string {
  const normalizedBase = base.replace(/\/$/, '');
  // Strip base prefix
  let rest = currentPath.startsWith(normalizedBase)
    ? currentPath.slice(normalizedBase.length)
    : currentPath;
  // Strip leading /en if present
  if (rest.startsWith('/en/') || rest === '/en') {
    rest = rest.slice(3) || '/';
  }
  if (!rest.startsWith('/')) rest = '/' + rest;
  const prefix = targetLocale === DEFAULT_LOCALE ? '' : `/${targetLocale}`;
  return `${normalizedBase}${prefix}${rest}`;
}
