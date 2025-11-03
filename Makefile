# Simple helpers for local certification runs

BASE_URL ?= https://www.frontdeskagents.com

.PHONY: cert
cert:
	@chmod +x ./verify_enhanced.sh
	@./verify_enhanced.sh "$(BASE_URL)"

.PHONY: ci
ci:
	@echo "Dispatching GitHub Actions workflow 'Certify Production'…"
	@gh workflow run certify.yml --ref main

.PHONY: logs
logs:
	@gh run list --workflow certify.yml --limit 1
	@gh run view --log
