"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({
        locale
    }: {
       locale: string
    }) => {
  const t = useTranslations("nav")
  return (
     <header className="flex flex-row gap-5" style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
          <h1>App</h1>
          <nav className="flex flex-row gap-5">
            <a href={`/${locale}/`}>{t("home")}</a>
            <a href={`/${locale}/about`}>{t("about")}</a>
            <a href={`/${locale}/contact`}>{t("contact")}</a>
            {/*<Link href="/" locale={"en"}>en</Link>
            <Link href="/" locale={"fr"}>fr</Link>*/}
          </nav>
          <div style={{ float: 'right' }}>

            <LanguageSwitcher />
          
           
          </div>
        </header>
  )
}

export default Navbar