import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";

/**
 * 环形图
 */
let chart;
export default class ColumnChart extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  static defaultProps = {
    config: {
      chart: {
        backgroundColor: "transparent",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        // height: 200,
        spacing: [100, 0, 40, 0]
      },
      title: {
        floating: true,
        text: <span>"圆心显示的标题"</span>,
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
              color: "#4182D1",
              selected: true
            },
            {
              name: "户籍人口",
              y: 25,

              color: "#EC6649",
              selected: true
            }
          ]
        }
      ]
    }
  };

  componentDidMount() {
    let chart = this.chart.getChart();
    // console.log("this.chart", chart);
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
    const { config } = this.props;
    return (
      <div>
        <ReactHighcharts
          config={config}
          callback={this.afterRender}
          ref={inst => (this.chart = inst)}
        />
      </div>
    );
  }
}
