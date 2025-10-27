// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const csp = [
      "default-src 'self'",
      "img-src 'self' https: data:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https: data:",
      "script-src 'self' https://vercel-insights.com",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.openai.com https://vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'"
    ].join('; ');

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" }
        ]
      }
    ];
  },
  // small cache bump to invalidate any lingering artifacts
  env: { BUILD_TAG: String(Date.now()) }
};

module.exports = nextConfig;
