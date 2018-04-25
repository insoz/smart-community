import React from "react";
import styles from "./index.less";
import Header from "./Header";
import withRouter from "umi/withRouter";

import { openPages } from "../constants/config";

function Layout({ children, location }) {
  if (openPages.includes(location.pathname)) {
    return <div>{children}</div>;
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
