import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";

/**
 * 面积图
 */
export default class LineChart extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  render() {
    const { config, ...restProps } = this.props;
    const chartConfig = {
      ...restProps,
      ...config
    };
    return (
      <div>
        <ReactHighcharts config={chartConfig} />
      </div>
    );
  }
}

LineChart.defaultProps = {
  /**各类设备报警统计*/
  chart: {
    width: 260,
    height: 300,
    type: "areaspline",
    className: "chart-container",
    backgroundColor: "transparent",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
    // height: 200,
  },
  title: {
    text: null
  },
  xAxis: {
    tickColor: "none",
    lineColor: "none",
    tickInterval: 4,
    categories: ["9:00", "9:30", "10:00"]
  },
  yAxis: {
    gridLineColor: "#08264c",
    title: {
      text: null
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: " 单位"
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      lineColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, "#CB4E34"],
          [
            1,
            Highcharts.Color("#F09450")
              .setOpacity(0)
              .get("rgba")
          ]
        ]
      },
      fillOpacity: 0.5,
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, "#CB4E34"],
          [
            1,
            Highcharts.Color("#F09450")
              .setOpacity(0)
              .get("rgba")
          ]
        ]
      },
      series: {
        /* className: 'main-color', */
        negativeFillColor: true
      }
    }
  },
  series: [
    {
      name: "名称",
      data: [13, 64, 23, 55, 74, 54, 28],
      color: '#fff'
    }
  ]
};
