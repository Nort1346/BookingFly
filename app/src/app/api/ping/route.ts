import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Pong!' });
}

export async function POST() {
  return NextResponse.json({ message: 'Pong!' });
}
