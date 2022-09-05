const apiMocker = require("mocker-api");
const path = require("path");

module.exports = function (app) {
  apiMocker(app, path.resolve("./src/mock/index.js"), {
    proxy: {
      // 路由转发规则
      "/repos/(.*)": "https://api.github.com/",
    },
    changeHost: true,
  });
};
