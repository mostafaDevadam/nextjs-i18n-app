"use client"

'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { locales, defaultLocale } from '../../lib/i18n';
import React from 'react';

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (newLocale: string) => {
    // Persist locale in cookie for server renders
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    // Build path: replace leading locale segment if present
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as any)) segments.shift();
    const base = '/' + [newLocale, ...segments].join('/');
    const search = searchParams ? `?${searchParams.toString()}` : '';
    router.push(base + search);
  };

  return (
    <select value={currentLocale} onChange={(e) => handleChange(e.target.value)}>
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
