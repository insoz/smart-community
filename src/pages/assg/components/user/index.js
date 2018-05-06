import React from "react";
import PropTypes from "prop-types";

import CardWrapper from "../../../../components/layouts/CardWrapper";
import SearchPanel from "../../../../components/panel/SearchPanel";
import UserTable from "./UserTable";
import styles from "./index.less";

const UserPage = () => {
  const searchProps = {
    dataSource: [
      {
        field: "name",
        label: "姓名",
        component: "Input",
        componentProps: {
          placeholder: "请输入姓名"
        }
      },
      {
        field: "phone",
        label: "手机号",
        component: "Input",
        componentProps: {
          placeholder: "请输入手机号码"
        }
      },
      {
        field: "id",
        label: "身份证号",
        component: "Input",
        componentProps: {
          placeholder: "请输入身份证号"
        }
      }
    ]
  };

  return (
    <CardWrapper type="card" className={styles["container"]}>
      <div className="line-title">人员信息</div>
      <div className="line" />
      <SearchPanel {...searchProps} />
      <UserTable />
    </CardWrapper>
  );
};

UserPage.propTypes = {};

export default UserPage;
