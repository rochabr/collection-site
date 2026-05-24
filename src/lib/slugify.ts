// Strip diacritics (e.g. "Athos Bulcão" -> "Athos Bulcao") then kebab-case.
const DIACRITICS = /[̀-ͯ]/g;
const NON_ALNUM = /[^a-z0-9]+/g;

export function slugify(name: string): string {
  return name
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .toLowerCase()
    .replace(NON_ALNUM, '-')
    .replace(/(^-|-$)/g, '');
}
