import classNames from "classnames";
import Link from "umi/link";

import MapContainer from "../../components/map/MapContainer";
import CardWrapper from "../../components/layouts/CardWrapper";
import CheckboxGroup from "../../components/checkbox/CheckboxGroup";
import { ColumnChart } from "../../components/charts";
import ChartPanel from "../../components/panel/ChartPanel";
// import Nav from "./components/Nav/index";
import styles from "./display.less";

// const { ColumnChart } = Charts;

const leftCls = classNames({
  [styles["container-left"]]: true
});

const centerCls = classNames({
  [styles["container-center"]]: true
});

const rightCls = classNames({
  [styles["container-right"]]: true
});

export default ({ pathname }) => {
  function handleNavChange(key, item) {
    console.log(item);
  }
  return (
    <div className="container">
      <div type="card" className={leftCls}>
        <ChartPanel title="小区进出流量统计" component={"PieChart"} />
        <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
        <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
      </div>
      <div type="card" className={centerCls}>
        <div className={styles["center-top"]}>
          <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
          <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
        </div>
        <CardWrapper type="card" className={styles["center-center"]}>
          <div className={"container-checkbox"}>
            <CheckboxGroup />
          </div>
          <MapContainer className={styles["map"]} />
        </CardWrapper>
        <CardWrapper type="card" className="center-bottom">
          lll
        </CardWrapper>
      </div>
      <div type="card" className={rightCls}>
        <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
        <ChartPanel title="各年龄段人员分布统计" component={"LineChart"} />
      </div>
    </div>
  );
};
