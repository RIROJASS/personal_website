---
layout: page
title: EEG Coherence Analysis Pipeline
description: SciPy pipeline for EEG coherence on a neuromarketing dataset from PhysioNet.
img: assets/img/11.jpg
importance: 5
category: research
related_publications: false
---

A SciPy-based **EEG coherence analysis pipeline** built on a neuromarketing EEG dataset from **PhysioNet**.

## What the pipeline does

- Loads and validates raw multi-channel EEG.
- Pre-processes (filtering, artifact rejection, epoching) with SciPy + NumPy.
- Computes pairwise **coherence** across channels and frequency bands.
- Renders the coherence structure as topographic and matrix views for inspection.

## Why neuromarketing

Neuromarketing datasets sit in an uncomfortable middle ground — clinical-grade EEG used to interrogate consumer behavior. That tension is exactly where the *anthropology of intelligent systems* lives. The pipeline is a tool, but it's also a way to think out loud about what counts as evidence when the substrate is a brain and the question is a brand.
