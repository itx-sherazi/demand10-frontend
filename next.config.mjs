/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'zenprospect-production.s3.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'www.zenprospect-production.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  
      },
       {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',        // match your badge server port
        pathname: '/badges/**', // optional: limit to badges path
      },
        {
        protocol: 'https',
        hostname: 'api.intentwire.com',

      },
    ],
  },
  async redirects() {
    return [
      // Redirect /category/[slug] to /[slug]
      {
        source: '/category/:slug*',
        destination: '/:slug*',
        permanent: true, // 301 redirect
      },
      // Redirect all /product/* URLs to homepage for deindexing
      {
        source: '/product/:slug*',
        destination: '/',
        permanent: true, // 301 redirect to help Google deindex
      },
      // Note: Company redirects need dynamic data, so those will stay in middleware
    ];
  },
};

export default nextConfig;
