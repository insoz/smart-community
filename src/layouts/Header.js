// import { Menu, Icon } from "antd";
import Link from "umi/link";

import Menu from "../components/menu";
import styles from "./index.less";

function Header({ location }) {
  return (
    <div className={styles["header"]}>
      <div className={styles["line-left"]}>
        <div className={styles["one"]} />
        <div className={styles["two"]} />
      </div>
      <div className={styles["line-right"]}>
        <div className={styles["one"]} />
        <div className={styles["two"]} />
      </div>
      <div className={styles["bg-line-left"]}>
        <div className={styles["left-line"]} />
        <div className={styles["center-line"]} />
        <div className={styles["right-line"]} />
      </div>
      <div className={styles["bg-line-right"]}>
        <div className={styles["left-line"]} />
        <div className={styles["center-line"]} />
        <div className={styles["right-line"]} />
      </div>
      <div className={styles["menu"]}>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme={"dark"}
        >
          <Menu.Item key="/assg">
            <Link to="/assg">一标六识</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">微卡口</Link>
          </Menu.Item>
          <Menu.Item key="/404">
            <Link to="/404">设施设备</Link>
          </Menu.Item>
          <Menu.Item key="/002">
            <Link to="/404">综合数据</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
