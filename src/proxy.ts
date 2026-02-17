import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
    '/cart',
    '/payment',
    '/orders',
]
const authRoutes = [
    '/login',
    '/signup'
]

export function proxy(request:NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value || null;

    const isAuthenticated = !!token;

    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname === route || pathname.startsWith(`${route}/`),
    );

    const isAuthRoute = authRoutes.some((route) =>
        route === pathname || pathname.startsWith(`${route}/`)
    );

    if (isProtectedRoute && !isAuthenticated) {
        const loginUrl=new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    if (isAuthRoute && isAuthenticated) {
        const homeUrl = new URL ("/", request.url);
        return NextResponse.redirect(homeUrl)
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/payment/:path*',
        '/cart/:path*',
        '/login',
        '/signup'
    ],
};


