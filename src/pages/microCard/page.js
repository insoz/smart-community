import classNames from "classnames";
import Link from "umi/link";

import MapContainer from "../../components/map/MapContainer";
import CardWrapper from "../../components/layouts/CardWrapper";
import CheckboxGroup from "../../components/checkbox/CheckboxGroup";
// import { ColumnChart } from "../../components/charts";
import Panel from "./components/Panel";
import Nav from "./components/Nav/index";
import DataList from "./components/DataList";
import styles from "./microCard.less";

// const { ColumnChart } = Charts;

const leftCls = classNames({
  "container-left": true
});

const rightCls = classNames({
  "container-right": true
});

const rightDataSource = [
  {
    key: "1",
    label: "车辆抓拍"
  },
  {
    key: "2",
    label: "行人抓拍"
  },
  {
    key: "3",
    label: "非机动车抓拍"
  }
];

export default ({ pathname }) => {
  function handleNavChange(key, item) {
    console.log(item);
  }
  return (
    <div className={"container"}>
      <CardWrapper type="card" className={leftCls}>
        <Nav onChange={handleNavChange} />
        <div>地址:华浦路145号</div>
        <Panel component={"PieChart"} />
        <Panel component={"LineChart"} />
      </CardWrapper>
      <CardWrapper type="card" className={"container-center"}>
        <div className={"container-checkbox"}>
          <CheckboxGroup />
        </div>
        <MapContainer />
      </CardWrapper>
      <CardWrapper type="card" className={rightCls}>
        <Nav dataSource={rightDataSource} onChange={handleNavChange} />
        <DataList />
        <div className={styles["link-detail"]}>
          <Link to="/">详情分析></Link>
        </div>
      </CardWrapper>
    </div>
  );
};
