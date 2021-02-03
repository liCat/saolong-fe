/** 头部 **/

// ==================
// 第三方库
// ==================
import React, { useState, useCallback, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Layout, Tooltip, Menu, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  LogoutOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

// ==================
// 自定义的东西
// ==================
import "./index.less";

// ==================
// 类型声明
// ==================

interface Element {
  webkitRequestFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  mozCancelFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  msExitFullscreen?: () => void;
}

interface Props {
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}
export default function HeaderCom({
  collapsed,
  setCollapsed,
}: Props): ReactElement {
  const [fullScreen, setFullScreen] = useState(false); // 当前是否是全屏状态
  // 进入全屏
  const requestFullScreen = useCallback(() => {
    const element: HTMLElement & Element = document.documentElement;
    // 判断各种浏览器，找到正确的方法
    const requestMethod =
      element.requestFullscreen || // W3C
      element.webkitRequestFullscreen || // Chrome等
      element.mozRequestFullScreen || // FireFox
      element.msRequestFullscreen; // IE11
    if (requestMethod) {
      requestMethod.call(element);
    }
    setFullScreen(true);
  }, []);

  // 退出全屏
  const exitFullScreen = useCallback(() => {
    // 判断各种浏览器，找到正确的方法
    const element: Document & Element = document;
    const exitMethod =
      element.exitFullscreen || // W3C
      element.mozCancelFullScreen || // firefox
      element.webkitExitFullscreen || // Chrome等
      element.msExitFullscreen; // IE11

    if (exitMethod) {
      exitMethod.call(document);
    }
    setFullScreen(false);
  }, []);

  // 退出登录
  const onMenuClick = useCallback((e) => {
    // 退出按钮被点击
    if (e.key === "logout") {
      console.log("logout");
    }
  }, []);
  const onToggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);
  return (
    <Header className="header">
      <Tooltip placement="bottom" title={true ? "展开菜单" : "收起菜单"}>
        <MenuFoldOutlined
          className={collapsed ? "trigger fold" : "trigger"}
          onClick={onToggle}
        />
      </Tooltip>
      <div className="rightBox">
        <Tooltip placement="bottom" title={fullScreen ? "退出全屏" : "全屏"}>
          <div className="full all_center">
            {fullScreen ? (
              <FullscreenExitOutlined
                className="icon"
                onClick={exitFullScreen}
              />
            ) : (
              <FullscreenOutlined
                className="icon"
                onClick={requestFullScreen}
              />
            )}
          </div>
        </Tooltip>
        {"有用户" ? (
          <Dropdown
            overlay={
              <Menu className="menu" selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="logout">
                  <LogoutOutlined />
                  退出登录
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            <div className="userhead all_center">
              <SmileOutlined />
              <span className="username">{"用户名"}</span>
            </div>
          </Dropdown>
        ) : (
          <Tooltip placement="bottom" title="点击登录">
            <div className="full all_center">
              <Link to="/user/login">未登录</Link>
            </div>
          </Tooltip>
        )}
      </div>
    </Header>
  );
}
