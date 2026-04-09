'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentPath = usePathname();
  const [state, setState] = useState<string>(currentLocale);


  const handleChange = (newLocale: string) => {
    // Option 1: Simple replace (keeps the same path)
    //router.replace(pathname, { locale: newLocale });
    //router.push(pathname, { locale: newLocale });
    //router.refresh()
    console.log("newLocale", newLocale)

    //if (newLocale === currentLocale) return;
    setState(newLocale);
    console.log({newLocale, currentLocale, currentPath, c: currentPath})

    if(currentPath?.split('/')[2] == undefined && currentPath?.split('/')[1] != undefined){
      console.log("currentPath?.split('/')[2]", currentPath)
      router.replace("/"+currentPath?.split('/')[1], { locale: newLocale });
    }

    if(newLocale && currentPath?.split('/')[2] != undefined) {
      router.replace("/"+currentPath?.split('/')[2], { locale: newLocale });
    }

    

    //router.push(cleanPath, { locale: newLocale });

    

    

    // Option 2: If you need to preserve query params
    // const currentPath = pathname;
    // router.replace(currentPath, { locale: newLocale });
  };


  // Remove the current locale from the path to get the clean path
  const getCleanPath = () => {
    console.log("currentPath", currentPath)
    // Remove /en or /fr from the start of the path
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2,3}/, '');
    console.log("pathWithoutLocale", pathWithoutLocale)
    return pathWithoutLocale || '/';
    //return pathWithoutLocale.startsWith('/') ? pathWithoutLocale : '/' + pathWithoutLocale;

  };

  //const cleanPath = getCleanPath();

  return (
    <div className="flex gap-2">
      {/* <Link 
        href={cleanPath} 
        locale="en"
        style={{ 
          fontWeight: currentLocale === 'en' ? 'bold' : 'normal',
          textDecoration: 'none'
        }}
      >
        English
      </Link>
      <Link 
        href={cleanPath} 
        locale="fr"
        style={{ 
          fontWeight: currentLocale === 'fr' ? 'bold' : 'normal',
          textDecoration: 'none'
        }}
      >
        Français
      </Link>*/}
     {/* <button
        onClick={() => handleChange('en')}
        className={`px-3 py-1 rounded ${currentLocale === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200'
          }`}
      >
        English
      </button>
      <button
        onClick={() => handleChange('fr')}
        className={`px-3 py-1 rounded ${currentLocale === 'fr'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200'
          }`}
      >
        Français
      </button>
      <button
        onClick={() => handleChange('ar')}
        className={`px-3 py-1 rounded ${currentLocale === 'ar'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200'
          }`}
      >
        العربية
      </button>*/}

      <select value={state} defaultValue={currentLocale} onChange={(e) => handleChange(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="ar">العربية</option>

      </select>
    </div>
  );
}