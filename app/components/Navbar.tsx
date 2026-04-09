"use client";

import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
     <header className="flex flex-row gap-5" style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
          <h1>App</h1>
          <nav className="flex flex-row gap-5">
            <a href={`/`}>home</a>
            <a href={`/about`}>about</a>
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