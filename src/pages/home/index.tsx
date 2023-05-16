import React, { memo } from "react";
import Header from "@/pages/home/header";
import Banner from "@/pages/home/banner";
import Notice from "@/pages/home/notice";
import Menus from "@/pages/home/menus";
import Product from "@/pages/home/product";
import Style from "@/pages/home/style.module.less";

export default memo(function Home(props) {
  return (
    <div className={Style.main}>
      <Header />
      <Banner />
      <Notice />
      <Menus />
      <Product />
    </div>
  );
});
