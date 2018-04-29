import React, { Component } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";

import CardWrapper from "../../../../components/layouts/CardWrapper";
import MainNav from "./MainNav";
import RoomNav from "./RoomNav";
import PersonInfo from "./PersonInfo";
import { data } from "./dataConfig";
import styles from "./index.less";

const { MonthPicker } = DatePicker;

export default class DetailContainer extends Component {
  static propsTypes = {
    selectedUnit: PropTypes.string
  };
  static defaultProps = {
    selectedUnit: "1",
    selectedFloor: "1",
    selectedRoom: "1"
  };

  render() {
    const unitDataSource = data.map(item => {
      return {
        key: item.id,
        label: item.unitName
      };
    });

    const roomNavs = data[0].floor.map((item, index) => {
      const roomData = item.room.map(_item => {
        return {
          key: _item.id,
          label: _item.roomName
        };
      });
      return (
        <RoomNav
          key={item.id + index}
          index={item.floorName}
          dataSource={roomData}
        />
      );
    });
    return (
      <CardWrapper type="card">
        <div className={styles["detail-container"]}>
          <MainNav
            className={styles["detail-main-nav"]}
            dataSource={unitDataSource}
          />
          <div className={styles["house-title"]}>1号楼1单元1803室</div>
          <div className="line" />
          <div className={styles["datail-content"]}>
            <div className={styles["detail-room-nav"]}>{roomNavs}</div>
            <div className={styles["detail-right"]}>
              <div className={styles["detail-title"]}>水电信息</div>
              <div className={styles["action"]}>
                <MonthPicker placeholder="请选择" />
                <div>用水量：6吨</div>
                <div>用电量：102度</div>
                <div>燃气用量：4立方</div>
              </div>
              <div className={styles["detail-title"]}>住户信息</div>
              <div className={styles["person-list"]}>
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
                <PersonInfo />
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
