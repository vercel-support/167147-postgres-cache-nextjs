import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const theDate = Date();
  console.log(theDate);

  const response = await sql`SELECT NOW()`;

  // Use Response rather than NextResponse here to disable caching
  return NextResponse.json({ now: response.rows[0].now });
}
