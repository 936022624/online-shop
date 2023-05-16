import React, { memo } from "react";
import { NavBar } from "antd-mobile";
import { SearchBar } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Style from "@/pages/category/header/style.module.less";

export default memo(function Header() {
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
