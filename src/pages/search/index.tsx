import React, { memo } from "react";
import Header from "@/pages/search/header";
import History from "@/pages/search/history";

import Style from "./style.module.less";

export default memo(function Search(props) {
  return (
    <div className={Style.main}>
      <Header />
      <History />
    </div>
  );
});
