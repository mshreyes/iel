# IEL — Encyclopedia of Indian Endangered Languages

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![ELP](https://img.shields.io/badge/ELP-Endangered_Languages_Project-blue.svg)](https://endangeredlanguages.com/)
[![ISO 639-3](https://img.shields.io/badge/ISO-639--3-green.svg)](https://iso639-3.sil.org/)

**Live Portal:** [`https://mshreyes.github.io/iel/`](https://mshreyes.github.io/iel/)

---

## Overview

**IEL (Encyclopedia of Indian Endangered Languages)** is a static reference encyclopedia and introductory course repository covering the **42 Critically Endangered languages of India** identified by the Ministry of Education, Government of India ([PIB Release ID: 108207](https://pib.gov.in/newsite/printrelease.aspx?relid=108207)) and the [UNESCO *Atlas of the World's Languages in Danger*](https://unesdoc.unesco.org/ark:/48223/pf0000187026).

### Key Features
- **Detached Vector 2022 Encyclopedia UI**: Minimalist academic layout with light/dark mode, instant keyboard search (`/`), multi-criteria filtering (by State/UT and Entry Status), right-aligned infoboxes, and hover reference cards.
- **Complete Articles & 4-Unit Introductory Courses (6 Languages)**:
  - **Toda (`tcx`)** — Nilgiri Hills, Tamil Nadu
  - **Kota (`kfe`)** — Nilgiri Hills, Tamil Nadu
  - **Toto (`txo`)** — Totopara, West Bengal
  - **Great Andamanese / Jeru (`akj`)** — Strait Island, Andaman & Nicobar Islands
  - **Nihali (`nll`)** — Buldhana, Maharashtra & Burhanpur, Madhya Pradesh
  - **Birhor (`biy`)** — Jharkhand, Odisha, Chhattisgarh
- **Structured Stubs (36 Languages)**: Complete demographic metadata, coordinates, persistent identifiers, and external archive links ready for expansion.
- **FAIR Data Compliance**:
  - **Findable**: Indexed by SIL ISO 639-3, Endangered Languages Project (ELP), and OLAC identifiers, with embedded `Schema.org/Dataset` JSON-LD metadata.
  - **Accessible & Interoperable**: One-click export of the catalog and individual language lexicons as `.json` and `.csv`, plus APA and BibTeX citation modals.
  - **Reusable**: Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

---

## Adding a New Language Course (Upgrading a Stub)

1. Create a new JSON file inside `data/languages/<id>.json` matching the `id` in `data/catalog.json` (use `data/languages/toda.json` as a template).
2. In `data/catalog.json`, set `"hasCourse": true` for that language entry.
3. Commit and push—`language.html?id=<id>` will automatically render the full article, consonant inventory table, Leipzig interlinear glossed sentences, and 4-lesson workbook.

---

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

---

### Last Updated

October 14, 2026
