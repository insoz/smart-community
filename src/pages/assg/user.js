import LinkBack from "../../components/layouts/LinkBack";
import UserPage from "./components/user";

import styles from "./assg.less";

export default () => {
  return (
    <div className={styles["detail-container"]}>
      <LinkBack className={styles["back-btn"]} />
      <UserPage />
    </div>
  );
};
