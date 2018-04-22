import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MenuItem from "./MenuItem";
import styles from "./menu.less";

export default class Menu extends Component {
  static Item = MenuItem;
  static propTypes = {
    mode: PropTypes.string,
    selectedKeys: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: props.selectedKeys
    };
  }

  componentWillReceiveProps(nextProps) {
    if ("selectedKeys" in nextProps) {
      this.setState({
        selectedKeys: nextProps.selectedKeys
      });
    }
  }

  render() {
    const { mode, className, theme, children } = this.props;
    const { selectedKeys } = this.state;
    const cls = classNames(className, {
      [styles["menu"]]: true,
      [styles["menu-dark"]]: theme === "dark",
      [styles["menu-horizontal"]]: mode === "horizontal",
      [styles["menu-vertical"]]: mode === "vertical"
    });

    return (
      <div className={cls}>
        {children.map(item => {
          return React.cloneElement(item, {
            active: selectedKeys.includes(item.key)
          });
        })}
      </div>
    );
  }
}
