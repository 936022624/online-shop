import React, { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getMenus } from "@/services/index";
import { Grid } from "antd-mobile";
import Style from "@/pages/home/menus/style.module.less";

interface MenuType {
  id: number; //'主键',
  title: string; //'标题',
  note: string; //'备注',
  pic: string; //'图片地址',
  url: string; //'链接地址',
  type: number; //'轮播类型：0->PC；1->mobile',
  status: number; //'上下线状态：0->下线；1->上线',
  sort: number; //'排序',
}

interface DataType {
  icon: string;
  text: string;
  url: string;
}

export default memo(function Notice(props) {
  const [data, setData] = useState<Array<DataType>>([]);
  const history = useHistory();

  useEffect(() => {
    getMenus().then((response) => {
      console.log(response.data);
      const list: Array<DataType> = [];
      response.data.forEach((val: MenuType) => {
        list.push({
          icon: val.pic,
          text: val.title,
          url: val.url,
        });
      });
      setData(list);
    });
  }, []);
  return (
    <>
      {data.length !== 0 && (
        <Grid
          data={data}
          columnNum={4}
          hasLine={false}
          onClick={(dataItem, itemIndex) => {
            history.push(dataItem?.url);
          }}
          renderItem={(dataItem) => (
            <div className={Style.grid}>
              <img
                src={dataItem?.icon}
                className={Style.gridImg}
                // 如果直接通过样式来设置行内尺寸，那么无法被转换为 vw ，也就是无法适配移动端
                // style={{ width: "75px", height: "75px" }}
                alt=""
              />
              <div className={Style.gridText}>
                <span>{dataItem?.text}</span>
              </div>
            </div>
          )}
        />
      )}
    </>
  );
});
