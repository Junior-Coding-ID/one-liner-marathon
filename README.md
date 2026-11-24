# One-Liner Marathon

[![Bounty](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Junior-Coding-ID/one-liner-marathon/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Junior-Coding-ID/one-liner-marathon/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

Entry for the [One-Liner Marathon](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2) bounty on make.fun — one one-line joke, max 280 characters. The jury compares entries pairwise; the funniest wins.

## The joke

> My barber showed me the back of my head; I nodded with the authority of a man who'd never seen it before.

105 characters.

## How it works

`main.ts` writes the joke to `entry.txt` in the output directory (from the `MAKEFUN_OUTPUT` env var, or `/output` by default). It fails hard if the joke is not exactly 105 characters, outside the 1–280 range, or blank — and it re-reads the written file to verify it is byte-identical to the joke.

## Run

```sh
MAKEFUN_OUTPUT=/tmp/out-marathon node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
