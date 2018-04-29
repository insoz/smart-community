import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";

import HighchartMore from "highcharts/highcharts-more";
import HighchartSolidGauge from "highcharts/modules/solid-gauge";
import HighchartsData from "highcharts/modules/data";
// 添加data.js
HighchartsData(Highcharts);
// 添加hsolid-gauge
HighchartSolidGauge(Highcharts);
// 添加highcharts-more
HighchartMore(Highcharts);

/**
 * 活动图
 */
export default class ActivityChart extends Component {
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

ActivityChart.defaultProps = {
  chart: {
    polar: true,
    type: "solidgauge",
    className: "chart-container",
    backgroundColor: "transparent",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    height: 120,
    width:120
  },
  title: {
    text: null
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    followPointer:false,
    shadow: false,
    style: {
      fontSize: "38px",
      color:"#fff",
      fontFamily:'微软雅黑'

    },
    pointFormat:'{point.y:,.0f}<br/>',
    positioner: function(labelWidth, labelHeight) {
      return {
        x: 60 - labelWidth / 2,
        y: 60 - labelHeight / 2,
      };
    }
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: "110%",
        innerRadius: "100%",
        backgroundColor: "#373C58",
        //Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
        borderWidth: 0
      }
    ]
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: []
  },
  plotOptions: {
    solidgauge: {
      borderWidth: "10px",
      dataLabels: {
        enabled: false
      },
      linecap: "round",
      stickyTracking: false
    }
  },
  series: [
    {
      name: "Move",
      // borderColor: Highcharts.getOptions().colors[1],
      borderColor: "#D97158",
      data: [
        {
          color: Highcharts.getOptions().colors[0],
          radius: "100%",
          innerRadius: "100%",
          y: 60
        }
      ],
    }
  ]
};
