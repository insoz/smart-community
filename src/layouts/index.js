import React from "react";
import styles from "./index.less";
import Header from "./Header";
import withRouter from "umi/withRouter";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import { openPages } from "../constants/config";

/**
<TransitionGroup>
  <CSSTransition key={location.key} classNames="fade" timeout={300}>
    {children}
  </CSSTransition>
</TransitionGroup>
 */
function Layout({ children, location }) {
  if (openPages.includes(location.pathname)) {
    return <div> {children}</div>;
  }
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default withRouter(Layout);
