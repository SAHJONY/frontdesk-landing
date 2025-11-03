#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-}"
if [[ -z "${BASE_URL}" ]]; then
  echo "Usage: $0 https://www.frontdeskagents.com"
  exit 2
fi

# Normalize
BASE_URL="${BASE_URL%/}"
HOST="$(echo "${BASE_URL}" | sed -E 's#^https?://##')"
APEX_HOST="$(echo "${HOST}" | sed -E 's#^www\.##')"

PASS=0
FAIL=0

hr() { printf '%*s\n' "${COLUMNS:-80}" '' | tr ' ' '-'; }
ok()  { echo "✅ $*"; PASS=$((PASS+1)); }
ko()  { echo "❌ $*"; FAIL=$((FAIL+1)); }

get_header() {
  # $1 url, $2 header-name
  curl -fsSIL "$1" | awk -v IGNORECASE=1 -v key="$2:" '
    tolower($0) ~ tolower("^"key) { sub(/^[^:]+:\s*/,""); print; exit }
  ' || true
}

has_header() {
  local url="$1" name="$2"
  local val
  val="$(get_header "$url" "$name")"
  [[ -n "$val" ]] && { echo "$val"; return 0; } || return 1
}

check_redirect() {
  local from="$1" to_contains="$2" code="$3"
  local out
  out="$(curl -sSIL -o /dev/null -w "%{http_code} %{redirect_url}" "$from")" || true
  local http_code="${out%% *}"
  local loc="${out#* }"
  if [[ "$http_code" == "$code" && "$loc" == *"$to_contains"* ]]; then
    ok "Redirect $from -> ($code) -> $loc"
  else
    ko "Redirect FAILED: $from (got: $http_code to $loc; want $code to contains '$to_contains')"
  fi
}

check_status() {
  local url="$1" want="$2"
  local code
  code="$(curl -sSIL -o /dev/null -w "%{http_code}" "$url")" || true
  if [[ "$code" == "$want" ]]; then ok "$url -> $code"
  else ko "$url -> $code (want $want)"; fi
}

check_contains() {
  local url="$1" needle="$2" label="$3"
  local body
  body="$(curl -fsSL "$url" || true)"
  if echo "$body" | grep -qE "$needle"; then ok "$label present"
  else ko "$label missing"; fi
}

hr
echo "14-Point Certification against: ${BASE_URL}"
hr

# 1–2 Redirects
check_redirect "https://${APEX_HOST}" "https://www.${APEX_HOST}" "308"
check_redirect "https://www.${APEX_HOST}/" "${BASE_URL}/en" "308"

# 3–8 Security headers
CSP="$(has_header "${BASE_URL}" "Content-Security-Policy" || true)"
[[ -n "$CSP" && "$CSP" != *"unsafe-eval"* ]] && ok "CSP present (no unsafe-eval)" || ko "CSP missing or contains unsafe-eval"
[[ "$(has_header "${BASE_URL}" "X-Frame-Options" || true)" == *"DENY"* ]] && ok "X-Frame-Options DENY" || ko "X-Frame-Options not DENY"
[[ -n "$(has_header "${BASE_URL}" "Strict-Transport-Security" || true)" ]] && ok "HSTS present" || ko "HSTS missing"
[[ "$(has_header "${BASE_URL}" "X-Content-Type-Options" || true)" == *"nosniff"* ]] && ok "X-Content-Type-Options nosniff" || ko "X-Content-Type-Options missing"
[[ -n "$(has_header "${BASE_URL}" "Referrer-Policy" || true)" ]] && ok "Referrer-Policy present" || ko "Referrer-Policy missing"
[[ -n "$(has_header "${BASE_URL}" "Permissions-Policy" || true)" ]] && ok "Permissions-Policy present" || ko "Permissions-Policy missing"

# 9–11 Health & SEO
check_status "${BASE_URL}/healthz" "200"
check_status "${BASE_URL}/robots.txt" "200"
check_status "${BASE_URL}/sitemap.xml" "200"

# 12–13 Pages
check_status "${BASE_URL}/en" "200"
check_contains "${BASE_URL}/en/pricing" '\$399|\$899|\$1,799' "Pricing tiers on /en/pricing"

# 14 Owner dashboard auth-tolerant status (200/401/403 acceptable)
code_owner="$(curl -sSIL -o /dev/null -w "%{http_code}" "${BASE_URL}/owner/dashboard" || true)"
if [[ "$code_owner" == "200" || "$code_owner" == "401" || "$code_owner" == "403" ]]; then
  ok "/owner/dashboard acceptable status ($code_owner)"
else
  ko "/owner/dashboard unacceptable status ($code_owner)"
fi

# Tailwind CSS asset size > 10KB
# Heuristic: grab first .css from /en HTML and check Content-Length
CSS_HREF="$(curl -fsSL "${BASE_URL}/en" | grep -Eo '<link[^>]+href="[^"]+\.css[^"]*"' | head -n1 | sed -E 's/.*href="([^"]+)".*/\1/')"
if [[ -n "$CSS_HREF" ]]; then
  [[ "$CSS_HREF" =~ ^https?:// ]] || CSS_URL="${BASE_URL}${CSS_HREF}"
  CSS_URL="${CSS_URL:-$CSS_HREF}"
  CLEN="$(curl -fsSIL "$CSS_URL" | awk -v IGNORECASE=1 '/^content-length:/ {print $2; exit}' | tr -d '\r')"
  if [[ -n "$CLEN" && "$CLEN" -gt 10240 ]]; then
    ok "Tailwind CSS asset size > 10KB (${CLEN} bytes)"
  else
    ko "Tailwind CSS asset too small or missing (Content-Length: ${CLEN:-unknown})"
  fi
else
  ko "Could not detect a CSS asset on /en"
fi

hr
echo "RESULT: PASS=${PASS} FAIL=${FAIL}"
hr
[[ "$FAIL" -eq 0 ]] || exit 1
