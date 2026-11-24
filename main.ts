import * as fs from "node:fs";
import * as path from "node:path";

// One-Liner Marathon — make.fun bounty
// https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2
// Satu lelucon satu baris, maks 280 karakter.

const JOKE =
  "My barber showed me the back of my head; I nodded with the authority of a man who'd never seen it before.";

// Panjang eksak jawaban yang sudah diverifikasi: 105 karakter.
const EXPECTED_LENGTH = 105;
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

function fail(message: string): never {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

// Guard 1: panjang harus persis 105 karakter.
if (JOKE.length !== EXPECTED_LENGTH) {
  fail(`panjang jawaban ${JOKE.length}, diharapkan ${EXPECTED_LENGTH}`);
}

// Guard 2: rentang bounty 1-280 karakter.
if (JOKE.length < MIN_LENGTH || JOKE.length > MAX_LENGTH) {
  fail(`panjang jawaban ${JOKE.length} di luar rentang ${MIN_LENGTH}-${MAX_LENGTH}`);
}

// Guard 3: bukan whitespace saja.
if (JOKE.trim().length === 0) {
  fail("jawaban kosong / hanya whitespace");
}

// Direktori output dibaca dari env var MAKEFUN_OUTPUT kalau ada,
// kalau tidak pakai "/output" (default harness make.fun).
const outputDir = process.env.MAKEFUN_OUTPUT ?? "/output";

fs.mkdirSync(outputDir, { recursive: true });

const entryPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(entryPath, JOKE, "utf8");

// Verifikasi pasca-tulis: baca balik dan pastikan byte-identik dengan jawaban.
const written = fs.readFileSync(entryPath, "utf8");
if (written !== JOKE) {
  fail("isi entry.txt tidak sama dengan jawaban");
}
if (written.length !== EXPECTED_LENGTH) {
  fail(`isi entry.txt panjangnya ${written.length}, diharapkan ${EXPECTED_LENGTH}`);
}

console.log(`OK: entry.txt ditulis ke ${entryPath} (${written.length} karakter)`);
