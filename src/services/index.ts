import Network from "./network";
// 在此封装不同接口请求方法

/**
 * 将 json 文件放到 public 目录中
 * 然后在请求的时候，因为 public 是暴露出去的文件
 * 所以直接访问 localhost:port/ 接口地址就可以获取数据
 */
// export const getUser = () => Network.get("/getUser.json");

export const getBanner = () => Network.get("/api/v1/banner");
export const getNotice = () => Network.get("/api/v1/notice");
export const getMenus = () => Network.get("/api/v1/menus");
export const getProducts = () => Network.get("/api/v1/products");
export const getCategory = () => Network.get("/api/v1/category");
