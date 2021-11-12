import clsx from "clsx";
import React  from "react";


export const Container: FC<Props> = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};