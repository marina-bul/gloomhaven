import React, { Component } from "react";
import { Layout, Form, Input, Button } from "antd";
import s from "./Login.module.css";
import firebaseContext from "../services/context/firebaseContext";

const { Content } = Layout;

class LoginPage extends Component {
  onFinish = ({ email, password }) => {
    const { signInWithEmail, setUserUid } = this.context;
    const { history } = this.props;

    signInWithEmail(email, password)
      .then((res) => {
        setUserUid(res.user.uid);
        localStorage.setItem("user", res.user.uid);
        history.push("/home");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          history.push("/reg");
        }
      });
  };
  onFinishFailed = ({ errorMes }) => {
    console.log(errorMes);
  };

  render() {
    const layout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 6, span: 18 },
    };

    return (
      <Layout>
        <Content>
          <div className={s.root}>
            <div className={s.formWrapper}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  label="Имя пользователя"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Войти
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

LoginPage.contextType = firebaseContext;

export default LoginPage;
