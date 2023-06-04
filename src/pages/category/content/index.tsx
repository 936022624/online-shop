import React, { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategory } from "@/services/index";
import Style from "@/pages/category/content/style.module.less";
import { Tabs, Grid } from "antd-mobile";

interface CategoryType {
  id: number; //'主键',
  parent_id: number; //'上级分类的编号：0表示一级分类',
  name: string; //'名称',
  icon: string; //'图标',
  description: string; //'描述',
  level: number; //'分类级别：0->1级；1->2级',
  show_status: number; //'显示状态：0->不显示；1->显示',
  sort: number; //'排序'
  children: CategoryType[]; // '子分类'
}

export default memo(function Content(props) {
  const [tabs, setTabs] = useState<Array<any>>([]);
  const history = useHistory();
  useEffect(() => {
    getCategory().then((response) => {
      const list: any[] = [];
      response.data.forEach((val: CategoryType) => {
        const tab = {
          title: val.name,
          key: val.id,
          children: new Array<any>(),
        };
        if (val.children && val.children.length !== 0) {
          val.children.forEach((item: CategoryType) => {
            tab.children.push({
              icon: item.icon,
              text: item.name,
              id: item.id,
            });
          });
        }
        list.push(tab);
      });
      setTabs(list);
    });
  }, []);
  // 生成内容区域右边的界面
  const contents = tabs.map((tab) => {
    return (
      <Grid
        key={tab.key}
        data={tab.children}
        columnNum={3}
        square={false}
        hasLine={false}
        activeStyle={false}
        onClick={(dataItem) => {
          history.push(`/list/${dataItem?.id}`);
        }}
        renderItem={(dataItem) => (
          <div>
            <img
              src={dataItem?.icon}
              style={{ width: "75px", height: "75px" }}
              alt=""
            />
            <div style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}>
              <span>{dataItem?.text}</span>
            </div>
          </div>
        )}
      />
    );
  });
  return (
    <div className={Style.main}>
      <Tabs
        tabs={tabs}
        tabBarPosition="left"
        tabDirection="vertical"
        tabBarActiveTextColor="#f23030"
        tabBarInactiveTextColor="#666"
        tabBarUnderlineStyle={{ border: "none" }}
        renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={13} />}
      >
        {contents}
      </Tabs>
    </div>
  );
});
