import React, { memo, useState } from "react";
import { NavBar, SearchBar } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Style from "@/pages/search/header/style.module.less";
import ClassNames from "classnames";

export default memo(function NJHeader() {
  const history = useHistory();
  const [value, setValue] = useState("");
  const submit = () => {
    // console.log(value);
    // 1.获取以前的数据
    const localStorage = window.localStorage;
    // 2.将当前数据添加到以前数据的前面
    const result = localStorage.getItem("njHistory");
    let list: string[] = [];
    if (result) {
      list = result.split(",");
    }
    console.log(list);
    list.unshift(value);
    console.log(list);
    // 3.将添加之后的数据重新存储起来
    localStorage.setItem("njHistory", list.join(","));
  };
  return (
    <div className={Style.header}>
      <NavBar
        className={Style.nav}
        mode="dark"
        leftContent={
          <span
            className={ClassNames("iconfont", "icon-back", Style.back)}
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
        onChange={(val) => {
          setValue(val);
        }}
        onSubmit={() => {
          submit();
        }}
      />
    </div>
  );
});
