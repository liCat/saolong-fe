/** APP入口 **/

// 如果需要兼容IE11，请把下面两句注释打开，会增加不少的代码体积
// import "core-js/stable";
// import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

/** 公共样式 **/
import "normalize.css";
import "@/assets/styles/default.less";
import "@/assets/styles/global.less";

ReactDOM.render(<Router />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
