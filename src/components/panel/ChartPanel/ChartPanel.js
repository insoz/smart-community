import React, { Component } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import styles from "./chartPanel.less";
import CardWrapper from "../../layouts/CardWrapper";
import * as Charts from "../../charts";

function ChartPanel({
  border = true,
  config,
  component,
  className,
  title,
  dataSource
}) {
  function renderContent() {
    const ChartCom = Charts[component];
    return (
      <div className={styles["chart-panel-container"]}>
        <div className="center">
          <div className={styles["title"]}>{title}</div>
        </div>

        {Charts[component] ? <ChartCom config={config} /> : "没有此类型组件"}
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
