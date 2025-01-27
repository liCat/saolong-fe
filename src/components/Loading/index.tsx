/**
 * Loading组件
 * 用于按需加载时过渡显示等
 */
import React, { ReactElement } from "react";
import "./index.less";
import ImgLoading from "@/assets/loading.gif";

export default function LoadingComponent(): ReactElement {
  return (
    <div className="loading">
      <img src={ImgLoading} />
      <div>加载中...</div>
    </div>
  );
}
