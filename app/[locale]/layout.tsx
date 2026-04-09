import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

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

    return (

        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>


            {children}
        </NextIntlClientProvider>

    );
}