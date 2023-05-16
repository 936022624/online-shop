import React, { memo } from "react";
import { SearchBar, Tabs } from "antd-mobile";
import OrderList from "@/pages/order/orderList";
import Style from "@/pages/order/content/style.module.less";

interface ContentType {
  type?: string;
}

export default memo(function Content(
  props: React.PropsWithChildren<ContentType>
) {
  // tabs 数组枚举
  const tabs = [
    { title: "全部", key: "1" },
    { title: "待付款", key: "2" },
    { title: "待发货", key: "3" },
    { title: "待收货", key: "4" },
    { title: "待评价", key: "5" },
  ];

  return (
    <div>
      <SearchBar className={Style.search} placeholder="Search" maxLength={8} />
      <Tabs
        tabs={tabs}
        initialPage={props.type}
        tabBarInactiveTextColor="#666"
        tabBarActiveTextColor="#f23030"
        tabBarUnderlineStyle={{ borderColor: "#f23030" }}
      ></Tabs>
      <OrderList />
    </div>
  );
});
