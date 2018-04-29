import React from "react";
import PropTypes from "prop-types";

const TipBar = ({ className }) => {
  return (
    <div className={className}>
      <span> 2018-12-20 </span>
      <span>您好，张筱雨</span>
    </div>
  );
};

TipBar.propTypes = {};

export default TipBar;
