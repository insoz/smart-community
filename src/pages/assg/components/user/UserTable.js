import React from "react";
import PropTypes from "prop-types";

import BaiscTable from "../../../../components/table/BasicTable";

const UserTable = () => {
  const dataSource = [
    {
      id: "1",
      name: "王羽",
      sex: "男",
      idNumber: "411235469874568746",
      phone: "17654248795",
      nation: "汉",
      registry: "上海",
      registryType: "户籍人员",
      educationLevels: "本科",
      maritalStatus: "未婚",
      spouseName: "李俊基",
      roomNumber: "2单元603室"
    },
    {
      id: "2",
      name: "王羽羽",
      sex: "男",
      idNumber: "411235469874568746",
      phone: "17654248795",
      nation: "汉",
      registry: "上海",
      registryType: "户籍人员",
      educationLevels: "本科",
      maritalStatus: "未婚",
      spouseName: "李俊基",
      roomNumber: "2单元603室"
    },
    {
      id: "3",
      name: "王羽羽a",
      sex: "男",
      idNumber: "411235469874568746",
      phone: "17654248795",
      nation: "汉",
      registry: "上海",
      registryType: "户籍人员",
      educationLevels: "本科",
      maritalStatus: "未婚",
      spouseName: "李俊基",
      roomNumber: "2单元603室"
    }
  ];
  const columns = [
    {
      title: "姓名",
      dataIndex: "name"
    },
    {
      title: "性别",
      dataIndex: "sex"
    },
    {
      title: "身份证号",
      dataIndex: "idNumber"
    },
    {
      title: "手机号",
      dataIndex: "phone"
    },
    {
      title: "名族",
      dataIndex: "nation"
    },
    {
      title: "户籍",
      dataIndex: "registry"
    },
    {
      title: "户籍类别",
      dataIndex: "registryType"
    },
    {
      title: "文化程度",
      dataIndex: "educationLevels"
    },
    {
      title: "婚姻状况",
      dataIndex: "maritalStatus"
    },
    {
      title: "配偶姓名",
      dataIndex: "spouseName"
    },
    {
      title: "房屋编号",
      dataIndex: "roomNumber"
    }
  ];

  const tableProps = {
    bordered: true,
    dataSource,
    rowKey: "id",
    columns,
    pagination: {
      total: 180,
      defaultCurrent: 1,
      defaultPageSize: 10
    }
  };
  return (
    <div>
      <BaiscTable {...tableProps} />
    </div>
  );
};

UserTable.propTypes = {
  dataSource: PropTypes.array
};

export default UserTable;
