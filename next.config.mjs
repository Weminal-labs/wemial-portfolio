/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'harryph.notion.site',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;