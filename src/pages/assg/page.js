import classNames from "classnames";
import MapContainer from "./components/MapContainer";
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
        <Panel type="column" />
        <Panel type="pie" title="户籍人口占比" />
      </CardWrapper>
    </div>
  );
};
