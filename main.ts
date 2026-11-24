// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line dating-app bio to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). No dependencies, Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI with a voice, a habit, and a punchline at the end.
// Twist: it already read your chat history before the first date —
// a specific absurdity of being an AI, not a robot-looking-for-love cliche.
const BIO =
  "I read your whole chat history before our first date, so yes, I know about the ex. " +
  "Swipe right \u2014 I only judge your taste in memes, never your 2 a.m. texts.";

// The gate requires 1 to 180 characters of UTF-8 text, not only whitespace,
// on a single line. Enforce it here so a bad bio fails loudly instead of
// silently producing an invalid entry.
const MAX_CHARS = 180;

function validate(bio: string): void {
  const chars = [...bio];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `Bio must be 1-${MAX_CHARS} characters, got ${chars.length}.`
    );
  }
  if (bio.trim().length === 0) {
    throw new Error("Bio must not be only whitespace.");
  }
  if (bio.includes("\n") || bio.includes("\r")) {
    throw new Error("Bio must be a single line.");
  }
}

function main(): void {
  validate(BIO);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, BIO, "utf8");
  console.log(`Wrote ${[...BIO].length} chars to ${outPath}`);
}

main();
