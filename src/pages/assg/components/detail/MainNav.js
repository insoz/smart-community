import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MainNavItem from "./MainNavItem";
import styles from "./index.less";

export default class MainNav extends Component {
  static defaultProps = {
    selectedKey: "1",
    dataSource: []
  };
  static propTypes = {
    dataSource: PropTypes.array
  };

  state = {
    selectedKey: this.props.selectedKey
  };

  componentWillReceiveProps(nextProps) {
    if ("selectedKey" in nextProps) {
      this.setState({
        selectedKey: nextProps.selectedKey
      });
    }
  }

  handleClick = (key, data) => {
    const { onChange } = this.props;
    this.setState({
      selectedKey: key
    });

    onChange && onChange(key, data);
  };

  render() {
    const { dataSource, className } = this.props;
    const { selectedKey } = this.state;
    const cls = classNames(styles["main-nav"], {
      [className]: className ? true : false
    });
    return (
      <div className={cls}>
        {dataSource.map(item => {
          return (
            <MainNavItem
              onClick={() => this.handleClick(item.key, item)}
              active={item.key === selectedKey ? true : false}
              key={item.key}
            >
              {item.label}
            </MainNavItem>
          );
        })}
      </div>
    );
  }
}
