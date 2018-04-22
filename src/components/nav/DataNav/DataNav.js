import React, { Component } from "react";

import styles from "./dataNav.less";
import DataItem from "./DataItem";

export default class DataNav extends Component {
  render() {
    const { dataSource = [], className } = this.props;
    return (
      <div className={className}>
        <div className={styles["title"]}>智慧小区实时监控中</div>
        <div className={styles["list"]}>
          {dataSource.map(item => {
            return (
              <DataItem
                className={styles["item"]}
                key={item.key}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

DataNav.defaultProps = {
  dataSource: [
    {
      key: "1",
      label: "实有人口数",
      value: 4850
    },
    {
      key: "2",
      label: "实有房屋数",
      value: 453
    },
    {
      key: "3",
      label: "实有单位数",
      value: 468
    },
    {
      key: "4",
      label: "实有安防设施数",
      value: 54
    },
    {
      key: "5",
      label: "实有力量",
      value: 156
    },
    {
      key: "6",
      label: "实有装备",
      value: 32
    }
  ]
};
