// import { Menu, Icon } from "antd";
import Link from "umi/link";

import Menu from "../components/menu";
import TipBar from "./TipBar";
import LogoBg from "./LogoBg";
import styles from "./index.less";

function Header({ location }) {
  return (
    <div className={styles["header"]}>
      <LogoBg />
      <div className={styles["menu"]}>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme={"dark"}
        >
          <Menu.Item key="/assg">
            <Link to="/assg">一标六实</Link>
          </Menu.Item>
          <Menu.Item key="/microCard">
            <Link to="/microCard">微卡口</Link>
          </Menu.Item>
          <Menu.Item key="/equipment">
            <Link to="/equipment">设施设备</Link>
          </Menu.Item>
          <Menu.Item key="/display">
            <Link to="/display">综合数据</Link>
          </Menu.Item>
        </Menu>
        <TipBar className={styles["tip"]} />
      </div>
    </div>
  );
}

export default Header;
