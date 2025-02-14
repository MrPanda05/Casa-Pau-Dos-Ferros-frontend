import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    //domains: ['i.imgur.com', 'imgur.com'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**.imgur.com',
        pathname: '/**',
        port: '',
        
      }
    ] 
  },
};

export default nextConfig;
