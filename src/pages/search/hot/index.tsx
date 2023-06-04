import React, { memo, useState, useEffect } from "react";
import Style from "@/pages/search/hot/style.module.less";
import { getHot } from "@/services";
import { useHistory } from "react-router-dom";

export default memo(function Hot() {
  const [list, setList] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    getHot().then((response) => {
      const hots = response.data;
      setList(hots);
    });
  }, []);

  return (
    <>
      {list.length !== 0 && (
        <div className={Style.hot}>
          <p className={Style.hotTop}>
            <span>热门搜索</span>
            <b
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "隐藏" : "显示"}
            </b>
          </p>

          <div style={show ? { display: "none" } : { display: "block" }}>
            已隐藏搜索发现
          </div>
          {show ? (
            <ul className={Style.hotBottom}>
              {list.map((val) => {
                return (
                  <li
                    onClick={() => {
                      // 点击之后搜索内容
                      history.push(`searchResult/${val}`);
                    }}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      )}
    </>
  );
});
