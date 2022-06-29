import React, { useState } from "react";
import { Layout, Form, Input, Button } from "antd";
import s from "./Login.module.css";

const { Content } = Layout;

const LoginPage = () => {
  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = (e) => {
    e.preventDefault();
    const user = {
      name: "dream team",
      password: "12345",
    };
  };

  return (
    <Layout>
      <Content>
        <div className={s.root}>
          <div className={s.formWrapper}>
            <Form {...layout} name="basic" initialValues={{ remember: true }}>
              <Form.Item
                label="Название команды"
                name="email"
                rules={[
                  { required: true, message: "Please input team name!!" },
                ]}
              >
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={userAuth}>
                  Войти
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
