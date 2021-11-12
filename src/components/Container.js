import clsx from "clsx";
import React  from "react";

import { Props } from "./props";

export default class Container extends React.Component {
    const {className, children} = this.props;
    const className = _.get(this.props, 'className');
    return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};