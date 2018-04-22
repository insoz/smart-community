import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./dataNav.less";
import CardWrapper from "../../../components/layouts/CardWrapper";

const DataItem = ({ label, className, value }) => {
  const cls = classNames(className, {
    [styles["data-item"]]: true
  });
  return (
    <CardWrapper type="border" className={cls}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["value"]}>{value}</div>
    </CardWrapper>
  );
};

DataItem.propTypes = {
  className: PropTypes.string
};

export default DataItem;
