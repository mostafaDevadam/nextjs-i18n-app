"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import Link from "next/link";

const Navbar = ({
  locale
}: {
  locale: string
}) => {
  const [state, setState] = useState<string>(locale);
  const t = useTranslations("nav")

  const links = [
    {id: 1, path: "" , title: t("home")},
    {id: 2, path: "about", title: t("about")},
    {id: 3, path: "contact", title: t("contact")},
    {id: 4, path: "team/contact" , title: t("team-contact")},
    {id: 5, path: "team/story/1", title: t("team-story")}
  ]
  return (
    <header className="flex flex-row gap-5" style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <h1>App</h1>
      <nav className="flex flex-row gap-5">
        {links.map((l) => <Link key={l.id} href={`/${state}/${l.path}`}>{l.title}</Link>)}
        {/*links.map((l) => <a key={l.id} href={`/${state}/${l.path}`}>{l.title}</a>)*/}
        {/*<a href={`/${state}/`}>{t("home")}</a>
        <a href={`/${state}/about`}>{t("about")}</a>
        <a href={`/${state}/contact`}>{t("contact")}</a>
        <a href={`/${state}/team/contact`}>{t("team-contact")}</a>
        <a href={`/${state}/team/story/${1}`}>{t("team-story")}</a>*/}
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