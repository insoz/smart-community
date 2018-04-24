import React from "react";
import PropTypes from "prop-types";

import styles from "../../microCard.less";

const DataItem = ({ data }) => {
  const { time, licencePlate, type, tag } = data;

  return (
    <div className={styles["item"]}>
      <div className={styles["img"]}>
        <img />
      </div>
      <div className={styles["content"]}>
        <p>时间：{time}</p>
        <p>车牌：{type}</p>
        <p>类型：{licencePlate}</p>
        <p>标签：{tag}</p>
      </div>
    </div>
  );
};

DataItem.propTypes = {};

export default DataItem;
