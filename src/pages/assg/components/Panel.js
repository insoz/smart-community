import React from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import highcharts3d from "highcharts/highcharts-3d";

// import Highcharts3D from 'highcharts/highcharts-3d'

import CardWrapper from "../../../components/layouts/CardWrapper";
import styles from "../assg.less";

highcharts3d(ReactHighcharts.Highcharts);

const Panel = ({ title, dataSource, config }) => {
  return (
    <div className={styles["panel"]}>
      <CardWrapper type="border" className="card-title">
        {title}
      </CardWrapper>

      <ReactHighcharts config={config}>card</ReactHighcharts>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string
};

Panel.defaultProps = {
  title: "年龄段分布",
  dataSource: [],
  config: {
    chart: {
      backgroundColor: "transparent",
      renderTo: "container",
      type: "column",
      options3d: {
        enabled: false,
        alpha: 10,
        beta: 0,
        // depth: 50,
        viewDistance: 25
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
      title: {
        text: null
      }
    },
    yAxis: {
      lineColor: "rgba(17,46,85,1)",
      lineWidth: 1,
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
        depth: 25
      }
    },
    series: [
      {
        name: "测试",
        data: [29.9, 71.5, 106.4, 129.2, 144.0]
      }
    ]
  }
};

export default Panel;
