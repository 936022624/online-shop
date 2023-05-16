import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import Style from "./style.module.less";
import avatar from "@/assets/images/avatar.png";
import c1 from "@/assets/images/c1.png";
import c2 from "@/assets/images/c2.png";
import c3 from "@/assets/images/c3.png";
import c4 from "@/assets/images/c4.png";
import c5 from "@/assets/images/c4.png";

export default memo(function Content() {
  const history = useHistory();
  const menus: any[] = [
    {
      image: c1,
      title: "待付款",
    },
    {
      image: c2,
      title: "待发货",
    },
    {
      image: c3,
      title: "待收货",
    },
    {
      image: c4,
      title: "待评价",
    },
    {
      image: c5,
      title: "退货/款",
    },
  ];

  return (
    <div className={Style.content}>
      <div className={Style.contentTop}>
        <img src={avatar} alt="" />
        <span>杨孟鑫</span>
      </div>
      <ul className={Style.contentMiddle}>
        <li>
          <span>4</span>
          <p>商品收藏</p>
        </li>
        <li>
          <span>3</span>
          <p>店铺收藏</p>
        </li>
        <li>
          <span>5</span>
          <p>我的足迹</p>
        </li>
        <li>
          <span>8</span>
          <p>地址管理</p>
        </li>
      </ul>
      <div className={Style.contentBottom}>
        <div
          onClick={() => {
            history.push("/order/1");
          }}
        >
          <span>我的订单</span>
          <span>
            全部订单
            <span
              style={{ fontSize: "3.2vw" }}
              className={"iconfont icon-right"}
            />
          </span>
        </div>
        <ul>
          {menus.map((menu, index) => {
            return (
              <li
                key={menu.title}
                onClick={() => {
                  history.push(`/order/${index + 2}`);
                }}
              >
                <img src={menu.image} alt="" />
                <p>{menu.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
