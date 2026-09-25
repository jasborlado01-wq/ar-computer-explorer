# AR Computer Explorer

A simple educational WebAR project for a school assignment.

## Features
- Browser-based AR
- Hiro marker tracking using AR.js
- 3D computer built from A-Frame primitives
- Tap System Unit to reveal internal components
- Tap CPU, RAM, GPU, Motherboard, SSD, or PSU for information
- Reset button
- Mobile-friendly interface

## How to run

IMPORTANT: Camera access normally requires HTTPS or localhost.

### Easy option: VS Code + Live Server
1. Open this folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html`.
4. Choose "Open with Live Server".
5. Open the HTTPS/public URL on your phone if your setup provides one.

### Online hosting
Upload the three files (`index.html`, `style.css`, `script.js`) to a static HTTPS host such as GitHub Pages, Netlify, or Vercel.

## AR Marker
This version uses the standard AR.js Hiro marker.

Print or display the Hiro marker and point the phone camera at it.

Search for:
"AR.js Hiro marker"

For a final school submission, the marker can later be replaced with a custom marker.

## Important
The project loads A-Frame and AR.js from public CDNs, so the phone needs internet access while loading the page.

## Project flow
Scan marker -> Computer appears -> Tap System Unit -> Internal components appear -> Tap a component -> Read its function.
