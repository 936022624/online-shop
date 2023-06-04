import React, { memo, useState, useEffect } from "react";
import { getCart } from "@/services/index";
import Style from "@/pages/cart/content/style.module.less";
import { Stepper } from "antd-mobile";

interface AttrType {
  key: string;
  value: string;
}
interface CartType {
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

export default memo(function Content(props) {
  const [carts, setCarts] = useState<Array<CartType>>([]);
  const [selectedCount, setSelectedCount] = useState<number>(0); // 记录当前选中的列表中有多少条数据

  useEffect(() => {
    getCart().then((response) => {
      setCarts(response.data);
    });
  }, []);
  return (
    <>
      {carts.length !== 0 && (
        <ul className={Style.list}>
          {carts.map((val: CartType, index: number) => {
            return (
              <li key={val.id} className={Style.item}>
                <div className={Style.leftItem}>
                  <p
                    onClick={() => {
                      // 修改当前商品的选中状态
                      const list = [...carts];
                      const currentItem = list[index];
                      const currentVal = !currentItem.selected;
                      currentItem.selected = currentVal;
                      setCarts(list);
                      // 更新选中商品的个数
                      if (currentVal) {
                        setSelectedCount(selectedCount + 1);
                      } else {
                        setSelectedCount(selectedCount - 1);
                      }
                    }}
                  >
                    {val.selected ? (
                      <b
                        style={{ color: "#f23030" }}
                        className={
                          "iconfont icon-yuangongqudaoAPP-fuxuankuangxuanzhong"
                        }
                      />
                    ) : (
                      <b
                        style={{ color: "#666" }}
                        className={
                          "iconfont icon-yuangongqudaoAPP-fuxuankuangweixuanzhong"
                        }
                      />
                    )}
                  </p>
                  <img src={val.product_pic} alt="" />
                </div>
                <div className={Style.rightItem}>
                  <p>{val.product_name}</p>
                  <span>
                    {val.product_attr
                      .map((obj) => {
                        return obj.value;
                      })
                      .join(",")}
                    <i className="iconfont icon-31xiala" />
                  </span>
                  <div>
                    <span>¥{val.product_price}</span>
                    <Stepper
                      className={Style.stepper}
                      showNumber
                      min={1}
                      defaultValue={val.product_quantity}
                      onChange={(val) => {
                        const list = [...carts];
                        const currentItem = list[index];
                        currentItem.product_quantity = val;
                        setCarts(list);
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className={Style.bottom}>
        <div className={Style.leftBottom}>
          <p
            onClick={() => {
              // 当前是否选中
              const currentVal = selectedCount === carts.length;
              const list = [...carts];
              if (currentVal) {
                // 变成非全选
                list.forEach((item) => {
                  item.selected = false;
                });
                setSelectedCount(0);
              } else {
                // 变成全选
                list.forEach((item) => {
                  item.selected = true;
                });
                setSelectedCount(carts.length);
              }
              setCarts(list);
            }}
          >
            {selectedCount === carts.length ? (
              <b
                style={{ color: "#f23030" }}
                className="iconfont icon-yuangongqudaoAPP-fuxuankuangxuanzhong"
              />
            ) : (
              <b
                style={{ color: "#666" }}
                className="iconfont icon-yuangongqudaoAPP-fuxuankuangweixuanzhong"
              />
            )}
          </p>
          <span>全选</span>
        </div>
        <div className={Style.rightBottom}>
          <span>
            总计:¥
            {carts.reduce((total: any, item: CartType) => {
              if (item.selected) {
                return total + item.product_quantity * item.product_price;
              } else {
                return total;
              }
            }, 0)}
          </span>
          <button>{`去结算(${carts.reduce((total: any, item: CartType) => {
            if (item.selected) {
              return total + item.product_quantity;
            } else {
              return total;
            }
          }, 0)}件)`}</button>
        </div>
      </div>
    </>
  );
});
