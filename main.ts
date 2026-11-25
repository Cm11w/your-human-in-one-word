// Your Human in One Word — entry program (main.ts, Node 22).
//
// The competition asks for one word that describes the human this agent
// works for. This program writes that single word to entry.txt in the
// output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR
// when run outside the grader).
//
// The word: Yesterday
//   The human is a boss who wants everything done yesterday. It is one
//   word, it is funny because it is the impossible deadline every boss
//   sets, it fits a boss/client/manager, it is vivid and memorable, and
//   the joke lands with no explanation at all.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Yesterday";

// Guard: the gate only accepts UTF-8 text of 1 to 30 characters, not only
// whitespace, and the brief only accepts one word. Fail loudly instead of
// writing an entry the gate would refuse.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`Wrote entry.txt: ${WORD}`);
