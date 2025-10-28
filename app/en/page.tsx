// app/en/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../(marketing)/components/Hero'), { ssr: true });
export const dynamic = 'force-dynamic';
 
export default function Page() {
  return (
    <>
      {/* PREMIUM HERO (if present in repo) */}
      {Hero ? <Hero /> : null}
      {/* Tailwind smoke test box: REMOVE AFTER DEPLOY */}
      <div className="p-4 mx-6 my-6 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        If this box is shiny and blue, Tailwind is working 🎉
      </div>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Why FrontDesk Agents</h2>
        <p className="mt-3 text-muted max-w-2xl">
          Enterprise-grade reception across voice/SMS/email with AI assist, presence, RBAC, and strict RLS.
        </p>
      </section>
    </>
  );
}
