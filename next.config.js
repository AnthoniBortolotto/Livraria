/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src '*';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
  
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "localhost" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
