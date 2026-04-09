import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import path from 'path';
import fs from 'fs';

import enMessages from '../messages/en.json';
import frMessages from '../messages/fr.json';
import arMessages from '../messages/ar.json';
import deMessages from '../messages/de.json';

const messagesMap = {
    en: enMessages,
    fr: frMessages,
    ar: arMessages,
    de: deMessages,
};


export default getRequestConfig(async ({ requestLocale }: any) => {
    const locale = await requestLocale ?? "en";

    // Ensure the locale is valid
    const targetLocale = routing.locales.includes(locale as any)
        ? locale
        : routing.defaultLocale;

        console.log("targetLocale", targetLocale)

    // Use absolute path to reach the public folder from the project root
    //const filePath = path.join(process.cwd(), 'public', 'messages', `${targetLocale}.json`);
    //const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));


    /*console.log('Loading messages for locale:', locale);
    const path = `../messages/${locale}.json`;
    console.log('Import path:', path);*/


    return {
        locale: targetLocale,
        messages: messagesMap[locale as keyof typeof messagesMap],
    };
});