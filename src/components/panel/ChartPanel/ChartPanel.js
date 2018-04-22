import React, { Component } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import styles from "./chartPanel.less";
import CardWrapper from "../../layouts/CardWrapper";

function ChartPanel({ border = true, type, className, title, dataSource }) {
  function renderContent() {
    return (
      <div className={styles["chart-panel-container"]}>
        <div className={styles["title"]}>{title}</div>
        chart
      </div>
    );
  }

  if (border) {
    return (
      <CardWrapper className={className} type="card">
        {renderContent()}
      </CardWrapper>
    );
  }
  return <div className={className}>{renderContent()}</div>;
}

ChartPanel.defaultProps = {
  border: true,
  title: "年龄段分布",
  type: 1,
  dataSource: []
};
export default ChartPanel;
