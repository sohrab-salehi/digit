import React, { useEffect, useState } from "react";
import { Card } from "antd";

import { getUser } from "../api/user";

function Login() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUser().then((result) => setUsername(result.data.username));
    }, []);

    return (
        <Card title="Greeting" bordered={false} style={{ width: 600 }}>
            <p>Welcome! {username}</p>
        </Card>
    );
}

export default Login;
