const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias,
  addLessLoader,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addLessLoader(), // 注意：一定要放到 px2vw 插件前面，否则会出现问题
  addPostcssPlugins([
    require("postcss-px-to-viewport")({
      unitToConvert: "px", // 要转化的单位
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      viewportWidth: 750, // UI设计稿的宽度
      viewportHeight: 1334, // UI设计稿的高度
      unitPrecision: 3, // 转换后的精度，即小数点位数
      propList: ["*", "!letter-spacing"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      selectorBlackList: [".ignore"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    }),
    require("postcss-write-svg")({
      utf8: false,
    }),
    require("postcss-flexbugs-fixes"),
  ])
);
