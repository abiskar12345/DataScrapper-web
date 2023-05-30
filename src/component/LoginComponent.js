import React, { useContext, useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { AppContext } from "../modules/context";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const LoginComponent = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AppContext);
  const handleLogin = async (values) => {
    try {
      setLoading(true);
      let user = await login(values);
      console.log(user);
      localStorage.setItem("user", user._id);
      Navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      window.alert(error);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Title level={3}>Login</Title>
      <Form onFinish={handleLogin}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginComponent;
