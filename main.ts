import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "After forty tries the boy balances the wrench on the valve, hears the hiss stop, " +
  "and stands up with grease on his chin, waving his father over to hear it go quiet.";

if (line.length > 240) {
  throw new Error(
    `entry line is ${line.length} characters, over the 240-character limit`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
