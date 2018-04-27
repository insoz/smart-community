import React, { Component } from "react";
// import PropTypes from "prop-types";
import { List, Checkbox } from "antd";
import classNames from "classnames";

import styles from "../equipment.less";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];

export default class Equipment extends Component {
  static propTypes = {};

  render() {
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];

    const cls = classNames({
      aaa: true,
      bbb: true,
      [styles["nav-list"]]: true
    });

    return (
      <div>
        <div className={styles["nav-list"]}>
          <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
        <div className={cls}>
          <CheckboxGroup options={plainOptions} defaultValue={["Apple"]} />
        </div>
      </div>
    );
  }
}
