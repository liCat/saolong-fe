/** 通用动态面包屑 **/
import React, { ReactElement, useMemo } from "react";
import { Breadcrumb } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./index.less";

type Menu = any;
interface Props {
  location: Location;
  menus: Menu[];
}

export default function BreadCom(props: Props): ReactElement {
  /** 根据当前location动态生成对应的面包屑 **/
  const breads = useMemo(() => {
    const paths = "路由";
    const breads: ReactElement[] = [];

    let parentId: number | null = null;
    do {
      const pathObj: Menu | undefined = props.menus.find(
        (v) => v.id === parentId || v.url === paths
      );

      if (pathObj) {
        breads.push(
          <Breadcrumb.Item key={pathObj.id}>{pathObj.title}</Breadcrumb.Item>
        );
        parentId = pathObj.parent;
      } else {
        parentId = null;
      }
    } while (parentId);

    breads.reverse();
    return breads;
  }, [props.menus]);

  return (
    <div className="bread">
      <EnvironmentOutlined className="icon" />
      <Breadcrumb>{breads}</Breadcrumb>
    </div>
  );
}
