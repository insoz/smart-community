import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";

import styles from "./index.less";

const PersonInfo = ({ data = {} }) => {
  const { name, sex, phone, idCard, origo } = data;
  return (
    <div className={styles["info"]}>
      <div className={styles["info-avatar"]}>
        <Avatar size="large" icon="user" />
      </div>
      <div className={styles["info-name"]}>{name}</div>
      <p>{sex}</p>
      <p>籍贯：{origo}</p>
      <p>手机号：{phone}</p>
      <p>身份证：{idCard}</p>
    </div>
  );
};

PersonInfo.propTypes = {
  data: PropTypes.object
};
PersonInfo.defaultProps = {
  data: {
    name: "未知",
    sex: "男",
    phone: "暂无",
    idCard: "暂无",
    origo: "暂无"
  }
};

export default PersonInfo;
