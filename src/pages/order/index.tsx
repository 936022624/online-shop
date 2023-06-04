import React, { memo } from "react";
import Header from "@/components/header";
import Content from "@/pages/order/content";
import Style from "@/pages/order/style.module.less";

export default memo(function Order(props: React.PropsWithChildren<any>) {
  // 只有被路由渲染出来的组件，才能够从 props 中获取路由信息
  const type = props.match.params.type;
  return (
    <div className={Style.main}>
      <Header title="我的订单界面" />
      <Content type={type} />
    </div>
  );
});
