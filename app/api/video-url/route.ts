import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.VERCEL_BLOB_HERO_VIDEO_URL || 
              process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '';
  
  return NextResponse.json({ url });
}
