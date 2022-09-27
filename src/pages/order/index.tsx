import React, { memo } from "react";
import NJHeader from "@/components/header";
import MXContent from "@/pages/order/content";
import Style from "@/pages/order/style.module.less";

export default memo(function MXOrder(props: React.PropsWithChildren<any>) {
  // 只有被路由渲染出来的组件，才能够从 props 中获取路由信息
  const type = props.match.params.type;
  console.log("type ===", type);
  return (
    <div className={Style.main}>
      <NJHeader title="我的订单界面" />
      <MXContent type={type} />
    </div>
  );
});
