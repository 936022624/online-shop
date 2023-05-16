import React, { memo } from "react";
import Header from "@/pages/category/header";
import Content from "@/pages/category/content";
import Style from "@/pages/category/style.module.less";

export default memo(function Category(props) {
  return (
    <div className={Style.main}>
      <Header />
      <Content />
    </div>
  );
});
