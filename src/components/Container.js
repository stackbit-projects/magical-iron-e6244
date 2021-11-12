import clsx from "clsx";
import React  from "react";


export default class BlogPostTags extends React.Component {
  return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};