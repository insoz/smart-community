import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CardWrapper from "../../../../components/layouts/CardWrapper";
import RoomNavItem from "./RoomNavItem";
import styles from "./index.less";

export default class RoomNav extends Component {
  static defaultProps = {
    selectedKey: "1-1",
    index: "18",
    dataSource: [
      {
        key: "1",
        label: "1801室"
      },
      {
        key: "2",
        label: "1802室"
      },
      {
        key: "3",
        label: "1803室"
      }
    ]
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
    const { dataSource, className, index } = this.props;
    const { selectedKey } = this.state;
    const cls = classNames(styles["room-nav"], {
      [className]: className ? true : false
    });
    return (
      <CardWrapper className={cls}>
        <div className={styles["room-index"]}>{index}</div>
        <div className={styles["room-nav-wrapper"]}>
          {dataSource.map(item => {
            return (
              <RoomNavItem
                onClick={() => this.handleClick(item.key, item)}
                active={item.key === selectedKey ? true : false}
                key={item.key}
              >
                {item.label}
              </RoomNavItem>
            );
          })}
        </div>
      </CardWrapper>
    );
  }
}
