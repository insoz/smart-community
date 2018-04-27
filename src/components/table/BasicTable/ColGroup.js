import React from "react";
import PropTypes from "prop-types";

export default function ColGroup({ columns }) {
  const cols = columns.map(c => {
    return (
      <col
        key={c.key || c.dataIndex}
        style={{ width: c.width, minWidth: c.width }}
      />
    );
  });

  return <colgroup>{cols}</colgroup>;
}

ColGroup.propTypes = {};
