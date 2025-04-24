# 🌍 SODREPO – Spatial Open Data Regions & Portals

**SODREPO** is an interactive, map-based Single Page Application for visualizing, filtering, and comparing Open Data portals across multiple administrative levels (ADM0–ADM3). The tool combines geographic visualization with rich metadata and usability-focused UI elements for exploration, benchmarking, and analysis.

Developed and maintained by the [SODIC Research Group](https://www.tu-chemnitz.de/informatik/dm/forschung/sodic.php) (Semantic & Open Data Innovation Chemnitz) at TU Chemnitz.

---

## ✨ Features

- Interactive **MapLibre GL** map showing spatial Open Data infrastructure
- **Hover/Click** mode for exploring regions with linked portals
- **Joyride-based onboarding guide** and Welcome Banner
- **Filters** by portal type, administrative level, and SPARQL/MQA support
- **Search** function across portal name and location
- **Download options**: Filtered portal CSV, full JSON dataset, current map view as PNG
- **Portal comparison** mode (up to 4 portals)
- **Statistical overview** of current portal distribution
- **Hierarchical arrow visualization** for regional relations (ADM0 → ADM3)
- **Dark mode toggle**, dynamic **layer visibility control**

---

## 🗺️ Use Cases

- Researchers exploring the spatial distribution of Open Data
- Policy analysts evaluating digital openness on different government levels
- Developers and civic tech enthusiasts identifying accessible datasets
- Government stakeholders benchmarking transparency efforts

---

## ⚙️ Tech Stack

- **Frontend**: React + Vite, MapLibre GL JS, Joyride, Turf.js, HTML2Canvas
- **Backend**: None (static SPA)
- **Geodata**: [GeoBoundaries](https://www.geoboundaries.org/), manually matched ADM-levels
- **Metadata**: Manually curated JSON files for portals and hierarchy relations

---

## 🚀 Getting Started

```bash
git clone https://github.com/SODIC-research/SODREPO.git
cd SODREPO
npm install
npm run dev
```

All boundaries and metadata are available in `public/geo/` and `public/data/`.

---

## 🌐 Live Demo

🚀 [https://rambarz.github.io](https://rambarz.github.io)

---

## 📖 Academic Citation

This tool is presented in:

> Hahn, F. (2025). *Bridging the Hidden Gaps in Germany’s Open Data Landscape: A Step Towards a European Atlas*. In: Proceedings of the International Conference on Theory and Practice of Electronic Governance (ICEGOV 2025). ACM.

Please cite when referencing or reusing.

---

## 📂 Project Structure

```
/public/
  /geo/           ← GeoJSON boundaries per ADM level
  /data/
    sodrepoData.js   ← All portals with metadata
    hierachyAdm.js   ← Hierarchical parent-child structure
/src/
  App.jsx         ← All frontend and map logic in one file
```

---

## 🤝 Contributing

We welcome contributions for improving data coverage, spatial refinement, UI polishing, or exporting functions. Open an issue or PR in GitHub.

---

## ⚖️ License

**MIT License**. External sources retain their own licensing:

- GeoBoundaries — CC BY 4.0
- OpenStreetMap — ODbL 1.0
- CARTO Tiles — CC BY 4.0

---

## 👩‍🔬 Maintainer

**Florian Hahn**  
SODIC Research Group, TU Chemnitz  
[Website](https:/tu-chemnitz.de/informatik/dm/team/fh.php) — Contact: `florian.hahn@informatik.tu-chemnitz.de`

