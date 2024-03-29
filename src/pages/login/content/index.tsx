import React, { useState, memo } from "react";
import { useHistory } from "react-router-dom";
import Style from "@/pages/login/content/style.module.less";
import { InputItem } from "antd-mobile";

export default memo(function Content(props: React.PropsWithChildren<any>) {
  const history = useHistory();

  const [accountPlaceholder, setAccountPlaceholder] = useState("请输入手机号");
  const [passwordPlaceholder, setPasswordPlaceholder] =
    useState("请输入收到的验证码");
  const [codeText, setCodeText] = useState("获取验证码");
  const [buttonText, setButtonText] = useState("账号密码登录");
  const [isActive, setIsActive] = useState(false);
  const [accountType, setAccountType] = useState<any>("phone");
  const [passwordType, setPasswordType] = useState<any>("text");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={Style.content}>
      <div className={Style.form}>
        <InputItem
          type={accountType}
          placeholder={accountPlaceholder}
          clear
          moneyKeyboardAlign="left"
          onChange={(value) => {
            if (value.length === 13) {
              // 验证码按钮可以点击
              setIsActive(true);
            } else {
              // 获取验证码按钮不可点击
              setIsActive(false);
            }
          }}
        />
        <div className={Style.password}>
          <InputItem
            type={passwordType}
            placeholder={passwordPlaceholder}
            clear
            moneyKeyboardAlign="left"
            onChange={(value) => {
              if (value.length >= 1) {
                setIsLogin(true);
              } else {
                setIsLogin(false);
              }
            }}
          />
          <button
            className={accountType === "phone" && isActive ? Style.active : ""}
            disabled={accountType === "phone" && isActive === false}
          >
            {codeText}
          </button>
        </div>
        <div className={Style.loginBtn}>
          <p>
            <button
              className={isLogin ? Style.loginActive : ""}
              disabled={isLogin === false}
            >
              登录
            </button>
          </p>
          <p>
            <button>一键登录</button>
          </p>
        </div>
        <div className={Style.switchBtn}>
          <button
            onClick={() => {
              if (buttonText === "账号密码登录") {
                setButtonText("短信验证码登录");
                setAccountPlaceholder("用户名/邮箱/手机号");
                setPasswordPlaceholder("请输入密码");
                setCodeText("忘记密码");
                setAccountType("text");
                setPasswordType("password");
              } else {
                setButtonText("账号密码登录");
                setAccountPlaceholder("请输入手机号");
                setPasswordPlaceholder("请输入收到的验证码");
                setCodeText("获取验证码");
                setAccountType("phone");
                setPasswordType("text");
              }
            }}
          >
            {buttonText}
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
          >
            手机快速注册
          </button>
        </div>
      </div>
    </div>
  );
});
