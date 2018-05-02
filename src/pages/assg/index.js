import classNames from "classnames";

import MapContainer from "../../components/map/MapContainer";
import DataNav from "../../components/nav/DataNav";
import Panel from "./components/Panel";
import CheckboxGroup from "./components/CheckboxGroup";
import CardWrapper from "../../components/layouts/CardWrapper";
import styles from "./assg.less";

const navCls = classNames(styles["card-container"], {
  [styles["card-nav-container"]]: true
});

const chartCls = classNames(styles["card-container"], {
  [styles["card-chart-container"]]: true
});

// const navCls = classNames(styles["card-container"], {
//   [styles["map-container"]]: true
// });

export default () => {
  const options = [
    "全部",
    "实有房屋",
    "实有单位",
    "实有安防设施",
    "实有力量",
    "实有装备"
  ];
  return (
    <div className={styles["assg-container"]}>
      <CardWrapper type="card" className={navCls}>
        <DataNav />
      </CardWrapper>
      <CardWrapper type="card" className={styles["map-container"]}>
        <div className={styles["checkbox-container"]}>
          <CheckboxGroup options={options} />
        </div>
        <MapContainer />
      </CardWrapper>
      <CardWrapper type="card" className={chartCls}>
        <Panel component="ColumnChart" />
        <Panel component="PieChart" title="户籍人口占比" />
      </CardWrapper>
    </div>
  );
};
