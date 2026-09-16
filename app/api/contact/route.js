import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log("Rush Track contact enquiry:", body);
  return NextResponse.json({ ok: true });
}
