import React from "react";
import PropTypes from "prop-types";

import DataItem from "./DataItem";
import data from "./dataConfig";

const DataList = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map(item => {
        return <DataItem key={item.id} data={item} />;
      })}
    </div>
  );
};

DataList.propTypes = {
  dataSource: PropTypes.array
};

DataList.defaultProps = {
  dataSource: data
};

export default DataList;
