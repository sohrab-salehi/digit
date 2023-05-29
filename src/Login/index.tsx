import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";

import login from "../api/user";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        login(username, password).then((result) => {
            const { token } = result.data;
            localStorage.setItem("token", token);
            navigate("/");
        });
    };

    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                    title="Login"
                    bordered={false}
                    style={{ maxWidth: 600, margin: "auto" }}
                >
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onSubmit}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 4 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 4 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}

export default Login;
