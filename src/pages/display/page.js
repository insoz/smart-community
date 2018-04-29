import classNames from "classnames";
// import Link from "umi/link";

import MapContainer from "../../components/map/MapContainer";
import CardWrapper from "../../components/layouts/CardWrapper";
import CheckboxGroup from "../../components/checkbox/CheckboxGroup";
import ChartPanel from "../../components/panel/ChartPanel";
import BasicTable from "../../components/table/BasicTable/index";
import { dataSource, columns } from "./dataConfig";
// import Nav from "./components/Nav/index";
import styles from "./display.less";

const ChartItem = ChartPanel.ChartItem;
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
  // function handleNavChange(key, item) {
  //   console.log(item);
  // }

  const colunmChartProps = {
    config: {
      "chart.width": 450
    }
  };

  return (
    <div className="container">
      <div type="card" className={leftCls}>
        <ChartPanel title="小区进出流量统计" component={"AreaChart"} />
        <ChartPanel
          title="各楼栋住户数量统计"
          component={"ColumnChart"}
          {...colunmChartProps}
        />
        <ChartPanel title="各年龄段人员分布统计" component={"RingChart"} />
      </div>
      <div type="card" className={centerCls}>
        <div className={styles["center-top"]}>
          <ChartPanel
            // title="各年龄段人员分布统计"
            component={"ActivityChart"}
          />
          <ChartPanel title="安防设备数量统计" component={"RadarChart"} />
        </div>
        <CardWrapper type="card" className={styles["center-center"]}>
          <div className={"container-checkbox"}>
            <CheckboxGroup />
          </div>
          <MapContainer className={styles["map"]} />
        </CardWrapper>
        <CardWrapper type="card" className="center-bottom">
          <BasicTable dataSource={dataSource} columns={columns} />
        </CardWrapper>
      </div>
      <div type="card" className={rightCls}>
        <ChartPanel title="单位数据统计">
          <ChartItem component={"RingChart"} />
          <ChartItem
            component={"ColumnChart"}
            config={{
              "chart.width": 350,
              "chart.height": 225,
              "title.text": "各楼栋单位数",
              "title.style": { color: "#fff" }
            }}
          />
        </ChartPanel>
        <ChartPanel title="车位数据统计" component={"PieChart"} />
      </div>
    </div>
  );
};
