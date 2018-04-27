import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
import HighchartMore from "highcharts/highcharts-more";
import HighchartsData from "highcharts/modules/data";
// 添加data.js
HighchartsData(Highcharts);
// 添加highcharts-more
HighchartMore(Highcharts);

/**
 * 面积图
 */
export default class RadarChart extends Component {
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

RadarChart.defaultProps = {
  /** 雷达图*/
  config: {
    chart: {
      polar: true,
      type: "area",
      backgroundColor: "transparent",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 200
    },
    title: {
      text: null
    },
    pane: {
      size: "88%"
    },
    xAxis: {
      categories: ["门禁", "监控", "装备", "力量", "巡更点", "消防栓"],
      tickmarkPlacement: "on",
      lineWidth: 0,
      gridLineColor: "transparent"
    },
    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
      gridLineColor: "#3A3D56",
      labels: {
        enabled: false
      },
      tickAmount: 6
      //   minorTickInterval : 200
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "单位",
        data: [380, 470, 200, 300, 500, 470],
        pointPlacement: "on",
        color: "#4182D1"
      }
    ]
  }
};
