import React from "react";
import { Redirect } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home"));
const Category = React.lazy(() => import("@/pages/category"));
const Cart = React.lazy(() => import("@/pages/cart"));
const Me = React.lazy(() => import("@/pages/me"));
const Search = React.lazy(() => import("@/pages/search"));
const SearchResult = React.lazy(() => import("@/pages/searchResult"));
const Login = React.lazy(() => import("@/pages/login"));
const Register = React.lazy(() => import("@/pages/register"));
const Detail = React.lazy(() => import("@/pages/home/detail"));
const List = React.lazy(() => import("@/pages/list"));
const Order = React.lazy(() => import("@/pages/order"));

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/list/:id",
    component: List,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/searchResult/:key",
    component: SearchResult,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/me",
    component: Me,
  },
  {
    path: "/order/:type",
    component: Order,
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
