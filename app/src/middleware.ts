import { NextResponse } from 'next/server';

export async function middleware() {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Origin", "*");

  return res;
}

export const config = {
  matcher: ['/api/:path*'], // Active Paths
};
