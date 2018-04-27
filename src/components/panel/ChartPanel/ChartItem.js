import React from "react";
import PropTypes from "prop-types";

import * as Charts from "../../charts";

const ChartItem = ({ component, config, className }) => {
  const ChartCom = Charts[component];

  return (
    <div className={className}>
      {Charts[component] ? <ChartCom config={config} /> : "没有此类型组件"}
    </div>
  );
};

ChartItem.propTypes = {
  config: PropTypes.object
};

export default ChartItem;
