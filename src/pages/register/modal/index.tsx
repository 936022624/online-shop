import React, { useState, memo } from "react";
import { useHistory } from "react-router-dom";
import Style from "@/pages/register/modal/style.module.less";
import { Modal as AntModal } from "antd-mobile";

export default memo(function Modal(props: React.PropsWithChildren<any>) {
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  return (
    <AntModal
      visible={visible}
      transparent
      maskClosable={false}
      title="注册协议及隐私政策"
      footer={[
        {
          text: "不同意",
          onPress: () => {
            setVisible(false);
            history.push("/login");
          },
        },
        {
          text: "同意",
          onPress: () => {
            setVisible(false);
          },
        },
      ]}
    >
      <div className={Style.content}>
        <p>
          在您注册成为有赞精选用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
        </p>
        <a href="">
          请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
        </a>
        <a href="">《有赞精选用户注册协议》</a>
        <a href="">《有赞精选隐私政策》</a>
        <a href="">《订单共享与安全》</a>
        <a href="">
          【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意有赞精选可以依据以上的隐私政策内容来处理您的个人信息。
        </a>
        <p>如您对以上协议内容有任何疑问，您可随时与有赞精选客服联系。</p>
      </div>
    </AntModal>
  );
});
