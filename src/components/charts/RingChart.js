import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
import HighchartVariablePie from "highcharts/modules/variable-pie";
import HighchartsData from "highcharts/modules/data";
// 添加data.js
HighchartsData(Highcharts);
// 添加variable-pie.js
HighchartVariablePie(Highcharts);
/**
 * 环形图
 */
export default class RingChart extends Component {
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

RingChart.defaultProps = {
  chart: {
    polar: true,
    type: "variablepie",
    backgroundColor: "transparent",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    height: 200
  },
  title: {
    text: null
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    variablepie: {
      borderColor: "none",
      cursor: "pointer",
      dataLabels: {
         color:"#fff"
      },
      
    }
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "25%",
      zMin: 0,
      name: "countries",
      data: [
        {
          name: "10中介",
          y: 355370,
          z: 192.9,
          color:"#FF565D",
          selected: true
        },
        {
          name: "20饭店",
          y: 401500,
          z: 218.7,
          color:"#FF8D00",
          selected: true
        },
        {
          name: "10网吧",
          y: 72685,
          z: 24.6,
          color:"#EBEC00",
          selected: true
        },
        {
          name: "18药店",
          y: 98867,
          z: 57.5,
          color:"#00A9FF",
          selected: true
        },
        {
          name: "18超市",
          y: 151340,
          z: 81.8,
          color:"#00E170",
          selected: true
        },
        {
          name: "24药店",
          y: 281277,
          z: 154.5,
          color: "#926BFF",
          selected: true
        },
      ]
    }
  ]
};
