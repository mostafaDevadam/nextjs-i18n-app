import { getLocale, getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { getID } from '@/lib/id';
import { fetchData } from '../api/user.api';

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

    const id = await getID('user_id');
    console.log("id", id)

  const data = await (await fetchData()).data
  console.log("data:", data.length)

    return (
        <div>
            <LanguageSwitcher />
           {/* <Link href="/" locale={"en"}>en</Link> {" | "}
            <Link href="/" locale={"fr"}>fr</Link>*/}
            <h1>{t("greeting")}</h1> {data.length ?? 0} - page


        </div>
    )
}

export default HomePage