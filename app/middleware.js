import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
  const token = request.cookies.get('TMtoken')?.value;
  const url = request.nextUrl.pathname;

  if (!token) {
    // Redirect to login if no token is found
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify and decode the token
    const secretKey = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(token, secretKey);

    // Role-based access control
    const role = decodedToken.role;
    if (url.startsWith('/dashboard/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url));
    }

    if (url.startsWith('/dashboard/user') && role !== 'user') {
      return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url));
    }

    return NextResponse.next(); // Allow access if role matches
  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware to dashboard routes
};
