import React, { memo } from "react";
import Header from "@/components/header";
import Content from "@/pages/me/content";
import Style from "@/pages/me/style.module.less";

export default memo(function Me(props) {
  return (
    <div className={Style.main}>
      <Header title="个人中心" />
      <Content />
    </div>
  );
});
