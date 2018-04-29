import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./cardWrapper.less";

function CardWrapper({ className, children, type }) {
  const cls = classNames(className, {
    "card-wrapper": type === "card" ? true : false,
    "border-wrapper": type === "border" ? true : false
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
CardWrapper.propTypes = {
  type: PropTypes.string
};

CardWrapper.defaultProps = {
  type: "border"
};

export default CardWrapper;
