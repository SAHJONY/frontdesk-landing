// middleware.ts — global middleware for security headers and localization redirects
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Security headers (enforcing CSP)
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; frame-ancestors 'none';"
  );

  // Redirect root "/" to localized "/en" (fallback en/es)
  if (req.nextUrl.pathname === '/') {
    const locale = req.headers.get('accept-language')?.split(',')[0]?.slice(0,2) || 'en';
    const target = (locale === 'en' || locale === 'es') ? `/${\n      locale}` : '/en';
    return NextResponse.redirect(new URL(target, req.url), 308); // permanent
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);

  // Root → /en
  if (url.pathname === "/") {
    url.pathname = "/en";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/:path*"] };
