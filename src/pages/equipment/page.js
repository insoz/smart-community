import classNames from "classnames";
import MapContainer from "./components/MapContainer";
import DataNav from "../../components/nav/DataNav";
import Panel from "./components/Panel";
import CheckboxGroup from "./components/CheckboxGroup";
import CardWrapper from "../../components/layouts/CardWrapper";
// import Nav from "./components/Nav/index";
import styles from "./equipment.less";

// const { ColumnChart } = Charts;

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
  return (
    <div className={styles["assg-container"]}>
      <CardWrapper type="card" className={navCls}>
        <DataNav />
      </CardWrapper>
      <CardWrapper type="card" className={styles["map-container"]}>
        <div className={styles["checkbox-container"]}>
          <CheckboxGroup />
        </div>
        <MapContainer />
      </CardWrapper>
      <CardWrapper type="card" className={chartCls}>
        <Panel component="ColumnChart" title="各类设备统计"/>
        <Panel component="LineChart" title="各类设备报警统计" />
      </CardWrapper>
    </div>
  );
};