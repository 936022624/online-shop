import React, { useState, memo } from "react";
import Style from "@/pages/login/footer/style.module.less";
import qq from "@/assets/images/qq.png";
import weixin from "@/assets/images/weixin.png";
import apple from "@/assets/images/apple.png";

// 通过 memo 包裹组件
export default memo(function Footer(props: React.PropsWithChildren<any>) {
  return (
    <div className={Style.footer}>
      {/* 分割线的绘制方法 */}
      <div className={Style.line}>
        <b />
        <span>其它登录方式</span>
        <b />
      </div>
      <ul>
        <li>
          <img src={qq} alt="" />
          <p>QQ</p>
        </li>
        <li>
          <img src={weixin} alt="" />
          <p>微信</p>
        </li>
        <li>
          <img src={apple} alt="" />
          <p>苹果</p>
        </li>
      </ul>
      <p>
        登录代表您已同意
        <a href="#">有赞隐私政策</a>
      </p>
    </div>
  );
});
