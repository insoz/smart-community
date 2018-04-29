import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
import Highcharts3D from "highcharts/highcharts-3d";
import _ from "lodash";

Highcharts3D(Highcharts);

/**
 * 柱状图
 */
export default class ColumnChart extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  render() {
    const { config, ...restProps } = this.props;

    let newConfig = _.cloneDeep({ ...restProps });

    _.forEach(config, (value, key) => {
      _.set(newConfig, key, value);
    });

    return (
      <div className="container">
        <ReactHighcharts config={newConfig} />
      </div>
    );
  }
}

ColumnChart.defaultProps = {
  /** 柱状图
   **/

  chart: {
    backgroundColor: "transparent",
    // className: "chart-container",
    // renderTo: "container",
    className: "chart-container",
    type: "column",
    width: 300,
    height: 200,
    options3d: {
      enabled: true,
      alpha: 0,
      beta: 0,
      depth: 20
      // viewDistance: 25
    }
  },
  title: {
    text: null,
    enabled: false
  },
  // subtitle: {
  //   text: "可通过滑动下方滑块测试"
  // },
  xAxis: {
    lineColor: "rgba(17,46,85,1)",
    lineWidth: 1,
    gridLineColor: "transparent",
    categories: ["1号楼", "2号楼", "3号楼", "4号楼", "5号楼", "6号楼", "7号楼"],
    title: {
      text: null
    }
  },
  yAxis: {
    lineColor: "rgba(17,46,85,1)",
    lineWidth: 1,
    // tickPixelInterval: 100,
    // tickAmount: 5,
    // tickPositions: [0, 100, 200, 300, 400],
    gridLineColor: "transparent",
    title: {
      text: null
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    column: {
      // depth: 25
    }
  },
  series: [
    {
      name: "测试",
      data: [26, 280, 28, 71.5, 106.4, 129.2, 390.0]
    }
  ]
};
