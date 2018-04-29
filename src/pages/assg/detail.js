import DetailContainer from "./components/detail";
import LinkBack from "../../components/layouts/LinkBack";

import styles from "./assg.less";

export default () => {
  return (
    <div className={styles["detail-container"]}>
      <LinkBack className={styles["back-btn"]} />
      <DetailContainer />
    </div>
  );
};
