import { getTranslations } from 'next-intl/server';
import { loadLocale } from '../../lib/loadLocale';

export default async function About({ params }: { params?: any }) {
  
const t = await getTranslations();

  return (
    <div>
      <h2>{t("greeting")}</h2>
      <p>This is the about page.</p>
    </div>
  );
}
