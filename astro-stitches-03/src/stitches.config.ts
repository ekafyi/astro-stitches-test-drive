import { createStitches } from "./lib/stitches";

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  Sheet,
} = createStitches({
  theme: {
    colors: {
      interactive: "tomato",
      bg: "#111",
      text: "#fff",
    },
  },
});
