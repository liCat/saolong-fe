import loadable from "@loadable/component";
import React from "react";
import { FunctionComponent } from "react";
import { CacheSwitch } from "react-router-cache-route";
import { Redirect, Route } from "react-router-dom";
import Loading from "@/components/Loading";

const [
  NotFound,
  NoPower,
  Home,
  XiaolongDemo,
  // TODO : add herre
] = [
  () => import(`../pages/ErrorPages/404`),
  () => import(`../pages/ErrorPages/401`),
  () => import(`../pages/Home`),
  () => import(`../pages/XiaolongDemo`),
  // TODO : add herre
].map((item) =>
  loadable(item, {
    fallback: <Loading />,
  })
);

export const LayoutRoute: FunctionComponent = () => {
  return (
    <CacheSwitch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/xiaolongDemo" component={XiaolongDemo} />
      {/* // TODO : add herre */}
      {/*<!-- 使用CacheRoute可以缓存该页面，类似Keep-alive -->*/}
      <Route exact path="/nopower" component={NoPower} />
      <Route component={NotFound} />
    </CacheSwitch>
  );
};
