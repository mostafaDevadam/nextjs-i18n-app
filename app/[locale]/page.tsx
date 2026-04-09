import { getLocale, getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';

type Props = {
    params: Promise<{ locale: string }>;
};



const HomePage = async ({ params }: Props) => {

    const { locale } = await params;
    console.log("locale before:", locale)
    setRequestLocale(locale);
     console.log("locale after:", locale)

    const t = await getTranslations();

    const messages = await getMessages()

    console.log("locale messages", messages)
    console.log("locale locale", locale)

    return (
        <div>
            <LanguageSwitcher />
            <Link href="/" locale={"en"}>en</Link> {" | "}
            <Link href="/" locale={"fr"}>fr</Link>
            <h1>{t("greeting")}</h1>  - page


        </div>
    )
}

export default HomePage