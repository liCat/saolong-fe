/* 404 NotFound */

import React, { ReactElement } from "react";
import { Button } from "antd";
import Img from "@/assets/error.gif";
import { History } from "history";

import "./index.less";

interface Props {
  history: History;
}

export default function NotFoundContainer(props: Props): ReactElement {
  const gotoHome = (): void => {
    props.history.replace("/");
  };
  return (
    <div className="page-error">
      <div>
        <div className="title">404</div>
        <div className="info">Oh dear</div>
        <div className="info">这里什么也没有</div>
        <Button className="backBtn" type="primary" ghost onClick={gotoHome}>
          返回首页
        </Button>
      </div>
      <img src={Img + `?${Date.now()}`} />
    </div>
  );
}
