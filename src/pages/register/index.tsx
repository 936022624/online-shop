import React, { memo } from "react";
import Header from "@/components/header";
import Style from "@/pages/register/style.module.less";
import Modal from "@/pages/register/modal";
import Content from "@/pages/register/content";

export default memo(function Register(props) {
  return (
    <div className={Style.main}>
      <Header title="注册有赞精选" />
      <Content />
      <Modal />
    </div>
  );
});
