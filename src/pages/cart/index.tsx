import React, { memo } from "react";
import Style from "@/pages/cart/style.module.less";
import Header from "@/components/header";
import Content from "@/pages/cart/content";

export default memo(function Cart(props) {
  return (
    <div className={Style.main}>
      <Header title="购物车" />
      <Content />
    </div>
  );
});
