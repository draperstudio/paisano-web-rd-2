/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "media.withdraper.com" }],
  },
}

export default nextConfig
