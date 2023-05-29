import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, message } from "antd";
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
        <Card title="Greeting" bordered={false} style={{ width: 600 }}>
            <p>Welcome! {username}</p>
        </Card>
    );
}

export default Login;
