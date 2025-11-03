# CI/CD Setup (Certification Autopilot)

## 1) Add required repo secrets
- `HEALTH_BASE_URL` → e.g., `https://www.frontdeskagents.com`

GitHub CLI:
```bash
gh secret set HEALTH_BASE_URL -b "https://www.frontdeskagents.com"
```

## 2) Commit files
* `next.config.mjs`
* `.github/workflows/certify.yml`
* `verify_enhanced.sh`
* `Makefile`

## 3) Push to main

```bash
git add -A
git commit -m "ci: add 14-point certification workflow + strict headers"
git push origin main
```

## 4) Watch CI
* GitHub → Actions → “Certify Production”
* Or from CLI:

```bash
gh run list --workflow certify.yml --limit 1
gh run view --log
```

## 5) Passing criteria

All 14 checks must pass. On success, your deployment remains production-certified and any regressions will fail CI automatically.
