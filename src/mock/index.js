const delay = require("mocker-api/lib/delay");

// 是否禁用代理
const noProxy = process.env.NO_PROXY === "true";

function loadData(data) {
  const result = {};
  Object.keys(data).forEach((key) => {
    result[key] = require(data[key]);
  });
  return result;
}

const proxy = loadData({
  "GET /api/v1/banner": "./db/banner",
  "GET /api/v1/notice": "./db/notice",
  "GET /api/v1/menus": "./db/menus",
  "GET /api/v1/products": "./db/products",
  "GET /api/v1/category": "./db/category",
  "GET /api/v1/cart": "./db/cart",
  "GET /api/v1/order": "./db/order",
});

module.exports = noProxy ? {} : delay(proxy, 1000);
