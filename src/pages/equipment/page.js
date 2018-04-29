import classNames from "classnames";

import MapContainer from "./components/MapContainer";
import DataNav from "../../components/nav/DataNav";
import Panel from "./components/Panel";
import CheckboxGroup from "./components/CheckboxGroup";
import CardWrapper from "../../components/layouts/CardWrapper";
import styles from "./equipment.less";
import icon_jk from "../../assets/icons/icon_sbss_jk.png";
import icon_mj from "../../assets/icons/icon_sbss_mj.png";
import icon_dzxg from "../../assets/icons/icon_sbss_dzxg.png";
import icon_rlsb from "../../assets/icons/icon_sbss_rlsb.png";
import icon_xfs from "../../assets/icons/icon_sbss_xfs.png";
import icon_jdsb from "../../assets/icons/icon_sbss_jdsb.png";

const navCls = classNames(styles["card-container"], {
  [styles["card-nav-container"]]: true
});

const chartCls = classNames(styles["card-container"], {
  [styles["card-chart-container"]]: true
});

export default () => {
  const navDataSource = [
    {
      key: "1",
      label: "视频设备",
      value: 4850,
      icon: icon_jk
    },
    {
      key: "2",
      label: "门禁设备",
      value: 453,
      icon: icon_mj
    },
    {
      key: "3",
      label: "巡更设备",
      value: 468,
      icon: icon_dzxg
    },
    {
      key: "4",
      label: "人脸识别",
      value: 54,
      icon: icon_rlsb
    },
    {
      key: "5",
      label: "消防栓",
      value: 156,
      icon: icon_xfs
    },
    {
      key: "6",
      label: "机电设备",
      value: 32,
      icon: icon_jdsb
    }
  ];
  return (
    <div className={styles["assg-container"]}>
      <CardWrapper type="card" className={navCls}>
        <DataNav dataSource={navDataSource} showIcon />
      </CardWrapper>
      <CardWrapper type="card" className={styles["map-container"]}>
        <div className={styles["checkbox-container"]}>
          <CheckboxGroup />
        </div>
        <MapContainer />
      </CardWrapper>
      <CardWrapper type="card" className={chartCls}>
        <Panel component="ColumnChart" title="各类设备统计" />
        <Panel component="LineChart" title="各类设备报警统计" />
      </CardWrapper>
    </div>
  );
};
