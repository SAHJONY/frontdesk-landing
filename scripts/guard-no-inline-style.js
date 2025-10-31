#!/usr/bin/env node
/* Guard: fail build if server components/pages contain <style> blocks.
 * Rule: Any file in /app that is NOT a client component (`'use client'`)
 * may not contain <style ...> or <style jsx>.
 * Allow override by placing `// FDA:ALLOW_INLINE_STYLE` on the first 5 lines.
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const exts = new Set([".tsx", ".jsx"]);

let violations = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip generated & public dirs if ever nested under app (rare)
      if (["node_modules", ".next", "public"].includes(e.name)) continue;
      walk(p);
    } else if (exts.has(path.extname(e.name))) {
      checkFile(p);
    }
  }
}

function isClientComponent(src) {
  // allow comments/blank lines before the directive
  const head = src.split(/\r?\n/).slice(0, 10).join("\n");
  return /(^|\n)\s*['"]use client['"]\s*;?/.test(head);
}

function hasAllowPragma(src) {
  const head = src.split(/\r?\n/).slice(0, 5).join("\n");
  return /FDA:ALLOW_INLINE_STYLE/.test(head);
}

function checkFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  if (hasAllowPragma(src)) return; // explicit escape hatch
  if (isClientComponent(src)) return; // only guard server files

  // Look for <style ...> or <style jsx ...> (styled-jsx)
  const styleTag = /<\s*style(\s|>)/i.test(src);
  const styledJsx = /<\s*style\s+jsx/i.test(src);

  if (styleTag || styledJsx) {
    violations.push({
      file: path.relative(ROOT, filePath),
      reason: styledJsx ? "Found `<style jsx>` in a server component" : "Found `<style>` tag in a server component"
    });
  }
}

if (!fs.existsSync(APP_DIR)) {
  console.error("Guard error: cannot find /app directory.");
  process.exit(1);
}

walk(APP_DIR);

if (violations.length) {
  console.error("\n❌ Inline <style> detected in server components:");
  for (const v of violations) {
    console.error(`  • ${v.file}  →  ${v.reason}`);
  }
  console.error(
    "\nFix: move styles to CSS Modules/Tailwind or mark intentional use with `// FDA:ALLOW_INLINE_STYLE` (not recommended)."
  );
  process.exit(1);
} else {
  console.log("✅ Guard passed: no <style> tags in server components.");
}
