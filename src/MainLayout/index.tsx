import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Drawer, Layout, Menu } from "antd";
import {
    MenuOutlined,
    LoginOutlined,
    UserAddOutlined,
} from "@ant-design/icons";

import "./MainLayout.scss";
import digitLogo from "../assets/logo.png";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const selectedNavbarItem = () => {
        switch (location.pathname) {
            case "/":
                return "home";
            case "/login":
                return "login";
            case "/register":
                return "register";
            default:
                return "home";
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={digitLogo} alt="logo" />
                    </Link>
                </div>
                <span className="main-nav">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[selectedNavbarItem()]}
                        items={[
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
                </span>

                <div className="mobile-menu-button">
                    <MenuOutlined onClick={() => setMobileMenu(true)} />
                </div>
                <Drawer
                    open={mobileMenu}
                    onClose={() => setMobileMenu(false)}
                    style={{ backgroundColor: "#001628" }}
                    closable={false}
                >
                    <Menu
                        theme="dark"
                        mode="vertical"
                        selectedKeys={[selectedNavbarItem()]}
                        items={[
                            {
                                key: "login",
                                label: <Link to="/login">Login</Link>,
                                icon: <LoginOutlined />,
                            },
                            {
                                key: "register",
                                label: <Link to="/register">Register</Link>,
                                icon: <UserAddOutlined />,
                            },
                        ]}
                    />
                </Drawer>
            </Header>
            <Content style={{ padding: "50px" }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Digit ©2022 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
