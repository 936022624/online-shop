import React, { memo } from "react";
import Style from "@/pages/cart/style.module.less";
import MXHeader from "@/components/header";
import MXContent from "@/pages/cart/content";

export default memo(function MXCart(props) {
  return (
    <div className={Style.main}>
      <MXHeader title="购物车" />
      <MXContent />
    </div>
  );
});
