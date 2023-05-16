import React, { memo } from "react";

export default memo(function List(props: React.PropsWithChildren<any>) {
  console.log(props.match.params.id);
  return <div>我是列表</div>;
});
