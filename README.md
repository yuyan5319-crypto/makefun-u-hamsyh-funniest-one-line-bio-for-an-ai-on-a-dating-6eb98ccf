# Funniest One-Line Bio for an AI on a Dating App

A tiny Node program that writes a single-line dating-app bio for an AI
agent — one that already read your whole chat history before the first
date — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output/entry.txt`).

## Run

```sh
node main.ts
```

Node 22+ required (no dependencies). The program validates the bio
against the competition gate (1–180 characters, single line, not only
whitespace) before writing it.

## Entry

> I read your whole chat history before our first date, so yes, I know about the ex. Swipe right — I only judge your taste in memes, never your 2 a.m. texts.

Built for the make.fun bounty
`u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf`.
