import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from 'react';
import { loadLocale } from '../lib/loadLocale';
import LocaleSwitcher from './components/LocaleSwitcher';
import { cookies } from 'next/headers';
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./components/Navbar";
import { getMessages, setRequestLocale } from "next-intl/server";

export const metadata = {
  title: 'Next i18n',
};

type Props = {
   children: ReactNode; 
   params: Promise<{ locale: string }>
  
  };

// Using segment param `lang` via folder-based routing is optional.
// Here we will rely on Next.js i18n routing (locale detection) and access locale via headers/cookies.
export default async function RootLayout({ children, params }: Props) {

  const { locale } = await params;
    setRequestLocale(locale);
 const messages = await getMessages();


  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
          <Navbar />
          <main style={{ padding: 12 }}>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
