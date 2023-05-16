import React, { memo, useState, useEffect } from "react";
import { getProducts } from "@/services/index";
import Style from "@/pages/home/product/style.module.less";
import { useHistory } from "react-router-dom";

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

export default memo(function Product(props) {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const history = useHistory();

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <div className={Style.main}>
        {products.length !== 0 &&
          products.map((val: ProductType) => {
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
                  <span>¥{val.price}</span>
                  <span>{val.sale}人已购买</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
});
