/** @type {import('next').NextConfig} */
const isProd = process.env.VERCEL_ENV === 'production';

const cspDirectives = [
  // Keep this minimal; expand connect-src only to what you actually need.
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' https: data:",
  "font-src 'self' https: data:",
  "style-src 'self' 'unsafe-inline'",
  // No 'unsafe-eval' in production. For preview/dev you can add vercel.live if needed.
  `script-src 'self'${isProd ? '' : " https://vercel.live"}`,
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
].join('; ');

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: cspDirectives },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

