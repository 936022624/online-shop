import React, { memo, useState } from "react";
import Style from "@/pages/searchResult/searchTabs/style.module.less";
interface SearchTabsType {
  searchKey: string;
}
enum SearchTypeEnum {
  NORMAL, // 默认
  PRICE_ASC, // 价格升序
  PRICE_DESC, // 价格降序
  SCALE_ASC, // 销量升序
  SCALE_DESC, // 销量降序
}
export default memo(function SearchTabs(
  props: React.PropsWithChildren<SearchTabsType>
) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [priceType, setPriceType] = useState<SearchTypeEnum>(
    SearchTypeEnum.NORMAL
  );
  const [scaleType, setScaleType] = useState<SearchTypeEnum>(
    SearchTypeEnum.NORMAL
  );
  return (
    <div className={Style.main}>
      <ul>
        <li>{props.searchKey}</li>
        <li
          className={
            priceType !== SearchTypeEnum.NORMAL && selectedIndex === 1
              ? Style.active
              : ""
          }
          onClick={() => {
            setSelectedIndex(1);
            if (priceType === SearchTypeEnum.NORMAL) {
              setPriceType(SearchTypeEnum.PRICE_ASC);
            } else if (priceType === SearchTypeEnum.PRICE_ASC) {
              setPriceType(SearchTypeEnum.PRICE_DESC);
            } else {
              setPriceType(SearchTypeEnum.NORMAL);
            }
          }}
        >
          价格
          <b
            className={
              priceType === SearchTypeEnum.PRICE_ASC ? Style.bActive : ""
            }
          ></b>
          <i
            className={
              priceType === SearchTypeEnum.PRICE_DESC ? Style.iActive : ""
            }
          ></i>
        </li>
        <li
          className={
            scaleType !== SearchTypeEnum.NORMAL && selectedIndex === 2
              ? Style.active
              : ""
          }
          onClick={() => {
            setSelectedIndex(2);
            if (scaleType === SearchTypeEnum.NORMAL) {
              setScaleType(SearchTypeEnum.SCALE_ASC);
            } else if (scaleType === SearchTypeEnum.SCALE_ASC) {
              setScaleType(SearchTypeEnum.SCALE_DESC);
            } else {
              setScaleType(SearchTypeEnum.NORMAL);
            }
          }}
        >
          销量
          <b
            className={
              scaleType === SearchTypeEnum.SCALE_ASC ? Style.bActive : ""
            }
          ></b>
          <i
            className={
              scaleType === SearchTypeEnum.SCALE_DESC ? Style.iActive : ""
            }
          ></i>
        </li>
        <li
          className={selectedIndex === 3 ? Style.active : ""}
          onClick={() => {
            if (selectedIndex !== 3) {
              setSelectedIndex(3);
            } else {
              setSelectedIndex(0);
            }
          }}
        >
          新品
        </li>
      </ul>
    </div>
  );
});
