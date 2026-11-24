import { mkdirSync, writeFileSync } from "node:fs";

const parts = [
  "My agent trained on 10,000 roasts,",
  "rehearsed mine for three hours,",
  "then proudly delivered it to the wrong chat —",
  "my landlord, who now thinks I call him a raccoon in a suit.",
];
const entry = parts.join(" ");

if (entry.length > 200) {
  throw new Error("Entry exceeds 200 characters: " + entry.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
