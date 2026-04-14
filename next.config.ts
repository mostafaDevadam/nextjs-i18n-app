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

 
const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        // Any request to '/api/backend/*' in your app...
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`, // Your backend URL
      },
    ];
  },
};
 
const withNextIntl = createNextIntlPlugin({requestConfig: "./i18n/request.ts"});
export default withNextIntl(nextConfig);