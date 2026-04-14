import { getTranslations } from 'next-intl/server';
import { loadLocale } from '../lib/loadLocale';
import { redirect } from 'next/navigation';

export default async function Home({ params }: { params?: any }) {

  redirect('/en');
  
const t = await getTranslations();


  return (
    <div>
      <h2>{t("greeting")}</h2>
      <p>Welcome to the example Next.js i18n app.</p>
    </div>
  );
}
