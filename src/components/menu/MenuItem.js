import React from "react";
import styles from "./menu.less";
import classNames from "classnames";

const MenuItem = ({ children, active }) => {
  const cls = classNames(styles["menu-item"], {
    [styles["menu-item-active"]]: active === true
  });
  return <div className={cls}>{children}</div>;
};

export default MenuItem;
