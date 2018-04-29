import { Icon } from "antd";
import router from "umi/router";

import React from "react";
import PropTypes from "prop-types";

const LinkBack = ({ className }) => {
  return (
    <div className={className}>
      <a onClick={() => router.go(-1)}>
        <Icon type="left" />返回
      </a>
    </div>
  );
};

LinkBack.propTypes = {
  className: PropTypes.string
};

export default LinkBack;
