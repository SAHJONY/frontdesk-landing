// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';

  // Only on www root
  if (host === 'www.frontdeskagents.com' && url.pathname === '/') {
    const dest = new URL('/en', url);
    return NextResponse.redirect(dest, { status: 308 });
  }

  // Let everything else pass through
  return NextResponse.next();
}

export const config = {
  // run only on the root path requests
  matcher: ['/'],
};
