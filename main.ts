import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My mother mopped that hospital floor for nine years; this morning she signed the deed to the house she cleaned before every shift.";
const MAX_LENGTH = 240;

if (LINE.length > MAX_LENGTH) {
  throw new Error(
    `entry line is ${LINE.length} characters, over the ${MAX_LENGTH}-character limit`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
