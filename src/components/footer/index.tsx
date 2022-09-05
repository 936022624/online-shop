import React, { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TabBar } from "antd-mobile";
import useSelectedData from "@/store/tabbar";

export default memo(function MXFooter(props) {
  // 从全局拿到
  // const { selectedTab, setSelectedTab, hidden, setHidden } = useSelectedData();
  const [fullScreen, setFullScreen] = useState(true);
  const { selectedTab, hidden } = useSelectedData();
  const history = useHistory();

  /**
   * useEffect(() => {
      // 注意点，通过这种方式，只能获取通过 history 修改的路由地址
      history.listen((location) => {
      console.log(location);
      });
      }, [history]);
  */

  // useEffect(() => {
  //   const pathName = history.location.pathname.substr(1);
  //   setSelectedTab(pathName);
  // }, []);

  return (
    <div
      style={
        fullScreen
          ? { position: "fixed", width: "100%", bottom: 0, zIndex: 999 }
          : { height: 400 }
      }
    >
      <TabBar
        unselectedTintColor="#666"
        tintColor="#F23030"
        barTintColor="white"
        hidden={hidden}
        tabBarPosition="bottom"
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={
            <div
              style={{ fontSize: "22px" }}
              className="iconfont icon-31shouye"
            />
          }
          selectedIcon={
            <div
              style={{ fontSize: "22px" }}
              className="iconfont icon-31shouyexuanzhong"
            />
          }
          selected={selectedTab === "home"}
          onPress={() => {
            history.push("/home");
          }}
        />
        <TabBar.Item
          title="分类"
          key="category"
          icon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-leimupinleifenleileibie"}
            />
          }
          selectedIcon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-leimupinleifenleileibie2"}
            />
          }
          selected={selectedTab === "category"}
          onPress={() => {
            history.push("/category");
          }}
        />
        <TabBar.Item
          title="购物车"
          key="cart"
          icon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-31gouwuche"}
            />
          }
          selectedIcon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-31gouwuchexuanzhong"}
            />
          }
          selected={selectedTab === "cart"}
          onPress={() => {
            history.push("/cart");
          }}
        />
        <TabBar.Item
          title="个人"
          key="me"
          icon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-31wode"}
            />
          }
          selectedIcon={
            <div
              style={{ fontSize: "22px" }}
              className={"iconfont icon-31wodexuanzhong"}
            />
          }
          selected={selectedTab === "me"}
          onPress={() => {
            history.push("/me");
          }}
        />
      </TabBar>
    </div>
  );
});
