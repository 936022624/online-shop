import React, { memo } from "react";
import NJHeader from "@/components/header";
import Style from "@/pages/order/style.module.less";

export default memo(function MXOrder(props) {
  return (
    <div className={Style.main}>
      <NJHeader title="我的订单界面" />
    </div>
  );
});
