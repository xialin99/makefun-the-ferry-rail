import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "My aunt took off her coat and folded it over the ferry rail. I rested my arms on the warm lining. When the engine slowed, I could hear water patting the hull.",
  "Behind us, the wake was still widening between the two shores.",
].join("\n\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
