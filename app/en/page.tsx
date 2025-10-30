export const dynamic = 'force-dynamic';

export default function En() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Smoke-test div - remove after verifying Tailwind is working */}
      <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold">✅ Tailwind CSS is Active!</h2>
        <p className="mt-2">
          If you see this blue gradient box, the Fortune-500 Polish pipeline is
          wired correctly.
        </p>
      </div>

      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold text-text">FrontDesk Agents</h1>
        <p className="mb-6 text-lg text-muted">
          AI Receptionist that speaks like a human. 24/7. EN/ES.
        </p>
        <a
          className="inline-block rounded-md bg-brand-600 px-6 py-3 font-medium text-white shadow-brand1 transition hover:bg-brand-500"
          href="/en/pricing"
        >
          Pricing
        </a>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-line bg-panel p-6 shadow-brand1">
          <h3 className="mb-2 text-xl font-semibold text-text">Voice IVR</h3>
          <p className="text-muted">Answer, route, schedule.</p>
        </div>
        <div className="rounded-lg border border-line bg-panel p-6 shadow-brand1">
          <h3 className="mb-2 text-xl font-semibold text-text">Leads & CRM</h3>
          <p className="text-muted">Push to HubSpot/Sheets.</p>
        </div>
        <div className="rounded-lg border border-line bg-panel p-6 shadow-brand1">
          <h3 className="mb-2 text-xl font-semibold text-text">Analytics</h3>
          <p className="text-muted">Call quality & outcomes.</p>
        </div>
      </section>
    </main>
  );
}

