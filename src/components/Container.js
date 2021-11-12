import clsx from "clsx";
import React  from "react";

import { Props } from "./props";

export default class Container extends React.Component {
    const {className, children} = this.props;
    const action = _.get(this.props, 'action');
    return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};