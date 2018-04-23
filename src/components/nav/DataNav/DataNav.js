import React, { Component } from "react";
import classNames from "classnames";

import styles from "./dataNav.less";
import DataItem from "./DataItem";

export default class DataNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: props.selectedKey
    };
  }
  componentWillReceiveProps(nextProps) {
    if ("selectedKey" in nextProps) {
      this.setState({
        selectedKey: nextProps.selectedKey
      });
    }
  }

  handleClick = ({ key }) => {
    this.setState({
      selectedKey: key
    });
  };

  render() {
    const { dataSource = [], className } = this.props;
    const { selectedKey } = this.state;
    const wrapperCls = classNames(className, {
      "nav-wrapper": true
    });

    return (
      <div className={wrapperCls}>
        <div className={"nav-title"}>智慧小区实时监控中</div>
        <div className={"nav-list"}>
          {dataSource.map(item => {
            const cls = classNames("nav-item", {
              "nav-item-selected": selectedKey === item.key
            });

            return (
              <DataItem
                className={cls}
                key={item.key}
                label={item.label}
                value={item.value}
                onClick={() => this.handleClick({ item, key: item.key })}
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
