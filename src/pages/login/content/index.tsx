import React, { useState } from "react";
import Style from "@/pages/login/content/style.module.less";
import { List, InputItem } from "antd-mobile";

export default function Content(props: React.PropsWithChildren<any>) {
  const [accountPlaceholder, setAccountPlaceholder] = useState("请输入手机号");
  const [passwordPlaceholder, setPasswordPlaceholder] =
    useState("请输入收到的验证码");
  const [codeText, setCodeText] = useState("获取验证码");
  const [buttonText, setButtonText] = useState("账号密码登陆");

  return (
    <div className={Style.content}>
      <div className={Style.form}>
        <InputItem
          type="phone"
          placeholder={accountPlaceholder}
          clear
          moneyKeyboardAlign="left"
        />
        <div className={Style.password}>
          <InputItem
            type="text"
            placeholder={passwordPlaceholder}
            clear
            moneyKeyboardAlign="left"
          />
          <button>{codeText}</button>
        </div>
        <div className={Style.loginBtn}>
          <p>
            <button>登陆</button>
          </p>
          <p>
            <button>一键登录</button>
          </p>
        </div>
        <div className={Style.switchBtn}>
          <button
            onClick={() => {
              if (buttonText === "账号密码登陆") {
                setButtonText("短信验证码登陆");
                setAccountPlaceholder("用户名/邮箱/手机号");
                setPasswordPlaceholder("请输入密码");
                setCodeText("忘记密码");
              } else {
                setButtonText("账号密码登陆");
                setAccountPlaceholder("请输入手机号");
                setPasswordPlaceholder("请输入收到的验证码");
                setCodeText("获取验证码");
              }
            }}
          >
            {buttonText}
          </button>
          <button>手机快速注册</button>
        </div>
      </div>
    </div>
  );
}
