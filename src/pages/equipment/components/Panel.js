import React from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import highcharts3d from "highcharts/highcharts-3d";

import * as Charts from "../../../components/charts";

// import Highcharts3D from 'highcharts/highcharts-3d'

import CardWrapper from "../../../components/layouts/CardWrapper";
import styles from "../equipment.less";

highcharts3d(ReactHighcharts.Highcharts);

const Panel = ({ title, dataSource, config, component }) => {
  const ChartCom = Charts[component];

  return (
    <div className={styles["panel"]}>
      <CardWrapper type="border" className="card-title">
        {title}
      </CardWrapper>
      {Charts[component] ? <ChartCom /> : null}
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string
};

Panel.defaultProps = {
  title: "年龄段分布",
  dataSource: []
};

export default Panel;
