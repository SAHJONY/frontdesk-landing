import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabaseServer";

export async function GET() {
  try {
    const supa = getSupabaseServer();
    // Lightweight call to ensure the client works
    const { data: resp, error } = await supa.from("pg_tables" as any).select("schemaname").limit(1);
    
    // If error is null, or if it's a benign error (like anon can't read), we consider envs loaded.
    const ok = !error || (error.message.includes("permission denied") || error.message.includes("no such table"));

    return NextResponse.json({ ok: ok, error: error?.message ?? null });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}
