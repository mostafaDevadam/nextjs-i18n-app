import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';

export default createMiddleware(routing);


// src/proxy.ts
import { getLocale, getTranslations } from 'next-intl/server';

export async function proxyFetch(endpoint: string, options: RequestInit = {}) {
  const locale = await getLocale();

  const headers = new Headers(options.headers);
  // Tell your backend which language the user is viewing
  headers.set('Accept-Language', locale);

  return fetch(`${process.env.BACKEND_URL}${endpoint}`, {
    ...options,
    headers,
  });
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
