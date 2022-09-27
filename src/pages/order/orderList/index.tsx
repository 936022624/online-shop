import { getOrder } from "@/services";
import React, { memo, useState, useEffect } from "react";
import Style from "./style.module.less";

interface AttrType {
  key: string;
  value: string;
}
interface ProductType {
  id: number; //'主键'
  product_id: number; //'商品id'
  product_brand_id: number; //'品牌id'
  product_category_id: number; //'分类id'
  product_sku_id: number; //'商品sku id'

  product_name: string; //'商品名称'
  product_pic: string; //'商品主图'
  product_quantity: number; //'购买数量'
  product_price: number; //'添加到购物车时价格'
  product_attr: AttrType[]; //'商品销售属性'
  selected: boolean; // 用于保存当前是否选中
}
export interface OrderType {
  id: number; //'主键'
  user_id: number; //'用户id'
  total_amount: number; //'订单总金额',
  pay_type: number; //'支付方式：0->未支付；1->支付宝；2->微信',
  source_type: number; //'订单来源：0->PC订单；1->移动端订单',
  status: number; //'订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭;',
  oder_list: ProductType[]; //'订单商品列表'
}

export default memo(function MXOrderList(props: React.PropsWithChildren<any>) {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    getOrder().then((response) => {
      setOrders(response.data);
    });
  }, []);

  // 订单列表
  return (
    <ul className={Style.list}>
      {orders.length !== 0 &&
        orders.map((order: OrderType) => {
          // 每个订单
          return (
            <li className={Style.item}>
              {order.oder_list.length !== 0 &&
                // 当前订单中的商品
                order.oder_list.map((product: ProductType) => {
                  return (
                    <div className={Style.product}>
                      <div className={Style.productTop}>
                        <img src={product.product_pic} alt="" />
                        <div>
                          <p>{product.product_name}</p>
                          <span>
                            {product.product_attr
                              .map((attr) => {
                                return attr.value;
                              })
                              .join(",")}
                          </span>
                        </div>
                      </div>
                      <div className={Style.productBottom}></div>
                    </div>
                  );
                })}
            </li>
          );
        })}
    </ul>
  );
});
