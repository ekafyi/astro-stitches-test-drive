import * as Stitches from "@stitches/core";

const createStitches = (config) => {
  const stitches = Stitches.createStitches(config);

  stitches.StyleSheet = (result) => {
    result.styles.add({
      props: {
        global: true,
      },
      children: stitches.getCssText(),
    });

    return "";
  };

  stitches.StyleSheet.isAstroComponentFactory = true;

  return stitches;
};

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  StyleSheet,
} = createStitches({
  theme: {
    colors: {
      interactive: "tomato",
      bg: "#111",
      text: "#fff",
    },
  },
});
