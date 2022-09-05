import React, { memo, useState, useEffect } from "react";
import { getBanner } from "@/services/index";
import { Carousel } from "antd-mobile";

interface BannerType {
  id: number; //'主键',
  title: string; //'标题',
  note: string; //'备注',
  pic: string; //'图片地址',
  url: string; //'链接地址',
  type: number; //'轮播类型：0->PC首页轮播；1->mobile首页轮播',
  status: number; //'上下线状态：0->下线；1->上线',
  sort: number; //'排序',
}
/**
 * Unable to preventDefault inside passive event listener invocation.
 * 如果在谷歌浏览器下手动地滑动 banner ，那么会报错
 * 因为新版的谷歌浏览器为了优化滑动速度
 * 希望我们阻止默认行为
 * 如果想修复，必须修改 Carousel 的源码
 * 但是这个问题没有必要去修复，在其他浏览器上是不会报错的
 * 并且不要去查询一些野资料，例如：设置样式 *{touch-action: none }
 */
export default memo(function MXBanner(props) {
  const [banner, setBanner] = useState<Array<BannerType>>([]);
  useEffect(() => {
    getBanner().then((response) => {
      setBanner(response.data);
    });
  }, []);
  return (
    <>
      {
        /**
         * 有数据的时候才进行渲染
         * 当数据是异步获取的时候
         * 初次渲染组件的时候是拿不到数据的
         * 如果这时设置了 autoPlay 的话
         * 由于无数据，组件内部也无法进行处理
         * 所有要先获取数据，再进行渲染
         * 才能够使得 autoPlay 的逻辑能够正常执行
         */
        banner.length !== 0 && (
          <Carousel
            autoplay={true}
            infinite
            dotActiveStyle={{
              backgroundColor: "#f23030",
            }}
          >
            {banner.map((val) => (
              <a
                key={val.id}
                href={val.url}
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "auto",
                }}
              >
                <img
                  src={val.pic}
                  alt={val.title}
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                  }}
                />
              </a>
            ))}
          </Carousel>
        )
      }
    </>
  );
});
