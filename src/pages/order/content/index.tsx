import React, { memo, useState, useEffect } from "react";
import { SearchBar, Tabs } from "antd-mobile";
import { getOrder } from "@/services";
import OrderList, { OrderType } from "@/pages/order/orderList";
import Style from "@/pages/order/content/style.module.less";

interface ContentType {
  type?: string;
}

export default memo(function Content(
  props: React.PropsWithChildren<ContentType>
) {
  const type = props.type;
  // tabs 数组枚举
  const [tabs, setTabs] = useState([
    { title: "全部", key: "1", list: new Array<OrderType>() },
    { title: "待付款", key: "2", list: new Array<OrderType>() },
    { title: "待发货", key: "3", list: new Array<OrderType>() },
    { title: "待收货", key: "4", list: new Array<OrderType>() },
    { title: "待评价", key: "5", list: new Array<OrderType>() },
  ]);
  const [list, setList] = useState<OrderType[]>([]);

  useEffect(() => {
    getOrder().then((response) => {
      const temp = [...tabs];
      // 1. 保存所有类型的数据
      temp[0].list = response.data;
      response.data.forEach((order: OrderType) => {
        // 待付款
        if (order.status === 0) {
          temp[1].list.push(order);
        } else if (order.status === 1) {
          // 待发货
          temp[2].list.push(order);
        } else if (order.status === 2) {
          // 待收货
          temp[3].list.push(order);
        } else if (order.status === 3) {
          // 待评价
          temp[4].list.push(order);
        }
      });

      // 2. 初始化默认渲染的数据
      temp.forEach((tab) => {
        if (tab.key === type) setList(tab.list);
      });
      setTabs(temp);
    });
  }, []);

  return (
    <div>
      <SearchBar className={Style.search} placeholder="Search" maxLength={8} />
      <Tabs
        tabs={tabs}
        initialPage={props.type}
        tabBarInactiveTextColor="#666"
        tabBarActiveTextColor="#f23030"
        tabBarUnderlineStyle={{ borderColor: "#f23030" }}
        onTabClick={(tab) => {
          setList(tab.list);
        }}
      ></Tabs>
      <OrderList list={list} />
    </div>
  );
});
