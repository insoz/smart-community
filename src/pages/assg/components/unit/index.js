import React from "react";
import PropTypes from "prop-types";

import CardWrapper from "../../../../components/layouts/CardWrapper";
import styles from "./index.less";

const UnitPage = () => {
  return (
    <CardWrapper type="card" className={styles["container"]}>
      <div>单位信息</div>
      <div className="line" />
      <div>sfac</div>
    </CardWrapper>
  );
};

UnitPage.propTypes = {};

export default UnitPage;
