import React, { Component } from "react";
import { Checkbox } from "antd";
// import classNames from "classnames";

export default class CheckboxGroup extends Component {
  static propTypes = {};

  static defaultProps = {
    options: [
      "全选",
      "实有房屋",
      "是有单位",
      "实有安防设施",
      "小区出入口",
      "窨井盖"
    ]
  };

  render() {
    const { options } = this.props;
    return <Checkbox.Group options={options} defaultValue={["实有房屋"]} />;
  }
}
