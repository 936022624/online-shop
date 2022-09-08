import React, { memo } from "react";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Style from "@/components/header/style.module.less";

interface NJHeaderProps {
  title: string;
}

export default memo(function MXHeader(
  props: React.PropsWithChildren<NJHeaderProps>
) {
  const history = useHistory();
  return (
    <div className={Style.header}>
      <NavBar
        mode="dark"
        className={Style.nav}
        leftContent={
          <span
            style={{ fontSize: "22px", color: "#666" }}
            className="iconfont icon-back"
            onClick={() => {
              history.goBack();
            }}
          />
        }
        rightContent={
          <span
            style={{ fontSize: "24px", color: "#666" }}
            className="iconfont icon-more_light"
          />
        }
      >
        <span className={Style.title}>{props.title}</span>
      </NavBar>
    </div>
  );
});
