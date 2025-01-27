/* 用于菜单的自定义图标 */
import React, { ReactElement } from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1688075_vwak21i2wxj.js",
});

interface Props {
  type: string;
}

export default function Icon(props: Props): ReactElement {
  return <IconFont type={props.type} />;
}
