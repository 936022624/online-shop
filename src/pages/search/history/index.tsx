import React, { memo, useState, useEffect } from "react";
import { Modal } from "antd-mobile";
import Style from "@/pages/search/history/style.module.less";

const alert = Modal.alert;

export default memo(function History() {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    const localStorage = window.localStorage;
    console.log("localStorage", localStorage);
    const result = localStorage.getItem("searchHistory");
    if (result) {
      setList(result.split(","));
    }
  }, []);

  return (
    <>
      {list.length !== 0 && (
        <div className={Style.history}>
          <p className={Style.historyTop}>
            <span>最近搜索</span>
            <i
              className={"iconfont icon-shanchu1"}
              onClick={() => {
                alert("确定要清空吗", "Are you sure???", [
                  {
                    text: "取消",
                    onPress: () => {},
                    style: "default",
                  },
                  {
                    text: "确定",
                    onPress: () => {
                      window.localStorage.setItem("searchHistory", "");
                      setList([]);
                    },
                  },
                ]);
              }}
            ></i>
          </p>
          <ul className={Style.historyBottom}>
            {list.map((val) => {
              return <li>{val}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
});
