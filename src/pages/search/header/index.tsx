import React, { memo, useState } from "react";
import classNames from "classnames";
import { NavBar } from "antd-mobile";
import { SearchBar } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Style from "@/pages/search/header/style.module.less";

export default memo(function Header() {
  const history = useHistory();
  const [value, setValue] = useState("");
  const submit = () => {
    // 1. 获取以前的数据
    const localStorage = window.localStorage;
    // 2. 将当前数据添加到以前数据的前面
    const searchHistory = localStorage.getItem("searchHistory");
    let list: string[] = [];
    // 3. 将添加之后的数据重新存储起来
    if (searchHistory) {
      list = searchHistory.split(" ");
    }
    list.unshift(value);
    console.log("list", list);
    localStorage.setItem("searchHistory", list.join(","));
  };
  return (
    <div className={Style.header}>
      <NavBar
        mode="dark"
        className={Style.nav}
        leftContent={
          <span
            className={classNames("iconfont", "icon-back", Style.back)}
            onClick={() => {
              history.push("/category");
            }}
          />
        }
        rightContent={
          <button
            className={Style.btn}
            onClick={() => {
              submit();
            }}
          >
            搜索
          </button>
        }
      />
      <SearchBar
        className={Style.search}
        placeholder="寻找宝贝..."
        maxLength={8}
        onChange={(value) => {
          setValue(value);
        }}
        onSubmit={() => {
          submit();
        }}
      />
    </div>
  );
});
