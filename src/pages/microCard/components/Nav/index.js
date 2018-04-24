import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./nav.less";

export default class Nav extends Component {
  static propTypes = {
    selectedKey: PropTypes.string
  };

  static defaultProps = {
    selectedKey: "1",
    dataSource: [
      {
        key: "1",
        label: "东门"
      },
      {
        key: "2",
        label: "南门"
      },
      {
        key: "3",
        label: "西门"
      }
    ]
  };

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

  handleClick = (key, item) => {
    const { onChange } = this.props;
    this.setState({
      selectedKey: key
    });

    onChange && onChange(key, item);
  };

  render() {
    const { className, dataSource = [] } = this.props;
    const { selectedKey } = this.state;
    const navCls = classNames(className, {
      nav: true
    });

    const data = dataSource.map(item => {
      const cls = classNames("nav-item", {
        "nav-item-active": item.key === selectedKey
      });

      return (
        <div
          key={item.key}
          className={cls}
          onClick={() => this.handleClick(item.key, item)}
        >
          {item.label || item.title}
        </div>
      );
    });

    return <div className={navCls}>{data}</div>;
  }
}
