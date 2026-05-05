---
layout: page
title: Deep Focus Trainer
description: C-based neurofeedback tool integrating Muse 2 EEG with screen activity — ring buffer, hash table, binary heap.
img: assets/img/9.jpg
importance: 4
category: builds
related_publications: false
---

**Deep Focus Trainer** is a C-based neurofeedback tool that fuses **Muse 2 EEG** signal with **screen-activity monitoring** to give you a real, ground-truth signal of when you're actually focused — not just when you're not on Twitter.

## Architecture

- **Ring buffer** for the live EEG stream — fixed-size, low-overhead, lock-free single-producer/consumer.
- **Hash table** mapping active windows / processes to focus-relevance categories.
- **Binary heap** to surface the moments of deepest focus across a session for review.

## Why C

Two reasons. First, the latency budget: anything in a higher-level language adds GC pauses I can't afford on a streaming EEG. Second, building data structures *in the language they were invented in* is one of the most underrated learning moves in CS. COP3530 made this real for me.
