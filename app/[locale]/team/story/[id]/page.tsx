import { fetchData } from '@/app/api/user.api';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { getID } from '@/lib/id';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function About({ params }: { params?: any }) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const id = await getID('user_id');
  console.log("id", id)

  const data = await (await fetchData()).data

  return (
    <div>

      <h2>{t("greeting")}</h2>
      <p>This is the team story page.{data.length ?? 0}</p>
    </div>
  );
}
