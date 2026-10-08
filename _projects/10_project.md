---
layout: page
title: AI-Enhanced Remote Sensing — Llanos de Moxos
description: YOLOv8 object detection on Sentinel + Landsat imagery for pre-Columbian raised-field agriculture in Beni, Bolivia.
img: assets/img/raised_fields_auto_id.png
importance: 10
category: research
related_publications: false
---

Applied machine-learning object detection to **satellite imagery** to find pre-Columbian **raised-field** agricultural structures across the **[Llanos de Moxos](https://lacgeo.com/llanos-moxos-archaeological-region)** region (Beni, Bolivia / adjacent Amazonian lowlands). The goal: non-invasive site discovery at scale, before anyone has to put a trowel in the ground.

{% include figure.liquid loading="eager" path="assets/img/raised_field_deep_learning_process.gif" class="img-fluid rounded z-depth-1" %}

## Stack

- **Multi-source imagery** — Sentinel-2 and Landsat accessed through ArcGIS; multi-spectral bands at different resolutions let the model pick up subtle terrain signatures invisible in RGB.
- **YOLOv8** — chosen for throughput over very large geographic areas.
- **Pipeline** — custom Python and R for normalization, **KITTI ↔ YOLO** format conversion, and batch processing.
- **Compute** — UF **HiPerGator** supercomputer for hyperparameter grid search.

## Pattern recognition, specialized for archaeology

- **Orientation analysis** — distinguishing ancient from modern structures:
  - Ancient: often aligned with solar / celestial references.
  - Modern: aligned with contemporary infrastructure.
- **Geometric feature focus** — rectilinear patterns and rectangular lakes, which flag human modification in the Llanos de Moxos landscape.
- **Template matching + CNN/RNN hybrid** — spatial pattern recognition paired with temporal analysis of land-use change.
- **Coordinate normalization** across projections so the model generalizes beyond the training tiles.

{% include figure.liquid path="assets/img/raised_fields_results_v1.png" class="img-fluid rounded z-depth-1" caption="First-pass detections overlaid on satellite tiles." %}

{% include figure.liquid path="assets/img/raised_fields_results_v2.png" class="img-fluid rounded z-depth-1" caption="After model refinement — tighter boxes, fewer false positives." %}

## Validated against archaeological knowledge

- Grounded in known characteristics of pre-Columbian raised-field agriculture in the Amazon basin.
- Validation against previously documented sites to tune detection thresholds.
- Collaboration with archaeologists specializing in Amazonian cultures.

## Broader applications

Beyond this region, the methodology produces visual analyses that double as **conservation references** and **geo-temporal landscape baselines** — useful anywhere non-invasive prospection matters.

**Co-presented** the related work with [Olivia Zhang](https://www.linkedin.com/in/via-zhang/) at the **[2025 Florida Undergraduate Research Conference](https://www.usf.edu/research-innovation/undergraduate-research/furc.aspx)** under the title *Finding Lost Archaeological Sites with AI: Object Detection with Remote Sensing*.

<a href="{{ '/assets/pdf/2025_FURC_conference_poster.pdf' | relative_url }}" class="btn btn-primary" target="_blank">FURC 2025 poster (PDF) →</a>
<a href="https://github.com/RIROJASS/Remote-Sensing-Object-Detection-with-YOLOv8" class="btn btn-primary" target="_blank">Code on GitHub →</a>
