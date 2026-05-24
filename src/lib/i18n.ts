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
