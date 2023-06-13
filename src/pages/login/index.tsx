import React, { memo } from "react";
import Style from "@/pages/login/style.module.less";
import Header from "@/components/header";
import Content from "@/pages/login/content";
import Footer from "@/pages/login/footer";

export default memo(function Login(props) {
  return (
    <div className={Style.main}>
      <Header title="登录注册" />
      <Content />
      <Footer />
    </div>
  );
});
