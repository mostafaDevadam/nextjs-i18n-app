import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar';
import { get } from 'http';
import { getID } from '@/lib/id';
import { getToken } from '@/lib/token';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(
    {
        children,
        params
    }: {
        children: React.ReactNode;
        params: Promise<{ locale: string }>;
    }

) {
    const { locale } = await params;
    setRequestLocale(locale);

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();

    const id = await getID('user_id');
    console.log("id", id)

    const token = await getToken("access_token")
    console.log("token", token)

    return (
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
            <Navbar locale={locale} />
          <main style={{ padding: 12 }}>{children}</main>
        </NextIntlClientProvider>
    );
}