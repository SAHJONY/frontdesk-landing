// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } },

  // ✅ All redirects use path-only `source`
  async redirects() {
    return [
      // Example: /vt/* → external site
      { source: '/vt/:path*', destination: 'https://www.frontdeskagents.com/vt/:path*', permanent: true },
      // Optional: handle www → apex in code (you can also do this in Vercel → Domains)
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.frontdeskagents.com' }],
      //   destination: 'https://frontdeskagents.com/:path*',
      //   permanent: true
      // },
    ];
  },

  // ✅ Security headers applied uniformly to all routes
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        { key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
      ],
    }];
  },
};
module.exports = nextConfig;
