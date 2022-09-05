import React, { memo } from "react";
import MXHeader from "@/pages/home/header";
import MXBanner from "@/pages/home/banner";
import MXNotice from "@/pages/home/notice";
import MXMenus from "@/pages/home/menus";
import NJProduct from "@/pages/home/product";
import Style from "@/pages/home/style.module.less";

export default memo(function MXHome(props) {
  return (
    <div className={Style.main}>
      <MXHeader />
      <MXBanner />
      <MXNotice />
      <MXMenus />
      <NJProduct />
    </div>
  );
});
