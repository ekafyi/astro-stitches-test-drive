import { createStitches } from "@stitches/core";

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      interactive: "tomato",
      bg: "#111",
      text: "#fff",
    },
  },
});
