import LinkBack from "../../components/layouts/LinkBack";
import UnitPage from "./components/unit";

import styles from "./assg.less";

export default () => {
  return (
    <div className={styles["detail-container"]}>
      <LinkBack className={styles["back-btn"]} />
      <UnitPage />
    </div>
  );
};
