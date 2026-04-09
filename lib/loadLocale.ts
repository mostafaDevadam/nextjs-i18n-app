import fs from 'fs';
import path from 'path';

export async function loadLocale(locale: string, namespace = 'common') {
  // During server render, read from filesystem for best performance
  try {
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
      const raw = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(raw);
    } else {
      // Client: fetch file
      const res = await fetch(`/locales/${locale}/${namespace}.json`);
      return await res.json();
    }
  } catch (e) {
    console.error('Failed to load locale', locale, namespace, e);
    return {};
  }
}
