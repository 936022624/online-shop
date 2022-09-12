import React, { memo, Suspense, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/router";
import MXFooter from "@/components/footer";
import useSelectedData from "@/store/tabbar";
// 如果是在 TS 的 React 项目中使用 less 模块化，那么还必须额外添加一个配置
// react-app-env.d.ts 修改
import Style from "@/App.module.less";

/**
 * 这一段代码好好看
 * 因为这是集中式配置路由的一个好的方案
 */
// 如果想使用 withRouter 包裹组件，那么这个组件必须放到 router 组件中才可以
export default withRouter(
  memo(function App() {
    // 注意点：只有在路由创建的组件中才能通过 useHistory 获取到 history
    const history = useHistory();
    const { setSelectedTab, setHidden } = useSelectedData();
    /**
     * 当「每次」产生副作用的时候
     * 都会执行该方法
     * 然后再在这里面执行 Tabbar 相关的逻辑即可
     */
    useEffect(() => {
      const pathName = history.location.pathname.substr(1);
      if (
        pathName === "home" ||
        pathName === "category" ||
        pathName === "cart" ||
        pathName === "me"
      ) {
        /**
         * 如果是 首页 or 分类 or 购物车 or 个人中心
         * 那么就选中对应的 TabItem
         * 并且显示底部 Tabbar
         */
        setSelectedTab(pathName);
        setHidden(false);
      } else {
        // 如果不是 首页 or 分类 or 购物车 or 个人中心，那么就隐藏底部 Tabbar
        setHidden(true);
      }
    });
    // 通过
    return (
      <div className={Style.main}>
        {/* 被切换的内容 */}
        <Suspense fallback={<div>Loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
        {/* 所有界面都需要显示的内容 */}
        <MXFooter />
      </div>
    );
  })
);
