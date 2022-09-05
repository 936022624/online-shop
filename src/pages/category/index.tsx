import React, { memo } from "react";
import MXHeader from "@/pages/category/header";
import MXContent from "@/pages/category/content";
import Style from "@/pages/category/style.module.less";

export default memo(function MXCategory(props) {
  return (
    <div className={Style.main}>
      <MXHeader />
      <MXContent />
    </div>
  );
});
