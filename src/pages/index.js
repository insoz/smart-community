import React from "react";
import { connect } from "dva";
import { Redirect } from "dva/router";
// import styles from "./index.css";

function IndexPage() {
  return <Redirect to="/assg" />;
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
