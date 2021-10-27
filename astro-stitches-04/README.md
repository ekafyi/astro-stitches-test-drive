# Astro + Stitches 4

Exploring using [Stitches](https://stitches.dev/) in [Astro](https://astro.build/). Based off the default Astro starter.

```bash
# or npm
yarn dev
yarn build
yarn preview
```

## Objective

- Use a React component styled with Stitches in Astro _without client-side hydration_
  - Why? In line with Astro's philosophy, client-side hydration is only used when needed, eg. for interactivity and network requests.
- Strategy: Use code from https://discord.com/channels/830184174198718474/872574301046439956/902916895290822707

## Status

✅ Works on dev

⛔️ Still does not work on build, mismatched class names