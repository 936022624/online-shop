import React, { memo, useState, useEffect } from "react";

export default memo(function Detail(props: React.PropsWithChildren<any>) {
  console.log(props.match.params.id);
  return <div>商品详情界面</div>;
});
