/* 主页 */

import React, { ReactElement, useCallback, useState } from "react";

import "./index.less";
import axios from "axios";
import { Button, Form, Select } from "antd";
import { Input } from "antd";

export default function HomePageContainer(): ReactElement {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const fetchData = useCallback(() => {
    setIsLoading(true);
    setData(null);

    axios
      .get("/api/order/palceTakeoutCancelOrder", {
        params: form.getFieldsValue(),
      })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [form]);

  const onSearch = useCallback(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="page-home all_nowarp">
      <div className="box">
        <Form form={form} layout="inline">
          <Form.Item label="user_id" name="user_id">
            <Input placeholder={"user_id"} />
          </Form.Item>
          <Form.Item label="platform" name="platform">
            <Select
              placeholder={"platform"}
              options={[
                { value: 4, label: "平台4" },
                { value: 4, label: "平台5" },
              ]}
            />
          </Form.Item>
          <Form.Item label="flag" name="flag">
            <Select
              placeholder={"flag"}
              options={[{ value: "cancel", label: "cancel" }]}
            />
          </Form.Item>
          <Form.Item label="" name="">
            <Button onClick={onSearch} type={"primary"} loading={isLoading}>
              查询
            </Button>
          </Form.Item>
        </Form>
        {/* <code>{JSON.stringify(data, null, 2)}</code> */}

        {/* 展示数据 */}
        {data?.data && (
          <div>
            <div>{data.data.order_ids}</div>
          </div>
        )}
      </div>
    </div>
  );
}
