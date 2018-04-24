import React from "react";
import PropTypes from "prop-types";

import * as Charts from "../../../components/charts";
import CardWrapper from "../../../components/layouts/CardWrapper";
import styles from "../microCard.less";

const Panel = ({ title, dataSource, config, component }) => {
  const ChartCom = Charts[component];

  return (
    <div className={styles["panel"]}>
      {/* <CardWrapper type="border" className="card-title">
        {title}
      </CardWrapper> */}
      {Charts[component] ? <ChartCom /> : "没有此类型组件"}
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
