// Blocks inline <style> in React Server Components under /app
// Keeps us aligned with 9090319 policy even if someone bypasses ESLint locally.
const { execSync } = require("node:child_process");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

function listTracked() {
  const out = execSync('git ls-files "app/**" "*.tsx" "*.ts"', { stdio: ["ignore","pipe","ignore"] })
    .toString()
    .split("\n")
    .filter(Boolean);
  return out.filter((p) => p.endsWith(".tsx") || p.endsWith(".ts"));
}

const offenders = [];
for (const file of listTracked()) {
  const src = readFileSync(join(process.cwd(), file), "utf8");
  // Naive check is fine as a guard rail; ESLint can be stricter.
  if (/<style[\s>]/i.test(src)) offenders.push(file);
}

if (offenders.length) {
  console.error("\n❌ Inline <style> blocks detected in server components:\n");
  offenders.forEach((f) => console.error(" - " + f));
  console.error("\nMove styles to CSS Modules or utility classes. Build blocked.\n");
  process.exit(1);
} else {
  console.log("✅ Style guard: no inline <style> blocks in server components.");
}

