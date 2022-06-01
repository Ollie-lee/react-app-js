import React from "react";
import styles from "./index.module.css";

const withGrayDividerMiddle =
  (LeftComponent, RightComponent) =>
  (leftComponentProps, rightComponentProps) => {
    return (
      <>
        <LeftComponent {...leftComponentProps} />
        <div className={styles.verticalDivider}></div>
        <RightComponent {...rightComponentProps} />
      </>
    );
  };

export default withGrayDividerMiddle;
