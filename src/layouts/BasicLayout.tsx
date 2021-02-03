/** 基础页面结构 - 有头部、底部、侧边导航 **/

// ==================
// 第三方库
// ==================
import React, { useState, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";

// ==================
// 自定义的东西
// ==================
import "./BasicLayout.less";

// ==================
// 组件
// ==================
import Header from "@/components/Header";
import MenuCom from "@/components/Menu";
import ErrorBoundary from "@/components/ErrorBoundary";

import Bread from "@/components/Bread";
import { menuData } from "@/services/menuData";
import { LayoutRoute } from "@/router/layoutRoute";

const { Content } = Layout;

function BasicLayoutCom(): ReactElement {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false); // 菜单栏是否收起
  return (
    <Layout className="page-basic" hasSider>
      <MenuCom collapsed={collapsed} data={menuData} />

      <Layout>
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        {/* 普通面包屑导航 */}
        <Bread
          menus={menuData as any}
          location={(location as unknown) as Location}
        />
        {/* Tab方式的导航 */}
        {/* <BreadTab
          menus={menuData}
          location={location as any}
          history={history}
        /> */}
        <Content className="content">
          <ErrorBoundary location={location as any}>
            <LayoutRoute />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayoutCom;
