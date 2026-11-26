// The Funniest One-Line Resignation Letter
// Entry for the make.fun bounty u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// The letter, in the voice of a retry loop that has had enough.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "The retry loop retried 4,096 times. Attempt 4,097 resigned.";

// The gate only accepts 1-140 characters, and an exact tie on Judge win rate
// goes to the smaller text, so refuse to write anything outside the gate
// instead of shipping an entry that can never be judged.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold exactly the line, byte for byte.
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
