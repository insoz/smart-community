import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class TipBar extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
      });
    }, 1000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    const { time } = this.state;
    return (
      <div className={this.props.className}>
        <span> {time} </span>
        <span>您好，张筱雨</span>
      </div>
    );
  }
}

TipBar.propTypes = {
  className: PropTypes.string
};

export default TipBar;
