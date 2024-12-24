import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const isAuthenticated = request.cookies.get('authState');
  // console.log("🚀 ~ middleware ~ isAuthenticated:", isAuthenticated);
  // const { pathname } = new URL(request.url);

  // if (!isAuthenticated && !['/login', '/register'].includes(pathname)) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};