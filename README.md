# field notes — sumesh's portfolio

**Concept:** a lab notebook that thinks it's a terminal. Dark ink background,
one full-screen hero per route (no scrolling pages), a floating pill navbar,
and a hand-drawn SVG line-art motif behind every hero that morphs shape per
page — half botanical vein, half circuit trace, standing in for "biology
meets AI."

- **Type:** `italic Fraunces` (organic, botanical serif) for headlines +
  `IBM Plex Mono` (technical, terminal) for every label/nav/eyebrow. This
  pairing *is* the biology-meets-AI concept — don't swap it for Inter/system fonts.
- **Palette:** near-black ink `#0b0f0c`, parchment `#f2ede1`, moss green
  `#8fae63`, rust `#b96b3c` as a rare spark. No gradients, no glass-morphism
  clichés beyond the thin nav blur.
- **Structure:** `/` `/work` `/research` `/contact` — four hero-only routes.
  Switching routes crossfades with a soft blur (see `RouteTransition.tsx`);
  nothing ever scrolls past 100dvh.
- **Background art:** `HeroBackdrop.tsx` draws different bezier "vein/circuit"
  paths per route with a staggered stroke-draw-in animation. Edit `PATHS` /
  `NODES` there to reshape the motif.

## Run it

```bash
npm install
npm run dev
```

## Extend it

- Add a new hero: create `app/<route>/page.tsx`, reuse `<Hero variant="..." />`,
  add a matching `PATHS`/`NODES` entry in `HeroBackdrop.tsx`, and add the link
  to `FloatingNav.tsx`.
- Keep every route to a single hero. If you need more content, let it reveal
  on hover/click inside the hero (see the `/work` project list) rather than
  adding scroll.
