import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import _ from "lodash";

/**
 * 环形图
 */
let chart;
export default class ColumnChart extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  static defaultProps = {
    chart: {
      width: 260,
      height: 300,
      className: "chart-container",
      backgroundColor: "transparent",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      // height: 200,
      spacing: [80, 0, 40, 0]
    },
    title: {
      floating: true,
      text: "<span>圆心显示的标题</span>",
      style: { color: "#fff", fontSize: "18px" }
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        borderColor: "none",
        // allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        point: {
          events: {
            mouseOver: e => {
              chart.setTitle({
                text: e.target.name
              });
            }
          }
        }
      }
    },
    series: [
      {
        type: "pie",
        innerSize: "70%",
        name: "市场份额",
        data: [
          {
            name: "非户籍人口",
            y: 13,
            color: {
              radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
              stops: [
                [0, "#336AC9"],
                [1, "#54A5DD"] // darken
              ]
            }, //"#4182D1"
            selected: true
          },
          {
            name: "户籍人口",
            y: 25,
            color: {
              radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
              stops: [
                [0, "#CB4E34"],
                [1, "#F09450"] // darken
              ]
            },
            selected: true
          }
        ]
      }
    ]
  };

  componentDidMount() {
    let chart = this.chart.getChart();
    // console.log("this.chart", chart);
    // console.log(chart.userOptions);

    chart.setTitle({
      text: chart.userOptions.series[0].data[0].name
    });
  }

  afterRender = c => {
    let centerY = c.series[0].center[1],
      titleHeight = parseInt(c.title.styles.fontSize, 10);

    c.setTitle({
      y: centerY + titleHeight / 2
    });
    chart = c;
  };

  render() {
    const { config, ...restProps } = this.props;
    let newConfig = _.cloneDeep({ ...restProps });

    _.forEach(config, (value, key) => {
      _.set(newConfig, key, value);
    });

    return (
      <div>
        <ReactHighcharts
          config={newConfig}
          callback={this.afterRender}
          ref={inst => (this.chart = inst)}
        />
      </div>
    );
  }
}
