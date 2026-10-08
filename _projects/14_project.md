---
layout: page
title: Self-Nudging Dashboard
description: Minimalist, offline-ready dashboard that primes you with daily prompts for better habits — HTML/CSS/JS, no backend.
img: assets/img/10.jpg
importance: 14
category: builds
related_publications: false
---

**Self-Nudging Dashboard** is a small, offline-ready web page that greets you each morning with a randomized prompt — the kind of question that nudges you back toward the habits you actually said you wanted. Think of it as the lightest-possible MVP of the bigger idea behind [Deep Focus Trainer]({{ '/projects/4_project/' | relative_url }}): use local tools and personal data to shape behavior through intentional, low-friction nudging.

## What it does

- Daily randomized prompts for self-reflection and habit formation.
- 100% **offline** — no backend, no network calls, no analytics. Lives in your browser.
- **Modular**: easy to extend with habit tracking or mood logging later.
- Supports **auto-launch on startup** so it's the first thing you see.

## Why it's dead simple on purpose

The point was to find the smallest surface area that still changed daily behavior. Anything more elaborate (accounts, syncing, streaks) adds a layer that *either* breaks offline-first *or* makes the whole thing feel like another app you have to feed. The lightweight version stuck for me where heavier tools didn't.

**Stack:** HTML, CSS, JavaScript. One file, really.

<a href="https://github.com/RIROJASS/Self-Nudging_Dashboard" class="btn btn-primary" target="_blank">Code on GitHub →</a>
