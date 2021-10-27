import * as React from "react";
import { createStitches } from "@stitches/core";

const { css, config } = createStitches({
  theme: {
    colors: {
      interactive: "tomato",
      bg: "#111",
      text: "#fff",
    },
  },
});

const tomatoCss = css({
  padding: ".5rem",
  backgroundColor: "$interactive",
  color: "$text",
});

const TomatoBox = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={tomatoCss()} {...props}>
      {children}
    </div>
  );
};

export default TomatoBox;
