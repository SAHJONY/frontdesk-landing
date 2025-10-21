// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Force root -> /en on ANY host (vercel.app or custom)
  if (url.pathname === '/') {
    const to = url.clone();
    to.pathname = '/en';
    return NextResponse.redirect(to, 308);
  }

  // Optional: enforce apex -> www on custom domain only
  if (url.hostname === 'frontdeskagents.com') {
    const to = url.clone();
    to.hostname = 'www.frontdeskagents.com';
    return NextResponse.redirect(to, 308);
  }

  return NextResponse.next();
}

// Run on root and normal pages, skip _next/static, assets, and API
export const config = {
  matcher: ['/', '/((?!_next|api|static|.*\\..*).*)'],
};

