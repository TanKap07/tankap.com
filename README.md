# tankap.com

My personal website: a small one-page intro about me, what I'm building, and the piano.

**Live at [tankap.com](https://tankap.com)**

## About

I'm Tan Kap, a BSc Computer Science student at UCL, currently working on
[HoloRepository 2027](https://github.com/HoloRepository/HoloRepository). Outside of code
I play the piano: Rachmaninoff and Scriabin are my favourites.

## Features

- An animated terminal, a heartbeat monitor trace and a piano keyboard as visuals
- A playable two-octave piano: click, tap or use your computer keyboard; the sound is synthesised with the Web Audio API, so there are no audio files
- Dark and light themes, and a still version for visitors who prefer reduced motion

## Built with

- Plain HTML, CSS and JavaScript, no framework and no build step
- [Catppuccin](https://catppuccin.com) colours: Mocha (dark, the default) and Latte (light), with a toggle
- [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) from Google Fonts

## Files

| File | What it is |
| --- | --- |
| `public/index.html` | The whole site |
| `public/tan.jpg` | Profile photo |
| `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png` | "TK" monogram icon for browser tabs, bookmarks and iPhone home screens |
| `wrangler.jsonc` | Cloudflare config: serves `public/` as a static site |
| `src/worker.js` | Redirects www.tankap.com to tankap.com |

## Deployment

Hosted on Cloudflare Workers, connected to this repo. Every push to `main` deploys automatically.
