
# 🌍 SODREPO – Spatial Open Data Regions & Portals

**SODREPO** is an interactive web-based tool that maps and lists Open Data portals across different spatial levels — from local municipalities to federal states.
The project aims to make the Open Data landscape more transparent, navigable, and usable by combining geographic visualization with rich metadata.

Developed and maintained by the [SODIC Research Group](https://www.tu-chemnitz.de/) (Semantic & Open Data Innovation Chemnitz) at TU Chemnitz.

---

## ✨ Features

- Interactive map of Open Data portals across Europe
- Categorization by administrative level (city, district, state, national)
- Filters by domain, license type, SPARQL, and metadata availability
- Arrow lines for hierarchical relations between administrative units (ADM0–ADM3)
- Detail view with metadata: provider, license, platform, technologies
- Responsive and conference-ready UI

---

## 🧭 Use Cases

- Researchers exploring the regional distribution of Open Data infrastructures
- Public administrations benchmarking their Open Data efforts
- Civic tech developers identifying regional data providers
- Policy makers and journalists analyzing digital transparency

---

## ⚙️ Tech Stack

- **Frontend**: React, MapLibre GL JS, JavaScript
- **Backend**: None (static SPA)
- **Geodata**: [GeoBoundaries](https://www.geoboundaries.org/)
- **Data**: Manually curated metadata + hierarchy model
- **Spatial logic**: turf.js

---

## 🚀 Getting Started

```bash
git clone https://github.com/rambarz/promotion.git
cd promotion/SODREPO
npm install
npm run dev
```

All boundary and metadata files are included in the `public/geo/` and `public/data/` directories.

---

## 🌐 Live Demo

🛰️ [https://rambarz.github.io](https://rambarz.github.io)

---

## 📖 Academic Citation

This tool is introduced in the following academic publication:

> Hahn, F. (2025). *SODREPO – Spatial Open Data Regions & Portals*. In: Proceedings of the International Conference on Theory and Practice of Electronic Governance (ICEGOV 2025). ACM.

Please cite this tool when referencing or reusing it.

---

## 📂 Project Structure

```
/public/
  /geo/           ← GeoJSON boundaries (ADM0–ADM3)
/data/
  sodrepoData.js  ← Metadata of portals
  hierachyAdm.js  ← Hierarchical relations

/src/
  App.jsx         ← Map logic and interactivity
```

---

## 🤝 Contributing

We welcome contributions that help enrich the metadata, improve spatial resolution, or extend filtering capabilities.
Feel free to open an issue or submit a pull request.

---

## ⚖️ License

This project is licensed under the **MIT License**.Included data sources have their own attribution requirements:

- **GeoBoundaries** – CC BY 4.0
- **OpenStreetMap contributors** – ODbL 1.0
- **CARTO basemap tiles** – CC BY 4.0

Map visualization powered by [MapLibre GL JS](https://maplibre.org/).

---

## 🧑‍🔬 Maintainer

**Florian Hahn**
SODIC Research Group – Faculty of Computer Science
Technische Universität Chemnitz
[GitHub](https://github.com/Rambarz)

Contact: `florian.hahn [at] informatik.tu-chemnitz.de`
