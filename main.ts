// The Word You'd Delete From the Dictionary — rebuild #2 (Kirana).
// Pick: "bucket". Delete it and nobody can kick the bucket anymore.
// The language also loses its bucket list — one word, two idioms gone.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const WORD = "bucket";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
