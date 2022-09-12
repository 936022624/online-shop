import React, { memo } from "react";
import MXHeader from "@/components/header";
import MXContent from "@/pages/me/content";
import Style from "@/pages/me/style.module.less";

export default memo(function MXMe(props) {
  return (
    <div className={Style.main}>
      <MXHeader title="个人中心" />
      <MXContent />
    </div>
  );
});
