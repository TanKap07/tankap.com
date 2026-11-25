# tankap.com

My personal website: a small one-page intro about me, what I'm building, and the piano.

**Live at [tankap.com](https://tankap.com)**

## About

I'm Tan Kap, a second-year Computer Science undergraduate at UCL, currently working on
[HoloRepository 2027](https://github.com/HoloRepository/HoloRepository). Outside of code
I play the piano: Rachmaninoff and Scriabin are my favourites.

## Built with

- Plain HTML and CSS, no framework and no build step
- [Catppuccin](https://catppuccin.com) colours: Mocha (dark, the default) and Latte (light), with a toggle
- [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Run it locally

```bash
python3 -m http.server 8000 -d public
```

Then open http://localhost:8000.

## Files

| File | What it is |
| --- | --- |
| `public/index.html` | The whole site |
| `public/tan.jpg` | Profile photo |
| `wrangler.jsonc` | Cloudflare config: serves `public/` as a static site |

## Deployment

Hosted on Cloudflare Workers, connected to this repo. Every push to `main` deploys automatically.
