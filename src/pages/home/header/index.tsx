import React, { memo } from "react";
import { NavBar } from "antd-mobile";
import { SearchBar } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Style from "@/pages/home/header/style.module.less";

export default memo(function Header() {
  const history = useHistory();
  return (
    <div className={Style.header}>
      <NavBar
        mode="dark"
        className={Style.nav}
        leftContent={
          <span
            style={{ fontSize: "22px" }}
            className="iconfont icon-31leimu"
            onClick={() => {
              history.push("/category");
            }}
          />
        }
        rightContent={
          <span
            style={{ fontSize: "16px" }}
            onClick={() => {
              history.push("/login");
            }}
          >
            登陆
          </span>
        }
      />
      <SearchBar
        className={Style.search}
        placeholder="寻找宝贝..."
        maxLength={8}
        onFocus={() => {
          history.push("/search");
        }}
      />
    </div>
  );
});
