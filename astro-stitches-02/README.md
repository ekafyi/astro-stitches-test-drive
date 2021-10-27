# Astro + Stitches 2

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
- Strategy: Use Stitches' [getCssText](https://stitches.dev/docs/api#getcsstext) API and print the style string into a `<style>` tag.

## Status

✅ Works on dev

⛔️ Does not work on build, mismatched class names