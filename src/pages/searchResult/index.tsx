import React, { memo } from "react";
import Header from "@/pages/category/header";
import SearchTabs from "@/pages/searchResult/searchTabs";
import ProductList from "@/pages/searchResult/productList";
import Style from "@/pages/searchResult/style.module.less";

export default memo(function SearchResult(props: React.PropsWithChildren<any>) {
  const key = props.match.params.key;
  return (
    <div className={Style.main}>
      <Header />
      <SearchTabs searchKey={key} />
      <ProductList />
    </div>
  );
});
