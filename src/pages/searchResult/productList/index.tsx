import React, { memo, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { PullToRefresh } from "antd-mobile";
import { getProducts } from "@/services";
import Style from "@/pages/searchResult/productList/style.module.less";

interface ProductType {
  id: number; // '主键'
  name: string; //'商品名称',
  pic: string; //'主图',
  price: number; //'销售价',
  sale: number; //'销量',
  note: string; //'备注',

  sort: number; //'排序',
  publish_status: number; //'上架状态：0->下架；1->上架',
  new_status: number; //'新品状态:0->不是新品；1->新品',
  recommand_status: number; //'推荐状态；0->不推荐；1->推荐',
  verify_status: number; //'审核状态：0->未审核；1->审核通过',
}

export default memo(function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(
    document.documentElement.clientHeight
  );
  const pullRef = useRef<HTMLDivElement | null>(null);
  const history = useHistory();

  const getData = () => {
    getProducts().then((response) => {
      setProducts([...products, ...response.data]);
    });
  };

  useEffect(() => {
    getData();
    // 这里组件设计得不大好，会有高度计算的错误产生
    // 因此需手动加一下高度才行
    setHeight(height - pullRef.current!.offsetTop + 490);
  }, []);

  return (
    <PullToRefresh
      damping={60}
      style={{
        height: height,
        overflow: "auto",
      }}
      indicator={{ deactivate: "上拉可以刷新" }}
      direction={"up"} // 上拉加载更多
      refreshing={refreshing}
      onRefresh={() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
          getData();
        }, 1000);
      }}
    >
      <div className={Style.main} ref={pullRef}>
        {products.length !== 0 &&
          products.map((val) => {
            return (
              <div
                className={Style.product}
                key={val.id}
                onClick={() => {
                  history.push(`/detail/${val.id}`);
                }}
              >
                <img src={val.pic} alt="" />
                <p>{val.name}</p>
                <div className={Style.productBottom}>
                  <span>￥{val.price}</span>
                  <span>{val.sale}人已购买</span>
                </div>
              </div>
            );
          })}
      </div>
    </PullToRefresh>
  );
});
