---
layout: page
title: Multi-Model AI Artifact Search
description: SigLIP-based classifier for archaeological artifacts — 3,157 images, 87% accuracy, with a 3D UMAP interactive viz.
img: assets/img/multimodal_ai.png
importance: 9
category: research
related_publications: false
---

A machine-learning system for classifying archaeological artifacts from photographic data, built during my year at the **[Florida Museum of Natural History](https://www.floridamuseum.ufl.edu/)** (Aug 2024 – May 2025) under the mentorship of **[Dr. Nick Gauthier](https://github.com/nick-gauthier)** *(Assistant Curator, AI for Bio/Cultural Diversity)*. The system marries computer vision with archaeological expertise so that field researchers can identify pottery types, tool materials, and approximate age from a photo.

## Scope

- Dataset: **3,157 artifact images** spanning multiple cultures.
- Adapted a **SigLIP** embedding model as the backbone and trained a CNN classifier on top.
- Deployed behind a Flask UI designed for use *during* excavations, not after them.
- Achieved **~87% accuracy** on held-out test splits.

## What I shipped

- **Retrieval speed** improved **40×**, feature detection **8×** over the prior museum pipeline.
- Scalable data pipelines processing **10,000+ records**; cross-departmental UX dashboards.
- A **3D UMAP interactive visualization** of the embedding space — a live view of how the model sorts the collection by latent similarity.

<a href="{{ '/assets/html/umap_3d_interactive.html' | relative_url }}" class="btn btn-primary" target="_blank">Open 3D UMAP viz →</a>
<a href="https://github.com/RIROJASS/SigLIP-image-embedding" class="btn btn-primary" target="_blank">Code on GitHub →</a>

## Why it matters

Museum collections are mostly dark matter — catalogued, boxed, and never looked at again. A retrieval system that groups by *visual-cultural* similarity rather than filename gives curators (and the archaeologists who come after them) a way to see the collection as a landscape instead of a filing cabinet. Co-authored a research paper and presented at the **2025 Florida Undergraduate Research Conference** on the related satellite work ([separate project](/projects/10_project/)).
