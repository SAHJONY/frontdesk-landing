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

// Skip Next internals, assets, and files with extensions
export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
