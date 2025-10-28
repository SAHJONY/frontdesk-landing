// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const host = req.headers.get('host') || '';

  // Apex → www
  if (host === 'frontdeskagents.com') {
    url.host = 'www.frontdeskagents.com';
    return NextResponse.redirect(url, 308);
  }

  // Root → /en
  if (url.pathname === '/') {
    url.pathname = '/en';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Skip Next internals, assets, and files with extensions.
// Explicitly exclude /healthz, /robots.txt, and /sitemap.xml for robustness.
export const config = {
  matcher: [
    // Skip next.js internals, static files, and API routes
    '/((?!_next|api|static|favicon.ico|robots.txt|sitemap.xml|healthz).*)',
  ],
};
