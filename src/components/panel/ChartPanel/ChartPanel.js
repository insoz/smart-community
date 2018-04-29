import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartItem from "./ChartItem";
// import classNames from "classnames";

import styles from "./chartPanel.less";
import CardWrapper from "../../layouts/CardWrapper";
import * as Charts from "../../charts";

class ChartPanel extends Component {
  static ChartItem = ChartItem;
  static propTypes = {
    config: PropTypes.object
  };

  renderContent = () => {
    const { title, config, component, children } = this.props;
    const ChartCom = Charts[component];
    return (
      <div className={styles["chart-panel-container"]}>
        {title && (
          <div className="center">
            <div className={styles["title"]}>{title}</div>
          </div>
        )}

        {children ? (
          children
        ) : Charts[component] ? (
          <ChartCom config={config} />
        ) : (
          "没有此类型组件"
        )}
        {/* {Charts[component] ? <ChartCom config={config} /> : "没有此类型组件"} */}
      </div>
    );
  };

  render() {
    const { border, className } = this.props;
    if (border) {
      return (
        <CardWrapper className={className} type="card">
          {this.renderContent()}
        </CardWrapper>
      );
    }

    return <div className={className}>{this.renderContent()}</div>;
  }
}

ChartPanel.defaultProps = {
  border: true,
  // title: "年龄段分布",
  type: 1,
  dataSource: []
};
export default ChartPanel;
