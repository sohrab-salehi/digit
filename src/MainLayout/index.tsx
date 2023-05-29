import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    // const location = useLocation();
    const selectedNavbarItem = "home";

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedNavbarItem]}
                    items={[
                        {
                            key: "home",
                            label: <Link to="/">Home</Link>,
                        },
                        {
                            key: "login",
                            label: <Link to="/login">Login</Link>,
                        },
                        {
                            key: "register",
                            label: <Link to="/register">Register</Link>,
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Digit ©2022 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
