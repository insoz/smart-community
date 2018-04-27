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
  /** 面积图  各类设备报警统计*/
  chart: {
    // width: 260,
    height: 200,
    type: "areaspline",
    className: "chart-container",
    backgroundColor: "transparent",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    spacing: [10, 50, 40, 50]
  },
  title: {
    text: null
  },
  xAxis: {
    allowDecimals: false,
    tickColor: "none",
    lineColor: "none",
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  yAxis: {
    gridLineColor: "#08264c",
    title: {
      text: null
    },
    opposite:true
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
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [
    {
      name: "AAA",
      data: [13, 64, 23, 55, 74, 54, 28],
      color: "#54A5DD"
    }, {
        name: 'BBB',
        data: [51, 23, 74, 53, 37, 25, 84],
        color: "#F09450"
    }, {
        name: 'CCC',
        data: [41, 29, 45, 37, 53, 35, 44],
        color: "#34C780"
    }
  ]
};
