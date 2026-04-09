import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function About({ params }: { params?: any }) {

   const { locale } = await params;
   setRequestLocale(locale);
  
const t = await getTranslations();

  return (
    <div>
      <LanguageSwitcher />
      <h2>{t("greeting")}</h2>
      <p>This is the about page.</p>
    </div>
  );
}
