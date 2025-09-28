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
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',        // match your badge server port
        pathname: '/uploads/listing-images/**', // optional: limit to badges path
      },
       // Production API (live)
      {
        protocol: 'https',
        hostname: 'api.demand10.com',
        pathname: '/uploads/listing-images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.demand10.com',
        pathname: '/badges/**',
      },
    ],
  },

};

export default nextConfig;
