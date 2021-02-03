/** 根路由 **/

// ==================
// 第三方库
// ==================
import React, { ReactElement } from "react";
import { Router, Route, Switch } from "react-router-dom";
// import {createBrowserHistory as createHistory} from "history"; // URL模式的history
import { createHashHistory as createHistory } from "history"; // 锚点模式的history
import { message } from "antd";

// ==================
// 组件
// ==================
import BasicLayout from "@/layouts/BasicLayout";
import UserLayout from "@/layouts/UserLayout";

// 全局提示只显示2秒
message.config({
  duration: 2,
});

const history = createHistory();

function RouterCom(): ReactElement {
  return (
    <Router history={history}>
      <Route
        render={(): ReactElement => {
          return (
            <Switch>
              <Route path="/user" component={UserLayout} />
              <Route path="/" render={() => <BasicLayout />} />
            </Switch>
          );
        }}
      />
    </Router>
  );
}

export default RouterCom;
