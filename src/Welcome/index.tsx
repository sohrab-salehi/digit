import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, message } from "antd";
import { getUser } from "../api/user";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token != null) {
            getUser(token).then(
                (result) => setUsername(result.data.username),
                (errorRes) => {
                    const { error } = errorRes.response.data;
                    message.error(error);
                    navigate("/login");
                }
            );
        } else {
            message.error("You have to login first!");
            navigate("/login");
        }
    }, [navigate]);

    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                    title="Greeting"
                    bordered={false}
                    style={{ maxWidth: 600, margin: "auto" }}
                >
                    <p>Welcome! {username}</p>
                </Card>
            </Col>
        </Row>
    );
}

export default Login;
