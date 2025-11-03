# Complete Guide: Production Certification + CI Autopilot

This guide explains how the 14-point certification works, how to run it, and how to keep it enforced via CI.

## What’s included
- **Strict headers** via `next.config.mjs` (CSP without `unsafe-eval`, HSTS, XFO=DENY, etc.)
- **14-point verifier** `verify_enhanced.sh`
- **GitHub Actions** workflow `.github/workflows/certify.yml`
- **Make targets** for local runs

## One-time setup
1. Set secret:
   ```bash
   gh secret set HEALTH_BASE_URL -b "https://www.frontdeskagents.com"
   ```
2. Commit/push the files:

```bash
git add -A && git commit -m "ci: certification autopilot" && git push
```

## How the checks work

1–2. Redirects: apex → www, root / → /en (308)
3–8. Security headers: CSP (no unsafe-eval), XFO=DENY, HSTS, nosniff, Referrer-Policy, Permissions-Policy
9–11. Health & SEO: /healthz, robots.txt, sitemap.xml return 200
12–13. Pages: /en 200; /en/pricing shows $399, $899, $1,799
14. Owner dashboard: status is acceptable if 200/401/403
CSS size: main CSS > 10KB (heuristic confirms Tailwind pipeline)

## Local run

```bash
make cert BASE_URL=https://www.frontdeskagents.com
```

## CI behavior
* Triggers on push to main and manual dispatch
* Fails the pipeline if any check regresses
* Keeps deployment in a certified, auditable state

## Troubleshooting
* CSP failing: ensure next.config.mjs is live (rebuild) and Vercel UI headers are empty.
* Redirects failing: confirm middleware or DNS primary domain (www) is set and “Redirect all traffic to primary” is ON.
* CSS size: ensure Tailwind is enabled and content paths are correct in tailwind.config.ts.

## Security notes
* We only forbid unsafe-eval to keep Next/Tailwind stable. You can harden further by removing 'unsafe-inline' from style-src once you migrate to non-inline styles.
