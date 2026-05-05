---
layout: page
title: Temporal-Decay Graph
description: A novel data structure for real-time BCI/EEG, combining graph topology with exponential decay and lazy pruning.
img: assets/img/7.jpg
importance: 3
category: research
related_publications: false
---

The **Temporal-Decay Graph (TDG)** is a data structure I designed for real-time BCI / EEG processing where the *recency* of evidence matters as much as its connectivity.

## The idea

A graph in which **edge weights decay exponentially over time** and **dead edges are lazily pruned** when traversed. This gives you a structure that's cheap to update, naturally forgets stale signal, and never spends compute pruning regions you don't visit.

Designed and benchmarked on the **BCI Competition IV** dataset for COP3530 (UF Data Structures & Algorithms). The lazy-pruning trick is the key — it sidesteps the cost of garbage collection on a graph that's constantly being written to from a real-time signal source.

## Why this came out of the BCI work

Working in [Dr. Marvin Andujar's BCI lab](https://andujarbcilab.org/) at UF, the bottleneck for real-time drone control isn't the model — it's the data structure underneath the streaming EEG. TDG is one move toward a structure that fits the signal instead of the textbook.
