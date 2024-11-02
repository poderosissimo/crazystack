/** @type {import('next').NextConfig} */
let nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      { 
        protocol:"https",
      hostname:"assets.aceternity.com"
      },{hostname:"aceternity.com",protocol:"https"}
    ],
  },
};
export default nextConfig;
