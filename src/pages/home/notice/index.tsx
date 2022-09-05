import React, { memo, useState, useEffect } from "react";
import { getNotice } from "@/services/index";
import { Carousel } from "antd-mobile";
import ClassNames from "classnames";
import Style from "./style.module.less";

interface NoticeType {
  id: number; //'主键',
  title: string; //'标题',
  note: string; //'备注',
  url: string; //'链接地址',
  type: number; //'轮播类型：0->PC；1->mobile',
  status: number; //'上下线状态：0->下线；1->上线',
  sort: number; //'排序',
}

export default memo(function MXNotice(props) {
  const [notice, setNotice] = useState<Array<NoticeType>>([]);
  useEffect(() => {
    getNotice().then((response) => {
      setNotice(response.data);
    });
  }, []);
  return (
    <>
      {notice.length !== 0 && (
        <div className={Style.notice}>
          {/* 默认情况下，我们可以通过 className 来添加多个类名
              但是在有些情况下，className 并不好用
              所以在企业开发中，如果想更灵活地绑定类名，我们可以借助一个插件 —— classnames
          */}
          <span
            className={ClassNames("iconfont", "icon-tongzhi", Style.noticeLeft)}
          ></span>
          <Carousel
            className={Style.noticeRight}
            vertical
            dots={false}
            autoplay
            infinite
          >
            {notice.map((val) => {
              return (
                <div key={val.id} className={Style.noticeText}>
                  {val.title}
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </>
  );
});
