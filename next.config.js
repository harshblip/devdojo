/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasstorage.googleapis.com",
      "looper.com"
    ]
  }
}
