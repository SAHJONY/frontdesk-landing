import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Redirect only the root path to /en. Do not touch anything else.
export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === '/') {
    url.pathname = '/en';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // run only on root
};

