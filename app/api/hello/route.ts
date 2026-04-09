import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { loadLocale } from '../../../lib/loadLocale';

export async function GET(req: Request) {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  const locale = cookieLocale ?? 'en';
  const messages = await loadLocale(locale);
  return NextResponse.json({ message: messages.greeting ?? 'Hello' });
}
