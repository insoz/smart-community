import React, { Component } from "react";
import classNames from "classnames";

import "./dataNav.less";
import DataItem from "./DataItem";

import icon from "../../../assets/icons/icon_sbss_rlsb.png";

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
                img={item.img}
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
      value: 4850,
      // img:"https://umijs.org/img/rice.svg"
      img: icon
    },
    {
      key: "2",
      label: "实有房屋数",
      value: 453,
      img: "https://umijs.org/img/rice.svg"
    },
    {
      key: "3",
      label: "实有单位数",
      value: 468,
      img: "https://umijs.org/img/rice.svg"
    },
    {
      key: "4",
      label: "实有安防设施数",
      value: 54,
      img: "https://umijs.org/img/rice.svg"
    },
    {
      key: "5",
      label: "实有力量",
      value: 156,
      img: "https://umijs.org/img/rice.svg"
    },
    {
      key: "6",
      label: "实有装备",
      value: 32,
      img: "https://umijs.org/img/rice.svg"
    }
  ]
};
