import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';

export default createMiddleware(routing);


// src/proxy.ts
import { getLocale, getTranslations } from 'next-intl/server';
/*
export async function proxyFetch(endpoint: string, options: RequestInit = {}) {
  const locale = await getLocale();

  const headers = new Headers(options.headers);
  // Tell your backend which language the user is viewing
  headers.set('Accept-Language', locale);
  headers.set('Content-Type', 'application/json');

  if (!process.env.BACKEND_URL) throw new Error('BACKEND_URL not set');


  return fetch(`${process.env.BACKEND_URL}/${endpoint}`, {
    ...options,
    headers,
  });
}
*/
export async function proxyFetch(endpoint: string, options: RequestInit = {}) {
  if (!process.env.BACKEND_URL) throw new Error('BACKEND_URL not set');
  const base = process.env.BACKEND_URL.replace(/\/+$/, '');
  const url = `${base}/${endpoint.replace(/^\/+/, '')}`;

  const locale = await getLocale();
  const headers = new Headers(options.headers || {});
  headers.set('Accept-Language', locale);
  headers.set('Content-Type', 'application/json');

  const controller = options.signal ? undefined : new AbortController();
  const signal = options.signal ?? controller?.signal;
  const timeoutMs = (options as any).timeout ?? 10000;
  const timeout = controller ? setTimeout(() => controller.abort(), timeoutMs) : undefined;

  try {
    return await fetch(url, { ...options, headers, signal });
  } catch (err) {
    (err as Error).message = `proxyFetch failed: ${(err as Error).message} (url=${url})`;
    throw err;
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}


// proxy.ts
export async function getData() {
  // If you try to use t() here, it might fail if not called from an async RSC
  const t = await getTranslations(); 
  return { title: t('title') };
}


export const config = {
  // Match only internationalized pathnames
  //matcher: ['/', '/(en|fr)/:path*']
   //matcher: ['/', '/(de|en|fr)/:path*', '/public/messages/(en|fr)/:path*', '/((?!api|_next|messages|static|.*\\..*).*)']
  //matcher: ['/((?!api|_next|messages|static|.*\\..*).*)']
  //matcher:['/', '/(en|fr)/:path*']
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)'  // Optional: match paths with dots
  ]
};
