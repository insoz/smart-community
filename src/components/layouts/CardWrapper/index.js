import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./cardWrapper.less";

function CardWrapper({ className, children, type }) {
  const cls = classNames(className, {
    [styles["card-wrapper"]]: type === "card" ? true : false,
    [styles["border-wrapper"]]: type === "border" ? true : false
  });
  return (
    <div className={cls}>
      <span className="top" />
      <span className="right" />
      <span className="bottom" />
      <span className="left" />
      {children}
    </div>
  );
}
CardWrapper.PropTypes = {
  type: PropTypes.string
};

CardWrapper.defaultProps = {
  type: "border"
};

export default CardWrapper;
