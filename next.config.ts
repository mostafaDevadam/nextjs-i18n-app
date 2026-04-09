import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/*
const nextConfig = {
  
  
 i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
*/

 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin({requestConfig: "./i18n/request.ts"});
export default withNextIntl(nextConfig);