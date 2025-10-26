import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()

  // Redirect apex domain to www
  if (url.hostname === 'frontdeskagents.com') {
    url.hostname = 'www.frontdeskagents.com'
    return NextResponse.redirect(url, 308)
  }

  // Redirect root to /en
  if (url.pathname === '/') {
    url.pathname = '/en'
    return NextResponse.redirect(url, 308)
  }

  // Add security headers
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; frame-ancestors 'none';"
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - healthz (health check)
     * - api (API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|healthz|api).*)',
  ],
}

