---
layout: page
title: Astra
description: Autonomous AI agent on a Mixture-of-Experts architecture — runs an options-trading thesis end-to-end and doubles as a personal assistant.
img: assets/img/12.jpg
importance: 1
category: builds
related_publications: false
---

**Astra** is an autonomous AI agent I built on a **Mixture-of-Experts** architecture with three tiers — *Scout*, *Analyst*, *Architect* — that route tasks through progressively heavier reasoning. It's two products in one trench coat: a self-directed market analyst that runs my SLV options thesis, and a general-purpose personal assistant.

## Architecture

- **Scout tier** — fast, cheap models for triage, classification, and routine retrieval (Reddit sentiment scanning, news ingestion, calendar).
- **Analyst tier** — mid-weight models for synthesis, comparison, and structured reasoning over context windows.
- **Architect tier** — frontier reasoning for thesis revision, trade decisions, and the long-horizon work.
- **Dynamic model-switcher** — chooses the right tier per subtask; falls through on uncertainty.
- **Reddit sentiment scanner** — pulls posts and comments and feeds the analyst tier with sentiment-tagged context for retail-driven names.

## What it does in practice

Astra runs a real **SLV options thesis** I built around COMEX inventories, Shanghai premiums, and Chinese export restrictions. The agent ingests new evidence, updates the thesis on its own, and surfaces actionable changes. The personal-assistant side handles the rest of life — drafting, scheduling, research.

Built on **OpenClaw** with the dynamic-routing layer on top.
