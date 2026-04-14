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
      <div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => redirect('/en')}>Start</button>
      </div>
    </div>
  );
}
