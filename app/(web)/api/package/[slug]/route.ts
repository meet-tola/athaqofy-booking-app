import { NextResponse } from 'next/server';
import { getPackage } from '@/lib/apis';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const pkg = await getPackage(slug);
  return NextResponse.json(pkg);
}
