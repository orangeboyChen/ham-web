/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/2/8 14:07
 */
import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};

export const middleware = (request: NextRequest) => {
	if (request.nextUrl.pathname === '/login') {
		return NextResponse.next();
	}
	if (request.cookies.has('token')) {
		return NextResponse.next();
	}
	return NextResponse.redirect(new URL('/login', request.url));
};
