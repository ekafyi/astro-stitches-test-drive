import * as React from "react";
import { css } from "../stitches.config";

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
