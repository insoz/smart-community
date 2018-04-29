import React from "react";
import PropTypes from "prop-types";
import styles from "./index.less";
import classNames from "classnames";

const MainNavItem = ({ children, active, onClick }) => {
  const cls = classNames(styles["room-nav-item"], {
    [styles["room-nav-item-active"]]: active === true
  });
  return (
    <div onClick={onClick} className={cls}>
      {children}
    </div>
  );
};

MainNavItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default MainNavItem;
