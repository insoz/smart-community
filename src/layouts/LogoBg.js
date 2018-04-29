import React from "react";

import styles from "./index.less";

export default () => {
  return (
    <div>
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
    </div>
  );
};
