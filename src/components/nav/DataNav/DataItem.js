import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// import styles from "./dataNav.less";
import CardWrapper from "../../../components/layouts/CardWrapper";

const DataItem = ({ label, className, value, onClick }) => {
  const cls = classNames(className, {
    // [styles["data-item"]]: true
  });
  return (
    <CardWrapper type="border" className={cls}>
      <div onClick={onClick}>
        <div className="label">{label}</div>
        <div className="value">{value}</div>
      </div>
    </CardWrapper>
  );
};

DataItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default DataItem;
