import React from "react";
import { Redirect } from "react-router-dom";

const MXHome = React.lazy(() => import("@/pages/home"));
const MXCategory = React.lazy(() => import("@/pages/category"));
const MXCart = React.lazy(() => import("@/pages/cart"));
const MXMe = React.lazy(() => import("@/pages/me"));
const MXSearch = React.lazy(() => import("@/pages/search"));
const MXLogin = React.lazy(() => import("@/pages/login"));
const MXDetail = React.lazy(() => import("@/pages/home/detail"));
const MXList = React.lazy(() => import("@/pages/list"));
const MXOrder = React.lazy(() => import("@/pages/order"));

const routes = [
  {
    path: "/home",
    component: MXHome,
  },
  {
    path: "/category",
    component: MXCategory,
  },
  {
    path: "/cart",
    component: MXCart,
  },
  {
    path: "/detail/:id",
    component: MXDetail,
  },
  {
    path: "/list/:id",
    component: MXList,
  },
  {
    path: "/search",
    component: MXSearch,
  },
  {
    path: "/login",
    component: MXLogin,
  },
  {
    path: "/me",
    component: MXMe,
  },
  {
    path: "/order",
    component: MXOrder,
  },
  {
    path: "/",
    exact: true, // 精确路由匹配
    render: () => {
      return <Redirect to="/home" />;
    },
  },
];

export default routes;
